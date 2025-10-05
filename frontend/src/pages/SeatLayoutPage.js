import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectedSeatsDisplay from '../components/SelectedSeatsDisplay';
import SeatCategory from '../components/SeatCategory';
import Screen from '../components/Screen';

const SeatLayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName } = location.state || {};

  const seatCategories = [
    {
      name: 'Platinum',
      price: 280,
      rows: [
        { row: 'A', seats: ['04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'] },
      ],
      bookedSeats: ['09'],
    },
    {
      name: 'Gold',
      price: 220,
      rows: [
        { row: 'A', groups: [['01', '02', '03']] },
        { row: 'B', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09', '10', '11'], ['12', '13', '14', '15']] },
        { row: 'C', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09', '10', '11'], ['12', '13', '14', '15']] },
        { row: 'D', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09']] },
        { row: 'E', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09']] },
      ],
      bookedSeats: ['03', '10', '11', '12', '15'],
    },
    {
      name: 'Silver',
      price: 220,
      rows: [
        { row: 'I', groups: [['01', '02', '03', '04', '05', '06', '07', '08', '09'], ['10', '11', '12', '13']] },
        { row: 'J', groups: [['01', '02', '03', '04', '05', '06', '07', '08', '09']] },
      ],
      bookedSeats: ['10', '11', '12', '13'],
    },
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      if (selectedSeats.length < selectedSeatCount) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        alert(`You can only select ${selectedSeatCount} seats.`);
      }
    }
  };

  if (!selectedShow || !selectedSeatType || !selectedSeatCount) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        Missing booking info. Please select show and seats first.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '30px',
        color: 'white',
        maxWidth: '1000px',
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1f2937',
        borderRadius: '12px',
        border: '4px solid hsl(47, 80%, 61%)',
      }}
    >
      <h2 style={{ color: '#d4af37', marginBottom: '20px' }}>
        {movieName} - {selectedShow.theatre} - {selectedShow.show.fullDate?.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' })} - {selectedShow.show.time}
      </h2>

      <SelectedSeatsDisplay selectedSeats={selectedSeats} />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        {/* Row Labels */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#aaa',
            fontWeight: '600',
          }}
        >
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((row) => (
            <div key={row} style={{ height: '45px', textAlign: 'center' }}>
              {row}
            </div>
          ))}
        </div>

        {/* Seat Layout */}
        <div style={{ flex: 1 }}>
          {seatCategories.map((category) => (
            <SeatCategory
              key={category.name}
              category={category}
              selectedSeats={selectedSeats}
              onSeatClick={toggleSeatSelection}
            />
          ))}
        </div>
      </div>

      <Screen />

      {/* Confirm Button */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          disabled={selectedSeats.length !== selectedSeatCount}
          onClick={() => {
            navigate('/booking-confirmation', {
              state: {
                selectedShow,
                selectedSeatType,
                selectedSeatCount,
                movieName,
                selectedSeats,
              },
            });
          }}
          style={{
            padding: '12px 24px',
            backgroundColor: selectedSeats.length === selectedSeatCount ? '#d4af37' : '#555',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: selectedSeats.length === selectedSeatCount ? 'pointer' : 'not-allowed',
          }}
        >
          Confirm Seats
        </button>
      </div>
    </div>
  );
};

export default SeatLayoutPage;
