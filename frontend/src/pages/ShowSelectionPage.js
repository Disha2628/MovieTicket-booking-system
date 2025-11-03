import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import DateSelector from '../components/DateSelector';
import TheatreShows from '../components/TheatreShows';
import MovieDescription from './MovieDescription';
import SeatSelection from '../components/SeatSelection';
import axios from 'axios';

/* ---------- fallback sample data ---------- */
const rawData = [
  {
    theatre: 'INOX: C-21 Mall',
    shows: [
      { time: '08:15 AM', status: 'available' },
      { time: '10:15 AM', status: 'available', label: 'INSIGNIA' },
      { time: '11:15 AM', status: 'available' },
      { time: '01:15 PM', status: 'available', label: 'INSIGNIA' },
      { time: '02:15 PM', status: 'available' },
      { time: '02:55 PM', status: 'available' },
      { time: '04:15 PM', status: 'available', label: 'INSIGNIA' },
      { time: '05:15 PM', status: 'available' },
      { time: '07:15 PM', status: 'available', label: 'INSIGNIA' },
      { time: '08:15 PM', status: 'available' },
      { time: '10:15 PM', status: 'available', label: 'INSIGNIA' },
      { time: '11:15 PM', status: 'available' },
    ],
  },
  {
    theatre: 'PVR: Treasure Island Mall, Indore',
    shows: [
      { time: '09:20 AM', status: 'available', label: 'KOTAK LUXE' },
      { time: '10:15 AM', status: 'available' },
      { time: '11:15 AM', status: 'available' },
      { time: '12:20 PM', status: 'fast_filling', label: 'KOTAK LUXE' },
      { time: '01:15 PM', status: 'available' },
      { time: '02:15 PM', status: 'available' },
      { time: '04:15 PM', status: 'available' },
      { time: '05:15 PM', status: 'available' },
      { time: '07:15 PM', status: 'available' },
      { time: '08:15 PM', status: 'available' },
      { time: '10:15 PM', status: 'available' },
      { time: '11:15 PM', status: 'available' },
    ],
  },
  {
    theatre: 'Velocity III: Miraj Cinemas, Indore',
    shows: [
      { time: '09:00 AM', status: 'available' },
      { time: '11:45 AM', status: 'available' },
      { time: '02:30 PM', status: 'available' },
      { time: '05:15 PM', status: 'available' },
      { time: '08:00 PM', status: 'available' },
      { time: '10:45 PM', status: 'available' },
    ],
  },
  {
    theatre: 'INOX: Phoenix Citadel Mall, Indore',
    shows: [
      { time: '09:00 AM', status: 'available', label: 'INSIGNIA' },
      { time: '10:00 AM', status: 'available' },
      { time: '12:00 PM', status: 'available', label: 'INSIGNIA' },
      { time: '01:00 PM', status: 'available' },
      { time: '03:00 PM', status: 'available', label: 'INSIGNIA' },
      { time: '04:00 PM', status: 'available' },
      { time: '06:00 PM', status: 'available', label: 'INSIGNIA' },
      { time: '07:00 PM', status: 'available' },
      { time: '09:00 PM', status: 'available', label: 'INSIGNIA' },
      { time: '10:00 PM', status: 'available' },
    ],
  },
];
/* --------------------------------------------------------------- */

