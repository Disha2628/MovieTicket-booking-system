import React from 'react';

const SelectedSeatsDisplay = ({ selectedSeats }) => {
  return (
    <div className="mb-6 p-3 bg-gray-800 rounded-lg text-white">
      <strong>Selected Seats: </strong>
      {selectedSeats.join(', ') || 'None'}
    </div>
  );
};

export default SelectedSeatsDisplay;
