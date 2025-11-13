import React, { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import jsPDF from 'jspdf';

const API_BASE_URL = 'http://localhost:5000/api';

const BookingHistoryPage = () => {
  const { user, token } = useContext(UserContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBookingHistory = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customers/${user.id}/bookings`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setBookings(response.data);
    } catch (error) {
      setError('Failed to load booking history');
    } finally {
      setLoading(false);
    }
  }, [user, token]);

  useEffect(() => {
    if (!user || !user.id) {
      navigate('/login');
      return;
    }
    if (!token) {
      setError('Authentication required. Please log in again.');
      setLoading(false);
      return;
    }
    fetchBookingHistory();
  }, [user, token, navigate, fetchBookingHistory]);

  const downloadTicket = (booking) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Movie Ticket', 105, 20, null, null, 'center');
    doc.setFontSize(12);
    doc.text(`Booking ID: ${booking.id}`, 20, 40);
    doc.text(`Movie: ${booking.movieName}`, 20, 50);
    doc.text(`Theatre: ${booking.theatre}`, 20, 60);
    doc.text(`City: ${booking.city}`, 20, 70);
    doc.text(`Screen: ${booking.screenName}`, 20, 80);
    doc.text(`Date: ${new Date(booking.date).toLocaleDateString('en-IN')}`, 20, 90);
    doc.text(`Time: ${booking.time}`, 20, 100);
    doc.text(`Seats: ${booking.seats}`, 20, 110);
    doc.text(`Total Amount: ₹${booking.totalAmount}`, 20, 120);
    doc.save(`ticket_${booking.id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8">
          <h2 className="text-center text-white text-4xl font-bold font-poppins mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Booking History
          </h2>

          {loading ? (
            <p className="text-center text-gray-400 text-lg">Loading booking history...</p>
          ) : error ? (
            <p className="text-center text-red-400 text-lg font-semibold">{error}</p>
          ) : bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white/5 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-white/10 text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg">Movie Title</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Theatre Name</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">City</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Screen Name</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Date & Show Time</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Seats</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Total Amount</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Ticket Details</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => {
                    const formattedDate = new Date(booking.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    });
                    return (
                      <tr key={booking.id} className={`${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} border-b border-white/10 last:border-b-0`}>
                        <td className="px-6 py-4 text-white">{booking.movieName}</td>
                        <td className="px-6 py-4 text-white">{booking.theatre}</td>
                        <td className="px-6 py-4 text-white">{booking.city}</td>
                        <td className="px-6 py-4 text-white">{booking.screenName}</td>
                        <td className="px-6 py-4 text-white">{formattedDate} at {booking.time}</td>
                        <td className="px-6 py-4 text-white">{booking.seats}</td>
                        <td className="px-6 py-4 text-white">₹{booking.totalAmount}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => downloadTicket(booking)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-colors duration-300"
                          >
                            Download Ticket
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-400 text-lg">No booking history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryPage;
