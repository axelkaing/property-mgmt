-- Property Management Schema

CREATE TABLE IF NOT EXISTS properties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL UNIQUE,
  address TEXT NOT NULL,
  bank_name TEXT,
  bank_account TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rooms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  property_id INTEGER NOT NULL,
  room_label TEXT NOT NULL,
  status TEXT DEFAULT 'occupied',
  UNIQUE(property_id, room_label)
);

CREATE TABLE IF NOT EXISTS tenants (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  rent REAL NOT NULL DEFAULT 0,
  elec_rate REAL DEFAULT 0,
  water_type TEXT DEFAULT 'meter',
  water_rate REAL DEFAULT 0,
  contract_start TEXT,
  contract_end TEXT,
  deposit REAL DEFAULT 0,
  commission REAL DEFAULT 0,
  active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS meter_readings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_id INTEGER NOT NULL,
  billing_month TEXT NOT NULL,
  reading_date TEXT NOT NULL,
  rent_amount REAL DEFAULT 0,
  elec_prev REAL DEFAULT 0,
  elec_curr REAL DEFAULT 0,
  elec_units REAL DEFAULT 0,
  elec_amount REAL DEFAULT 0,
  water_prev REAL DEFAULT 0,
  water_curr REAL DEFAULT 0,
  water_units REAL DEFAULT 0,
  water_amount REAL DEFAULT 0,
  total_bill REAL DEFAULT 0,
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(room_id, billing_month)
);

CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tenant_id INTEGER NOT NULL,
  billing_month TEXT,
  payment_date TEXT NOT NULL,
  amount REAL NOT NULL,
  method TEXT DEFAULT 'bank_transfer',
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS expenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  property_id INTEGER,
  expense_date TEXT NOT NULL,
  category TEXT NOT NULL,
  amount REAL NOT NULL,
  description TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
