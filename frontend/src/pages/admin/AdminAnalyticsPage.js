import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';

const API_BASE = `${process.env.REACT_APP_API_URL}`;

const ranges = [
  { key: '2d', label: 'Last 2 Days' },
  { key: '7d', label: 'Last 1 Week' },
  { key: '30d', label: 'Last 1 Month' },
  { key: '1y', label: 'Last 1 Year' },
];


const AdminAnalyticsPage = () => {
  const { adminToken } = useContext(AdminContext);
  const [range, setRange] = useState('2d');
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchAnalytics = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE}/api/admin/analytics`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        params: { range },
      });
      setStats(res.data.stats || []);
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to fetch analytics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminToken) fetchAnalytics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken, range]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 flex items-center gap-4 flex-wrap">
        <span className="text-gray-300 font-semibold">Range:</span>
        {ranges.map((r) => (
          <button
            key={r.key}
            className={`px-4 py-2 rounded-lg border transition ${
              range === r.key ? 'bg-blue-600 border-blue-400' : 'border-white/20 hover:bg-white/10'
            }`}
            onClick={() => setRange(r.key)}
          >
            {r.label}
          </button>
        ))}
        <button className="ml-auto px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700" onClick={fetchAnalytics}>
          Refresh
        </button>
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
                <th className="py-2">Movie</th>
                <th className="py-2">Bookings</th>
                <th className="py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((s) => (
                <tr key={s.movie_id} className="border-b border-white/10">
                  <td className="py-2">{s.movieTitle}</td>
                  <td className="py-2">{s.bookingCount}</td>
                  <td className="py-2">₹{s.revenue}</td>
                </tr>
              ))}
              {stats.length === 0 && (
                <tr>
                  <td colSpan={3} className="py-6 text-gray-400">No analytics data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminAnalyticsPage;

