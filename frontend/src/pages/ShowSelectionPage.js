import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import DateSelector from '../components/DateSelector';
import TheatreShows from '../components/TheatreShows';
import MovieDescription from './MovieDescription';
import SeatSelection from '../components/SeatSelection';
import axios from 'axios';
import './ShowSelectionPage.css';



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
  const [showsData, setShowsData] = useState([]);
  const [loading, setLoading] = useState(false);

 
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
        setShowsData(grouped);
      } catch (err) {
        if (axios.isCancel && axios.isCancel(err)) {
          // cancelled — ignore
        } else if (err.name === 'CanceledError' || err.name === 'AbortError') {
          // fetch aborted — ignore
        } else {
          console.error('Error fetching shows:', err);
          setShowsData([]);
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
    <div className="show-selection-page">
      <div className="show-selection-container">
        {finalMovieName && (
          <h1 className="page-title">
            {finalMovieName}
          </h1>
        )}

        <h2 className="page-subtitle">Select Date and Show</h2>

        <DateSelector days={days} selectedDateIndex={selectedDateIndex} onDateSelect={setSelectedDateIndex} />

        {loading ? (
          <div className="loading-text">Loading shows...</div>
        ) : showsData.length === 0 ? (
          <div className="no-shows-text">No shows available for this date</div>
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
