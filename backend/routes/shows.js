const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Route to get shows for a movie on a specific date
router.get('/movie/:movieId/date/:date', async (req, res) => {
  try {
    const { movieId, date } = req.params;
    const query = `
      SELECT
        s.show_id,
        s.start_time,
        s.show_dimension,
        t.name AS theatre_name,
        sc.screen_name,
        sc.no_of_seats,
        sc.layout_structure
      FROM shows s
      JOIN theatre t ON s.theatre_id = t.theatre_id
      JOIN screens sc ON s.screen_no = sc.screen_no AND s.theatre_id = sc.theatre_id
      WHERE s.movie_id = ? AND s.show_date = ?
      ORDER BY t.name, s.start_time
    `;
    const [rows] = await pool.execute(query, [movieId, date]);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching shows:', error);
    res.status(500).json({ error: 'Failed to fetch shows' });
  }
});

// Route to get seats for a specific show
router.get('/seats/:show_id', async (req, res) => {
  try {
    const { show_id } = req.params;
    const query = `
      SELECT seat_name, status
      FROM Seats
      WHERE show_id = ?
    `;
    const [rows] = await pool.execute(query, [show_id]);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching seats:', error);
    res.status(500).json({ error: 'Failed to fetch seats' });
  }
});

module.exports = router;
