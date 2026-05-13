const { put, del, get: getBlobFile } = require('@vercel/blob');
const { Readable } = require('stream');

const CF_ACCOUNT_ID  = process.env.CF_ACCOUNT_ID;
const CF_DATABASE_ID = process.env.CF_DATABASE_ID || '666f4f48-11b2-4075-9081-2e167357ee0a';
const CF_API_TOKEN   = process.env.CF_API_TOKEN;
const AUTH_PASSWORD  = process.env.AUTH_PASSWORD  || 'BigSister2026';
const VIEW_PASSWORD  = process.env.VIEW_PASSWORD  || 'view123';

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
    `ALTER TABLE expenses ADD COLUMN unit_label TEXT`,
    `ALTER TABLE tenants ADD COLUMN phone TEXT`,
    `ALTER TABLE tenants ADD COLUMN remark TEXT`,
    `ALTER TABLE tenants ADD COLUMN contract_url TEXT`,
    `ALTER TABLE expenses ADD COLUMN slip_url TEXT`,
    `ALTER TABLE properties ADD COLUMN sort_order INTEGER DEFAULT 99`,
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

  try {
    const flagBrv5 = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v5'`).first();
    if (!flagBrv5) {
      await DB.prepare(`UPDATE tenants SET outstanding_balance = 0`).run();
      await DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v5', '1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flagBrv6 = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='balance_reset_v6'`).first();
    if (!flagBrv6) {
      await DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('balance_reset_v6', '1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flag5 = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='unit_label_backfill_v1'`).first();
    if (!flag5) {
      await DB.prepare(`
        UPDATE expenses
        SET unit_label = (
          SELECT p.code || ' ' || r.room_label
          FROM properties p
          JOIN rooms r ON r.property_id = p.id
          JOIN tenants t ON t.room_id = r.id AND t.active = 1
          WHERE p.id = expenses.property_id
          ORDER BY r.room_label
          LIMIT 1
        )
        WHERE unit_label IS NULL OR unit_label = ''`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key, value) VALUES ('unit_label_backfill_v1', '1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flagR = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='prop_rename_v1'`).first();
    if (!flagR) {
      await DB.prepare(`UPDATE properties SET code='2F/WS' WHERE code='2FWS'`).run();
      await DB.prepare(`UPDATE properties SET code='3F/KC' WHERE code='3FPK'`).run();
      await DB.prepare(`UPDATE properties SET code='4F/KS' WHERE code='4FKS'`).run();
      await DB.prepare(`UPDATE properties SET code='5F/SH' WHERE code='5FPS'`).run();
      // Rename unit_labels in expenses: "XXXX A" → "XX/XX-A"
      await DB.prepare(`UPDATE expenses SET unit_label='2F/WS'   WHERE unit_label='2FWS'`).run();
      await DB.prepare(`UPDATE expenses SET unit_label='3F/KC'   WHERE unit_label='3FPK'`).run();
      await DB.prepare(`UPDATE expenses SET unit_label='4F/KS'   WHERE unit_label='4FKS'`).run();
      await DB.prepare(`UPDATE expenses SET unit_label='5F/SH'   WHERE unit_label='5FPS' OR unit_label='5FPS Flat'`).run();
      await DB.prepare(`UPDATE expenses SET unit_label=REPLACE(unit_label,'2FWS ','2F/WS-') WHERE unit_label LIKE '2FWS %'`).run();
      await DB.prepare(`UPDATE expenses SET unit_label=REPLACE(unit_label,'3FPK ','3F/KC-') WHERE unit_label LIKE '3FPK %'`).run();
      await DB.prepare(`UPDATE expenses SET unit_label=REPLACE(unit_label,'4FKS ','4F/KS-') WHERE unit_label LIKE '4FKS %'`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key,value) VALUES ('prop_rename_v1','1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flagP = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='prop_4fsh_v1'`).first();
    if (!flagP) {
      const existing = await DB.prepare(`SELECT id FROM properties WHERE code='4F/SH'`).first();
      if (!existing) {
        await DB.prepare(`INSERT INTO properties (code, address, bank_name, bank_account) VALUES ('4F/SH','4/F, 55 Pilkem St, Shing Hing House','HSBC','062-9-074139')`).run();
      }
      const prop = await DB.prepare(`SELECT id FROM properties WHERE code='4F/SH'`).first();
      if (prop) {
        const existRoom = await DB.prepare(`SELECT id FROM rooms WHERE property_id=? AND room_label='Flat'`).bind(prop.id).first();
        if (!existRoom) {
          await DB.prepare(`INSERT INTO rooms (property_id, room_label, status) VALUES (?, 'Flat', 'occupied')`).bind(prop.id).run();
        }
        const room = await DB.prepare(`SELECT id FROM rooms WHERE property_id=? AND room_label='Flat'`).bind(prop.id).first();
        if (room) {
          const existTenant = await DB.prepare(`SELECT id FROM tenants WHERE room_id=? AND active=1`).bind(room.id).first();
          if (!existTenant) {
            await DB.prepare(`INSERT INTO tenants (room_id, name, rent, elec_rate, water_type, water_rate, contract_start, contract_end, deposit, commission, active, phone) VALUES (?,?,12300,0,'none',0,'2025-11-09','2027-11-08',8000,0,1,'96081495')`)
              .bind(room.id, 'Mr Khan Noor').run();
          }
        }
      }
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key,value) VALUES ('prop_4fsh_v1','1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flagS = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='prop_sort_v1'`).first();
    if (!flagS) {
      await DB.prepare(`UPDATE properties SET sort_order=1 WHERE code='2F/WS'`).run();
      await DB.prepare(`UPDATE properties SET sort_order=2 WHERE code='3F/KC'`).run();
      await DB.prepare(`UPDATE properties SET sort_order=3 WHERE code='4F/KS'`).run();
      await DB.prepare(`UPDATE properties SET sort_order=4 WHERE code='4F/SH'`).run();
      await DB.prepare(`UPDATE properties SET sort_order=5 WHERE code='5F/SH'`).run();
      await DB.prepare(`UPDATE properties SET sort_order=6 WHERE code='CarP'`).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key,value) VALUES ('prop_sort_v1','1')`).run();
    }
  } catch { /* ignore */ }

  try {
    const flagO = await DB.prepare(`SELECT value FROM _schema_flags WHERE key='orphan_cleanup_v1'`).first();
    if (!flagO) {
      // Null out billing_month on payments where the referenced month has no meter_readings
      // for that tenant — these cause phantom credits in prev_outstanding calculations.
      // Only touches months at least 1 month in the past to avoid touching advance payments.
      await DB.prepare(`
        UPDATE payments
        SET billing_month = NULL
        WHERE billing_month IS NOT NULL
          AND billing_month < strftime('%Y-%m', 'now', '-1 month')
          AND NOT EXISTS (
            SELECT 1 FROM meter_readings mr
            WHERE mr.billing_month = payments.billing_month
              AND mr.room_id = (SELECT room_id FROM tenants WHERE id = payments.tenant_id)
          )
      `).run();
      // Recompute outstanding_balance for all tenants from scratch
      await DB.prepare(`UPDATE tenants SET outstanding_balance = 0`).run();
      await DB.prepare(`
        UPDATE tenants SET outstanding_balance = (
          COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
          - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
        )
      `).run();
      await DB.prepare(`INSERT OR REPLACE INTO _schema_flags (key,value) VALUES ('orphan_cleanup_v1','1')`).run();
    }
  } catch { /* ignore */ }
}

// ── Router ────────────────────────────────────────────────────────────────────

async function route(req, res, path, url) {
  const m = req.method;

  if (path === '/api/auth/login' && m === 'POST') return login(req, res);

  const token    = (req.headers['authorization'] || '').replace('Bearer ', '');
  const isAdmin  = token === AUTH_PASSWORD;
  const isViewer = token === VIEW_PASSWORD;
  if (!isAdmin && !isViewer) return sendErr(res, 'Unauthorized', 401);

  // Read-only routes (viewer and admin):
  if (path === '/api/dashboard'              && m === 'GET')    return dashboard(res, url);
  if (path === '/api/properties'             && m === 'GET')    return getProperties(res);
  if (path === '/api/tenants/directory'      && m === 'GET')    return getTenantsDirectory(res);
  if (path === '/api/tenants'                && m === 'GET')    return getTenants(res, url);
  if (path === '/api/billing'                && m === 'GET')    return getBilling(res, url);
  if (path === '/api/billing/last-reading'   && m === 'GET')    return getLastReading(res, url);
  if (path === '/api/billing/invoice'        && m === 'GET')    return getBillingInvoice(res, url);
  if (path === '/api/payments'               && m === 'GET')    return getPayments(res, url);
  if (path === '/api/expenses'               && m === 'GET')    return getExpenses(res, url);
  if (path === '/api/summary'                && m === 'GET')    return getSummary(res, url);
  if (/^\/api\/receipt\/\d+$/.test(path)    && m === 'GET')    return getReceipt(res, seg(path, 3));
  if (/^\/api\/contracts\/\d+\/view$/.test(path)       && m === 'GET') return viewContract(req, res, seg(path, 3));
  if (/^\/api\/expenses\/\d+\/slip\/view$/.test(path)  && m === 'GET') return viewExpenseSlip(req, res, seg(path, 3));
  if (/^\/api\/payments\/\d+\/proof$/.test(path)       && m === 'GET') return viewPaymentProof(req, res, seg(path, 3));

  // Write routes (admin only):
  if (!isAdmin) return sendErr(res, 'Forbidden', 403);

  if (/^\/api\/tenants\/\d+$/.test(path)   && m === 'PUT')    return updateTenant(req, res, seg(path, 3));
  if (/^\/api\/contracts\/\d+$/.test(path) && m === 'POST')   return uploadContract(req, res, seg(path, 3));
  if (/^\/api\/contracts\/\d+$/.test(path) && m === 'DELETE') return deleteContract(res, seg(path, 3));
  if (/^\/api\/expenses\/\d+\/slip$/.test(path) && m === 'POST') return uploadExpenseSlip(req, res, seg(path, 3));
  if (path === '/api/billing'                 && m === 'POST')   return createBilling(req, res);
  if (/^\/api\/billing\/\d+$/.test(path)     && m === 'DELETE') return deleteBilling(res, seg(path, 3));
  if (path === '/api/payments'                && m === 'POST')   return createPayment(req, res);
  if (/^\/api\/payments\/\d+$/.test(path)    && m === 'PUT')    return updatePayment(req, res, seg(path, 3));
  if (/^\/api\/payments\/\d+$/.test(path)    && m === 'DELETE') return deletePayment(res, seg(path, 3));
  if (path === '/api/expenses'                && m === 'POST')   return createExpense(req, res);
  if (/^\/api\/expenses\/\d+$/.test(path)    && m === 'DELETE') return deleteExpense(res, seg(path, 3));
  if (path === '/api/admin/recalc-balances'   && m === 'GET')    return recalcBalances(res);

  return sendErr(res, 'Not found', 404);
}

function seg(path, n) { return path.split('/')[n]; }

// ── Auth ──────────────────────────────────────────────────────────────────────

async function login(req, res) {
  const { password } = req.body || {};
  if (password === AUTH_PASSWORD) return sendJson(res, { token: AUTH_PASSWORD, role: 'admin' });
  if (password === VIEW_PASSWORD)  return sendJson(res, { token: VIEW_PASSWORD,  role: 'viewer' });
  return sendErr(res, 'Invalid password', 401);
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

async function dashboard(res, url) {
  const currentMonth = url.searchParams.get('month') || new Date().toISOString().slice(0, 7);
  const [y, mo] = currentMonth.split('-').map(Number);
  const fyStart = `${mo >= 4 ? y : y - 1}-04`;

  const [propRows, roomRows, expiringRows, rentRow, paidRows] = await Promise.all([
    DB.prepare(`
      SELECT p.id, p.code, p.address, p.bank_name, p.bank_account,
        COUNT(r.id) as total_rooms,
        SUM(CASE WHEN r.status='occupied' THEN 1 ELSE 0 END) as occupied,
        SUM(CASE WHEN r.status='vacant'   THEN 1 ELSE 0 END) as vacant
      FROM properties p LEFT JOIN rooms r ON r.property_id = p.id
      GROUP BY p.id ORDER BY p.sort_order, p.id`).all(),

    DB.prepare(`
      SELECT r.id, r.property_id, r.room_label, r.status,
        t.id as tenant_id, t.name as tenant_name, t.rent,
        t.contract_start, t.contract_end, t.deposit, t.commission,
        t.elec_rate, t.water_type, t.water_rate, t.outstanding_balance,
        mr.total_bill,
        COALESCE((
          SELECT SUM(p.amount) FROM payments p
          WHERE p.tenant_id = t.id AND p.billing_month = ?
        ), 0) as total_paid_month,
        COALESCE((
          SELECT SUM(mr2.total_bill) FROM meter_readings mr2
          WHERE mr2.room_id = r.id AND mr2.billing_month < ? AND mr2.billing_month >= ?
        ), 0) - COALESCE((
          SELECT SUM(p2.amount) FROM payments p2
          WHERE p2.tenant_id = t.id AND p2.billing_month IS NOT NULL
            AND p2.billing_month < ? AND p2.billing_month >= ?
        ), 0) as prev_outstanding
      FROM rooms r
      LEFT JOIN tenants t ON t.room_id = r.id AND t.active = 1
      LEFT JOIN meter_readings mr ON mr.room_id = r.id AND mr.billing_month = ?
      LEFT JOIN properties prop ON prop.id = r.property_id
      ORDER BY prop.sort_order, prop.id, r.room_label`).bind(currentMonth, currentMonth, fyStart, currentMonth, fyStart, currentMonth).all(),

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
  const rows = await DB.prepare(`SELECT * FROM properties ORDER BY sort_order, id`).all();
  return sendJson(res, rows.results);
}

// ── Tenants ───────────────────────────────────────────────────────────────────

async function getTenants(res, url) {
  const roomId = url.searchParams.get('room_id');
  const query = roomId
    ? DB.prepare(`SELECT t.*, r.room_label, p.code as property_code FROM tenants t JOIN rooms r ON r.id=t.room_id JOIN properties p ON p.id=r.property_id WHERE t.room_id=? ORDER BY t.id`).bind(roomId)
    : DB.prepare(`SELECT t.*, r.room_label, r.property_id, p.code as property_code,
        (SELECT MAX(mr.billing_month) FROM meter_readings mr WHERE mr.room_id = t.room_id) as last_billing_month
      FROM tenants t JOIN rooms r ON r.id=t.room_id JOIN properties p ON p.id=r.property_id
      WHERE t.active=1 OR (t.active=0 AND t.contract_end >= '2026-01-01')
      ORDER BY p.sort_order, p.id, r.room_label`);
  const rows = await query.all();
  return sendJson(res, rows.results);
}

async function updateTenant(req, res, id) {
  const d = req.body || {};
  await DB.prepare(`
    UPDATE tenants SET name=?, rent=?, elec_rate=?, water_type=?, water_rate=?,
      contract_start=?, contract_end=?, deposit=?, commission=?, phone=?, remark=?
    WHERE id=?`)
    .bind(d.name, d.rent, d.elec_rate, d.water_type, d.water_rate,
          d.contract_start, d.contract_end, d.deposit, d.commission,
          d.phone || null, d.remark || null, id)
    .run();
  return sendJson(res, { success: true });
}

async function getTenantsDirectory(res) {
  const rows = await DB.prepare(`
    SELECT r.id as room_id, r.room_label, r.status,
      p.id as property_id, p.code as property_code,
      t.id as tenant_id, t.name, t.phone, t.rent, t.deposit,
      t.contract_start, t.contract_end, t.remark, t.contract_url,
      t.elec_rate, t.water_type, t.water_rate, t.commission
    FROM rooms r
    JOIN properties p ON p.id = r.property_id
    LEFT JOIN tenants t ON t.room_id = r.id AND t.active = 1
    ORDER BY p.sort_order, p.id, r.room_label`).all();
  return sendJson(res, rows.results);
}

async function uploadContract(req, res, tenantId) {
  const Busboy = require('@fastify/busboy');

  // Parse multipart/form-data — collect the uploaded file
  const { buffer, fileType } = await new Promise((resolve, reject) => {
    const bb = new Busboy({ headers: req.headers });
    const chunks = [];
    let fileType = null;
    let gotFile = false;

    bb.on('file', (_field, stream, _filename, _encoding, mimetype) => {
      gotFile = true;
      fileType = mimetype;
      stream.on('data', d => chunks.push(d));
      stream.on('error', reject);
    });

    bb.on('finish', () => {
      if (!gotFile) return reject(new Error('No file in request'));
      resolve({ buffer: Buffer.concat(chunks), fileType });
    });

    bb.on('error', reject);

    // Vercel may pre-buffer the body as req.body (Buffer) or leave req as a readable stream
    if (Buffer.isBuffer(req.body)) {
      const r = new Readable();
      r.push(req.body);
      r.push(null);
      r.pipe(bb);
    } else {
      req.pipe(bb);
    }
  });

  const allowed = ['application/pdf', 'image/jpeg', 'image/png'];
  if (!allowed.includes(fileType)) return sendErr(res, 'Only PDF, JPG, PNG files are allowed');

  const ext = fileType === 'application/pdf' ? '.pdf'
            : fileType === 'image/png' ? '.png' : '.jpg';
  const pathname = `contracts/tenant-${tenantId}${ext}`;

  const existing = await DB.prepare(`SELECT contract_url FROM tenants WHERE id=?`).bind(tenantId).first();
  if (existing?.contract_url) {
    try { await del(existing.contract_url); } catch { /* already gone */ }
  }

  const blob = await put(pathname, buffer, {
    access: 'private',
    contentType: fileType,
    addRandomSuffix: true,
  });

  await DB.prepare(`UPDATE tenants SET contract_url=? WHERE id=?`).bind(blob.url, tenantId).run();
  return sendJson(res, { success: true, url: blob.url });
}

async function viewContract(req, res, tenantId) {
  const tenant = await DB.prepare(`SELECT contract_url FROM tenants WHERE id=?`).bind(tenantId).first();
  if (!tenant?.contract_url) return sendErr(res, 'No contract found', 404);

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  const blobRes = await fetch(tenant.contract_url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!blobRes.ok) return sendErr(res, 'Contract not accessible', 404);

  const contentType = blobRes.headers.get('content-type') || 'application/octet-stream';
  const buffer = await blobRes.arrayBuffer();

  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', 'inline');
  return res.status(200).send(Buffer.from(buffer));
}

async function deleteContract(res, tenantId) {
  const tenant = await DB.prepare(`SELECT contract_url FROM tenants WHERE id=?`).bind(tenantId).first();
  if (!tenant) return sendErr(res, 'Tenant not found', 404);
  if (tenant.contract_url) {
    try { await del(tenant.contract_url); } catch { /* already gone */ }
  }
  await DB.prepare(`UPDATE tenants SET contract_url=NULL WHERE id=?`).bind(tenantId).run();
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
          WHERE mr2.room_id = mr.room_id
            AND mr2.billing_month <= mr.billing_month
            AND mr2.billing_month >= ${fyStartExpr}
        ), 0) - COALESCE((
          SELECT SUM(pay2.amount) FROM payments pay2
          WHERE pay2.tenant_id = t.id
            AND pay2.billing_month IS NOT NULL
            AND pay2.billing_month <= mr.billing_month
            AND pay2.billing_month >= ${fyStartExpr}
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
    ORDER BY mr.billing_month DESC, p.sort_order, p.id, r.room_label`).all();
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

  await DB.prepare(`
    UPDATE tenants SET outstanding_balance = (
      COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
      - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
    ) WHERE id=?`).bind(tenant.id).run();

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
    await DB.prepare(`
      UPDATE tenants SET outstanding_balance = (
        COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
        - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
      ) WHERE id=?`).bind(bill.tenant_id).run();
  }
  return sendJson(res, { success: true });
}

async function recalcBalances(res) {
  await DB.prepare(`
    UPDATE tenants SET outstanding_balance = (
      COALESCE((SELECT SUM(mr.total_bill) FROM meter_readings mr WHERE mr.room_id = tenants.room_id), 0)
      - COALESCE((SELECT SUM(p.amount) FROM payments p WHERE p.tenant_id = tenants.id), 0)
    )`).run();
  const rows = await DB.prepare(`
    SELECT t.id, t.name, t.outstanding_balance, r.room_label
    FROM tenants t JOIN rooms r ON r.id = t.room_id
    WHERE t.active = 1
    ORDER BY r.room_label`).all();
  return sendJson(res, { success: true, recalculated: rows.results.length, tenants: rows.results });
}

async function getBillingInvoice(res, url) {
  const roomId = url.searchParams.get('room_id');
  const month  = url.searchParams.get('month');
  if (!roomId || !month) return sendErr(res, 'room_id and month required');

  const [y, mo] = month.split('-').map(Number);
  const fyYear  = mo >= 4 ? y : y - 1;
  const fyStart = `${fyYear}-04`;

  if (month < fyStart) return sendJson(res, { total_bill: null, outstanding_balance: 0, prev_billing_month: null, prev_outstanding: 0, fy_start: fyStart });

  const [mr, tenant, firstBillingRow, prevMr, prevBalRow] = await Promise.all([
    DB.prepare(`SELECT total_bill FROM meter_readings WHERE room_id=? AND billing_month=?`).bind(roomId, month).first(),
    DB.prepare(`SELECT outstanding_balance FROM tenants WHERE room_id=? AND active=1`).bind(roomId).first(),
    DB.prepare(`SELECT MIN(billing_month) as first_month FROM meter_readings WHERE room_id=?`).bind(roomId).first(),
    DB.prepare(`SELECT billing_month FROM meter_readings WHERE room_id=? AND billing_month<? AND billing_month>=? ORDER BY billing_month DESC LIMIT 1`).bind(roomId, month, fyStart).first(),
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

  const firstBillingMonth = firstBillingRow?.first_month ?? null;
  const isFirstOrBefore   = firstBillingMonth === null || month <= firstBillingMonth;
  const prevBillingMonth  = (!isFirstOrBefore && prevMr?.billing_month) ? prevMr.billing_month : null;
  const prevOutstanding   = prevBillingMonth ? (prevBalRow?.prev_outstanding ?? 0) : 0;

  return sendJson(res, {
    total_bill:          mr?.total_bill ?? null,
    outstanding_balance: tenant?.outstanding_balance ?? 0,
    prev_billing_month:  prevBillingMonth,
    prev_outstanding:    prevOutstanding,
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
    SELECT p.id, p.tenant_id, p.billing_month, p.payment_date, p.amount, p.method,
           p.notes, p.verified, p.split_group,
           CASE WHEN p.proof_image IS NOT NULL AND p.proof_image != '' THEN 1 ELSE 0 END as has_proof,
           t.name as tenant_name, r.room_label, r.property_id, pr.code as property_code
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
    if (monthNet && Math.abs(monthNet.net) > 0 && Math.abs(monthNet.net) < 0.5) {
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
  const month  = url.searchParams.get('month');
  const fy     = url.searchParams.get('fy');
  const conditions = [], binds = [];

  if (month) {
    conditions.push(`e.expense_date LIKE ?`);
    binds.push(`${month}-%`);
  } else if (fy) {
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
  const result = await DB.prepare(`
    INSERT INTO expenses (property_id, expense_date, category, amount, description, unit_label)
    VALUES (?,?,?,?,?,?)`)
    .bind(d.property_id || null, d.expense_date, d.category, d.amount, d.description || null, d.unit_label || null)
    .run();
  return sendJson(res, { success: true, id: result.meta.last_row_id });
}

async function deleteExpense(res, id) {
  const exp = await DB.prepare(`SELECT slip_url FROM expenses WHERE id=?`).bind(id).first();
  if (exp?.slip_url) {
    try { await del(exp.slip_url); } catch { /* already gone */ }
  }
  await DB.prepare(`DELETE FROM expenses WHERE id=?`).bind(id).run();
  return sendJson(res, { success: true });
}

async function uploadExpenseSlip(req, res, expenseId) {
  const { base64, contentType } = req.body || {};
  if (!base64 || !contentType) return sendErr(res, 'base64 and contentType required');

  const allowed = ['application/pdf', 'image/jpeg', 'image/png'];
  if (!allowed.includes(contentType)) return sendErr(res, 'Only PDF, JPG, PNG files are allowed');

  const ext = contentType === 'application/pdf' ? '.pdf'
            : contentType === 'image/png' ? '.png' : '.jpg';
  const pathname = `expense-slips/expense-${expenseId}${ext}`;

  const existing = await DB.prepare(`SELECT slip_url FROM expenses WHERE id=?`).bind(expenseId).first();
  if (existing?.slip_url) {
    try { await del(existing.slip_url); } catch { /* already gone */ }
  }

  const buffer = Buffer.from(base64, 'base64');
  const blob = await put(pathname, buffer, {
    access: 'private',
    contentType,
    addRandomSuffix: true,
  });

  await DB.prepare(`UPDATE expenses SET slip_url=? WHERE id=?`).bind(blob.url, expenseId).run();
  return sendJson(res, { success: true, url: blob.url });
}

async function viewExpenseSlip(req, res, expenseId) {
  const expense = await DB.prepare(`SELECT slip_url FROM expenses WHERE id=?`).bind(expenseId).first();
  if (!expense?.slip_url) return sendErr(res, 'No slip found', 404);

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  const blobRes = await fetch(expense.slip_url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!blobRes.ok) return sendErr(res, 'Slip not accessible', 404);

  const contentType = blobRes.headers.get('content-type') || 'application/octet-stream';
  const buffer = await blobRes.arrayBuffer();

  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', 'inline');
  return res.status(200).send(Buffer.from(buffer));
}

async function viewPaymentProof(req, res, paymentId) {
  const row = await DB.prepare(`SELECT proof_image FROM payments WHERE id=?`).bind(paymentId).first();
  if (!row?.proof_image) return sendErr(res, 'No proof found', 404);

  const base64 = row.proof_image;
  const matches = base64.match(/^data:([^;]+);base64,(.+)$/);
  if (!matches) return sendErr(res, 'Invalid proof data', 400);
  const contentType = matches[1];
  const buffer = Buffer.from(matches[2], 'base64');

  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', 'inline');
  return res.status(200).send(buffer);
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
      GROUP BY pr.id ORDER BY pr.sort_order, pr.id`).bind(mStart, mEnd).all(),

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
  const electricity   = catMap['electricity']  || 0;
  const water         = catMap['water']        || 0;
  const garbage       = catMap['garbage']      || 0;
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

  // General expenses: those with no property assigned (property_id IS NULL → key null)
  const genExp = propExpMap[null] || {};
  const generalExpenses = {
    govtRent:    genExp['govt_rent']    || 0,
    govtRates:   genExp['govt_rates']   || 0,
    repairs:     genExp['repairs']      || 0,
    insurance:   genExp['insurance']    || 0,
    stampDuty:   genExp['stamp_duty']   || 0,
    handlingFee: genExp['handling_fee'] || 0,
    electricity: genExp['electricity']  || 0,
    water:       genExp['water']        || 0,
    garbage:     genExp['garbage']      || 0,
    other:       genExp['other']        || 0,
    total:       Object.values(genExp).reduce((s, v) => s + v, 0),
  };

  // Property expenses: aggregate by category across all non-null property_id entries
  const propExpByCategory = {};
  Object.entries(propExpMap).forEach(([propId, cats]) => {
    if (propId === 'null') return;
    Object.entries(cats).forEach(([cat, amt]) => {
      propExpByCategory[cat] = (propExpByCategory[cat] || 0) + amt;
    });
  });
  const propertyExpenses = {
    govtRent:    propExpByCategory['govt_rent']    || 0,
    govtRates:   propExpByCategory['govt_rates']   || 0,
    repairs:     propExpByCategory['repairs']      || 0,
    insurance:   propExpByCategory['insurance']    || 0,
    stampDuty:   propExpByCategory['stamp_duty']   || 0,
    handlingFee: propExpByCategory['handling_fee'] || 0,
    electricity: propExpByCategory['electricity']  || 0,
    water:       propExpByCategory['water']        || 0,
    garbage:     propExpByCategory['garbage']      || 0,
    other:       propExpByCategory['other']        || 0,
    total:       Object.values(propExpByCategory).reduce((s, v) => s + v, 0),
  };

  const propBreakdown = incomeRows.results.map(p => {
    const exp = propExpMap[p.id] || {};
    const pGovtRent  = exp['govt_rent']    || 0;
    const pGovtRates = exp['govt_rates']   || 0;
    const pRepairs   = exp['repairs']      || 0;
    const pInsurance = exp['insurance']    || 0;
    const pStamp     = exp['stamp_duty']   || 0;
    const pHandling  = exp['handling_fee'] || 0;
    const pElec      = exp['electricity']  || 0;
    const pWater     = exp['water']        || 0;
    const pGarbage   = exp['garbage']      || 0;
    const pOther     = exp['other']        || 0;
    const pTotalExp  = Object.values(exp).reduce((s, v) => s + v, 0);
    const pTaxBase   = Math.max(0, p.total_income - pGovtRent);
    return {
      id: p.id, code: p.code, address: p.address,
      income: p.total_income,
      expenses: { govtRent: pGovtRent, govtRates: pGovtRates, repairs: pRepairs,
                  insurance: pInsurance, stampDuty: pStamp, handlingFee: pHandling,
                  electricity: pElec, water: pWater, garbage: pGarbage, other: pOther },
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
      totalIncome, govtRent, govtRates, repairs, insurance, stampDuty, handlingFee,
      electricity, water, garbage, other,
      totalExpenses, netIncome, perOwner: netIncome / 5,
      taxBase, propertyTax,
    },
    propBreakdown,
    generalExpenses,
    propertyExpenses,
  });
}
