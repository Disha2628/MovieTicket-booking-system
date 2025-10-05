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
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1f2937',
        borderRadius: '12px',
        border: '4px solid hsl(47, 80%, 61%)',
      }}
    >
      <h2 style={{ color: '#d4af37', marginBottom: '20px', textAlign: 'center' }}>
        Booking Confirmation
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <strong>Movie:</strong> {movieName}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Date:</strong> {selectedShow.show.fullDate?.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' }) || 'N/A'}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Theatre:</strong> {selectedShow.theatre}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Show Time:</strong> {selectedShow.show.time}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <strong>Selected Seats:</strong> {selectedSeats.join(', ')}
      </div>
      <div style={{ marginBottom: '30px' }}>
        <strong>Total Cost:</strong> ₹{totalCost}
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
            backgroundColor: '#d4af37',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
