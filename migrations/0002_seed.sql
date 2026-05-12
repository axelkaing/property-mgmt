-- Seed: Properties
-- Room IDs: 2FWS=1-3, 3FPK=4-6, 4FKS=7-11, 5FPS=12, CarP=13

INSERT OR IGNORE INTO properties (id, code, address, bank_name, bank_account) VALUES
(1, '2FWS', '2/F, 161 Woosung St, Kln', 'HSBC', '005-3-112991'),
(2, '3FPK', '2/F, 53 Parkes St, Kei Cheong Bldg', 'HSBC', '441-0-035465'),
(3, '4FKS', '4/F, 26 Jordan Rd, Kam Shing Bldg', 'HSBC', '005-9-0124073'),
(4, '5FPS', '5/F, 55 Pilkem St, Shing Hing House', 'HSBC', '062-9-074139'),
(5, 'CarP', 'Car Park No.99, Belvedere Garden, Tsuen Wan', 'Hang Seng', '024-254-7-055760');

-- Seed: Rooms
INSERT OR IGNORE INTO rooms (id, property_id, room_label, status) VALUES
(1,  1, 'A',    'occupied'),
(2,  1, 'B',    'occupied'),
(3,  1, 'C',    'occupied'),
(4,  2, 'A',    'occupied'),
(5,  2, 'B',    'occupied'),
(6,  2, 'C',    'occupied'),
(7,  3, 'A',    'occupied'),
(8,  3, 'B',    'occupied'),
(9,  3, 'C',    'vacant'),
(10, 3, 'D',    'occupied'),
(11, 3, 'E',    'occupied'),
(12, 4, 'Flat', 'occupied'),
(13, 5, 'P99',  'occupied');

-- Seed: Tenants
-- water_type: 'meter' = per-unit rate, 'fixed' = flat monthly, 'none' = no water billing
INSERT OR IGNORE INTO tenants (room_id, name, rent, elec_rate, water_type, water_rate, contract_start, contract_end, deposit, commission, active) VALUES
-- 2FWS (Property 1)
(1,  'Ms Rai Radha',              6500,  1.5, 'meter', 12,  '2026-05-01', '2028-04-30', 13000, 50, 1),
(2,  'Mr Eric Cheng Lun',         5400,  1.5, 'meter', 12,  '2024-11-01', '2026-10-31',  4500,  0, 1),
(3,  'Mr Subba Ramesh',           6000,  1.6, 'meter', 12,  '2024-12-01', '2026-11-30', 12000,  0, 1),
-- 3FPK (Property 2)
(4,  'Mr Gurung Ben Bahadur',     5000,  1.5, 'meter', 12,  '2026-01-01', '2027-12-31',  6000, 50, 1),
(5,  'Ms Aale Luma',              5500,  1.5, 'meter', 12,  '2026-01-01', '2027-12-31', 11000,  0, 1),
(6,  'Mr Gurung Chandra Prakash', 4850,  1.5, 'meter', 12,  '2024-10-01', '2026-09-30',  5200,  0, 1),
-- 4FKS (Property 3) — water is fixed monthly amount
(7,  'Mr Gurung Ben Bahadur',     3100,  1.5, 'fixed', 100, '2026-01-01', '2027-12-31',     0,  0, 1),
(8,  'Ms Gurung Soniya',          3800,  1.5, 'fixed', 120, '2026-01-01', '2027-12-31',     0,  0, 1),
-- Room 9 (P3C) is vacant — no tenant row
(10, 'Gurung Alina',              3300,  1.6, 'fixed', 110, '2025-08-14', '2027-08-13',     0,  0, 1),
(11, 'Gurung Ganga',              4200,  1.5, 'fixed', 150, '2025-12-01', '2027-11-30',     0,  0, 1),
-- 5FPS (Property 4) — no utilities
(12, 'Thapa Magar Lila',         10600,  0,   'none',   0,  '2024-12-15', '2026-12-14', 21200,  0, 1),
-- CarP (Property 5) — no utilities
(13, 'Mr Lee Sin Hung',           3500,  0,   'none',   0,  '2024-12-01', '2026-11-30',  3350,  0, 1);
