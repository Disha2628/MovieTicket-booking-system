import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SeatLayoutPage = () => {
  const location = useLocation();
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName } = location.state || {};

  const seatCategories = [
    {
      name: 'Platinum',
      price: 280,
      rows: [
        { row: 'A', seats: ['04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'] },
      ],
      bookedSeats: ['09'],
    },
    {
      name: 'Gold',
      price: 220,
      rows: [
        { row: 'A', groups: [['01', '02', '03']] },
        { row: 'B', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09', '10', '11'], ['12', '13', '14', '15']] },
        { row: 'C', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09', '10', '11'], ['12', '13', '14', '15']] },
        { row: 'D', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09']] },
        { row: 'E', groups: [['01', '02', '03'], ['04', '05', '06', '07', '08', '09']] },
      ],
      bookedSeats: ['03', '10', '11', '12', '15'],
    },
    {
      name: 'Silver',
      price: 220,
      rows: [
        { row: 'I', groups: [['01', '02', '03', '04', '05', '06', '07', '08', '09'], ['10', '11', '12', '13']] },
        { row: 'J', groups: [['01', '02', '03', '04', '05', '06', '07', '08', '09']] },
      ],
      bookedSeats: ['10', '11', '12', '13'],
    },
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      if (selectedSeats.length < selectedSeatCount) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        alert(`You can only select ${selectedSeatCount} seats.`);
      }
    }
  };

  if (!selectedShow || !selectedSeatType || !selectedSeatCount) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        Missing booking info. Please select show and seats first.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '30px',
        color: 'white',
        maxWidth: '1000px',
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1f2937',
        borderRadius: '12px',
        border: '4px solid hsl(47, 80%, 61%)',
      }}
    >
      <h2 style={{ color: '#d4af37', marginBottom: '20px' }}>
        {movieName} - {selectedShow.theatre} - {selectedShow.show.time}
      </h2>

      <div
        style={{
          marginBottom: '25px',
          padding: '10px',
          backgroundColor: '#374151',
          borderRadius: '8px',
        }}
      >
        <strong>Selected Seats: </strong>
        {selectedSeats.join(', ') || 'None'}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        {/* Row Labels */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#aaa',
            fontWeight: '600',
          }}
        >
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((row) => (
            <div key={row} style={{ height: '45px', textAlign: 'center' }}>
              {row}
            </div>
          ))}
        </div>

        {/* Seat Layout */}
        <div style={{ flex: 1 }}>
          {seatCategories.map((category) => (
            <div
              key={category.name}
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
                <div
                  key={row}
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
                        const isBooked = category.bookedSeats.includes(seatNum);
                        const isSelected = selectedSeats.includes(seatId);
                        const seatColor = isBooked
                          ? '#dc2626'
                          : isSelected
                          ? '#3b82f6'
                          : '#22c55e';
                        return (
                          <button
                            key={seatId}
                            disabled={isBooked}
                            onClick={() => toggleSeatSelection(seatId)}
                            style={{
                              width: '28px',
                              height: '25px',
                              backgroundColor: seatColor,
                              border: '2px solid #d4af37',
                              borderRadius: '6px',
                              color: 'white',
                              cursor: isBooked ? 'not-allowed' : 'pointer',
                              fontWeight: '600',
                            }}
                            title={seatId}
                          >
                            {seatNum}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Screen */}
      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <div
          style={{
            margin: '0 auto',
            marginLeft: '300px',
            width: '45%',
            height: '15px',
            backgroundColor: '#93c5fd',
            borderRadius: '12px',
            boxShadow: '0 0 15px #60a5fa',
          }}
        />
        <div style={{ marginTop: '8px', color: '#aaa', fontWeight: '600' }}>
          All eyes this way please
        </div>
      </div>
    </div>
  );
};

export default SeatLayoutPage;
