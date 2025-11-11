import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center w-full max-w-7xl mx-auto">
      {movies.map(movie => (
        <div
          key={movie.id}
          className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer w-full max-w-sm bg-transparent hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
            hoveredCard === movie.id ? 'shadow-2xl shadow-white/15' : ''
          }`}
          onMouseEnter={() => setHoveredCard(movie.id)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => window.location.href = `/movie/${movie.id}`}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[26rem] object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <div className="text-center">
                <h3 className="text-white text-lg font-semibold drop-shadow-lg">{movie.title}</h3>
                <p className="text-gray-300 text-sm">{new Date(movie.release_date).getFullYear()}</p>
              </div>
            </div>
          </div>
 
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
