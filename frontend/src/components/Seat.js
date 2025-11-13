import React from 'react';

const Seat = ({ seatId, seatNum, isBooked, isSelected, onClick }) => {
  const seatColor = isBooked
    ? 'bg-red-900'
    : isSelected
    ? 'bg-green-500'
    : 'bg-gray-700';

  return (
    <button
      disabled={isBooked}
      onClick={onClick}
      className={`w-7 h-6 ${seatColor} border-none rounded-md text-white cursor-pointer font-semibold hover:scale-110 transition-transform duration-200 ${
        isBooked ? 'cursor-not-allowed' : ''
      }`}
      title={seatId}
    >
      {seatNum}
    </button>
  );
};

export default Seat;
