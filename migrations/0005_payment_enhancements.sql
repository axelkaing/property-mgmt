-- Add payment verification and proof fields
ALTER TABLE payments ADD COLUMN verified INTEGER DEFAULT 0;
ALTER TABLE payments ADD COLUMN proof_image TEXT;
