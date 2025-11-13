import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName, selectedSeats } = location.state || {};

  // Function to get price based on row
  const getSeatPrice = (seatId) => {
    const row = seatId.charAt(0);
    if (row === 'A') return 280; // Platinum
    if (['B', 'C', 'D', 'E'].includes(row)) return 220; // Gold
    if (['I', 'J'].includes(row)) return 220; // Silver
    return 0;
  };

  const totalCost = selectedSeats.reduce((sum, seat) => sum + getSeatPrice(seat), 0);

  if (!selectedShow || !selectedSeats) {
    return (
      <div className="p-5 text-white">
        Missing booking info.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-poppins text-center mb-8">
            Booking Confirmation
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <strong className="text-gray-300">Movie:</strong>
              <span className="text-white">{movieName}</span>
            </div>
            <div className="flex justify-between items-center">
              <strong className="text-gray-300">Date:</strong>
              <span className="text-white">{selectedShow.show.fullDate?.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' }) || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center">
              <strong className="text-gray-300">Theatre:</strong>
              <span className="text-white">{selectedShow.theatre}</span>
            </div>
            <div className="flex justify-between items-center">
              <strong className="text-gray-300">Show Time:</strong>
              <span className="text-white">{selectedShow.show.time}</span>
            </div>
            <div className="flex justify-between items-center">
              <strong className="text-gray-300">Selected Seats:</strong>
              <span className="text-white">{selectedSeats.join(', ')}</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-600 pt-4">
              <strong className="text-green-400 text-lg">Total Cost:</strong>
              <span className="text-green-400 text-lg font-bold">₹{totalCost}</span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                navigate('/payment', {
                  state: {
                    selectedShow,
                    selectedSeatType,
                    selectedSeatCount,
                    movieName,
                    selectedSeats,
                  },
                });
              }}
              className="py-4 px-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold font-poppins border-none cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
