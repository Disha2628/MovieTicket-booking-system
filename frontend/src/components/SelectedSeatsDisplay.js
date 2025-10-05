import React from 'react';

const SelectedSeatsDisplay = ({ selectedSeats }) => {
  return (
    <div
      style={{
        marginBottom: '25px',
        padding: '10px',
        backgroundColor: '#374151',
        borderRadius: '8px',
      }}
    >
      <strong>Selected Seats: </strong>
      {selectedSeats.join(', ') || 'None'}
    </div>
  );
};

export default SelectedSeatsDisplay;
