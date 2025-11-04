import React from 'react';

const TheatreShows = ({ rawData, onSelectShow }) => {
  return (
    <>
      {rawData.map(({ theatre, shows }) => (
        <div key={theatre} className="theatre-section">
          <h2 className="theatre-name">{theatre}</h2>
          <div className="show-times">
            {shows.map((show) => (
              <button
                key={show.time}
                onClick={() => onSelectShow(theatre, show)}
                className="show-time-button"
              >
                {show.time}
                {show.label && (
                  <span className="show-label">
                    {show.label}
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="cancellation-note">Cancellation available</p>
        </div>
      ))}
    </>
  );
};

export default TheatreShows;
