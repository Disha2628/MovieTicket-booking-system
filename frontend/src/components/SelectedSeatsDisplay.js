import React from 'react';

const SelectedSeatsDisplay = ({ selectedSeats }) => {
  return (
    <div
      style={{
        marginBottom: '25px',
        padding: '10px',
        backgroundColor: '#333333',
        borderRadius: '8px',
        color: 'white',
      }}
    >
      <strong>Selected Seats: </strong>
      {selectedSeats.join(', ') || 'None'}
    </div>
  );
};

export default SelectedSeatsDisplay;
