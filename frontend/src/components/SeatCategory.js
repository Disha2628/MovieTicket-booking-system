import React from 'react';
import SeatRow from './SeatRow';

const SeatCategory = ({ category, selectedSeats, onSeatClick, dbSeats }) => {
  return (
    <div
      style={{ marginBottom: '40px', textAlign: 'center' }}
    >
      <div
        style={{
          fontWeight: '700',
          color: '#d4af37',
          marginBottom: '15px',
        }}
      >
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
