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
const adminRouter = require('./routes/admin');

const app = express();
app.set('trust proxy', 1);


// Session middleware for Passport
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
}// Set to true in production with HTTPS
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://YOUR-VERCEL-URL.vercel.app'
  ],
  credentials: true
}));

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
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Movie Booking API Running');
});

module.exports = app;

