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

const authenticateToken = require('../middleware/auth');

// Get customer booking history
router.get('/:id/bookings',async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT
    b.Booking_Id AS id,
    m.Title AS movieName,
    t.Name AS theatre,
    t.Address_City AS city,
    sc.screen_name AS screenName,
    s.Show_Date AS date,
    s.Start_time AS time,
    GROUP_CONCAT(seat.seat_name SEPARATOR ', ') AS seats,
    b.Amount AS totalAmount
    FROM booking b
    JOIN shows s ON b.show_id = s.Show_Id
    JOIN movies m ON s.Movie_Id = m.Movie_Id
    JOIN theatre t ON s.Theatre_Id = t.Theatre_Id
    JOIN screens sc ON s.screen_no = sc.screen_no AND s.theatre_id = sc.theatre_id
    JOIN booking_seats bs ON b.Booking_Id = bs.booking_Id
    JOIN seats seat ON bs.seat_id = seat.seat_id
    WHERE b.Customer_Id = ?
    GROUP BY b.Booking_Id, m.Title, t.Name, t.Address_City, sc.screen_name, s.Show_Date, s.Start_Time, b.Amount
    ORDER BY b.Booking_Id DESC;
    `, [req.params.id]);

    res.json(rows);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;