import React, { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MovieGrid from './MovieGrid';
import Footer from './Footer';
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
      <Navbar user={user} />
      <h1 className="landing-page-title">Movie-Matrix</h1>
      <div className="filter-bar" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', gap: '20px', backgroundColor: '#1f2937', color: 'white' }}>
        <button onClick={resetFilters} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
          Back / Reset
        </button>
        <select value={genreFilter} onChange={e => setGenreFilter(e.target.value)} style={{ padding: '8px', borderRadius: '8px' }}>
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <select value={languageFilter} onChange={e => setLanguageFilter(e.target.value)} style={{ padding: '8px', borderRadius: '8px' }}>
          <option value="">All Languages</option>
          {languages.map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
      </div>
      <main className="main-content" style={{ width: '100%', padding: '20px' }}>
  <MovieGrid movies={movies} />
</main>
      <Footer />
    </div>
  );
};

export default LandingPage;