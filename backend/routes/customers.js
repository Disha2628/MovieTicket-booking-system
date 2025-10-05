const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Get customer profile
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT Customer_Id AS id, F_Name AS first_name, L_Name AS last_name, Email AS email, Phone_No AS phn_no FROM customer WHERE Customer_Id = ?', [req.params.id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).json({ error: 'Failed to fetch customer' });
  }
});

// Update customer profile
router.put('/:id', async (req, res) => {
  try {
    const { first_name, last_name, phn_no } = req.body;
    if (!first_name || !last_name || !phn_no) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    await pool.execute('UPDATE customer SET F_Name = ?, L_Name = ?, Phone_No = ? WHERE Customer_Id = ?', [first_name, last_name, phn_no, req.params.id]);
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Failed to update customer' });
  }
});

// Get customer booking history
router.get('/:customerId/bookings', async (req, res) => {
  try {
    // Assuming there's a bookings table with customer_id, movie_id, booking_date, show_time, etc.
    // Adjust query based on actual table structure
    const [rows] = await pool.execute(`
      SELECT b.Booking_Id AS id, m.Title AS movie, b.Booking_Date AS date, b.Show_Time AS time
      FROM bookings b
      JOIN movies m ON b.Movie_Id = m.Movie_Id
      WHERE b.Customer_Id = ?
      ORDER BY b.Booking_Date DESC
    `, [req.params.customerId]);

    res.json(rows);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;
