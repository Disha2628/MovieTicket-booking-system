const express = require('express');
const cors = require('cors');

const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');
const customersRouter = require('./routes/customers');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from frontend/public/Movies_posters
app.use('/Movies_posters', express.static('frontend/public/Movies_posters'));

// Register routes
app.use('/api/movies', moviesRouter);
app.use('/api', authRouter);
app.use('/api/customer', customersRouter);

module.exports = app;
