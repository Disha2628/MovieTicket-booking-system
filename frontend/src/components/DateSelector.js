import React from 'react';

const DateSelector = ({ days, selectedDateIndex, onDateSelect }) => {
  return (
    <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
      {days.map((day, index) => (
        <div
          key={day.label}
          onClick={() => onDateSelect(index)}
          style={{
            cursor: 'pointer',
            padding: '10px 15px',
            borderRadius: '8px',
            backgroundColor: selectedDateIndex === index ? '#d4af37' : 'transparent',
            color: selectedDateIndex === index ? '#1f2937' : 'white',
            fontWeight: '700',
            userSelect: 'none',
            textAlign: 'center',
            minWidth: '60px',
          }}
        >
          <div>{day.label}</div>
          <div style={{ fontSize: '0.8rem' }}>{day.date}</div>
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
