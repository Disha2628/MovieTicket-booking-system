import React from 'react';

const DateSelector = ({ days, selectedDateIndex, onDateSelect }) => {
  return (
    <div className="flex gap-4 justify-center flex-wrap mb-8">
      {days.map((day, index) => (
        <div
          key={day.label}
          onClick={() => onDateSelect(index)}
          className={`cursor-pointer p-3 rounded-lg border transition-all duration-300 text-center min-w-16 ${
            selectedDateIndex === index
              ? 'bg-gray-700 border-blue-500 text-white'
              : 'bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-blue-500'
          }`}
        >
          <div className="font-bold text-sm">{day.label}</div>
          <div className="text-xs mt-1">{day.date}</div>
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
