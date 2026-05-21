import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';

const API_BASE = `${process.env.REACT_APP_API_URL}`;

const AdminShowsPage = () => {
  const { adminToken } = useContext(AdminContext);

  const [shows, setShows] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    Movie_Id: '',
    Theatre_Id: '',
    Screen_no: '',
    Show_date: '',
    Start_time: '',
    Show_dimension: '2D',
  });

  const fetchShows = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE}/api/admin/shows`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        params: movieId ? { movieId } : {},
      });
      setShows(res.data);
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to load shows');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminToken) fetchShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);

  const handleAdd = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post(`${API_BASE}/api/admin/shows`, {
        Movie_Id: form.Movie_Id ? Number(form.Movie_Id) : null,
        Theatre_Id: form.Theatre_Id ? Number(form.Theatre_Id) : null,
        Screen_no: form.Screen_no ? Number(form.Screen_no) : null,
        Show_date: form.Show_date,
        Start_time: form.Start_time,
        Show_dimension: form.Show_dimension,
      }, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchShows();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to add show');
    }
  };

  const handleRemove = async (showId) => {
    setError('');
    try {
      await axios.post(`${API_BASE}/api/admin/shows/${showId}/remove`, {}, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchShows();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to remove show');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Shows</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="flex gap-3 mb-3">
            <input
              className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none"
              placeholder="Filter by Movie_Id (optional)"
              value={movieId}
              onChange={(e) => setMovieId(e.target.value)}
            />
            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700" onClick={fetchShows}>Load</button>
          </div>

          {loading ? (
            <p className="text-gray-300">Loading...</p>
          ) : error ? (
            <p className="text-red-300">{error}</p>
          ) : (
            <div className="overflow-auto max-h-[420px]">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-300 border-b border-white/10">
                    <th className="py-2">Theatre</th>
                    <th className="py-2">Screen</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Time</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {shows.map((s) => (
                    <tr key={s.show_id} className="border-b border-white/10">
                      <td className="py-2">{s.theatre_id}</td>
                      <td className="py-2">{s.screen_no}</td>
                      <td className="py-2">{String(s.show_date).slice(0, 10)}</td>
                      <td className="py-2">{s.start_time}</td>
                      <td className="py-2">
                        <button className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700" onClick={() => handleRemove(s.show_id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  {shows.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-6 text-gray-400">No shows</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <h3 className="text-xl font-bold mb-3">Add Show</h3>
          <form onSubmit={handleAdd} className="flex flex-col gap-3">
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Movie_Id" value={form.Movie_Id} onChange={(e) => setForm({ ...form, Movie_Id: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Theatre_Id" value={form.Theatre_Id} onChange={(e) => setForm({ ...form, Theatre_Id: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Screen_no" value={form.Screen_no} onChange={(e) => setForm({ ...form, Screen_no: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" type="date" value={form.Show_date} onChange={(e) => setForm({ ...form, Show_date: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" type="time" value={form.Start_time} onChange={(e) => setForm({ ...form, Start_time: e.target.value })} required />
            <select className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" value={form.Show_dimension} onChange={(e) => setForm({ ...form, Show_dimension: e.target.value })}>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="4D">4D</option>
            </select>
            <button className="py-3 bg-blue-600 rounded-lg hover:bg-blue-700 font-bold" type="submit">Add Show</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminShowsPage;

