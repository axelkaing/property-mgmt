const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}

function err(msg, status = 400) {
  return json({ error: msg }, status);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    if (pathname.startsWith('/api/')) {
      try {
        await ensureSchema(env);
        return await route(request, env, pathname, url);
      } catch (e) {
        return err(e.message, 500);
      }
    }

    try {
      return await env.ASSETS.fetch(request);
    } catch {
      const indexReq = new Request(new URL('/index.html', request.url));
      return env.ASSETS.fetch(indexReq);
    }
  },
};

// ─── Schema auto-migration ──────────────────────────────────────────────────

async function ensureSchema(env) {
  const migrations = [
    `ALTER TABLE payments ADD COLUMN verified INTEGER DEFAULT 0`,
    `ALTER TABLE payments ADD COLUMN proof_image TEXT`,
    `ALTER TABLE tenants ADD COLUMN outstanding_balance REAL DEFAULT 0`,
    `CREATE TABLE IF NOT EXISTS _schema_flags (key TEXT PRIMARY KEY, value TEXT)`,
    `ALTER TABLE payments ADD COLUMN split_group TEXT`,
  ];
  for (const sql of migrations) {
    try { await env.DB.prepare(sql).run(); } catch { /* already exists */ }
  }
  // One-time: backfill outstanding_balance from existing billing + payment history
  try {
    const flag = await env.DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_init_v1'`).first();
    if (!flag) {
      await env.DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await env.DB.prepare(`INSERT INTO _schema_flags (key, value) VALUES ('balance_init_v1', '1')`).run();
    }
  } catch { /* ignore */ }

  // v2: Force-reset all balances to fix any drift — recalculates from raw bills vs payments
  try {
    const flag2 = await env.DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v2'`).first();
    if (!flag2) {
      await env.DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await env.DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v2', '1')`).run();
    }
  } catch { /* ignore */ }

  // v3: Hard zero + recalculate from scratch to fix any initialization drift
  try {
    const flag3 = await env.DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v3'`).first();
    if (!flag3) {
      await env.DB.prepare(`UPDATE tenants SET outstanding_balance = 0`).run();
      await env.DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await env.DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v3', '1')`).run();
    }
  } catch { /* ignore */ }

  // v4: Recalculate to fix balances corrupted by $5 threshold double-application
  try {
    const flag4 = await env.DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v4'`).first();
    if (!flag4) {
      await env.DB.prepare(`UPDATE tenants SET outstanding_balance = 0`).run();
      await env.DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await env.DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v4', '1')`).run();
    }
  } catch { /* ignore */ }
}

// ─── Router ────────────────────────────────────────────────────────────────

async function route(req, env, path, url) {
  const PASSWORD = env.AUTH_PASSWORD || "BigSister2026";
  const m = req.method;

  if (path === '/api/auth/login' && m === 'POST') return login(req, env);

  const token = (req.headers.get('Authorization') || '').replace('Bearer ', '');
  if (token !== PASSWORD) return err('Unauthorized', 401);

  if (path === '/api/dashboard' && m === 'GET') return dashboard(env, url);

  if (path === '/api/properties' && m === 'GET') return getProperties(env);

  if (path === '/api/tenants' && m === 'GET') return getTenants(env, url);
  if (/^\/api\/tenants\/\d+$/.test(path) && m === 'PUT') return updateTenant(req, env, seg(path, 3));

  if (path === '/api/billing' && m === 'GET') return getBilling(env, url);
  if (path === '/api/billing' && m === 'POST') return createBilling(req, env);
  if (path === '/api/billing/last-reading' && m === 'GET') return getLastReading(env, url);
  if (path === '/api/billing/invoice' && m === 'GET') return getBillingInvoice(env, url);
  if (/^\/api\/billing\/\d+$/.test(path) && m === 'DELETE') return deleteBilling(env, seg(path, 3));

  if (path === '/api/payments' && m === 'GET') return getPayments(env, url);
  if (path === '/api/payments' && m === 'POST') return createPayment(req, env);
  if (/^\/api\/payments\/\d+$/.test(path) && m === 'PUT') return updatePayment(req, env, seg(path, 3));
  if (/^\/api\/payments\/\d+$/.test(path) && m === 'DELETE') return deletePayment(env, seg(path, 3));

  if (path === '/api/expenses' && m === 'GET') return getExpenses(env, url);
  if (path === '/api/expenses' && m === 'POST') return createExpense(req, env);
  if (/^\/api\/expenses\/\d+$/.test(path) && m === 'DELETE') return deleteExpense(env, seg(path, 3));

  if (path === '/api/summary' && m === 'GET') return getSummary(env, url);

  if (/^\/api\/receipt\/\d+$/.test(path) && m === 'GET') return getReceipt(env, seg(path, 3));

  return err('Not found', 404);
}

