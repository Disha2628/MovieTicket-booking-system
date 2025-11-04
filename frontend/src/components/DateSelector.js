import React from 'react';

const DateSelector = ({ days, selectedDateIndex, onDateSelect }) => {
  return (
    <div className="date-selector">
      {days.map((day, index) => (
        <div
          key={day.label}
          onClick={() => onDateSelect(index)}
          className={`date-button ${selectedDateIndex === index ? 'active' : ''}`}
        >
          <div>{day.label}</div>
          <div className="date-date">{day.date}</div>
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
