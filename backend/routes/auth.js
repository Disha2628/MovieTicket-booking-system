const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../config/database');

// Register customer
router.post('/register', async (req, res) => {
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

// Login customer
router.post('/login', async (req, res) => {
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

module.exports = router;
