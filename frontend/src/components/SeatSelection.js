import React from 'react';

const SeatSelection = ({ seatTypes, selectedSeatType, setSelectedSeatType, selectedSeatCount, setSelectedSeatCount, selectedShow, onNext }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Select Seats for {selectedShow.show.time} {selectedShow.show.label ? `(${selectedShow.show.label})` : ''}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {seatTypes.map((seat) => (
          <div
            key={seat.type}
            className="bg-gray-800 border border-gray-600 rounded-xl p-4 text-center"
          >
            <div className="font-semibold text-white mb-2">{seat.type}</div>
            <div className="text-lg font-bold text-white mb-1">₹{seat.price}</div>
            <div className="text-sm text-green-400 font-semibold">AVAILABLE</div>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <label htmlFor="seatCount" className="block text-white font-semibold mb-2">How many seats?</label>
        <select
          id="seatCount"
          value={selectedSeatCount}
          onChange={(e) => setSelectedSeatCount(Number(e.target.value))}
          className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white outline-none focus:border-blue-500 transition-colors duration-300"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>
      <button
        onClick={onNext}
        className="w-full py-4 rounded-full text-white text-xl font-bold font-poppins border-none transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer hover:scale-105 shadow-lg hover:shadow-blue-500/50"
      >
        Next
      </button>
    </div>
  );
};

export default SeatSelection;
