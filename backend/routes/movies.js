const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Route to get all movies (filtered by genre/language if needed)
router.get('/', async (req, res) => {
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

module.exports = router;
