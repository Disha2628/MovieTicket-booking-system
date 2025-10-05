# Server Refactoring Tasks

## Completed Tasks
- [x] Create config/database.js for database configuration and connection pool
- [x] Create routes/movies.js for movie-related routes (get all movies, get movie by ID)
- [x] Create routes/auth.js for authentication routes (register, login)
- [x] Create routes/customers.js for customer profile and booking routes (get profile, update profile, get booking history)
- [x] Create app.js for main app setup, middleware, and route registrations
- [x] Update server.js to simplify to only handle server startup by importing and using the new app.js

## Followup Steps
- [ ] Test the refactored server to ensure all routes work correctly
- [ ] Update any import paths if necessary
- [ ] Verify that the database connections and queries function as expected
