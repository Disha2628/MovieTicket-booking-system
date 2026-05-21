-- Admin dashboard schema additions
-- 1) admin table for admin login

CREATE TABLE IF NOT EXISTS admin (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2) Add movie status column for cancel/activate (soft disable)
-- If your `movies` table already has a status column, skip this.

ALTER TABLE movies
  ADD COLUMN status TINYINT(1) NOT NULL DEFAULT 1;


