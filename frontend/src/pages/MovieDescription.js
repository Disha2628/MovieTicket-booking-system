import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import MovieGrid from '../components/MovieGrid';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#1e293b',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  },
  pageContainerBefore: {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at top, #8b0000 0%, #1a0000 80%)',
   // background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '50px',
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
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
  },
  embeddedContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    gap: '20px',
    position: 'relative',
    zIndex: 1,
  },
  poster: {
    width: '300px',
    borderRadius: '12px',
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#ffd700',
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '25px',
    textShadow: '0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)',
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

const MovieDescription = ({ movieId }) => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let movieData;
        if (movieId) {
          // movieId is the ID (embedded mode)
          const response = await axios.get(`/api/movies/${movieId}`);
          movieData = response.data;
        } else if (id) {
          // id is the movie ID (standalone mode, route /movie/:id)
          const response = await axios.get(`/api/movies/${id}`);
          movieData = response.data;
        }
        setMovie(movieData);
      } catch (err) {
        setError('Failed to fetch movie details.');
        console.error(err);
      }
    };
    if (movieId || id) {
      fetchMovie();
    }
  }, [movieId, id]);

  if (error) {
    return <div style={movieId ? styles.embeddedContainer : styles.container}><p>{error}</p></div>;
  }

  if (!movie) {
    return <div style={movieId ? styles.embeddedContainer : styles.container}><p>Loading...</p></div>;
  }

  const isComingSoon = movie.id >= 9 && movie.id <= 25;
  const containerStyle = movieId ? styles.embeddedContainer : styles.container;

  if (movieId) {
    // Embedded mode: no background, just the content
    return (
      <div style={containerStyle}>
        <img src={movie.poster} alt={movie.title} style={styles.poster} />
        <div style={styles.content}>
          <h1 style={styles.title}>{movie.title}</h1>
          <p style={styles.description}>{movie.description}</p>
          <div style={styles.infoRow}><span style={styles.label}>{isComingSoon ? 'Trailer Rating:' : 'Rating:'}</span> {movie.rating.toFixed(1)}</div>
          <div style={styles.infoRow}><span style={styles.label}>Genre:</span> {movie.genre}</div>
          <div style={styles.infoRow}><span style={styles.label}>Language:</span> {movie.language}</div>
          <div style={styles.infoRow}><span style={styles.label}>Release Date:</span> {movie.release_date}</div>
          <div style={styles.infoRow}><span style={styles.label}>Duration:</span> {movie.duration} minutes</div>
        </div>
      </div>
    );
  } else {
    // Standalone mode: full page with background
    return (
      <div style={styles.pageContainer}>
        <div style={styles.pageContainerBefore}></div>
        <div style={styles.container}>
          <img src={movie.poster} alt={movie.title} style={styles.poster} />
          <div style={styles.content}>
            <h1 style={styles.title}>{movie.title}</h1>
            <p style={styles.description}>{movie.description}</p>
            <div style={styles.infoRow}><span style={styles.label}>{isComingSoon ? 'Trailer Rating:' : 'Rating:'}</span> {movie.rating.toFixed(1)}</div>
            <div style={styles.infoRow}><span style={styles.label}>Genre:</span> {movie.genre}</div>
            <div style={styles.infoRow}><span style={styles.label}>Language:</span> {movie.language}</div>
            <div style={styles.infoRow}><span style={styles.label}>Release Date:</span> {movie.release_date}</div>
            <div style={styles.infoRow}><span style={styles.label}>Duration:</span> {movie.duration} minutes</div>
            {!isComingSoon && (
              <button
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: 'transparent',
                  border: '2px solid #ffd700',
                  borderRadius: '50px',
                  color: '#ffd700',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                  marginTop: '20px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'none';
                  e.target.style.backgroundColor = 'transparent';
                }}
                onClick={() => {
                  if (user) {
                    navigate(`/book/${movie.title}`, {
                      state: { movieName: movie.title }  // ✅ pass movie title through location state
                    });
                  } else {
                    navigate('/login');
                  }
                }}
              >
                Book Tickets Now
              </button>
            )}
          </div>
        </div>
        <MovieGrid />
      </div>
      
    );
  }
};

export default MovieDescription;
