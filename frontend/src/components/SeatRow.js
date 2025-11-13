import React from 'react';
import Seat from './Seat';

const SeatRow = ({ row, groups, seats, selectedSeats, onSeatClick, dbSeats }) => {
  return (
    <div className="flex justify-center gap-10 mb-2">
      {/* If groups exist (Gold/Silver), use them. Otherwise render seats directly (Platinum). */}
      {(groups || [seats]).map((group, gIndex) => (
        <div
          key={gIndex}
          className="flex gap-2"
        >
          {group.map((seatNum) => {
            const seatId = `${row}${seatNum}`;
            const isBooked = dbSeats[seatId] === 'unavailable';
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
