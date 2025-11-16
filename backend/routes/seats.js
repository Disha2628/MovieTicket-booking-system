const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Get seat prices for given seat names and show_id
router.get('/prices', async (req, res) => {
  try {
    const { show_id, seat_names } = req.query;

    if (!show_id || !seat_names) {
      return res.status(400).json({
        error: "Missing required parameters: show_id and seat_names"
      });
    }

    const seatNamesArray = seat_names.split(',');

    // Query to get seat_price for each seat_name
    const placeholders = seatNamesArray.map(() => "?").join(",");
    const [rows] = await pool.execute(
      `SELECT seat_name, seat_price FROM seats WHERE show_id = ? AND seat_name IN (${placeholders})`,
      [show_id, ...seatNamesArray]
    );

    // Create a map of seat_name to price
    const prices = {};
    rows.forEach(row => {
      prices[row.seat_name] = parseFloat(row.seat_price);
    });

    res.json({
      success: true,
      prices
    });

  } catch (error) {
    console.error("❌ Error fetching seat prices:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch seat prices",
      details: error.message,
    });
  }
});

module.exports = router;
