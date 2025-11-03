const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// ✅ Create booking
router.post('/', async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const {
      customerId = null,
      showId = null,
      amount = null,
      paymentMethod = null,
      seats = [],
    } = req.body;

    console.log("📥 Booking Request:", req.body);

    if (!customerId || !showId || !amount || !paymentMethod || seats.length === 0) {
      return res.status(400).json({
        error: "Missing required booking details",
        fields: { customerId, showId, amount, paymentMethod, seats }
      });
    }

    await connection.beginTransaction();

    // Insert into booking table
    const [bookingResult] = await connection.execute(
      `INSERT INTO booking (Customer_Id, show_id, Amount, Payment_method, Status)
       VALUES (?, ?, ?, ?, ?)`,
      [customerId, showId, amount, paymentMethod, "confirmed"]
    );

    const bookingId = bookingResult.insertId;

    // Fetch seat_ids from seat_name
    const seatIds = [];
    for (const seatName of seats) {
      const [seatRows] = await connection.execute(
        `SELECT seat_id FROM seats WHERE seat_name = ? AND show_id = ?`,
        [seatName, showId]
      );

      if (seatRows.length === 0) {
        throw new Error(`Seat ${seatName} not found for show ${showId}`);
      }

      seatIds.push(seatRows[0].seat_id);
    }

    // Insert into booking_seats table
    for (const seatId of seatIds) {
      await connection.execute(
        `INSERT INTO booking_seats (booking_Id, seat_id) VALUES (?, ?)`,
        [bookingId, seatId]
      );
    }

    // Mark seats as booked
    const placeholders = seatIds.map(() => "?").join(",");
    await connection.execute(
      `UPDATE seats SET status = 'unavailable' WHERE seat_id IN (${placeholders})`,
      seatIds
    );

    await connection.commit();

    res.json({
      success: true,
      message: "Booking confirmed",
      bookingId
    });

  } catch (error) {
    await connection.rollback();
    console.error("❌ Error creating booking:", error);
    res.status(500).json({
      success: false,
      error: "Failed to create booking",
      details: error.message,
    });
  } finally {
    connection.release();
  }
});

module.exports = router;
