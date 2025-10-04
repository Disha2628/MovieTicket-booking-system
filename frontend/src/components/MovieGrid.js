import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  movieGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '10px',
    justifyItems: 'center',
    width: '98%',
    boxSizing: 'border-box',
  },
  movieCard: {
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderRadius: '12px',
    border: '2px solid hsl(47, 80.90%, 61.00%)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '260px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '420px',   // ✅ add this (fix consistent height)
  },
  
  movieCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.7)',
  },
  poster: {
    width: '100%',
    height: '280px',
    objectFit: 'fill',
    borderBottom: '2px solid #f6e05e',
    display: 'block',
  },
  movieCardContent: {
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '120px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '0px',
    color: 'white',
  },
  bookButton: {
    background: 'linear-gradient(to right, #f56565, #ed64a6)',
    color: 'white',
    fontWeight: '600',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    width: '100%',
    alignSelf: 'center',
  },
  bookButtonHover: {
    transform: 'scale(1.05)',
  }
};

const MovieGrid = ({ movies: propMovies }) => {
  const [movies, setMovies] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

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
          style={styles.movieCard}
          onMouseEnter={() => setHoveredCard(movie.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img src={movie.poster} alt={movie.title} style={styles.poster} />
          <div style={styles.movieCardContent}>
            <h3 style={styles.title}>{movie.title}</h3>
            
            <button
              style={hoveredButton === movie.id ? {...styles.bookButton, ...styles.bookButtonHover} : styles.bookButton}
              onMouseEnter={() => setHoveredButton(movie.id)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => window.location.href = `/movie/${movie.id}`}
            >
              Book Tickets Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;