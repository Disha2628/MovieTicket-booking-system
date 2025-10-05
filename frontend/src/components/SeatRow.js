import React from 'react';
import Seat from './Seat';

const SeatRow = ({ row, groups, seats, categoryBookedSeats, selectedSeats, onSeatClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginBottom: '10px',
      }}
    >
      {/* If groups exist (Gold/Silver), use them. Otherwise render seats directly (Platinum). */}
      {(groups || [seats]).map((group, gIndex) => (
        <div
          key={gIndex}
          style={{ display: 'flex', gap: '8px' }}
        >
          {group.map((seatNum) => {
            const seatId = `${row}${seatNum}`;
            const isBooked = categoryBookedSeats.includes(seatNum);
            const isSelected = selectedSeats.includes(seatId);
            return (
              <Seat
                key={seatId}
                seatId={seatId}
                seatNum={seatNum}
                isBooked={isBooked}
                isSelected={isSelected}
                onClick={() => onSeatClick(seatId)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatRow;