function seg(path, n) { return path.split('/')[n]; }

// ─── Auth ───────────────────────────────────────────────────────────────────

async function login(req, env) {
  const PASSWORD = env.AUTH_PASSWORD || "BigSister2026";
  const { password } = await req.json();
  if (password !== PASSWORD) return err('Invalid password', 401);
  return json({ token: PASSWORD });
}

// ─── Dashboard ──────────────────────────────────────────────────────────────

async function dashboard(env, url) {
  const currentMonth = url?.searchParams?.get('month') || new Date().toISOString().slice(0, 7);

  const [propRows, roomRows, expiringRows, rentRow, paidRows] = await Promise.all([
    env.DB.prepare(`
      SELECT p.id, p.code, p.address, p.bank_name, p.bank_account,
        COUNT(r.id) as total_rooms,
        SUM(CASE WHEN r.status='occupied' THEN 1 ELSE 0 END) as occupied,
        SUM(CASE WHEN r.status='vacant'   THEN 1 ELSE 0 END) as vacant
      FROM properties p LEFT JOIN rooms r ON r.property_id = p.id
      GROUP BY p.id ORDER BY p.id`).all(),

    env.DB.prepare(`
      SELECT r.id, r.property_id, r.room_label, r.status,
        t.id as tenant_id, t.name as tenant_name, t.rent,
        t.contract_start, t.contract_end, t.deposit, t.commission,
        t.elec_rate, t.water_type, t.water_rate, t.outstanding_balance,
        mr.total_bill,
        COALESCE((
          SELECT SUM(p.amount) FROM payments p
          WHERE p.tenant_id = t.id AND p.billing_month = ?
        ), 0) as total_paid_month
      FROM rooms r
      LEFT JOIN tenants t ON t.room_id = r.id AND t.active = 1
      LEFT JOIN meter_readings mr ON mr.room_id = r.id AND mr.billing_month = ?
      ORDER BY r.property_id, r.room_label`).bind(currentMonth, currentMonth).all(),

    env.DB.prepare(`
      SELECT t.id, t.name, t.contract_end, t.contract_start,
        r.room_label, p.id as property_id, p.code as property_code,
        CAST((julianday(t.contract_end) - julianday('now')) AS INTEGER) as days_left
      FROM tenants t
      JOIN rooms r ON r.id = t.room_id
      JOIN properties p ON p.id = r.property_id
      WHERE t.active = 1 AND t.contract_end IS NOT NULL
        AND julianday(t.contract_end) - julianday('now') <= 90
      ORDER BY t.contract_end`).all(),

    env.DB.prepare(`SELECT SUM(rent) as total FROM tenants WHERE active=1`).first(),

    env.DB.prepare(`
      SELECT p.tenant_id, MAX(p.verified) as has_verified
      FROM payments p
      WHERE p.billing_month = ?
      GROUP BY p.tenant_id`).bind(currentMonth).all(),
  ]);

  // tenantId → 'verified' | 'pending'
  const paymentStatusMap = {};
  paidRows.results.forEach(r => {
    paymentStatusMap[r.tenant_id] = r.has_verified ? 'verified' : 'pending';
  });

  return json({
    properties: propRows.results,
    rooms: roomRows.results,
    expiring: expiringRows.results,
    totalMonthlyRent: rentRow?.total || 0,
    paymentStatusMap,
    currentMonth,
  });
}

