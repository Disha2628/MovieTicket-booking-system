import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderRadius: '12px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    gap: '20px',
  },
  poster: {
    width: '300px',
    borderRadius: '12px',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '25px',
  },
  description: {
    fontSize: '1.4rem',
    marginBottom: '30px',
  },
  infoRow: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: '900',
    marginRight: '8px',
  }
};

const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to fetch movie details.');
        console.error(err);
      }
    };
    fetchMovie();
  }, [id]);

  if (error) {
    return <div style={styles.container}><p>{error}</p></div>;
  }

  if (!movie) {
    return <div style={styles.container}><p>Loading...</p></div>;
  }

  return (
    <div style={styles.container}>
      <img src={movie.poster} alt={movie.title} style={styles.poster} />
      <div style={styles.content}>
        <h1 style={styles.title}>{movie.title}</h1>
        <p style={styles.description}>{movie.description}</p>
        <div style={styles.infoRow}><span style={styles.label}>Rating:</span> {movie.rating.toFixed(1)}</div>
        <div style={styles.infoRow}><span style={styles.label}>Genre:</span> {movie.genre}</div>
        <div style={styles.infoRow}><span style={styles.label}>Language:</span> {movie.language}</div>
        <div style={styles.infoRow}><span style={styles.label}>Release Date:</span> {movie.release_date}</div>
        <div style={styles.infoRow}><span style={styles.label}>Duration:</span> {movie.duration} minutes</div>
        <button
          style={{
            background: 'linear-gradient(to right, #f56565, #ed64a6)',
            color: 'white',
            fontWeight: '600',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
            fontSize: '1rem',
          }}
          onClick={() => window.location.href = `/book/${movie.id}`}
        >
          Book Tickets Now
        </button>
      </div>
    </div>
  );
};

export default MovieDescription;
