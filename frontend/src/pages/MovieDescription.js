import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './MovieDescription.css';

// Dummy data
const castData = [
  { name: "Ayushmann Khurrana", role: "Alok", img: "/actor_pics/actor1.webp" },
  { name: "Rashmika Mandanna", role: "Tadaka", img: "/actor_pics/actor2.jpeg" },
  { name: "Paresh Rawal", role: "Ram Bajaj Goyal", img: "/actor_pics/actor3.jpeg" },
  { name: "Nawazuddin Siddiqui", role: "Yakshasan", img: "/actor_pics/actor4.jpeg" },
  { name: "Faisal Malik", role: "Yadav", img: "/actor_pics/actor5.jpeg" }
];

const reviews = [
  {
    user: "Mahima",
    rating: 10,
    review: "The visuals and emotions blend perfectly.",
    daysAgo: 13
  },
  {
    user: "User",
    rating: 10,
    review: "Amazing story and superb direction. Loved it!",
    daysAgo: 13
  }
];

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

// MovieHeroSection Component
const MovieHeroSection = ({ movie, isComingSoon, openTrailerModal, navigate, user }) => (
  <div className="movie-hero-section">
    <img
      src={movie.poster}
      alt={movie.title}
      className="movie-poster"
    />
    <div className="movie-info">
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-description">{movie.description}</p>
      <div className="movie-details">
        <div className="detail-item">
          <span className="detail-label">{isComingSoon ? 'Trailer Rating:' : 'Rating:'}</span>
          <span className="rating-stars">⭐ {movie.rating.toFixed(1)}</span>
        </div>
        <div className="detail-item"><span className="detail-label">Genre:</span> {movie.genre}</div>
        <div className="detail-item"><span className="detail-label">Language:</span> {movie.language}</div>
        <div className="detail-item"><span className="detail-label">Release Date:</span> {movie.release_date}</div>
        <div className="detail-item"><span className="detail-label">Duration:</span> {movie.duration} minutes</div>
      </div>
      <div className="movie-buttons">
        <button
          className="btn-primary"
          onClick={() => openTrailerModal(movie.trailer_url)}
        >
          Watch Trailer
        </button>
        {!isComingSoon && (
          <button
            className="btn-outline"
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
const CastSection = () => (
  <div className="cast-section">
    <h2 className="section-title">Cast</h2>
    <div className="cast-grid">
      {castData.map((actor, index) => (
        <div key={index} className="cast-card">
          <img src={actor.img} alt={actor.name} className="cast-image" />
          <h3 className="cast-name">{actor.name}</h3>
          <p className="cast-role">as {actor.role}</p>
        </div>
      ))}
    </div>
  </div>
);

// ReviewsSection Component
const ReviewsSection = () => (
  <div className="reviews-section">
    <h2 className="section-title">Top Reviews</h2>
    <div className="reviews-list">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <img src={`https://via.placeholder.com/40`} alt={review.user} className="review-avatar" />
            <div className="review-user-info">
              <h3 className="review-user">{review.user}</h3>
              <div className="review-rating">
                <span className="rating-stars">⭐ {review.rating}/10</span>
                <span className="review-date">{review.daysAgo} days ago</span>
              </div>
            </div>
          </div>
          <p className="review-text">{review.review}</p>
        </div>
      ))}
    </div>
  </div>
);

const MovieDescription = ({ movieId }) => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState('');

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
    return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"><p>{error}</p></div>;
  }

  if (!movie) {
    return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"><p>Loading...</p></div>;
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
    // Embedded mode: no background, just the hero section
    return (
      <div className="movie-description-container">
        <MovieHeroSection movie={movie} isComingSoon={isComingSoon} openTrailerModal={openTrailerModal} navigate={navigate} user={user} />
        <TrailerModal isOpen={trailerModalOpen} onClose={closeTrailerModal} trailerUrl={currentTrailerUrl} />
      </div>
    );
  } else {
    // Standalone mode: full page with background, cast and reviews
    return (
      <div className="movie-description-page">
        <div className="movie-description-container">
          <MovieHeroSection movie={movie} isComingSoon={isComingSoon} openTrailerModal={openTrailerModal} navigate={navigate} user={user} />
          <CastSection />
          <ReviewsSection />
        </div>
        <TrailerModal isOpen={trailerModalOpen} onClose={closeTrailerModal} trailerUrl={currentTrailerUrl} />
      </div>
    );
  }
};

export default MovieDescription;
