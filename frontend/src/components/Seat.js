import React from 'react';

const Seat = ({ seatId, seatNum, isBooked, isSelected, onClick }) => {
  const seatColor = isBooked
    ? '#dc2626'
    : isSelected
    ? '#3b82f6'
    : '#22c55e';

  return (
    <button
      disabled={isBooked}
      onClick={onClick}
      style={{
        width: '28px',
        height: '25px',
        backgroundColor: seatColor,
        border: '2px solid #d4af37',
        borderRadius: '6px',
        color: 'white',
        cursor: isBooked ? 'not-allowed' : 'pointer',
        fontWeight: '600',
      }}
      title={seatId}
    >
      {seatNum}
    </button>
  );
};

export default Seat;
