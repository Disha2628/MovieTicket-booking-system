# Admin Dashboard - Setup Notes

This project added admin dashboard backend support.

## 1) Create admin table + movies status column
Run the SQL in `backend/admin_schema.sql` against your MySQL database.

Example:
- Copy file contents
- Execute in your DB client

## 2) Create an admin user
Insert one active admin record into `admin` table:
- email: your admin email
- password_hash: bcrypt hash of your password

Tip: Use a small script or Node REPL to generate bcrypt hash.

## 3) Login
- Admin login endpoint: `POST /api/admin/login`
  - body: `{ "email": "...", "password": "..." }`

## 4) Admin endpoints (JWT)
All admin endpoints are mounted under `/api/admin/*` and require:
- `Authorization: Bearer <token>`
- token payload must include `role: admin`

## 5) Admin dashboard frontend
Frontend routes:
- `/admin/login`
- `/admin/dashboard/*`

