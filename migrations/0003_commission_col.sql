-- Add commission tracking to meter_readings
ALTER TABLE meter_readings ADD COLUMN commission_applied REAL DEFAULT 0;
