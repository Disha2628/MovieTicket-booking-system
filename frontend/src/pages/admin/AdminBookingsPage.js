import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';

const API_BASE = `${process.env.REACT_APP_API_URL}`;

const AdminBookingsPage = () => {
  const { adminToken } = useContext(AdminContext);
  const [movieId, setMovieId] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBookings = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE}/api/admin/bookings`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        params: movieId ? { movieId } : {},
      });
      setBookings(res.data);
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminToken) fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bookings</h2>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
        <div className="flex gap-3">
          <input
            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none"
            placeholder="Filter by Movie_Id (optional)"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
          />
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700" onClick={fetchBookings}>Load</button>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-red-300">{error}</p>
      ) : (
        <div className="overflow-auto max-h-[560px]">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-300 border-b border-white/10">
                <th className="py-2">Booking Id</th>
                <th className="py-2">Movie</th>
                <th className="py-2">Date</th>
                <th className="py-2">Time</th>
                <th className="py-2">Theatre</th>
                <th className="py-2">Seats</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-b border-white/10">
                  <td className="py-2">{b.id}</td>
                  <td className="py-2">{b.movieName}</td>
                  <td className="py-2">{String(b.date).slice(0, 10)}</td>
                  <td className="py-2">{b.time}</td>
                  <td className="py-2">{b.theatre}</td>
                  <td className="py-2">{b.seats}</td>
                  <td className="py-2">₹{b.totalAmount}</td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 text-gray-400">No bookings</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminBookingsPage;

