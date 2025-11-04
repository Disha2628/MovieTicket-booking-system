import React from 'react';

const SeatSelection = ({ seatTypes, selectedSeatType, setSelectedSeatType, selectedSeatCount, setSelectedSeatCount, selectedShow, onNext }) => {
  return (
    <div className="seat-selection">
      <h2 className="seat-selection-title">Select Seats for {selectedShow.show.time} {selectedShow.show.label ? `(${selectedShow.show.label})` : ''}</h2>
      <div className="seat-types">
        {seatTypes.map((seat) => (
          <div
            key={seat.type}
            onClick={() => setSelectedSeatType(seat)}
            className={`seat-type-card ${selectedSeatType?.type === seat.type ? 'selected' : ''}`}
          >
            <div className="seat-type-name">{seat.type}</div>
            <div className="seat-price">₹{seat.price}</div>
            <div className="seat-availability">AVAILABLE</div>
          </div>
        ))}
      </div>
      <div className="seat-count-selector">
        <label htmlFor="seatCount" className="seat-count-label">How many seats?</label>
        <select
          id="seatCount"
          value={selectedSeatCount}
          onChange={(e) => setSelectedSeatCount(Number(e.target.value))}
          className="seat-count-select"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>
      <button
        onClick={onNext}
        disabled={!selectedSeatType}
        className={`next-button ${!selectedSeatType ? 'disabled' : ''}`}
      >
        Next
      </button>
    </div>
  );
};

export default SeatSelection;
