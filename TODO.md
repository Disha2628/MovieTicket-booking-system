# DBIS_Project - TODO (Admin Dashboard)

## Admin Dashboard (Backend)
- [x] Create SQL DDL/migration: add `admin` table (admin login credentials)
- [ ] Add DB support for movie enable/disable (cancel movies): add `movies.status` (or `is_active`) column if missing
- [x] Implement admin auth middleware (`adminAuth`) to guard admin routes

- [ ] Implement admin login endpoint: `POST /api/admin/login`
- [ ] Implement admin movie APIs:
  - [ ] Add movie endpoint (all required fields)
  - [ ] Cancel/disable movie endpoint (soft delete via status flag)
  - [ ] (Optional) Reactivate movie endpoint
  - [ ] Admin movie list/search endpoint for dashboard UI
- [ ] Implement admin show APIs:
  - [ ] Add show endpoint (movie_id, theatre_id, screen_no, show_date, start_time, dimension, layout if needed)
  - [ ] Remove show endpoint
  - [ ] Admin show list by movie/theatre for UI
- [ ] Implement admin bookings endpoint:
  - [ ] `GET /api/admin/bookings` (show booking rows and join seat names)
- [ ] Implement analytics endpoints:
  - [ ] `GET /api/admin/analytics?range=2d` (last 2 days)
  - [ ] `GET /api/admin/analytics?range=7d` (last 1 week)
  - [ ] `GET /api/admin/analytics?range=30d` (last 1 month)
  - [ ] Include per-movie stats (bookings count, total revenue/amount)

## Admin Dashboard (Database)
- [ ] Add/verify indexes and constraints needed for joins and admin lookups

## Admin Dashboard (Frontend)
- [ ] Add admin state management (store `adminToken` + `adminUser`) 
- [ ] Add routes:
  - [ ] `/admin/login`
  - [ ] `/admin/dashboard`
- [ ] Add guarded visibility:
  - [ ] Only show Admin button/link in Navbar when admin is logged in
  - [ ] Redirect to `/admin/login` if admin tries to access dashboard without token
- [ ] Build admin pages:
  - [ ] Admin Login Page
  - [ ] Admin Dashboard landing
  - [ ] Admin Movies management (Add + Cancel)
  - [ ] Admin Shows management (Add + Remove)
  - [ ] Admin Bookings view
  - [ ] Admin Analytics view (2d/7d/30d filters)

## Integration / Testing
- [ ] Seed admin user in DB
- [ ] Manual E2E test:
  - [ ] Admin login
  - [ ] Add movie → appears in user movie listing
  - [ ] Cancel movie → disappears (or hidden) in user movie listing
  - [ ] Add show → user can select show and seats
  - [ ] View bookings + analytics in admin dashboard

