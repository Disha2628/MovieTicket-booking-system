import React from 'react';

const SeatSelection = ({ seatTypes, selectedSeatType, setSelectedSeatType, selectedSeatCount, setSelectedSeatCount, selectedShow, onNext }) => {
  return (
    <div id="seat-selection" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#2d3748', borderRadius: '12px' }}>
      <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Select Seats for {selectedShow.show.time} {selectedShow.show.label ? `(${selectedShow.show.label})` : ''}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {seatTypes.map((seat) => (
          <div
            key={seat.type}
            onClick={() => setSelectedSeatType(seat)}
            style={{
              cursor: 'pointer',
              padding: '10px 15px',
              borderRadius: '8px',
              backgroundColor: selectedSeatType?.type === seat.type ? '#d4af37' : 'transparent',
              color: selectedSeatType?.type === seat.type ? '#1f2937' : 'white',
              fontWeight: '700',
              textAlign: 'center',
              minWidth: '100px',
              border: '2px solid #d4af37',
              userSelect: 'none',
            }}
          >
            <div>{seat.type}</div>
            <div>₹{seat.price}</div>
            <div style={{ color: 'lightgreen', fontWeight: '600' }}>AVAILABLE</div>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="seatCount" style={{ marginRight: '10px' }}>How many seats?</label>
        <select
          id="seatCount"
          value={selectedSeatCount}
          onChange={(e) => setSelectedSeatCount(Number(e.target.value))}
          style={{ padding: '5px 10px', borderRadius: '6px', fontSize: '1rem' }}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>
      <button
        onClick={onNext}
        disabled={!selectedSeatType}
        style={{
          backgroundColor: selectedSeatType ? '#d4af37' : '#999',
          color: selectedSeatType ? '#1f2937' : '#666',
          padding: '15px 30px',
          borderRadius: '10px',
          border: 'none',
          cursor: selectedSeatType ? 'pointer' : 'not-allowed',
          fontWeight: '700',
          fontSize: '1.2rem',
          width: '100%',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SeatSelection;
