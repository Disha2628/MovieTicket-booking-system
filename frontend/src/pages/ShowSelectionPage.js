import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DateSelector from '../components/DateSelector';
import TheatreShows from '../components/TheatreShows';
import SeatSelection from '../components/SeatSelection';

const getNextSevenDays = () => {
  const days = [];
  const options = { weekday: 'short', day: '2-digit', month: 'short' };
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    days.push({
      label: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
      date: date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }),
      fullDate: date,
    });
  }
  return days;
};

const statusColors = {
  available: 'green',
  fast_filling: 'orange',
};


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


const ShowSelectionPage = () => {
  const location = useLocation();
  const { movieName } = useParams();
  const movieNameFromState = location.state?.movieName;
  const finalMovieName = movieNameFromState || movieName;

  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedSeatType, setSelectedSeatType] = useState(null);
  const [selectedSeatCount, setSelectedSeatCount] = useState(1);
  const days = getNextSevenDays();

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
    // Scroll to seat selection box after selecting a show
    setTimeout(() => {
      const seatSelectionElement = document.getElementById('seat-selection');
      if (seatSelectionElement) {
        seatSelectionElement.scrollIntoView({ behavior: 'smooth' });
      }
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
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '40px 30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#1f2937', borderRadius: '12px', border: '5px solid hsl(47, 80.90%, 61.00%)', color: 'white' }}>
      {finalMovieName && (
        <h2 style={{ color: '#f0e68c', fontWeight: '700', fontSize: '2rem', marginBottom: '10px', textAlign: 'center' }}>
          {finalMovieName}
        </h2>
      )}
      <h1 style={{ color: '#d4af37', fontWeight: '700', fontSize: '2.5rem', marginBottom: '20px' }}>Select Date and Show</h1>
      <DateSelector days={days} selectedDateIndex={selectedDateIndex} onDateSelect={setSelectedDateIndex} />
      <TheatreShows rawData={rawData} onSelectShow={handleSelectShow} />
      {selectedShow && (
        <SeatSelection
          seatTypes={seatTypes}
          selectedSeatType={selectedSeatType}
          setSelectedSeatType={setSelectedSeatType}
          selectedSeatCount={selectedSeatCount}
          setSelectedSeatCount={setSelectedSeatCount}
          selectedShow={selectedShow}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default ShowSelectionPage;
