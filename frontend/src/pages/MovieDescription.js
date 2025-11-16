import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';



// Trailer Modal Component
const TrailerModal = ({ isOpen, onClose, trailerUrl }) => {
  if (!isOpen) return null;

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(trailerUrl);

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="relative w-11/12 max-w-4xl h-3/4 bg-black rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 bg-black/50 text-white border-none text-2xl cursor-pointer z-10 px-3 py-1 rounded-full hover:bg-black/80 transition-colors"
          onClick={onClose}
        >
          ×
        </button>
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

// MovieHeroSection Component
const MovieHeroSection = ({ movie, isComingSoon, openTrailerModal, navigate, user }) => (
  <div className="flex flex-col md:flex-row items-start gap-8 p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl mb-12 relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-1000/20 to-pink-900/20 animate-pulse"></div>
    <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>

    <img
      src={movie.poster}
      alt={movie.title}
      className="w-72 sm:w-80 h-[420px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 self-center md:self-start relative z-10"
    />

    <div className="flex-1 flex flex-col gap-6 relative z-10">
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-poppins">
        {movie.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-200">{movie.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-lg">{isComingSoon ? 'Trailer Rating:' : 'Rating:'}</span>
          <span className="text-yellow-400 text-lg font-semibold">⭐ {movie.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-lg">Genre:</span>
          <span className="text-gray-200 text-lg">{movie.genre}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-lg">Language:</span>
          <span className="text-gray-200 text-lg">{movie.language}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-lg">Release Date:</span>
          <span className="text-gray-200 text-lg">{movie.release_date}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-white text-lg">Duration:</span>
          <span className="text-gray-200 text-lg">{movie.duration} minutes</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="flex-1 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white text-xl font-bold font-poppins cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
          onClick={() => openTrailerModal(movie.trailer_url)}
        >
          Watch Trailer
        </button>

        {!isComingSoon && (
          <button
            className="flex-1 py-4 bg-transparent border-2 border-white rounded-full text-white text-xl font-bold font-poppins cursor-pointer hover:bg-white/15 transition-all duration-300 hover:scale-105"
            onClick={() => {
              if (user) {
                navigate(`/book/${movie.title}`, { state: { movieName: movie.title } });
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
  </div>
);

// CastSection Component
const CastSection = ({ cast }) => (
  <div className="mt-12">
    <h2 className="text-4xl font-bold text-white font-poppins mb-8">Cast</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {cast.map((actor, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 border border-white/10 shadow-lg hover:shadow-cyan-500/20"
        >
          <img
            src={actor.img}
            alt={actor.name}
            className="w-40 h-40 object-cover mx-auto mb-4 border-2 border-white/20"
          />
          <h3 className="text-lg font-semibold text-white mb-1">{actor.name}</h3>
          <p className="text-sm text-gray-400">as {actor.role}</p>
        </div>
      ))}
    </div>
  </div>
);

// ReviewsSection Component
const ReviewsSection = ({ reviews }) => (
  <div className="mt-12">
    <h2 className="text-4xl font-bold text-white font-poppins mb-8">Top Reviews</h2>
    <div className="space-y-6">
      {reviews.length > 0 ? (
        reviews.map((review) => {
          const reviewedDate = new Date(review.reviewedAt);
          const now = new Date();
          const diffTime = Math.abs(now - reviewedDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return (
            <div
              key={review.id}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg"
            >
              <div className="flex items-center mb-4 gap-3">
                <span className="text-yellow-400 text-lg font-semibold">⭐ {review.rating}/5</span>
                <span className="text-sm text-gray-400">{diffDays} days ago</span>
              </div>
              <p className="text-gray-200 leading-relaxed">{review.review}</p>
            </div>
          );
        })
      ) : (
        <p className="text-gray-400 text-lg">No reviews available.</p>
      )}
    </div>
  </div>
);

const MovieDescription = ({ movieId }) => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/movies/${movieId || id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to fetch movie details.');
        console.error(err);
      }
    };

    const fetchCast = async () => {
      try {
        const castResponse = await axios.get(`/api/movies/${movieId || id}/cast`);
        setCast(castResponse.data);
      } catch (err) {
        console.error('Failed to fetch cast:', err);
        setCast([]);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await axios.get(`/api/movies/${movieId || id}/reviews`);
        setReviews(reviewsResponse.data);
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
        setReviews([]);
      }
    };

    if (movieId || id) {
      fetchMovie();
      fetchCast();
      fetchReviews();
    }
  }, [movieId, id]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <p>{error}</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  const isComingSoon = movie.id >= 9 && movie.id <= 25;

  const openTrailerModal = (trailerUrl) => {
    setCurrentTrailerUrl(trailerUrl);
    setTrailerModalOpen(true);
  };

  const closeTrailerModal = () => {
    setTrailerModalOpen(false);
    setCurrentTrailerUrl('');
  };

  if (movieId) {
    return (
      <div className="movie-description-container">
        <MovieHeroSection
          movie={movie}
          isComingSoon={isComingSoon}
          openTrailerModal={openTrailerModal}
          navigate={navigate}
          user={user}
        />
        <TrailerModal isOpen={trailerModalOpen} onClose={closeTrailerModal} trailerUrl={currentTrailerUrl} />
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <MovieHeroSection
            movie={movie}
            isComingSoon={isComingSoon}
            openTrailerModal={openTrailerModal}
            navigate={navigate}
            user={user}
          />
          <CastSection cast={cast} />
          <ReviewsSection reviews={reviews} />
        </div>
        <TrailerModal isOpen={trailerModalOpen} onClose={closeTrailerModal} trailerUrl={currentTrailerUrl} />
      </div>
    );
  }
};

export default MovieDescription;
