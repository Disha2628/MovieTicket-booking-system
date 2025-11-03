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
          backgroundColor: selectedSeatType ? 'transparent' : '#999',
          color: selectedSeatType ? '#ffd700' : '#666',
          padding: '15px 30px',
          borderRadius: '50px',
          border: selectedSeatType ? '2px solid #ffd700' : 'none',
          cursor: selectedSeatType ? 'pointer' : 'not-allowed',
          fontWeight: '700',
          fontSize: '1.2rem',
          width: '100%',
          transition: 'all 0.3s',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: selectedSeatType ? '0 0 20px rgba(255, 215, 0, 0.5)' : 'none',
        }}
        onMouseEnter={(e) => {
          if (selectedSeatType) {
            e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (selectedSeatType) {
            e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
            e.target.style.transform = 'none';
            e.target.style.backgroundColor = 'transparent';
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SeatSelection;
