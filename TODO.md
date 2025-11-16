# TODO: Update PaymentPage with DB Prices and Donation Checkbox

- [x] Create `backend/routes/seats.js` with GET `/api/seats/prices` endpoint (takes show_id, seat_names, returns prices).
- [x] Update `backend/app.js` to include seats route.
- [x] Update `frontend/src/pages/PaymentPage.js`:
  - [x] Add donation checkbox state (default false).
  - [x] Fetch seat prices from API.
  - [x] Calculate totalCost from fetched prices.
  - [x] Pass donation state to OrderSummary.
- [x] Update `frontend/src/components/OrderSummary.js`:
  - [x] Add donation checkbox.
  - [x] Update total to include donation only if checked.
- [ ] Test API endpoint and payment flow.
