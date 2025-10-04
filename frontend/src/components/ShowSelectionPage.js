import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const movieName = location.state?.movieName;

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

  const handleNext = () => {
    alert(`Proceeding with booking:\nMovie: ${movieName}\nTheatre: ${selectedShow.theatre}\nShow: ${selectedShow.show.time} ${selectedShow.show.label ? '(' + selectedShow.show.label + ')' : ''}\nSeat Type: ${selectedSeatType.type}\nSeats: ${selectedSeatCount}`);
    // Implement navigation or booking logic here
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '40px 30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#1f2937', borderRadius: '12px', border: '5px solid hsl(47, 80.90%, 61.00%)', color: 'white' }}>
      {movieName && (
        <h2 style={{ color: '#f0e68c', fontWeight: '700', fontSize: '1.8rem', marginBottom: '10px', textAlign: 'center' }}>
          {movieName}
        </h2>
      )}
      <h1 style={{ color: '#d4af37', fontWeight: '700', fontSize: '2.5rem', marginBottom: '20px' }}>Select Date and Show</h1>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        {days.map((day, index) => (
          <div
            key={day.label}
            onClick={() => setSelectedDateIndex(index)}
            style={{
              cursor: 'pointer',
              padding: '10px 15px',
              borderRadius: '8px',
              backgroundColor: selectedDateIndex === index ? '#d4af37' : 'transparent',
              color: selectedDateIndex === index ? '#1f2937' : 'white',
              fontWeight: '700',
              userSelect: 'none',
              textAlign: 'center',
              minWidth: '60px',
            }}
          >
            <div>{day.label}</div>
            <div style={{ fontSize: '0.8rem' }}>{day.date}</div>
          </div>
        ))}
      </div>
      {rawData.map(({ theatre, shows }) => (
        <div key={theatre} style={{ borderBottom: '1px solid #444', padding: '20px 0' }}>
          <h2 style={{ color: '#d4af37', fontWeight: '700', fontSize: '1.5rem', marginBottom: '15px' }}>{theatre}</h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {shows.map((show) => (
              <button
                key={show.time}
                onClick={() => handleSelectShow(theatre, show)}
                style={{
                  border: '2px solid ' + (statusColors[show.status] || 'gray'),
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  position: 'relative',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <>
                  {show.time}
                  {show.label && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.75rem',
                        color: '#555',
                        fontWeight: '600',
                      }}
                    >
                      {show.label}
                    </span>
                  )}
                </>
              </button>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '40px' }}>Cancellation available</p>
        </div>
      ))}
      {selectedShow && (
        <div id="seat-selection" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#2d3748', borderRadius: '12px' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Select Seats for {selectedShow.show.time} {selectedShow.show.label ? `(${selectedShow.show.label})` : ''}</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            {seatTypes.map((seat) => (
              <div
                key={seat.type}
                onClick={() => setSelectedSeatType(seat)}
                style={{
                  cursor: 'pointer',
                  padding: '10px 15px',
                  borderRadius: '8px',
                  backgroundColor: selectedSeatType?.type === seat.type ? '#d4af37' : 'transparent',
                  color: selectedSeatType?.type === seat.type ? '#1f2937' : 'white',
                  fontWeight: '700',
                  textAlign: 'center',
                  minWidth: '100px',
                  border: '2px solid #d4af37',
                  userSelect: 'none',
                }}
              >
                <div>{seat.type}</div>
                <div>₹{seat.price}</div>
                <div style={{ color: 'lightgreen', fontWeight: '600' }}>AVAILABLE</div>
              </div>
            ))}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="seatCount" style={{ marginRight: '10px' }}>How many seats?</label>
            <select
              id="seatCount"
              value={selectedSeatCount}
              onChange={(e) => setSelectedSeatCount(Number(e.target.value))}
              style={{ padding: '5px 10px', borderRadius: '6px', fontSize: '1rem' }}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleNext}
            disabled={!selectedSeatType}
            style={{
              backgroundColor: selectedSeatType ? '#d4af37' : '#999',
              color: selectedSeatType ? '#1f2937' : '#666',
              padding: '15px 30px',
              borderRadius: '10px',
              border: 'none',
              cursor: selectedSeatType ? 'pointer' : 'not-allowed',
              fontWeight: '700',
              fontSize: '1.2rem',
              width: '100%',
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowSelectionPage;
