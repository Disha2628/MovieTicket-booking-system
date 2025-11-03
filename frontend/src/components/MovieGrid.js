import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  movieGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
    width: '98%',
    boxSizing: 'border-box',
  },
  movieCard: {
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '300px',
    marginBottom: '20px',
    background: 'transparent',
  },
  poster: {
    width: '100%',
    height: '450px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.3s ease',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    textAlign: 'center',
    margin: '10px 0 0 0',
    padding: '0 5px',
  },
};

const MovieGrid = ({ movies: propMovies, comingSoon }) => {
  const [movies, setMovies] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (propMovies) {
      setMovies(propMovies);
    } else {
      axios.get('/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Error fetching movies:', error);
        });
    }
  }, [propMovies]);

  return (
    <div style={styles.movieGrid}>
      {movies.map(movie => (
        <div
          key={movie.id}
          style={{
            ...styles.movieCard,
            transform: hoveredCard === movie.id ? 'scale(1.05)' : 'none',
            boxShadow: hoveredCard === movie.id ? '0 8px 20px rgba(255,255,255,.15)' : 'none',
          }}
          onMouseEnter={() => setHoveredCard(movie.id)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => window.location.href = `/movie/${movie.id}`}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            style={styles.poster}
          />
          <h3 style={styles.title}>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
