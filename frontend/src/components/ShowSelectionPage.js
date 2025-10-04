import React, { useState } from 'react';

const rawData = [
  {
    theatre: 'INOX: C-21 Mall',
    shows: [
      { time: '08:15 PM', status: 'available' },
      { time: '08:45 PM', status: 'fast_filling' },
      { time: '10:15 PM', status: 'fast_filling', label: 'INSIGNIA' },
      { time: '11:15 PM', status: 'available' },
    ],
  },
  {
    theatre: 'PVR: Treasure Island Mall, Indore',
    shows: [
      { time: '08:15 PM', status: 'available' },
      { time: '10:15 PM', status: 'available' },
      { time: '11:15 PM', status: 'available' },
    ],
  },
  {
    theatre: 'Velocity III: Miraj Cinemas, Indore',
    shows: [
      { time: '08:00 PM', status: 'available' },
      { time: '10:45 PM', status: 'available' },
    ],
  },
  {
    theatre: 'INOX: Phoenix Citadel Mall, Indore',
    shows: [
      { time: '09:00 PM', status: 'fast_filling', label: 'INSIGNIA' },
      { time: '10:00 PM', status: 'available' },
    ],
  },
];

const statusColors = {
  available: 'green',
  fast_filling: 'orange',
};

const ShowSelectionPage = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const handleSelectShow = (theatre, show) => {
    setSelectedShow({ theatre, show });
    alert('Selected show at ' + theatre + ': ' + show.time);
    // Further booking steps can be implemented here
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Select Date and Show</h1>
      <p>Nearby Theatres and Available Shows for the Next One Week</p>
      {rawData.map(({ theatre, shows }) => (
        <div key={theatre} style={{ borderBottom: '1px solid #ccc', padding: '15px 0' }}>
          <h2>{theatre}</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {shows.map((show) => (
              <button
                key={show.time}
                onClick={() => handleSelectShow(theatre, show)}
                style={{
                  border: '2px solid ' + (statusColors[show.status] || 'gray'),
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '10px 15px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  position: 'relative',
                  fontWeight: '600',
                }}
              >
                <>
                  {show.time}
                  {show.label && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.7rem',
                        color: '#555',
                      }}
                    >
                      {show.label}
                    </span>
                  )}
                </>
              </button>
            ))}
          </div>
          <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '8px' }}>Cancellation available</p>
        </div>
      ))}
    </div>
  );
};

export default ShowSelectionPage;
