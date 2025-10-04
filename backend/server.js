// Required imports and app initialization
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from frontend/public/Movies_posters
app.use('/Movies_posters', express.static('frontend/public/Movies_posters'));

// MySQL configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Lotusgirl@123',
  database: 'minor_project'
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Route to get all movies (filtered by genre/language if needed)
app.get('/api/movies', async (req, res) => {
  try {
    const { genre, language } = req.query;
    let query = `
      SELECT 
        Movie_Id AS id, 
        Title AS title, 
        Rating AS rating,
        poster_url AS poster
      FROM movies
      WHERE Movie_Id > 5
    `;
    const params = [];

    if (genre) {
      query += ' AND (Genre LIKE ? OR Genre LIKE ? OR Genre LIKE ?)';
      params.push(`${genre}`, `${genre},%`, `%,${genre}`);
    }

    if (language) {
      query += ' AND (Language LIKE ? OR Language LIKE ? OR Language LIKE ?)';
      params.push(`${language}`, `${language},%`, `%,${language}`);
    }

    const [rows] = await pool.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// Route to get a single movie by ID
app.get('/api/movies/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        Movie_Id AS id,
        Title AS title,
        Rating AS rating,
        Description AS description,
        Genre AS genre,
        Language AS language,
        Release_date AS release_date,
        Duration AS duration,
        poster_url AS poster
      FROM movies
      WHERE Movie_Id = ?
    `, [req.params.id]);

    if (rows.length > 0) {
      const movie = rows[0];
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
});

// ✅ Register customer
app.post('/api/register', async (req, res) => {
  try {
    const { first_name, last_name, email, phn_no, password } = req.body;
    if (!first_name || !last_name || !email || !phn_no || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check for existing email
    const [existing] = await pool.execute('SELECT * FROM customer WHERE Email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const query = `
      INSERT INTO customer (F_Name, L_Name, Email, Phone_No, Password, Created_at)
      VALUES (?, ?, ?, ?, ?, NOW())
    `;
    const params = [first_name, last_name, email, phn_no, hashedPassword];
    await pool.execute(query, params);

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering customer:', error);
    res.status(500).json({ error: 'Failed to register customer' });
  }
});

// ✅ Login customer
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const [rows] = await pool.execute('SELECT * FROM customer WHERE Email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.Password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({
      message: 'Login successful',
      user: {
        id: user.Customer_Id,
        first_name: user.F_Name,
        last_name: user.L_Name,
        email: user.Email
      }
    });
  } catch (error) {
    console.error('Error logging in customer:', error);
    res.status(500).json({ error: 'Failed to login customer' });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
