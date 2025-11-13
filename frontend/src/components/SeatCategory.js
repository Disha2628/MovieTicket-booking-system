import React from 'react';
import SeatRow from './SeatRow';

const SeatCategory = ({ category, selectedSeats, onSeatClick, dbSeats }) => {
  return (
    <div className="mb-10 text-center">
      <div className="font-black text-white mb-4">
        ₹{category.price} {category.name}
      </div>

      {category.rows.map(({ row, groups, seats }) => (
        <SeatRow
          key={row}
          row={row}
          groups={groups}
          seats={seats}
          selectedSeats={selectedSeats}
          onSeatClick={onSeatClick}
          dbSeats={dbSeats}
        />
      ))}
    </div>
  );
};

export default SeatCategory;
