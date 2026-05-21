const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../config/database');
const { generateToken } = require('../config/jwt');
const adminAuth = require('../middleware/adminAuth');

// -------------------------
// Admin login
// -------------------------
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'email and password are required' });
    }

    const normalizedEmail = String(email).toLowerCase();

    const [rows] = await pool.execute(
      'SELECT admin_id, email, password_hash FROM admin WHERE email = ? AND is_active = 1',
      [normalizedEmail]
    );

    if (!rows || rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const admin = rows[0];
    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken({
      id: admin.admin_id,
      email: admin.email,
      role: 'admin'
    });

    res.json({ message: 'Admin login successful', admin: { id: admin.admin_id, email: admin.email }, token });
  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ error: 'Admin login failed' });
  }
});

// -------------------------
// Helpers
// -------------------------
const requireAdmin = adminAuth;

// -------------------------
// Movie admin APIs
// -------------------------
router.get('/movies', requireAdmin, async (req, res) => {
  try {
    const { search } = req.query;
    let query = 'SELECT Movie_Id AS id, Title AS title, Rating AS rating, poster_url AS poster, Release_date AS release_date, trailer_url AS trailer_url, status AS status FROM movies WHERE 1=1';
    const params = [];

    if (search) {
      query += ' AND Title LIKE ?';
      params.push(`%${search}%`);
    }

    const [rows] = await pool.execute(query, params);
    res.json(rows);
  } catch (err) {
    console.error('Admin movies list error:', err);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

router.post('/movies', requireAdmin, async (req, res) => {
  try {
    const {
      Title,
      Genre,
      Language,
      Duration,
      Trailer_URL,
      Rating,
      Description,
      Release_date,
      Poster_url,
      cast, // optional array: [{ name, actor_pic, role_name }] or [{ Actor_Id, Role_Name }]
    } = req.body;


    // Validate required fields (based on existing movies table columns)
    if (!Title || !Genre || !Language || !Rating || !Release_date) {
      return res.status(400).json({
        error: 'Missing required movie fields',
        required: ['Title', 'Genre', 'Language', 'Rating', 'Release_date']
      });
    }

    // Insert into movies table
    const [result] = await pool.execute(
      `INSERT INTO movies (Title, Genre, Language, Duration, Trailer_URL, Rating, Description, Release_date, Poster_url, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
      [
        Title,
        Genre,
        Language,
        Duration ?? null,
        Trailer_URL ?? null,
        Rating,
        Description ?? null,
        Release_date,
        Poster_url ?? null
      ]
    );

    // Optional cast handling (actors + movie_actors)
    // Expected formats in req.body.cast:
    // 1) [{ name, actor_pic, role_name }, ...]
    // 2) [{ Actor_Id, Role_Name }, ...]
    if (Array.isArray(cast) && cast.length > 0) {
      const movieId = result.insertId;

      for (const entry of cast) {
        if (!entry) continue;

        // Case 2: by Actor_Id
        if (entry.Actor_Id) {
          const actorId = entry.Actor_Id;
          const roleName = entry.Role_Name ?? null;

          await pool.execute(
            `INSERT INTO movie_actors (movie_Id, Actor_Id, Role_Name)
             VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE Role_Name = VALUES(Role_Name)`,
            [movieId, actorId, roleName]
          );
          continue;
        }

        // Case 1: by name (+ optional pic + role)
        const name = entry.name;
        const actorPic = entry.actor_pic ?? null;
        const roleName = entry.role_name ?? entry.Role_Name ?? null;

        if (!name) continue;

        // Upsert actor by name
        const [actorRows] = await pool.execute(
          `SELECT Actor_Id FROM actors WHERE Name = ? LIMIT 1`,
          [name]
        );

        let actorId;
        if (actorRows.length > 0) {
          actorId = actorRows[0].Actor_Id;
          // Optionally update actor_pic if provided
          if (actorPic) {
            await pool.execute(
              `UPDATE actors SET actor_pic = ? WHERE Actor_Id = ?`,
              [actorPic, actorId]
            );
          }
        } else {
          const [actorResult] = await pool.execute(
            `INSERT INTO actors (Name, actor_pic, Created_At) VALUES (?, ?, NOW())`,
            [name, actorPic]
          );
          actorId = actorResult.insertId;
        }

        await pool.execute(
          `INSERT INTO movie_actors (movie_Id, Actor_Id, Role_Name)
           VALUES (?, ?, ?)
           ON DUPLICATE KEY UPDATE Role_Name = VALUES(Role_Name)`,
          [movieId, actorId, roleName]
        );
      }
    }

    res.status(201).json({ message: 'Movie added', movieId: result.insertId });

  } catch (err) {
    console.error('Admin add movie error:', err);
    res.status(500).json({ error: 'Failed to add movie' });
  }
});

router.post('/movies/:id/cancel', requireAdmin, async (req, res) => {
  try {
    const movieId = req.params.id;
    await pool.execute('UPDATE movies SET status = 0 WHERE Movie_Id = ?', [movieId]);

    res.json({ message: 'Movie cancelled (soft disabled)' });
  } catch (err) {
    console.error('Admin cancel movie error:', err);
    res.status(500).json({ error: 'Failed to cancel movie' });
  }
});

// Activate a cancelled movie (status 0 -> 1)
router.post('/movies/:id/activate', requireAdmin, async (req, res) => {
  try {
    const movieId = req.params.id;
    await pool.execute('UPDATE movies SET status = 1 WHERE Movie_Id = ?', [movieId]);

    res.json({ message: 'Movie activated (soft enabled)' });
  } catch (err) {
    console.error('Admin activate movie error:', err);
    res.status(500).json({ error: 'Failed to activate movie' });
  }
});

// Delete a movie row entirely
router.delete('/movies/:id', requireAdmin, async (req, res) => {
  try {
    const movieId = req.params.id;

    // FK-safe delete order (no ON DELETE CASCADE):
    // Delete bookings for all shows of this movie, then delete seats, then delete shows, then movie.
    await pool.execute(
      `DELETE bs
       FROM booking_seats bs
       JOIN booking b ON bs.booking_Id = b.booking_Id
       JOIN shows s ON b.show_id = s.Show_Id
       WHERE s.Movie_Id = ?`,
      [movieId]
    );

    await pool.execute(
      `DELETE b
       FROM booking b
       JOIN shows s ON b.show_id = s.Show_Id
       WHERE s.Movie_Id = ?`,
      [movieId]
    );

    await pool.execute(
      `DELETE seat
       FROM seats seat
       JOIN shows s ON seat.show_id = s.Show_Id
       WHERE s.Movie_Id = ?`,
      [movieId]
    );

    await pool.execute('DELETE FROM shows WHERE Movie_Id = ?', [movieId]);
    await pool.execute('DELETE FROM movies WHERE Movie_Id = ?', [movieId]);

    res.json({ message: 'Movie deleted' });
  } catch (err) {
    console.error('Admin delete movie error:', err);
    res.status(500).json({ error: 'Failed to delete movie' });
  }
});

// -------------------------
// Admin show APIs
// -------------------------
router.get('/shows', requireAdmin, async (req, res) => {
  try {
    const { movieId } = req.query;
    let query = `SELECT Show_Id AS show_id, Movie_Id AS movie_id, Theatre_Id AS theatre_id, Screen_no AS screen_no, Show_date AS show_date, Start_time AS start_time, Show_dimension AS show_dimension, available_seats AS available_seats FROM shows WHERE 1=1`;
    const params = [];
    if (movieId) {
      query += ' AND Movie_Id = ?';
      params.push(movieId);
    }
    const [rows] = await pool.execute(query, params);
    res.json(rows);
  } catch (err) {
    console.error('Admin shows list error:', err);
    res.status(500).json({ error: 'Failed to fetch shows' });
  }
});

router.post('/shows', requireAdmin, async (req, res) => {
  try {
    const {
      Movie_Id,
      Theatre_Id,
      Screen_no,
      Show_date,
      Start_time,
      Show_dimension,
    } = req.body;

    if (!Movie_Id || !Theatre_Id || !Screen_no || !Show_date || !Start_time || !Show_dimension) {
      return res.status(400).json({
        error: 'Missing required show fields',
        required: ['Movie_Id', 'Theatre_Id', 'Screen_no', 'Show_date', 'Start_time', 'Show_dimension']
      });
    }

    // Create show row
    const [result] = await pool.execute(
      `INSERT INTO shows (Movie_Id, Theatre_Id, Screen_no, Show_date, Start_time, Show_dimension, available_seats)
       VALUES (?, ?, ?, ?, ?, ?, 0)`,
      [Movie_Id, Theatre_Id, Screen_no, Show_date, Start_time, Show_dimension]
    );

    res.status(201).json({ message: 'Show added', showId: result.insertId });
  } catch (err) {
    console.error('Admin add show error:', err);
    res.status(500).json({ error: 'Failed to add show' });
  }
});

router.post('/shows/:id/remove', requireAdmin, async (req, res) => {
  try {
    const showId = req.params.id;

    // FK-safe delete order (no ON DELETE CASCADE):
    // booking -> booking_seats -> seats etc. depend on shows via booking.show_id.
    // We delete bookings for this show first, then seats, then the show.

    await pool.execute(
      `DELETE bs
       FROM booking_seats bs
       JOIN booking b ON bs.booking_Id = b.booking_Id
       WHERE b.show_id = ?`,
      [showId]
    );

    await pool.execute(
      'DELETE FROM booking WHERE show_id = ?',
      [showId]
    );

    // Seats are linked to shows directly
    await pool.execute(
      'DELETE FROM seats WHERE show_id = ?',
      [showId]
    );

    // Finally delete the show
    await pool.execute('DELETE FROM shows WHERE Show_Id = ?', [showId]);

    res.json({ message: 'Show removed' });
  } catch (err) {
    console.error('Admin remove show error:', err);
    res.status(500).json({ error: 'Failed to remove show', details: err.message });
  }
});


// -------------------------
// Admin booking view
// -------------------------
router.get('/bookings', requireAdmin, async (req, res) => {
  try {
    const { movieId } = req.query;

    let query = `
      SELECT
        b.Booking_Id AS id,
        m.Title AS movieName,
        t.Name AS theatre,
        t.Address_City AS city,
        sc.screen_name AS screenName,
        s.Show_date AS date,
        s.Start_time AS time,
        b.Amount AS totalAmount,
        b.Payment_method AS paymentMethod,
        b.Status AS status,
        b.booking_qr AS booking_qr,
        GROUP_CONCAT(seat.seat_name SEPARATOR ', ') AS seats,
        c.Customer_Id AS customerId,
        c.F_Name AS customerFirstName,
        c.L_Name AS customerLastName
      FROM booking b
      JOIN shows s ON b.show_id = s.Show_Id
      JOIN movies m ON s.Movie_Id = m.Movie_Id
      JOIN theatre t ON s.Theatre_Id = t.Theatre_Id
      JOIN screens sc ON s.screen_no = sc.screen_no AND s.theatre_id = sc.theatre_id
      JOIN customer c ON b.Customer_Id = c.customer_Id
      JOIN booking_seats bs ON b.Booking_Id = bs.booking_Id
      JOIN seats seat ON bs.seat_id = seat.seat_id
      WHERE 1=1
    `;

    const params = [];
    if (movieId) {
      query += ' AND m.Movie_Id = ?';
      params.push(movieId);
    }

    query += `
      GROUP BY
        b.Booking_Id, m.Title, t.Name, t.Address_City, sc.screen_name, s.Show_date, s.Start_time,
        b.Amount, b.Payment_method, b.Status, b.booking_qr, c.Customer_Id, c.F_Name, c.L_Name
      ORDER BY b.Booking_Id DESC
    `;

    const [rows] = await pool.execute(query, params);
    res.json(rows);
  } catch (err) {
    console.error('Admin bookings error:', err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// -------------------------
// Admin analytics
// -------------------------
router.get('/analytics', requireAdmin, async (req, res) => {
  try {
    const range = req.query.range; // 2d | 7d | 30d
    let days = 2;
    if (range === '7d') days = 7;
    if (range === '30d') days = 30;
    if (range === '1y') days = 365;


    const query = `
      SELECT
        m.Movie_Id AS movie_id,
        m.Title AS movieTitle,
        COUNT(b.Booking_Id) AS bookingCount,
        SUM(b.Amount) AS revenue
      FROM booking b
      JOIN shows s ON b.show_id = s.Show_Id
      JOIN movies m ON s.Movie_Id = m.Movie_Id
      WHERE b.Status = 'confirmed'
        AND b.payment_time >= (NOW() - INTERVAL ? DAY)
      GROUP BY m.Movie_Id, m.Title
      ORDER BY revenue DESC
    `;

    const [rows] = await pool.execute(query, [days]);

    res.json({ range, stats: rows });
  } catch (err) {
    console.error('Admin analytics error:', err);
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

module.exports = router;

