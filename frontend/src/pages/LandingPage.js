import React, { useEffect, useState, useContext, useRef } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
import About from '../components/About';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

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
  const [heroMovies, setHeroMovies] = useState([{id: 1, title: 'Interstellar', poster: '/Movies_posters/Interstellar_poster.jpeg', release_date: '2014-11-07', genre: 'Sci-Fi', duration: 169, rating: 8.6, trailer_url: ''}]);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center p-4 relative overflow-hidden">
      <Navbar />
      {/* Animated background elements for beauty */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-1200/20 to-pink-900/20 animate-pulse"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>
      {/* Subtle radial glow for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-gray-900/50 to-gray-950/90 pointer-events-none"></div>

     
        <div className="w-full min-h-[65vh] relative overflow-hidden rounded-3xl shadow-2xl shadow-black/50 mx-auto max-w-7xl my-5 z-10">
        <div className="flex w-full h-full overflow-x-auto scroll-smooth" ref={heroWrapperRef}>
          {heroMovies.map((movie, index) => (
            <div key={movie.id} className="relative flex-shrink-0 w-full min-h-[65vh] flex items-center justify-start">
              <div className="absolute inset-0 -z-20">
                <img src={`/banner${index + 1}.png`} alt="bg" className="w-full h-full object-cover brightness-80 blur-xs" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
              </div>
              <div className="mt-6 ml-12 flex gap-16 items-center justify-start flex-wrap max-w-5xl">
                <div className="relative">
                  <img src={movie.poster} alt={movie.title} className="w-80 h-[28rem] rounded-2xl shadow-2xl shadow-blue-900/50 transition-transform duration-300 hover:scale-105" />
                </div>
                <div className="max-w-md text-white">
                  {/* Title with a subtle white/gray gradient */}
                  <h1 className="text-6xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent inline-block">{movie.title}</h1>
                  <div className="flex gap-3 mt-3 mb-6 text-xl text-gray-300">
                    <span>{new Date(movie.release_date).getFullYear()}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                  </div>
                  <p className="text-lg text-gray-400">{movie.duration} min</p>
                  <p className="text-lg text-gray-400">Languages: English, Hindi, Tamil, Telugu</p>
                  <p className="text-lg text-gray-400">IMDB: {Math.floor(movie.rating)}/10</p>
                  <div className="mt-6 flex gap-4">
                    <button className="bg-transparent border-2 border-gray-500 py-3 px-6 rounded-full text-gray-300 text-lg cursor-pointer transition-all duration-300 hover:bg-gray-700/50 hover:border-white">Coming Soon...</button>
                    {/* Primary button using a professional blue gradient */}
                    <button
                      className="bg-gradient-to-r from-blue-700 to-indigo-800 py-3 px-6 rounded-full text-white text-lg cursor-pointer border-none transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-700/40"
                      onClick={() => openTrailerModal(movie.trailer_url)}>
                        Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter bar with professional dark styling */}
      <div className="flex justify-center items-center gap-16 mx-auto max-w-6xl my-5 flex-wrap relative z-20 bg-gray-900/80 backdrop-blur-md rounded-full p-3 border border-gray-700 shadow-xl shadow-black/50">
        <div className="relative cursor-pointer text-gray-300 text-lg flex items-center group" onClick={() => toggleDropdown('allMovies')}>
          <span className="transition-all duration-300 group-hover:text-blue-400">{genreFilter || 'Current Movies'}</span>
          <span className="ml-2 text-sm text-gray-500 group-hover:text-blue-400">▼</span>
          {dropdownOpen.allMovies && (
            <div className="absolute top-full mt-2 left-0 bg-gray-800 border border-blue-600/50 rounded-lg min-w-48 z-30 flex flex-col overflow-hidden shadow-2xl">
              <div className="px-4 py-2 text-gray-300 cursor-pointer transition-colors duration-200 hover:bg-blue-600/20 hover:text-white" onClick={() => selectOption('allMovies', 'All Movies')}>Current Movies</div>
              {genres.map(genre => (
                <div key={genre} className="px-4 py-2 text-gray-300 cursor-pointer transition-colors duration-200 hover:bg-blue-600/20 hover:text-white" onClick={() => selectOption('allMovies', genre)}>{genre}</div>
              ))}
            </div>
          )}
        </div>

        <div className="relative cursor-pointer text-gray-300 text-lg flex items-center group" onClick={() => toggleDropdown('byCategory')}>
          <span className="transition-all duration-300 group-hover:text-blue-400">{languageFilter || 'by Language'}</span>
          <span className="ml-2 text-sm text-gray-500 group-hover:text-blue-400">▼</span>
          {dropdownOpen.byCategory && (
            <div className="absolute top-full mt-2 left-0 bg-gray-800 border border-blue-600/50 rounded-lg min-w-48 z-30 flex flex-col overflow-hidden shadow-2xl">
              <div className="px-4 py-2 text-gray-300 cursor-pointer transition-colors duration-200 hover:bg-blue-600/20 hover:text-white" onClick={() => selectOption('byCategory', 'by Language')}>All Languages</div>
              {languages.map(language => (
                <div key={language} className="px-4 py-2 text-gray-300 cursor-pointer transition-colors duration-200 hover:bg-blue-600/20 hover:text-white" onClick={() => selectOption('byCategory', language)}>{language}</div>
              ))}
            </div>
          )}
        </div>
        <div className="cursor-pointer text-gray-300 text-lg flex items-center group" onClick={() => setComingSoon(!comingSoon)}>
          <span className="transition-all duration-300 group-hover:text-blue-400">{comingSoon ? 'All Movies' : 'Coming Soon'}</span>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-700 rounded-full bg-gray-800 text-white outline-none w-48 text-lg focus:border-blue-500 transition-colors duration-300 placeholder-gray-500"
          />
          <span className="absolute right-4 text-gray-500 text-lg">🔍</span>
        </div>
      </div>

      {/* Updated heading color to a deep blue for professionalism */}
      <h2 className="text-center text-white-400 text-4xl my-8 font-extrabold tracking-wide drop-shadow-lg">{comingSoon ? 'Coming Soon...' : 'Recommended Movies...'}</h2>

        <main className="w-full p-5">
          <MovieGrid movies={movies} comingSoon={comingSoon} />
        </main>

        <About />
        <Footer />
      
      {/* Trailer Modal */}
      {trailerModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 backdrop-blur-md" onClick={closeTrailerModal}>
          <div className="relative w-11/12 max-w-4xl h-3/4 max-h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-700/50" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 bg-gray-800/70 text-white border-none rounded-full w-10 h-10 cursor-pointer text-xl z-10 transition-all duration-300 hover:bg-blue-600" onClick={closeTrailerModal}>×</button>
            <iframe
              width="100%"
              height="100%"
              src={currentTrailerUrl ? `https://www.youtube.com/embed/${currentTrailerUrl.split('v=')[1]}` : ''}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;