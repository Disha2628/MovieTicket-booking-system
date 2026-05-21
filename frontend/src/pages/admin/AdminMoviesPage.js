import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';

const API_BASE = 'http://localhost:5000';

const AdminMoviesPage = () => {
  const { adminToken } = useContext(AdminContext);

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    Title: '',
    Genre: '',
    Language: '',
    Duration: '',
    Rating: '',
    Release_date: '',
    Trailer_URL: '',
    Description: '',
    Poster_url: '',
    // Comma-separated inputs. Example:
    // Actor Name: "Leonardo DiCaprio, Cillian Murphy"
    // Actor Pic: "/path/a.jpg,/path/b.jpg"
    // Role Name: "Lead, Supporting"
    actorNames: '',
    actorPics: '',
    roleNames: '',
  });


  const fetchMovies = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE}/api/admin/movies`, {
        headers: { Authorization: `Bearer ${adminToken}` },
        params: search ? { search } : {},
      });
      setMovies(res.data);
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to load movies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminToken) fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminToken]);

  const handleAdd = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const actorNames = String(form.actorNames || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      const actorPics = String(form.actorPics || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      const roleNames = String(form.roleNames || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      const cast = actorNames.map((name, idx) => ({
        name,
        actor_pic: actorPics[idx] || null,
        role_name: roleNames[idx] || null,
      }));

      const payload = {
        Title: form.Title,
        Genre: form.Genre,
        Language: form.Language,
        Duration: form.Duration ? Number(form.Duration) : null,
        Rating: form.Rating ? Number(form.Rating) : null,
        Release_date: form.Release_date,
        Trailer_URL: form.Trailer_URL,
        Description: form.Description,
        Poster_url: form.Poster_url,
        cast: cast.length > 0 ? cast : undefined,
      };

      await axios.post(`${API_BASE}/api/admin/movies`, payload, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setForm({
        Title: '',
        Genre: '',
        Language: '',
        Duration: '',
        Rating: '',
        Release_date: '',
        Trailer_URL: '',
        Description: '',
        Poster_url: '',
      });
      fetchMovies();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to add movie');
    }
  };

  const handleCancel = async (movieId) => {
    setError('');
    try {
      await axios.post(`${API_BASE}/api/admin/movies/${movieId}/cancel`, {}, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchMovies();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to cancel movie');
    }
  };

  const handleActivate = async (movieId) => {
    setError('');
    try {
      await axios.post(`${API_BASE}/api/admin/movies/${movieId}/activate`, {}, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchMovies();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to activate movie');
    }
  };

  const handleDelete = async (movieId) => {
    setError('');
    try {
      await axios.delete(`${API_BASE}/api/admin/movies/${movieId}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      fetchMovies();
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to delete movie');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Movies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 ">
          <div className="flex gap-3 mb-4">
            <input
              className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
              onClick={fetchMovies}
            >
              Search
            </button>
          </div>

          {loading ? (
            <p className="text-gray-300">Loading...</p>
          ) : error ? (
            <p className="text-red-300">{error}</p>
          ) : (
            <div className="overflow-auto max-h-[800px]">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-300 border-b border-white/10">
                    <th className="py-2">Title</th>
                    <th className="py-2"> </th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((m) => (
                    <tr key={m.id} className="border-b border-white/10">
                      <td className="py-2">{m.title}</td>
                      <td className="py-2">{m.genre}</td>

                      <td className="py-2">{m.status === 1 ? 'Active' : 'Inactive'}</td>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <button
                            className={`px-2 py-1 rounded-lg ${m.status === 1 ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                            onClick={() => (m.status === 1 ? handleCancel(m.id) : handleActivate(m.id))}
                          >
                            {m.status === 1 ? 'Deactivate' : 'Activate'}
                          </button>

                          <button
                            className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600"
                            onClick={() => handleDelete(m.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {movies.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-6 text-gray-400">No movies</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 ">
          <h3 className="text-xl font-bold mb-3">Add Movie</h3>
          <form onSubmit={handleAdd} className="flex flex-col gap-3">
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Title" value={form.Title} onChange={(e) => setForm({ ...form, Title: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Genre" value={form.Genre} onChange={(e) => setForm({ ...form, Genre: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Language" value={form.Language} onChange={(e) => setForm({ ...form, Language: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Duration (minutes)" value={form.Duration} onChange={(e) => setForm({ ...form, Duration: e.target.value })} />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Rating" value={form.Rating} onChange={(e) => setForm({ ...form, Rating: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Release date (YYYY-MM-DD)" value={form.Release_date} onChange={(e) => setForm({ ...form, Release_date: e.target.value })} required />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Trailer URL" value={form.Trailer_URL} onChange={(e) => setForm({ ...form, Trailer_URL: e.target.value })} />
            <input className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Poster URL" value={form.Poster_url} onChange={(e) => setForm({ ...form, Poster_url: e.target.value })} />
            <textarea className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none" placeholder="Description" value={form.Description} onChange={(e) => setForm({ ...form, Description: e.target.value })} rows={4} />

            <hr className="border-white/10 my-1" />
            <h4 className="text-lg font-bold">Actors (optional)</h4>
            <input
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none"
              placeholder="Actor Names (comma separated)"
              value={form.actorNames}
              onChange={(e) => setForm({ ...form, actorNames: e.target.value })}
            />
            <input
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none"
              placeholder="Actor Pics URLs (comma separated; same order)"
              value={form.actorPics}
              onChange={(e) => setForm({ ...form, actorPics: e.target.value })}
            />
            <input
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg outline-none"
              placeholder="Role Names (comma separated; same order)"
              value={form.roleNames}
              onChange={(e) => setForm({ ...form, roleNames: e.target.value })}
            />

            <button className="py-3 bg-blue-600 rounded-lg hover:bg-blue-700 font-bold" type="submit">Add Movie</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminMoviesPage;

