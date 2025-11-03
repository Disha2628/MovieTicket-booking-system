const express = require('express');
const cors = require('cors');

const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');
const customersRouter = require('./routes/customers');
const showsRouter = require('./routes/shows');
const paymentsRouter = require('./routes/payments');
const bookingsRouter = require('./routes/bookings');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from frontend/public/Movies_posters
app.use('/Movies_posters', express.static('frontend/public/Movies_posters'));

// Register routes
app.use('/api/movies', moviesRouter);
app.use('/api/shows', showsRouter);
app.use('/api', authRouter);
app.use('/api/customers', customersRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/bookings', bookingsRouter);

module.exports = app;
