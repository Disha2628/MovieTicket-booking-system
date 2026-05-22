# 🎬 Movie Ticket Booking System (MOVIE_MATRIX)

## Live demo - https://servermovieticket-booking-system.vercel.app

A full-stack web application for browsing movies and booking seats for showtimes. Includes a secure customer flow (login, registration, password reset via OTP, booking with QR codes) and an admin dashboard for managing movies, shows, bookings, and analytics.

> Built with **React** + **Express** + **MySQL**.

---

## ✨ Features

### Customer (User)
- Browse and search movies, filter by genre/language, view posters & trailers.
- Movie details: cast and reviews.
- Show selection by date/time.
- Interactive seat layout with availability control.
- **Atomic booking** (transaction + seat locking to prevent double booking).
- Payment flow integration (Razorpay-related backend routes).
- Booking confirmation with **QR code** embedded into the booking record.
- Booking history.
- Authentication:
  - Register / Login (JWT)
  - Forgot password via **OTP** (email logging / SMS via Twilio)
  - Reset password via OTP verification
  - Google OAuth support

### Admin
- Admin login with **JWT + role guard**.
- Protected admin APIs for:
  - Movies: add, activate/cancel (soft disable), delete
  - Shows: add and remove
  - View bookings
  - Analytics: revenue & booking stats by range

---

## 🧰 Tech Stack

- **Frontend:** React (react-router-dom), styled UI components
- **Backend:** Node.js + Express
- **Database:** MySQL (SSL enabled using `ca.pem`)
- **Auth:** JWT
- **Admin protection:** middleware checks `decoded.role === 'admin'`
- **QR codes:** `qrcode` (generated during booking)
- **OTP:** Twilio (SMS) + in-memory OTP store
- **Payments:** Razorpay routes

---

## 🚀 Setup & Run Locally

### 1) Backend

```bash
cd backend
npm install
```

Create required environment variables (see **Environment Variables** below), then start:

```bash
npm run dev
```
 

### 2) Frontend

```bash
cd frontend
npm install
npm start
```

 
## 🧠 Booking Reliability: Atomic Seat Locking

When creating a booking, the backend ensures seat correctness using a single transaction:

1. **Lock seats** by updating:
   - only seats whose `status = 'available'`
2. If not all seats could be locked, the booking fails.

This prevents double booking even under concurrent requests.

---

## 🧩 Folder Structure (Recommended)

- `frontend/` – React UI
- `backend/` – Express API + DB logic

---
 
