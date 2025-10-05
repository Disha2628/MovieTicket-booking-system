import React from 'react';

const statusColors = {
  available: 'green',
  fast_filling: 'orange',
};

const TheatreShows = ({ rawData, onSelectShow }) => {
  return (
    <>
      {rawData.map(({ theatre, shows }) => (
        <div key={theatre} style={{ borderBottom: '1px solid #444', padding: '20px 0' }}>
          <h2 style={{ color: '#d4af37', fontWeight: '700', fontSize: '1.5rem', marginBottom: '15px' }}>{theatre}</h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {shows.map((show) => (
              <button
                key={show.time}
                onClick={() => onSelectShow(theatre, show)}
                style={{
                  border: '2px solid ' + (statusColors[show.status] || 'gray'),
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  position: 'relative',
                  fontWeight: '700',
                  fontSize: '1rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <>
                  {show.time}
                  {show.label && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.75rem',
                        color: '#555',
                        fontWeight: '600',
                      }}
                    >
                      {show.label}
                    </span>
                  )}
                </>
              </button>
            ))}
          </div>
          <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '40px' }}>Cancellation available</p>
        </div>
      ))}
    </>
  );
};

export default TheatreShows;
