import React from 'react';

const TheatreShows = ({ rawData, onSelectShow }) => {
  return (
    <>
      {rawData.map(({ theatre, shows }) => (
        <div key={theatre} className="border-b border-gray-700 pb-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">{theatre}</h2>
          <div className="flex gap-4 flex-wrap">
            {shows.map((show) => (
              <button
                key={show.time}
                onClick={() => onSelectShow(theatre, show)}
                className="bg-gray-800 border border-gray-600 rounded-xl px-6 py-3 font-semibold text-white cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:border-blue-500 hover:scale-105 relative"
              >
                {show.time}
                {show.label && (
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-semibold">
                    {show.label}
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">Cancellation available</p>
        </div>
      ))}
    </>
  );
};

export default TheatreShows;
