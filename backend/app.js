const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');
const customersRouter = require('./routes/customers');
const showsRouter = require('./routes/shows');
const paymentsRouter = require('./routes/payments');
const bookingsRouter = require('./routes/bookings');
const seatsRouter = require('./routes/seats');

const app = express();

// Session middleware for Passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

// Serve static files from frontend/public/Movies_posters
app.use('/Movies_posters', express.static('frontend/public/Movies_posters'));

// Register routes
app.use('/api/movies', moviesRouter);
app.use('/api/shows', showsRouter);
app.use('/api', authRouter);
app.use('/auth', authRouter); // Add this for Google OAuth routes
app.use('/api/customers', customersRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/seats', seatsRouter);

module.exports = app;
