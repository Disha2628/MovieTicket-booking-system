import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import './LandingPage.css';
import './Homepage.css';

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const [movies, setMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchFilters();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [genreFilter, languageFilter]);

  const fetchMovies = async () => {
    try {
      let url = '/api/movies';
      const params = [];
      if (genreFilter) params.push(`genre=${encodeURIComponent(genreFilter)}`);
      if (languageFilter) params.push(`language=${encodeURIComponent(languageFilter)}`);
      if (params.length) url += '?' + params.join('&');
      const response = await axios.get(url);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchFilters = async () => {
    try {
      // Fetch distinct genres and languages from backend or hardcode if not available
      // For now, hardcoding example values
      setGenres(['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']);
      setLanguages(['English', 'Hindi', 'Spanish', 'French']);
    } catch (error) {
      console.error('Error fetching filters:', error);
    }
  };

  const resetFilters = () => {
    setGenreFilter('');
    setLanguageFilter('');
  };

  return (
    <div className="landing-page-container">
      <h1 className="landing-page-title">Movie-Matrix</h1>
      <div className="hero-section">
        <div className="hero-left">
          <img src="/banner.jpg" alt="Movie Banner" />
        </div>
        <div className="hero-right">
          <h2>Book Your Movie Magic Instantly!</h2>
          <p>Fast, fun, and secure online movie ticket booking.</p>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
      <div className="filter-bar">
        <button onClick={resetFilters} style={{
          backgroundColor: 'transparent',
          color: '#ffffff',
          border: '2px solid #ffffff',
          padding: '8px 16px',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontSize: '1rem'
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
        }}>
          Back / Reset
        </button>
        <select value={genreFilter} onChange={e => setGenreFilter(e.target.value)} style={{
          padding: '8px',
          borderRadius: '8px',
          backgroundColor: 'rgba(12, 18, 32, 0.8)',
          color: '#ffffff',
          border: 'none',
          outline: 'none',
          fontSize: '1rem'
        }}>
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <select value={languageFilter} onChange={e => setLanguageFilter(e.target.value)} style={{
          padding: '8px',
          borderRadius: '8px',
          backgroundColor: 'rgba(12, 18, 32, 0.8)',
          color: '#ffffff',
          border: 'none',
          outline: 'none',
          fontSize: '1rem'
        }}>
          <option value="">All Languages</option>
          {languages.map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
      </div>
      <h2 style={{
        textAlign: 'center',
        color: '#ffd700',
        fontSize: '2rem',
        margin: '20px 0',
        textShadow: '0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)',
        fontWeight: 'bold'
      }}>Recommended Movies</h2>
      <main className="main-content" style={{ width: '100%', padding: '20px' }}>
  <MovieGrid movies={movies} />
</main>
      <Footer />
    </div>
  );
};

export default LandingPage;