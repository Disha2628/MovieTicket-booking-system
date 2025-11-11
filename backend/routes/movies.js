const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Route to get all movies (filtered by genre/language/search/sort/comingSoon)
router.get('/', async (req, res) => {
  try {
    const { genre, language, search, sort, comingSoon } = req.query;
    let query = `
      SELECT
        Movie_Id AS id,
        Title AS title,
        Rating AS rating,
        poster_url AS poster,
        Release_date AS release_date,
        trailer_url AS trailer_url
      FROM movies
      WHERE Movie_Id BETWEEN ? AND ?
    `;
    const params = [];

    // Determine movie ID range based on comingSoon
    if (comingSoon === 'true') {
      params.push(9, 25); // Coming soon: IDs 9-25
    } else {
      params.push(1, 8); // All movies: IDs 1-8
    }

    if (search) {
      query += ' AND Title LIKE ?';
      params.push(`%${search}%`);
    }

    if (genre) {
      query += ' AND (Genre LIKE ? OR Genre LIKE ? OR Genre LIKE ?)';
      params.push(`${genre}`, `${genre},%`, `%,${genre}`);
    }

    if (language) {
      query += ' AND (Language LIKE ? OR Language LIKE ? OR Language LIKE ?)';
      params.push(`${language}`, `${language},%`, `%,${language}`);
    }

    if (sort === 'Newest') {
      query += ' ORDER BY Release_date DESC';
    } else if (sort === 'Oldest') {
      query += ' ORDER BY Release_date ASC';
    }

    const [rows] = await pool.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// Route to get a single movie by ID
router.get('/:id', async (req, res) => {
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
        poster_url AS poster,
        trailer_url AS trailer_url
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

// Route to get movie by title
router.get('/by-title/:title', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT Movie_Id AS id
      FROM movies
      WHERE Title = ?
    `, [req.params.title]);

    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    console.error('Error fetching movie by title:', error);
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
});

// Route to get cast for a movie by ID
router.get('/:id/cast', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT
        a.Name AS name,
        ma.Role_Name AS role,
        a.actor_pic AS img
      FROM movie_actors ma
      JOIN actors a ON ma.Actor_Id = a.Actor_Id
      WHERE ma.movie_Id = ?
    `, [req.params.id]);

    res.json(rows);
  } catch (error) {
    console.error('Error fetching cast:', error);
    res.status(500).json({ error: 'Failed to fetch cast' });
  }
});

// Route to get reviews for a movie by ID
router.get('/:id/reviews', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT
        Review_Id AS id,
        Rating AS rating,
        Comment AS review,
        Reviewed_At AS reviewedAt
      FROM reviews
      WHERE movie_Id = ?
      ORDER BY Reviewed_At DESC
    `, [req.params.id]);

    res.json(rows);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

module.exports = router;
