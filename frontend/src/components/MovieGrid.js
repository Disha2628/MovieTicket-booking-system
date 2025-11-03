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
    backgroundColor: 'rgba(12, 18, 32, 0.9)',
    borderRadius: '24px',
    border: '2px solid #ffd700',
    boxShadow: `
      inset 0 4px 8px rgba(0,0,0,0.3),
      0 0 20px rgba(255, 215, 0, 0.3),
      0 0 40px rgba(255, 215, 0, 0.2),
      0 0 60px rgba(255, 215, 0, 0.1) inset,
      0 0 80px rgba(255, 215, 0, 0.1) inset
    `,
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '260px',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '450px',   // ✅ add this (fix consistent height)
  },
  
  movieCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.7)',
  },
  poster: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderBottom: '2px solid #ffd700',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
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
    backgroundColor: 'transparent',
    color: '#ffd700',
    fontWeight: '600',
    padding: '10px 20px',
    borderRadius: '50px',
    border: '2px solid #ffd700',
    cursor: 'pointer',
    transition: 'all 0.3s',
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
              onMouseEnter={(e) => {
                setHoveredButton(movie.id);
                e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                setHoveredButton(null);
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'none';
                e.target.style.backgroundColor = 'transparent';
              }}
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