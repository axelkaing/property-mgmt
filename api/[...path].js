const CF_ACCOUNT_ID  = process.env.CF_ACCOUNT_ID;
const CF_DATABASE_ID = process.env.CF_DATABASE_ID || '666f4f48-11b2-4075-9081-2e167357ee0a';
const CF_API_TOKEN   = process.env.CF_API_TOKEN;
const AUTH_PASSWORD  = process.env.AUTH_PASSWORD  || 'BigSister2026';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// ── D1 HTTP API ───────────────────────────────────────────────────────────────

async function d1Query(sql, params = []) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/d1/database/${CF_DATABASE_ID}/query`;
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${CF_API_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ sql, params }),
  });
  const data = await r.json();
  if (!data.success) throw new Error(data.errors?.[0]?.message || 'D1 query failed');
  return data.result[0]; // { results, success, meta }
}

function prepare(sql) {
  function stmt(params) {
    return {
      bind(...p) { return stmt(p); },
      async all()   { const r = await d1Query(sql, params); return { results: r.results }; },
      async first() { const r = await d1Query(sql, params); return r.results[0] ?? null; },
      async run()   { return d1Query(sql, params); },
    };
  }
  return stmt([]);
}

const DB = { prepare };

// ── Response helpers ──────────────────────────────────────────────────────────

function sendJson(res, data, status = 200) {
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  res.status(status).json(data);
}

function sendErr(res, msg, status = 400) {
  sendJson(res, { error: msg }, status);
}

// ── Main export ───────────────────────────────────────────────────────────────

let schemaReady = false; // cached per warm instance to avoid re-running on every request

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(204).end();
  }

  const segments = Array.isArray(req.query.path)
    ? req.query.path
    : req.query.path ? [req.query.path] : [];
  const path = '/api/' + segments.join('/');
  const url  = new URL('http://localhost' + req.url);

  try {
    if (!schemaReady) {
      await ensureSchema();
      schemaReady = true;
    }
    return await route(req, res, path, url);
  } catch (e) {
    return sendErr(res, e.message, 500);
  }
};

// ── Schema auto-migration ─────────────────────────────────────────────────────

async function ensureSchema() {
  const migrations = [
    `ALTER TABLE payments ADD COLUMN verified INTEGER DEFAULT 0`,
    `ALTER TABLE payments ADD COLUMN proof_image TEXT`,
    `ALTER TABLE tenants ADD COLUMN outstanding_balance REAL DEFAULT 0`,
    `CREATE TABLE IF NOT EXISTS _schema_flags (key TEXT PRIMARY KEY, value TEXT)`,
    `ALTER TABLE payments ADD COLUMN split_group TEXT`,
  ];
  for (const sql of migrations) {
    try { await d1Query(sql); } catch { /* column already exists */ }
  }

  try {
    const flag = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_init_v1'`).first();
    if (!flag) {
      await DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await DB.prepare(`INSERT INTO _schema_flags (key, value) VALUES ('balance_init_v1', '1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flag2 = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v2'`).first();
    if (!flag2) {
      await DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v2', '1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flag3 = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v3'`).first();
    if (!flag3) {
      await DB.prepare(`UPDATE tenants SET outstanding_balance = 0`).run();
      await DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v3', '1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flag4 = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v4'`).first();
    if (!flag4) {
      await DB.prepare(`UPDATE tenants SET outstanding_balance = 0`).run();
      await DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v4', '1')`).run();
    }
  } catch { /* ignore */ }
}

// ── Router ────────────────────────────────────────────────────────────────────

async function route(req, res, path, url) {
  const m = req.method;

  if (path === '/api/auth/login' && m === 'POST') return login(req, res);

  const token = (req.headers['authorization'] || '').replace('Bearer ', '');
  if (token !== AUTH_PASSWORD) return sendErr(res, 'Unauthorized', 401);

  if (path === '/api/dashboard'              && m === 'GET')    return dashboard(res, url);
  if (path === '/api/properties'             && m === 'GET')    return getProperties(res);
  if (path === '/api/tenants'                && m === 'GET')    return getTenants(res, url);
  if (/^\/api\/tenants\/\d+$/.test(path)    && m === 'PUT')    return updateTenant(req, res, seg(path, 3));
  if (path === '/api/billing'                && m === 'GET')    return getBilling(res, url);
  if (path === '/api/billing'                && m === 'POST')   return createBilling(req, res);
  if (path === '/api/billing/last-reading'   && m === 'GET')    return getLastReading(res, url);
  if (path === '/api/billing/invoice'        && m === 'GET')    return getBillingInvoice(res, url);
  if (/^\/api\/billing\/\d+$/.test(path)    && m === 'DELETE') return deleteBilling(res, seg(path, 3));
  if (path === '/api/payments'               && m === 'GET')    return getPayments(res, url);
  if (path === '/api/payments'               && m === 'POST')   return createPayment(req, res);
  if (/^\/api\/payments\/\d+$/.test(path)   && m === 'PUT')    return updatePayment(req, res, seg(path, 3));
  if (/^\/api\/payments\/\d+$/.test(path)   && m === 'DELETE') return deletePayment(res, seg(path, 3));
  if (path === '/api/expenses'               && m === 'GET')    return getExpenses(res, url);
  if (path === '/api/expenses'               && m === 'POST')   return createExpense(req, res);
  if (/^\/api\/expenses\/\d+$/.test(path)   && m === 'DELETE') return deleteExpense(res, seg(path, 3));
  if (path === '/api/summary'                && m === 'GET')    return getSummary(res, url);
  if (/^\/api\/receipt\/\d+$/.test(path)    && m === 'GET')    return getReceipt(res, seg(path, 3));

  return sendErr(res, 'Not found', 404);
}

function seg(path, n) { return path.split('/')[n]; }

// ── Auth ──────────────────────────────────────────────────────────────────────

async function login(req, res) {
  const { password } = req.body || {};
  if (password !== AUTH_PASSWORD) return sendErr(res, 'Invalid password', 401);
  return sendJson(res, { token: AUTH_PASSWORD });
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

async function dashboard(res, url) {
  const currentMonth = url.searchParams.get('month') || new Date().toISOString().slice(0, 7);

  const [propRows, roomRows, expiringRows, rentRow, paidRows] = await Promise.all([
    DB.prepare(`
      SELECT p.id, p.code, p.address, p.bank_name, p.bank_account,
        COUNT(r.id) as total_rooms,
        SUM(CASE WHEN r.status='occupied' THEN 1 ELSE 0 END) as occupied,
        SUM(CASE WHEN r.status='vacant'   THEN 1 ELSE 0 END) as vacant
      FROM properties p LEFT JOIN rooms r ON r.property_id = p.id
      GROUP BY p.id ORDER BY p.id`).all(),

    DB.prepare(`
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

    DB.prepare(`
      SELECT t.id, t.name, t.contract_end, t.contract_start,
        r.room_label, p.id as property_id, p.code as property_code,
        CAST((julianday(t.contract_end) - julianday('now')) AS INTEGER) as days_left
      FROM tenants t
      JOIN rooms r ON r.id = t.room_id
      JOIN properties p ON p.id = r.property_id
      WHERE t.active = 1 AND t.contract_end IS NOT NULL
        AND julianday(t.contract_end) - julianday('now') <= 90
      ORDER BY t.contract_end`).all(),

    DB.prepare(`SELECT SUM(rent) as total FROM tenants WHERE active=1`).first(),

    DB.prepare(`
      SELECT p.tenant_id, MAX(p.verified) as has_verified
      FROM payments p
      WHERE p.billing_month = ?
      GROUP BY p.tenant_id`).bind(currentMonth).all(),
  ]);

  const paymentStatusMap = {};
  paidRows.results.forEach(r => {
    paymentStatusMap[r.tenant_id] = r.has_verified ? 'verified' : 'pending';
  });

  return sendJson(res, {
    properties: propRows.results,
    rooms: roomRows.results,
    expiring: expiringRows.results,
    totalMonthlyRent: rentRow?.total || 0,
    paymentStatusMap,
    currentMonth,
  });
}

// ── Properties ────────────────────────────────────────────────────────────────

async function getProperties(res) {
  const rows = await DB.prepare(`SELECT * FROM properties ORDER BY id`).all();
  return sendJson(res, rows.results);
}

// ── Tenants ───────────────────────────────────────────────────────────────────

async function getTenants(res, url) {
  const roomId = url.searchParams.get('room_id');
  const query = roomId
    ? DB.prepare(`SELECT t.*, r.room_label, p.code as property_code FROM tenants t JOIN rooms r ON r.id=t.room_id JOIN properties p ON p.id=r.property_id WHERE t.room_id=? ORDER BY t.id`).bind(roomId)
    : DB.prepare(`SELECT t.*, r.room_label, r.property_id, p.code as property_code,
        (SELECT MAX(mr.billing_month) FROM meter_readings mr WHERE mr.room_id = t.room_id) as last_billing_month
      FROM tenants t JOIN rooms r ON r.id=t.room_id JOIN properties p ON p.id=r.property_id WHERE t.active=1 ORDER BY r.property_id, r.room_label`);
  const rows = await query.all();
  return sendJson(res, rows.results);
}

async function updateTenant(req, res, id) {
  const d = req.body || {};
  await DB.prepare(`
    UPDATE tenants SET name=?, rent=?, elec_rate=?, water_type=?, water_rate=?,
      contract_start=?, contract_end=?, deposit=?, commission=?
    WHERE id=?`)
    .bind(d.name, d.rent, d.elec_rate, d.water_type, d.water_rate,
          d.contract_start, d.contract_end, d.deposit, d.commission, id)
    .run();
  return sendJson(res, { success: true });
}

// ── Billing ───────────────────────────────────────────────────────────────────

async function getBilling(res, url) {
  const month = url.searchParams.get('month');
  const where = month ? `WHERE mr.billing_month = '${month.replace(/'/g, '')}'` : '';
  const fyStartExpr = `printf('%d-04', CASE WHEN CAST(SUBSTR(mr.billing_month,6,2) AS INTEGER) >= 4
      THEN CAST(SUBSTR(mr.billing_month,1,4) AS INTEGER)
      ELSE CAST(SUBSTR(mr.billing_month,1,4) AS INTEGER) - 1
    END)`;
  const rows = await DB.prepare(`
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
  return sendJson(res, rows.results);
}

async function getLastReading(res, url) {
  const roomId     = url.searchParams.get('room_id');
  const beforeMonth = url.searchParams.get('before_month');
  if (!roomId || !beforeMonth) return sendErr(res, 'room_id and before_month required');

  const row = await DB.prepare(`
    SELECT elec_curr, water_curr, billing_month
    FROM meter_readings
    WHERE room_id = ? AND billing_month < ?
    ORDER BY billing_month DESC LIMIT 1`).bind(roomId, beforeMonth).first();

  return sendJson(res, row || { elec_curr: null, water_curr: null, billing_month: null });
}

async function createBilling(req, res) {
  const d = req.body || {};
  const { room_id, billing_month, reading_date, elec_curr, water_curr, notes } = d;

  const tenant = await DB.prepare(`SELECT * FROM tenants WHERE room_id=? AND active=1`).bind(room_id).first();
  if (!tenant) return sendErr(res, 'No active tenant in this room');

  const oldRow = await DB.prepare(`SELECT total_bill FROM meter_readings WHERE room_id=? AND billing_month=?`).bind(room_id, billing_month).first();
  const oldBill = oldRow?.total_bill || 0;

  const prevRow = await DB.prepare(`
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

  const result = await DB.prepare(`
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

  const billDiff = total_bill - oldBill;
  await DB.prepare(`UPDATE tenants SET outstanding_balance = outstanding_balance + ? WHERE id=?`).bind(billDiff, tenant.id).run();

  const updated = await DB.prepare(`SELECT outstanding_balance FROM tenants WHERE id=?`).bind(tenant.id).first();

  return sendJson(res, {
    success: true, id: result.meta.last_row_id,
    elec_prev, elec_units, elec_amount,
    water_prev, water_units, water_amount,
    commission_applied, rent_amount, total_bill,
    outstanding_balance: updated?.outstanding_balance ?? 0,
  });
}

async function deleteBilling(res, id) {
  const bill = await DB.prepare(`
    SELECT mr.total_bill, t.id as tenant_id
    FROM meter_readings mr
    JOIN rooms r ON r.id = mr.room_id
    JOIN tenants t ON t.room_id = r.id AND t.active = 1
    WHERE mr.id = ?`).bind(id).first();

  await DB.prepare(`DELETE FROM meter_readings WHERE id=?`).bind(id).run();

  if (bill?.tenant_id) {
    await DB.prepare(`UPDATE tenants SET outstanding_balance = outstanding_balance - ? WHERE id=?`)
      .bind(bill.total_bill || 0, bill.tenant_id).run();
  }
  return sendJson(res, { success: true });
}

async function getBillingInvoice(res, url) {
  const roomId = url.searchParams.get('room_id');
  const month  = url.searchParams.get('month');
  if (!roomId || !month) return sendErr(res, 'room_id and month required');

  const [y, mo] = month.split('-').map(Number);
  const fyYear  = mo >= 4 ? y : y - 1;
  const fyStart = `${fyYear}-04`;

  const [mr, tenant, prevMr, prevBalRow] = await Promise.all([
    DB.prepare(`SELECT total_bill FROM meter_readings WHERE room_id=? AND billing_month=?`).bind(roomId, month).first(),
    DB.prepare(`SELECT outstanding_balance FROM tenants WHERE room_id=? AND active=1`).bind(roomId).first(),
    DB.prepare(`SELECT billing_month FROM meter_readings WHERE room_id=? AND billing_month<? ORDER BY billing_month DESC LIMIT 1`).bind(roomId, month).first(),
    DB.prepare(`
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

  return sendJson(res, {
    total_bill:          mr?.total_bill ?? null,
    outstanding_balance: tenant?.outstanding_balance ?? 0,
    prev_billing_month:  prevMr?.billing_month ?? null,
    prev_outstanding:    prevBalRow?.prev_outstanding ?? 0,
    fy_start:            fyStart,
  });
}

// ── Receipt ───────────────────────────────────────────────────────────────────

async function getReceipt(res, paymentId) {
  const row = await DB.prepare(`
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

  if (!row) return sendErr(res, 'Payment not found', 404);

  const monthTag = (row.billing_month || row.payment_date.slice(0, 7)).replace('-', '');
  const receiptNo = `RCT-${monthTag}-${String(row.id).padStart(4, '0')}`;
  return sendJson(res, { ...row, receipt_no: receiptNo });
}

// ── Payments ──────────────────────────────────────────────────────────────────

async function getPayments(res, url) {
  const month    = url.searchParams.get('month');
  const tenantId = url.searchParams.get('tenant_id');
  const fy       = url.searchParams.get('fy');
  const conditions = [], binds = [];

  if (month)    { conditions.push(`p.billing_month=?`); binds.push(month); }
  if (tenantId) { conditions.push(`p.tenant_id=?`);     binds.push(tenantId); }
  if (fy) {
    const fyStart = `${fy}-04`,   fyEnd  = `${parseInt(fy)+1}-03`;
    const dStart  = `${fy}-04-01`, dEnd  = `${parseInt(fy)+1}-03-31`;
    conditions.push(`((p.billing_month >= ? AND p.billing_month <= ?) OR (p.billing_month IS NULL AND p.payment_date >= ? AND p.payment_date <= ?))`);
    binds.push(fyStart, fyEnd, dStart, dEnd);
  }
  const where = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';

  const rows = await DB.prepare(`
    SELECT p.*, t.name as tenant_name, r.room_label, r.property_id, pr.code as property_code
    FROM payments p
    JOIN tenants t ON t.id = p.tenant_id
    JOIN rooms r ON r.id = t.room_id
    JOIN properties pr ON pr.id = r.property_id
    ${where}
    ORDER BY p.payment_date DESC, p.id DESC`).bind(...binds).all();
  return sendJson(res, rows.results);
}

async function createPayment(req, res) {
  const d = req.body || {};
  const result = await DB.prepare(`
    INSERT INTO payments (tenant_id, billing_month, payment_date, amount, method, notes, verified, proof_image, split_group)
    VALUES (?,?,?,?,?,?,?,?,?)`)
    .bind(d.tenant_id, d.billing_month || null, d.payment_date,
          d.amount, d.method || 'bank_transfer', d.notes || null,
          d.verified ? 1 : 0, d.proof_image || null, d.split_group || null)
    .run();

  await DB.prepare(`UPDATE tenants SET outstanding_balance = outstanding_balance - ? WHERE id=?`)
    .bind(d.amount, d.tenant_id).run();

  if (d.billing_month) {
    const monthNet = await DB.prepare(`
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
      await DB.prepare(`UPDATE tenants SET outstanding_balance = outstanding_balance - ? WHERE id=?`)
        .bind(monthNet.net, d.tenant_id).run();
    }
  }

  return sendJson(res, { success: true, id: result.meta.last_row_id });
}

async function updatePayment(req, res, id) {
  const d = req.body || {};
  await DB.prepare(`UPDATE payments SET verified=? WHERE id=?`).bind(d.verified ? 1 : 0, id).run();
  return sendJson(res, { success: true });
}

async function deletePayment(res, id) {
  const pay = await DB.prepare(`SELECT tenant_id, split_group FROM payments WHERE id=?`).bind(id).first();
  if (pay?.split_group) {
    await DB.prepare(`DELETE FROM payments WHERE split_group=?`).bind(pay.split_group).run();
  } else {
    await DB.prepare(`DELETE FROM payments WHERE id=?`).bind(id).run();
  }
  if (pay?.tenant_id) {
    const tenant = await DB.prepare(`SELECT room_id FROM tenants WHERE id=?`).bind(pay.tenant_id).first();
    if (tenant?.room_id) {
      const billSum = await DB.prepare(`SELECT COALESCE(SUM(total_bill),0) as s FROM meter_readings WHERE room_id=?`).bind(tenant.room_id).first();
      const paySum  = await DB.prepare(`SELECT COALESCE(SUM(amount),0) as s FROM payments WHERE tenant_id=?`).bind(pay.tenant_id).first();
      await DB.prepare(`UPDATE tenants SET outstanding_balance=? WHERE id=?`)
        .bind((billSum?.s || 0) - (paySum?.s || 0), pay.tenant_id).run();
    }
  }
  return sendJson(res, { success: true });
}

// ── Expenses ──────────────────────────────────────────────────────────────────

async function getExpenses(res, url) {
  const propId = url.searchParams.get('property_id');
  const fy     = url.searchParams.get('fy');
  const conditions = [], binds = [];

  if (fy) {
    conditions.push(`e.expense_date >= ? AND e.expense_date <= ?`);
    binds.push(`${fy}-04-01`, `${parseInt(fy)+1}-03-31`);
  } else {
    const year = url.searchParams.get('year');
    if (year) { conditions.push(`e.expense_date LIKE ?`); binds.push(`${year}-%`); }
  }
  if (propId) { conditions.push(`e.property_id=?`); binds.push(propId); }
  const where = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';

  const rows = await DB.prepare(`
    SELECT e.*, p.code as property_code
    FROM expenses e
    LEFT JOIN properties p ON p.id = e.property_id
    ${where}
    ORDER BY e.expense_date DESC, e.id DESC`).bind(...binds).all();
  return sendJson(res, rows.results);
}

async function createExpense(req, res) {
  const d = req.body || {};
  if (!d.property_id) return sendErr(res, 'property_id is required');
  const result = await DB.prepare(`
    INSERT INTO expenses (property_id, expense_date, category, amount, description)
    VALUES (?,?,?,?,?)`)
    .bind(d.property_id, d.expense_date, d.category, d.amount, d.description || null)
    .run();
  return sendJson(res, { success: true, id: result.meta.last_row_id });
}

async function deleteExpense(res, id) {
  await DB.prepare(`DELETE FROM expenses WHERE id=?`).bind(id).run();
  return sendJson(res, { success: true });
}

// ── Annual Summary ────────────────────────────────────────────────────────────

async function getSummary(res, url) {
  const fy     = url.searchParams.get('fy') || '2026';
  const fyNext = String(parseInt(fy) + 1);
  const fyLabel = `${fy}/${fyNext.slice(-2)}`;
  const mStart = `${fy}-04`,     mEnd  = `${fyNext}-03`;
  const dStart = `${fy}-04-01`,  dEnd  = `${fyNext}-03-31`;

  const [incomeRows, expCatRows, expPropRows] = await Promise.all([
    DB.prepare(`
      SELECT pr.id, pr.code, pr.address,
        COALESCE(SUM(pay.amount), 0) as total_income
      FROM properties pr
      LEFT JOIN rooms r ON r.property_id = pr.id
      LEFT JOIN tenants t ON t.room_id = r.id
      LEFT JOIN payments pay ON pay.tenant_id = t.id
        AND pay.billing_month >= ? AND pay.billing_month <= ?
      GROUP BY pr.id ORDER BY pr.id`).bind(mStart, mEnd).all(),

    DB.prepare(`
      SELECT category, COALESCE(SUM(amount), 0) as total
      FROM expenses
      WHERE expense_date >= ? AND expense_date <= ?
      GROUP BY category`).bind(dStart, dEnd).all(),

    DB.prepare(`
      SELECT e.property_id, pr.code, e.category,
        COALESCE(SUM(e.amount), 0) as total
      FROM expenses e
      LEFT JOIN properties pr ON pr.id = e.property_id
      WHERE e.expense_date >= ? AND e.expense_date <= ?
      GROUP BY e.property_id, e.category`).bind(dStart, dEnd).all(),
  ]);

  const catMap = {};
  expCatRows.results.forEach(r => { catMap[r.category] = r.total; });

  const totalIncome   = incomeRows.results.reduce((s, r) => s + r.total_income, 0);
  const govtRent      = catMap['govt_rent']    || 0;
  const govtRates     = catMap['govt_rates']   || 0;
  const repairs       = catMap['repairs']      || 0;
  const insurance     = catMap['insurance']    || 0;
  const stampDuty     = catMap['stamp_duty']   || 0;
  const handlingFee   = catMap['handling_fee'] || 0;
  const other         = catMap['other']        || 0;
  const totalExpenses = Object.values(catMap).reduce((s, v) => s + v, 0);
  const netIncome     = totalIncome - totalExpenses;
  const taxBase       = Math.max(0, totalIncome - govtRent);
  const propertyTax   = taxBase * 0.8 * 0.15;

  const propExpMap = {};
  expPropRows.results.forEach(r => {
    if (!propExpMap[r.property_id]) propExpMap[r.property_id] = {};
    propExpMap[r.property_id][r.category] = r.total;
  });

  const propBreakdown = incomeRows.results.map(p => {
    const exp = propExpMap[p.id] || {};
    const pGovtRent  = exp['govt_rent']    || 0;
    const pGovtRates = exp['govt_rates']   || 0;
    const pRepairs   = exp['repairs']      || 0;
    const pInsurance = exp['insurance']    || 0;
    const pStamp     = exp['stamp_duty']   || 0;
    const pHandling  = exp['handling_fee'] || 0;
    const pOther     = exp['other']        || 0;
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

  return sendJson(res, {
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
