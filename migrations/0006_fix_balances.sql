-- Recalculate outstanding_balance for all tenants from billing/payment history
UPDATE tenants SET outstanding_balance = (
  COALESCE((SELECT SUM(total_bill) FROM meter_readings WHERE room_id = tenants.room_id), 0)
  - COALESCE((SELECT SUM(amount) FROM payments WHERE tenant_id = tenants.id), 0)
);