const ShowSelectionPage = () => {
  const location = useLocation();
  const { movieName } = useParams();
  const movieNameFromState = location.state?.movieName;
  const finalMovieName = movieNameFromState || movieName;

  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSeatType, setSelectedSeatType] = useState(null);
  const [selectedSeatCount, setSelectedSeatCount] = useState(1);
  const [movieId, setMovieId] = useState(null);
  const [showsData, setShowsData] = useState(rawData);
  const [loading, setLoading] = useState(false);

  // inject global styles once (safe - will mount/unmount correctly)
  useEffect(() => {
    const styles = `
      @keyframes glow {
        from {
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5);
        }
        to {
          text-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.8);
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // memoize days so identity doesn't change on every render
  const days = useMemo(() => {
    return [
      {
        label: 'SAT',
        date: '28 Oct',
        fullDate: new Date(2025, 9, 28), // Oct 28, 2025
      },
      {
        label: 'SUN',
        date: '29 Oct',
        fullDate: new Date(2025, 9, 29), // Oct 29, 2025
      },
      {
        label: 'MON',
        date: '30 Oct',
        fullDate: new Date(2025, 9, 30), // Oct 30, 2025
      },
      {
        label: 'TUE',
        date: '31 Oct',
        fullDate: new Date(2025, 9, 31), // Oct 31, 2025
      },
      {
        label: 'WED',
        date: '01 Nov',
        fullDate: new Date(2025, 10, 1), // Nov 1, 2025
      },
      {
        label: 'THU',
        date: '02 Nov',
        fullDate: new Date(2025, 10, 2), // Nov 2, 2025
      },
      {
        label: 'FRI',
        date: '03 Nov',
        fullDate: new Date(2025, 10, 3), // Nov 3, 2025
      },
    ];
  }, []);

  // fetch movie id by title (if your API returns different field, adjust accordingly)
  useEffect(() => {
    if (!finalMovieName) return;

    let cancelled = false;
    const fetchMovieId = async () => {
      try {
        const res = await axios.get(`/api/movies/by-title/${encodeURIComponent(finalMovieName)}`);
        if (!cancelled) {
          // adapt to your API response shape: I assume { id: ... } like earlier
          setMovieId(res.data.id ?? res.data.movie_id ?? null);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Error fetching movie ID:', err);
        }
      }
    };

    fetchMovieId();
    return () => { cancelled = true; };
  }, [finalMovieName]);

  // fetch shows for selected movie + date
  useEffect(() => {
    if (!movieId || selectedDateIndex === null) return;

    const controller = new AbortController();
    let mounted = true;

    const fetchShows = async () => {
      setLoading(true);
      try {
        const fullDate = days[selectedDateIndex].fullDate;
        const selectedDate = `${fullDate.getFullYear()}-${String(fullDate.getMonth() + 1).padStart(2, '0')}-${String(fullDate.getDate()).padStart(2, '0')}`;
        console.log(selectedDate);
        const res = await axios.get(`/api/shows/movie/${movieId}/date/${selectedDate}`, {
          signal: controller.signal
        });

        if (!mounted) return;

        const grouped = groupShowsByTheatre(res.data);
        setShowsData(grouped.length > 0 ? grouped : rawData);
      } catch (err) {
        if (axios.isCancel && axios.isCancel(err)) {
          // cancelled — ignore
        } else if (err.name === 'CanceledError' || err.name === 'AbortError') {
          // fetch aborted — ignore
        } else {
          console.error('Error fetching shows:', err);
          setShowsData(rawData);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchShows();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [movieId, selectedDateIndex, days]); // days is memoized, safe to include (optional)

  const groupShowsByTheatre = (shows) => {
    const grouped = {};
    (shows || []).forEach(show => {
      const theatreName = show.theatre_name || show.theatre || 'Unknown Theatre';
      if (!grouped[theatreName]) {
        grouped[theatreName] = [];
      }
      grouped[theatreName].push({
        time: formatTime(show.start_time || show.time || ''),
        status: 'available', // backend can provide actual status later
        show_id: show.show_id || show.id || null,
        screen_name: show.screen_name || show.screen || '',
        show_dimension: show.show_dimension || '',
        layout_structure: show.layout_structure || null,
        no_of_seats: show.no_of_seats || null
      });
    });

    return Object.keys(grouped).map(theatre => ({
      theatre,
      shows: grouped[theatre]
    }));
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    // handle 'HH:MM:SS' or 'HH:MM'
    const parts = timeString.split(':');
    if (parts.length < 2) return timeString;
    const hour = Number(parts[0]);
    const minute = parts[1].slice(0,2);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minute} ${ampm}`;
  };

  const seatTypes = [
    { type: 'Royale Recliners', price: 420 },
    { type: 'Royal', price: 200 },
    { type: 'Club', price: 190 },
    { type: 'Executive', price: 180 },
  ];

  const handleSelectShow = (theatre, show) => {
    setSelectedShow({ theatre, show });
    setSelectedSeatType(null);
    setSelectedSeatCount(1);
    setTimeout(() => {
      const el = document.getElementById('seat-selection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (!selectedShow || !selectedSeatType || !selectedSeatCount) {
      alert('Please select show, seat type, and number of seats before proceeding.');
      return;
    }
    const selectedDate = days[selectedDateIndex]?.fullDate || null;
    const selectedShowWithDate = {
      ...selectedShow,
      show: {
        ...selectedShow.show,
        fullDate: selectedDate,
      },
    };
    navigate('/seat-layout', {
      state: {
        selectedShow: selectedShowWithDate,
        selectedSeatType,
        selectedSeatCount,
        movieName: finalMovieName,
      },
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #8b0000 0%, #1a0000 80%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Faint outer vignette */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        backgroundColor: 'rgba(12, 18, 32, 0.9)',
        borderRadius: '24px',
        padding: '40px 30px',
        boxShadow: `
          inset 0 4px 8px rgba(0,0,0,0.3),
          0 0 20px rgba(255, 215, 0, 0.3),
          0 0 40px rgba(255, 215, 0, 0.2),
          0 0 60px rgba(255, 215, 0, 0.1) inset,
          0 0 80px rgba(255, 215, 0, 0.1) inset
        `,
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Arial, sans-serif',
        color: 'white'
      }}>
         
        {finalMovieName && (
          <h1 style={{
            color: '#ffd700',
            fontWeight: '700',
            fontSize: '3rem',
            marginBottom: '20px',
            textAlign: 'center',
            textShadow: '0 0 20px rgba(255, 215, 0, 1), 0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)',
            animation: 'glow 2s ease-in-out infinite alternate',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            {finalMovieName}
          </h1>
        )}
         
        <h2 style={{
          color: '#ffd700',
          fontWeight: '700',
          fontSize: '2rem',
          marginBottom: '20px',
          textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5)',
          animation: 'glow 2s ease-in-out infinite alternate'
        }}>Select Date and Show</h2>

        <DateSelector days={days} selectedDateIndex={selectedDateIndex} onDateSelect={setSelectedDateIndex} />

        {loading ? (
          <div style={{ textAlign: 'center', color: 'white' }}>Loading shows...</div>
        ) : (
          <TheatreShows rawData={showsData} onSelectShow={handleSelectShow} />
        )}

        {selectedShow && (
          <div id="seat-selection">
            <SeatSelection
              seatTypes={seatTypes}
              selectedSeatType={selectedSeatType}
              setSelectedSeatType={setSelectedSeatType}
              selectedSeatCount={selectedSeatCount}
              setSelectedSeatCount={setSelectedSeatCount}
              selectedShow={selectedShow}
              onNext={handleNext}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowSelectionPage;
