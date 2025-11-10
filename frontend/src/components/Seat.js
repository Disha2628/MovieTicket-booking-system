import React from 'react';

const Seat = ({ seatId, seatNum, isBooked, isSelected, onClick }) => {
  const seatColor = isBooked
    ? '#750000'
    : isSelected
    ? '#00CC66'
    : '#333333';

  return (
    <button
      disabled={isBooked}
      onClick={onClick}
      style={{
        width: '28px',
        height: '25px',
        backgroundColor: seatColor,
        border: 'none',
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
