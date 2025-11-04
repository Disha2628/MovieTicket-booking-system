import React, { useEffect, useState, useContext, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import About from '../components/About';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import './LandingPage.css';
import './Homepage.css';

// Trailer Modal Component
const TrailerModal = ({ isOpen, onClose, trailerUrl }) => {
  if (!isOpen) return null;

  // Function to convert YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url; // Return original if not YouTube
  };

  const embedUrl = getEmbedUrl(trailerUrl);

  return (
    <div className="trailer-modal-overlay" onClick={onClose}>
      <div className="trailer-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const [movies, setMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  const [comingSoon, setComingSoon] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState({ allMovies: false, byCategory: false });
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);
  const heroWrapperRef = useRef(null);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState('');

  useEffect(() => {
    fetchMovies();
    fetchFilters();
    fetchHeroMovies();
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [genreFilter, languageFilter, comingSoon, searchQuery]);

  const fetchMovies = async () => {
    try {
      let url = '/api/movies';
      const params = [];
      if (genreFilter) params.push(`genre=${encodeURIComponent(genreFilter)}`);
      if (languageFilter) params.push(`language=${encodeURIComponent(languageFilter)}`);

      if (comingSoon) params.push(`comingSoon=true`);
      if (searchQuery) params.push(`search=${encodeURIComponent(searchQuery)}`);
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

  const fetchHeroMovies = async () => {
    try {
      const titles = ['Interstellar'];
      const fetchedMovies = [];
      for (const title of titles) {
        const response = await axios.get(`/api/movies/by-title/${encodeURIComponent(title)}`);
        const movieId = response.data.id;
        const movieResponse = await axios.get(`/api/movies/${movieId}`);
        fetchedMovies.push(movieResponse.data);
      }
      setHeroMovies(fetchedMovies);
    } catch (error) {
      console.error('Error fetching hero movies:', error);
    }
  };

  const resetFilters = () => {
    setGenreFilter('');
    setLanguageFilter('');
    setComingSoon(false);
    setSearchQuery('');
  };

  const toggleDropdown = (key) => {
    setDropdownOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const selectOption = (key, value) => {
    if (key === 'allMovies') setGenreFilter(value === 'All Movies' ? '' : value);
    else if (key === 'byCategory') setLanguageFilter(value === 'by Category' ? '' : value);
    setDropdownOpen(prev => ({ ...prev, [key]: false }));
  };

  const openTrailerModal = (trailerUrl) => {
    setCurrentTrailerUrl(trailerUrl);
    setTrailerModalOpen(true);
  };

  const closeTrailerModal = () => {
    setTrailerModalOpen(false);
    setCurrentTrailerUrl('');
  };



  return (
    <div className="landing-page-container">
      <div className="hero">
        <div className="hero-container" ref={heroWrapperRef}>
          {heroMovies.map((movie, index) => (
            <div key={movie.id} className="hero-slide">
              <div className="hero-bg">
                <img src={`/banner${index + 1}.png`} alt="bg" />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <div className="poster">
                  <img src={movie.poster} alt={movie.title} />
                </div>
                <div className="details">
                  <h1>{movie.title}</h1>
                  <div className="meta">
                    <span>{new Date(movie.release_date).getFullYear()}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                  </div>
                  <p>{movie.duration} min</p>
                  <p>Languages: English , Hindi , Tamil , Telugu</p>
                  <p>IMDB: {Math.floor(movie.rating)}/10</p>
                  <div className="actions">
                    <button className="outline-btn">Coming Soon...</button>
                    <button className="primary-btn" onClick={() => openTrailerModal(movie.trailer_url)}>Watch Trailer</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="filter-bar">
        <div className="filter" onClick={() => toggleDropdown('allMovies')}>
          <span className="dropdown-text">{genreFilter || 'Current Movies'}</span>
          {dropdownOpen.allMovies && (
            <div className="dropdown-options">
              <div onClick={() => selectOption('allMovies', 'All Movies')}>Current Movies</div>
              {genres.map(genre => (
                <div key={genre} onClick={() => selectOption('allMovies', genre)}>{genre}</div>
              ))}
            </div>
          )}
        </div>

        <div className="filter" onClick={() => toggleDropdown('byCategory')}>
          <span className="dropdown-text">{languageFilter || 'by Language'}</span>
          {dropdownOpen.byCategory && (
            <div className="dropdown-options">
              <div onClick={() => selectOption('byCategory', 'by Language')}>All Languages</div>
              {languages.map(language => (
                <div key={language} onClick={() => selectOption('byCategory', language)}>{language}</div>
              ))}
            </div>
          )}
        </div>
        <div className="filter" onClick={() => setComingSoon(!comingSoon)}>
          <span className="dropdown-text">{comingSoon ? 'All Movies' : 'Coming Soon'}</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <h2 style={{
        textAlign: 'center',
        color: 'var(--text-primary)',
        fontSize: '2rem',
        margin: '20px 0',
        textShadow: '0 0 15px rgba(38, 12, 103, 0.8), 0 0 30px rgba(153, 38, 182, 0.5)',
        fontWeight: 'bold'
      }}>{comingSoon ? 'Coming Soon...' : 'Recommended Movies...'}</h2>
      <main className="main-content" style={{ width: '100%', padding: '20px' }}>
  <MovieGrid movies={movies} comingSoon={comingSoon} />
</main>
      <About />
      <Footer />
      <TrailerModal isOpen={trailerModalOpen} onClose={closeTrailerModal} trailerUrl={currentTrailerUrl} />
    </div>
  );
};

export default LandingPage;