// ─── Properties ─────────────────────────────────────────────────────────────

async function getProperties(env) {
  const rows = await env.DB.prepare(`SELECT * FROM properties ORDER BY id`).all();
  return json(rows.results);
}

// ─── Tenants ────────────────────────────────────────────────────────────────

async function getTenants(env, url) {
  const roomId = url.searchParams.get('room_id');
  const query = roomId
    ? env.DB.prepare(`SELECT t.*, r.room_label, p.code as property_code FROM tenants t JOIN rooms r ON r.id=t.room_id JOIN properties p ON p.id=r.property_id WHERE t.room_id=? ORDER BY t.id`).bind(roomId)
    : env.DB.prepare(`SELECT t.*, r.room_label, r.property_id, p.code as property_code,
        (SELECT MAX(mr.billing_month) FROM meter_readings mr WHERE mr.room_id = t.room_id) as last_billing_month
      FROM tenants t JOIN rooms r ON r.id=t.room_id JOIN properties p ON p.id=r.property_id WHERE t.active=1 ORDER BY r.property_id, r.room_label`);
  const rows = await query.all();
  return json(rows.results);
}

async function updateTenant(req, env, id) {
  const d = await req.json();
  await env.DB.prepare(`
    UPDATE tenants SET name=?, rent=?, elec_rate=?, water_type=?, water_rate=?,
      contract_start=?, contract_end=?, deposit=?, commission=?
    WHERE id=?`)
    .bind(d.name, d.rent, d.elec_rate, d.water_type, d.water_rate,
          d.contract_start, d.contract_end, d.deposit, d.commission, id)
    .run();
  return json({ success: true });
}

// ─── Billing ────────────────────────────────────────────────────────────────

async function getBilling(env, url) {
  const month = url.searchParams.get('month');
  const where = month ? `WHERE mr.billing_month = '${month.replace(/'/g, '')}'` : '';
  // FY boundary helper: returns '2026-04' for month in Apr 2026–Mar 2027, etc.
  const fyStartExpr = `printf('%d-04', CASE WHEN CAST(SUBSTR(mr.billing_month,6,2) AS INTEGER) >= 4
      THEN CAST(SUBSTR(mr.billing_month,1,4) AS INTEGER)
      ELSE CAST(SUBSTR(mr.billing_month,1,4) AS INTEGER) - 1
    END)`;
  const rows = await env.DB.prepare(`
    SELECT mr.*, r.room_label, r.property_id, p.code as property_code,
      t.name as tenant_name, t.id as tenant_id,
      CASE WHEN t.id IS NOT NULL THEN
        COALESCE((
          SELECT SUM(pay.amount) FROM payments pay
          WHERE pay.tenant_id = t.id AND pay.billing_month = mr.billing_month
        ), 0)
      ELSE 0 END as total_paid_month,
      CASE WHEN t.id IS NOT NULL THEN
        COALESCE((
          SELECT SUM(mr2.total_bill) FROM meter_readings mr2
          WHERE mr2.room_id = mr.room_id AND mr2.billing_month <= mr.billing_month
        ), 0) - COALESCE((
          SELECT SUM(pay2.amount) FROM payments pay2
          WHERE pay2.tenant_id = t.id
        ), 0)
      ELSE 0 END as running_balance,
      CASE WHEN t.id IS NOT NULL THEN
        COALESCE((
          SELECT SUM(mr2.total_bill) FROM meter_readings mr2
          WHERE mr2.room_id = mr.room_id
            AND mr2.billing_month < mr.billing_month
            AND mr2.billing_month >= ${fyStartExpr}
        ), 0) - COALESCE((
          SELECT SUM(pay2.amount) FROM payments pay2
          WHERE pay2.tenant_id = t.id
            AND pay2.billing_month IS NOT NULL
            AND pay2.billing_month < mr.billing_month
            AND pay2.billing_month >= ${fyStartExpr}
        ), 0)
      ELSE 0 END as prev_balance,
      (SELECT MAX(mr2.billing_month) FROM meter_readings mr2
        WHERE mr2.room_id = mr.room_id AND mr2.billing_month < mr.billing_month) as prev_billing_month
    FROM meter_readings mr
    JOIN rooms r ON r.id = mr.room_id
    JOIN properties p ON p.id = r.property_id
    LEFT JOIN tenants t ON t.room_id = mr.room_id AND t.active = 1
    ${where}
    ORDER BY mr.billing_month DESC, r.property_id, r.room_label`).all();
  return json(rows.results);
}

