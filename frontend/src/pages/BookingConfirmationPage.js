import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName, selectedSeats } = location.state || {};

  // Function to get price based on row
  const getSeatPrice = (seatId) => {
    const row = seatId.charAt(0);
    if (row === 'A') return 280; // Platinum
    if (['B', 'C', 'D', 'E'].includes(row)) return 220; // Gold
    if (['I', 'J'].includes(row)) return 220; // Silver
    return 0;
  };

  const totalCost = selectedSeats.reduce((sum, seat) => sum + getSeatPrice(seat), 0);

  if (!selectedShow || !selectedSeats) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        Missing booking info.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '30px',
        color: 'white',
        maxWidth: '800px',
        margin: '200px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#222222',
        borderRadius: '12px',
      }}
    >
      <h2 style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
        Booking Confirmation
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <strong style={{ color: '#cccccc' }}>Movie:</strong> {movieName}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong style={{ color: '#cccccc' }}>Date:</strong> {selectedShow.show.fullDate?.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' }) || 'N/A'}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong style={{ color: '#cccccc' }}>Theatre:</strong> {selectedShow.theatre}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong style={{ color: '#cccccc' }}>Show Time:</strong> {selectedShow.show.time}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong style={{ color: '#cccccc' }}>Selected Seats:</strong> {selectedSeats.join(', ')}
      </div>
      <div style={{ marginBottom: '30px' }}>
        <strong style={{ color: '#00CC66' }}>Total Cost:</strong> <span style={{ color: '#00CC66' }}>₹{totalCost}</span>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => {
            navigate('/payment', {
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
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
