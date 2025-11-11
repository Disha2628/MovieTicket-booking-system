# TODO: Connect Movie Reviews to Database

## Backend Changes
- [x] Add a new GET route in `backend/routes/movies.js` to fetch reviews for a specific movie by movie_Id from the 'reviews' table.

## Frontend Changes
- [x] Update `frontend/src/pages/MovieDescription.js` to fetch reviews from the new API endpoint in the useEffect hook.
- [x] Modify the `ReviewsSection` component to accept reviews as props and display them without the user field, using Reviewed_At for the date.
- [x] Remove the dummy reviews data and ensure reviews are fetched dynamically.

## Testing and Verification
- [ ] Test the new API endpoint to ensure it returns reviews correctly.
- [ ] Verify that reviews are displayed on the MovieDescription page without user information.