async function getLastReading(env, url) {
  const roomId = url.searchParams.get('room_id');
  const beforeMonth = url.searchParams.get('before_month');
  if (!roomId || !beforeMonth) return err('room_id and before_month required');

  const row = await env.DB.prepare(`
    SELECT elec_curr, water_curr, billing_month
    FROM meter_readings
    WHERE room_id = ? AND billing_month < ?
    ORDER BY billing_month DESC LIMIT 1`).bind(roomId, beforeMonth).first();

  return json(row || { elec_curr: null, water_curr: null, billing_month: null });
}

async function createBilling(req, env) {
  const d = await req.json();
  const { room_id, billing_month, reading_date, elec_curr, water_curr, notes } = d;

  const tenant = await env.DB.prepare(
    `SELECT * FROM tenants WHERE room_id=? AND active=1`
  ).bind(room_id).first();
  if (!tenant) return err('No active tenant in this room');

  // Capture old bill amount before INSERT OR REPLACE overwrites it
  const oldRow = await env.DB.prepare(
    `SELECT total_bill FROM meter_readings WHERE room_id=? AND billing_month=?`
  ).bind(room_id, billing_month).first();
  const oldBill = oldRow?.total_bill || 0;

  const prevRow = await env.DB.prepare(`
    SELECT elec_curr as elec_prev, water_curr as water_prev
    FROM meter_readings
    WHERE room_id = ? AND billing_month < ?
    ORDER BY billing_month DESC LIMIT 1`).bind(room_id, billing_month).first();

  const elec_prev  = d.elec_prev  !== undefined ? (d.elec_prev  || 0) : (prevRow?.elec_prev  || 0);
  const water_prev = d.water_prev !== undefined ? (d.water_prev || 0) : (prevRow?.water_prev || 0);

  const elec_units  = Math.max(0, (elec_curr  || 0) - elec_prev);
  const elec_amount = elec_units * (tenant.elec_rate || 0);

  let water_units = 0, water_amount = 0;
  if (tenant.water_type === 'meter') {
    water_units  = Math.max(0, (water_curr || 0) - water_prev);
    water_amount = water_units * (tenant.water_rate || 0);
  } else if (tenant.water_type === 'fixed') {
    water_amount = tenant.water_rate || 0;
  }

  const rent_amount        = tenant.rent;
  const commission_applied = tenant.commission || 0;
  const total_bill         = rent_amount + elec_amount + water_amount - commission_applied;

  const result = await env.DB.prepare(`
    INSERT OR REPLACE INTO meter_readings
      (room_id, billing_month, reading_date, rent_amount,
       elec_prev, elec_curr, elec_units, elec_amount,
       water_prev, water_curr, water_units, water_amount,
       commission_applied, total_bill, notes)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
    .bind(room_id, billing_month, reading_date, rent_amount,
          elec_prev, elec_curr || 0, elec_units, elec_amount,
          water_prev, water_curr || 0, water_units, water_amount,
          commission_applied, total_bill, notes || null)
    .run();

  // Update outstanding_balance by the net change in this bill
  const billDiff = total_bill - oldBill;
  await env.DB.prepare(
    `UPDATE tenants SET outstanding_balance = outstanding_balance + ? WHERE id=?`
  ).bind(billDiff, tenant.id).run();

  const updated = await env.DB.prepare(`SELECT outstanding_balance FROM tenants WHERE id=?`).bind(tenant.id).first();

  return json({
    success: true, id: result.meta.last_row_id,
    elec_prev, elec_units, elec_amount,
    water_prev, water_units, water_amount,
    commission_applied, rent_amount, total_bill,
    outstanding_balance: updated?.outstanding_balance ?? 0,
  });
}

async function deleteBilling(env, id) {
  const bill = await env.DB.prepare(`
    SELECT mr.total_bill, t.id as tenant_id
    FROM meter_readings mr
    JOIN rooms r ON r.id = mr.room_id
    JOIN tenants t ON t.room_id = r.id AND t.active = 1
    WHERE mr.id = ?`).bind(id).first();

  await env.DB.prepare(`DELETE FROM meter_readings WHERE id=?`).bind(id).run();

  if (bill?.tenant_id) {
    await env.DB.prepare(
      `UPDATE tenants SET outstanding_balance = outstanding_balance - ? WHERE id=?`
    ).bind(bill.total_bill || 0, bill.tenant_id).run();
  }
  return json({ success: true });
}

async function getBillingInvoice(env, url) {
  const roomId = url.searchParams.get('room_id');
  const month  = url.searchParams.get('month');
  if (!roomId || !month) return err('room_id and month required');

  // FY start for this billing month (e.g. '2026-04' for Apr 2026 – Mar 2027)
  const [y, mo] = month.split('-').map(Number);
  const fyYear  = mo >= 4 ? y : y - 1;
  const fyStart = `${fyYear}-04`;

  const [mr, tenant, prevMr, prevBalRow] = await Promise.all([
    env.DB.prepare(`SELECT total_bill FROM meter_readings WHERE room_id=? AND billing_month=?`).bind(roomId, month).first(),
    env.DB.prepare(`SELECT outstanding_balance FROM tenants WHERE room_id=? AND active=1`).bind(roomId).first(),
    env.DB.prepare(`SELECT billing_month FROM meter_readings WHERE room_id=? AND billing_month<? ORDER BY billing_month DESC LIMIT 1`).bind(roomId, month).first(),
    env.DB.prepare(`
      SELECT
        COALESCE((SELECT SUM(mr2.total_bill) FROM meter_readings mr2
          WHERE mr2.room_id=? AND mr2.billing_month < ? AND mr2.billing_month >= ?
        ), 0)
        - COALESCE((SELECT SUM(p.amount) FROM payments p
          JOIN tenants t ON t.id=p.tenant_id
          WHERE t.room_id=? AND p.billing_month IS NOT NULL
            AND p.billing_month < ? AND p.billing_month >= ?
        ), 0) as prev_outstanding
    `).bind(roomId, month, fyStart, roomId, month, fyStart).first(),
  ]);

  return json({
    total_bill:          mr?.total_bill ?? null,
    outstanding_balance: tenant?.outstanding_balance ?? 0,
    prev_billing_month:  prevMr?.billing_month ?? null,
    prev_outstanding:    prevBalRow?.prev_outstanding ?? 0,
    fy_start:            fyStart,
  });
}

// ─── Receipt ────────────────────────────────────────────────────────────────

async function getReceipt(env, paymentId) {
  const row = await env.DB.prepare(`
    SELECT
      pay.id, pay.amount, pay.payment_date, pay.billing_month, pay.method, pay.notes,
      t.id as tenant_id, t.name as tenant_name, t.commission,
      t.elec_rate, t.water_type, t.water_rate, t.outstanding_balance,
      r.id as room_id, r.room_label,
      p.id as property_id, p.code as property_code,
      p.address as property_address, p.bank_name, p.bank_account,
      mr.rent_amount, mr.elec_prev, mr.elec_curr, mr.elec_units, mr.elec_amount,
      mr.water_prev, mr.water_curr, mr.water_units, mr.water_amount,
      mr.commission_applied, mr.total_bill
    FROM payments pay
    JOIN tenants t ON t.id = pay.tenant_id
    JOIN rooms r ON r.id = t.room_id
    JOIN properties p ON p.id = r.property_id
    LEFT JOIN meter_readings mr
      ON mr.room_id = r.id AND mr.billing_month = pay.billing_month
    WHERE pay.id = ?`).bind(paymentId).first();

  if (!row) return err('Payment not found', 404);

  const monthTag = (row.billing_month || row.payment_date.slice(0, 7)).replace('-', '');
  const receiptNo = `RCT-${monthTag}-${String(row.id).padStart(4, '0')}`;
  return json({ ...row, receipt_no: receiptNo });
}

// ─── Payments ───────────────────────────────────────────────────────────────

async function getPayments(env, url) {
  const month = url.searchParams.get('month');
  const tenantId = url.searchParams.get('tenant_id');
  const fy = url.searchParams.get('fy');
  const conditions = [];
  const binds = [];
  if (month) { conditions.push(`p.billing_month=?`); binds.push(month); }
  if (tenantId) { conditions.push(`p.tenant_id=?`); binds.push(tenantId); }
  if (fy) {
    const fyStart = `${fy}-04`;
    const fyEnd   = `${parseInt(fy)+1}-03`;
    const dStart  = `${fy}-04-01`;
    const dEnd    = `${parseInt(fy)+1}-03-31`;
    conditions.push(`((p.billing_month >= ? AND p.billing_month <= ?) OR (p.billing_month IS NULL AND p.payment_date >= ? AND p.payment_date <= ?))`);
    binds.push(fyStart, fyEnd, dStart, dEnd);
  }
  const where = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';

  const rows = await env.DB.prepare(`
    SELECT p.*, t.name as tenant_name, r.room_label, r.property_id, pr.code as property_code
    FROM payments p
    JOIN tenants t ON t.id = p.tenant_id
    JOIN rooms r ON r.id = t.room_id
    JOIN properties pr ON pr.id = r.property_id
    ${where}
    ORDER BY p.payment_date DESC, p.id DESC`)
    .bind(...binds).all();
  return json(rows.results);
}

async function createPayment(req, env) {
  const d = await req.json();
  const result = await env.DB.prepare(`
    INSERT INTO payments (tenant_id, billing_month, payment_date, amount, method, notes, verified, proof_image, split_group)
    VALUES (?,?,?,?,?,?,?,?,?)`)
    .bind(d.tenant_id, d.billing_month || null, d.payment_date,
          d.amount, d.method || 'bank_transfer', d.notes || null,
          d.verified ? 1 : 0, d.proof_image || null, d.split_group || null)
    .run();
  await env.DB.prepare(
    `UPDATE tenants SET outstanding_balance = outstanding_balance - ? WHERE id=?`
  ).bind(d.amount, d.tenant_id).run();

  // $5 minimum threshold: tiny per-month rounding differences are treated as settled
  if (d.billing_month) {
    const monthNet = await env.DB.prepare(`
      SELECT
        COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr
          JOIN rooms r ON r.id = mr.room_id
          JOIN tenants t2 ON t2.room_id = r.id AND t2.id = ?
          WHERE mr.billing_month = ?), 0)
        - COALESCE((SELECT SUM(p.amount) FROM payments p
          WHERE p.tenant_id = ? AND p.billing_month = ?), 0)
        as net
    `).bind(d.tenant_id, d.billing_month, d.tenant_id, d.billing_month).first();
    if (monthNet && Math.abs(monthNet.net) > 0 && Math.abs(monthNet.net) < 5) {
      await env.DB.prepare(
        `UPDATE tenants SET outstanding_balance = outstanding_balance - ? WHERE id=?`
      ).bind(monthNet.net, d.tenant_id).run();
    }
  }

  return json({ success: true, id: result.meta.last_row_id });
}

async function updatePayment(req, env, id) {
  const d = await req.json();
  await env.DB.prepare(`UPDATE payments SET verified=? WHERE id=?`)
    .bind(d.verified ? 1 : 0, id).run();
  return json({ success: true });
}

async function deletePayment(env, id) {
  const pay = await env.DB.prepare(`SELECT tenant_id, split_group FROM payments WHERE id=?`).bind(id).first();
  if (pay?.split_group) {
    await env.DB.prepare(`DELETE FROM payments WHERE split_group=?`).bind(pay.split_group).run();
  } else {
    await env.DB.prepare(`DELETE FROM payments WHERE id=?`).bind(id).run();
  }
  if (pay?.tenant_id) {
    const tenant = await env.DB.prepare(`SELECT room_id FROM tenants WHERE id=?`).bind(pay.tenant_id).first();
    if (tenant?.room_id) {
      const billSum = await env.DB.prepare(`SELECT COALESCE(SUM(total_bill),0) as s FROM meter_readings WHERE room_id=?`).bind(tenant.room_id).first();
      const paySum  = await env.DB.prepare(`SELECT COALESCE(SUM(amount),0) as s FROM payments WHERE tenant_id=?`).bind(pay.tenant_id).first();
      await env.DB.prepare(`UPDATE tenants SET outstanding_balance=? WHERE id=?`)
        .bind((billSum?.s || 0) - (paySum?.s || 0), pay.tenant_id).run();
    }
  }
  return json({ success: true });
}

// ─── Expenses ───────────────────────────────────────────────────────────────

async function getExpenses(env, url) {
  const propId = url.searchParams.get('property_id');
  const fy = url.searchParams.get('fy');
  const conditions = [];
  const binds = [];

  if (fy) {
    const fyStart = `${fy}-04-01`;
    const fyEnd   = `${parseInt(fy) + 1}-03-31`;
    conditions.push(`e.expense_date >= ? AND e.expense_date <= ?`);
    binds.push(fyStart, fyEnd);
  } else {
    const year = url.searchParams.get('year');
    if (year) { conditions.push(`e.expense_date LIKE ?`); binds.push(`${year}-%`); }
  }
  if (propId) { conditions.push(`e.property_id=?`); binds.push(propId); }
  const where = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';

  const rows = await env.DB.prepare(`
    SELECT e.*, p.code as property_code
    FROM expenses e
    LEFT JOIN properties p ON p.id = e.property_id
    ${where}
    ORDER BY e.expense_date DESC, e.id DESC`)
    .bind(...binds).all();
  return json(rows.results);
}

async function createExpense(req, env) {
  const d = await req.json();
  if (!d.property_id) return err('property_id is required');
  const result = await env.DB.prepare(`
    INSERT INTO expenses (property_id, expense_date, category, amount, description)
    VALUES (?,?,?,?,?)`)
    .bind(d.property_id, d.expense_date, d.category, d.amount, d.description || null)
    .run();
  return json({ success: true, id: result.meta.last_row_id });
}

async function deleteExpense(env, id) {
  await env.DB.prepare(`DELETE FROM expenses WHERE id=?`).bind(id).run();
  return json({ success: true });
}

// ─── Annual Summary (HK Fiscal Year: Apr–Mar) ───────────────────────────────

async function getSummary(env, url) {
  // fy=2026 means Apr 2026 – Mar 2027, displayed as "2026/27"
  const fy = url.searchParams.get('fy') || '2026';
  const fyNext = String(parseInt(fy) + 1);
  const fyLabel = `${fy}/${fyNext.slice(-2)}`;
  const mStart = `${fy}-04`;
  const mEnd   = `${fyNext}-03`;
  const dStart = `${fy}-04-01`;
  const dEnd   = `${fyNext}-03-31`;

  const [incomeRows, expCatRows, expPropRows] = await Promise.all([
    env.DB.prepare(`
      SELECT pr.id, pr.code, pr.address,
        COALESCE(SUM(pay.amount), 0) as total_income
      FROM properties pr
      LEFT JOIN rooms r ON r.property_id = pr.id
      LEFT JOIN tenants t ON t.room_id = r.id
      LEFT JOIN payments pay ON pay.tenant_id = t.id
        AND pay.billing_month >= ? AND pay.billing_month <= ?
      GROUP BY pr.id ORDER BY pr.id`).bind(mStart, mEnd).all(),

    env.DB.prepare(`
      SELECT category, COALESCE(SUM(amount), 0) as total
      FROM expenses
      WHERE expense_date >= ? AND expense_date <= ?
      GROUP BY category`).bind(dStart, dEnd).all(),

    env.DB.prepare(`
      SELECT e.property_id, pr.code, e.category,
        COALESCE(SUM(e.amount), 0) as total
      FROM expenses e
      LEFT JOIN properties pr ON pr.id = e.property_id
      WHERE e.expense_date >= ? AND e.expense_date <= ?
      GROUP BY e.property_id, e.category`).bind(dStart, dEnd).all(),
  ]);

  // Build overall category map
  const catMap = {};
  expCatRows.results.forEach(r => { catMap[r.category] = r.total; });

  const totalIncome    = incomeRows.results.reduce((s, r) => s + r.total_income, 0);
  const govtRent       = catMap['govt_rent']    || 0;
  const govtRates      = catMap['govt_rates']   || 0;
  const repairs        = catMap['repairs']      || 0;
  const insurance      = catMap['insurance']    || 0;
  const stampDuty      = catMap['stamp_duty']   || 0;
  const handlingFee    = catMap['handling_fee'] || 0;
  const other          = catMap['other']        || 0;
  const totalExpenses  = Object.values(catMap).reduce((s, v) => s + v, 0);
  const netIncome      = totalIncome - totalExpenses;
  const taxBase        = Math.max(0, totalIncome - govtRent);
  const propertyTax    = taxBase * 0.8 * 0.15;

  // Per-property expense breakdown
  const propExpMap = {};
  expPropRows.results.forEach(r => {
    if (!propExpMap[r.property_id]) propExpMap[r.property_id] = {};
    propExpMap[r.property_id][r.category] = r.total;
  });

  const propBreakdown = incomeRows.results.map(p => {
    const exp = propExpMap[p.id] || {};
    const pGovtRent  = exp['govt_rent']  || 0;
    const pGovtRates = exp['govt_rates'] || 0;
    const pRepairs   = exp['repairs']    || 0;
    const pInsurance = exp['insurance']  || 0;
    const pStamp     = exp['stamp_duty'] || 0;
    const pHandling  = exp['handling_fee'] || 0;
    const pOther     = exp['other']      || 0;
    const pTotalExp  = Object.values(exp).reduce((s, v) => s + v, 0);
    const pTaxBase   = Math.max(0, p.total_income - pGovtRent);
    return {
      id: p.id, code: p.code, address: p.address,
      income: p.total_income,
      expenses: { govtRent: pGovtRent, govtRates: pGovtRates, repairs: pRepairs,
                  insurance: pInsurance, stampDuty: pStamp, handlingFee: pHandling, other: pOther },
      totalExpenses: pTotalExp,
      netIncome: p.total_income - pTotalExp,
      taxBase: pTaxBase,
      tax: pTaxBase * 0.8 * 0.15,
    };
  });

  return json({
    fy, fyLabel,
    income: { byProperty: incomeRows.results, total: totalIncome },
    expenses: { byCategory: catMap, total: totalExpenses },
    summary: {
      totalIncome, govtRent, govtRates, repairs, insurance, stampDuty, handlingFee, other,
      totalExpenses, netIncome, perOwner: netIncome / 5,
      taxBase, propertyTax,
    },
    propBreakdown,
  });
}
