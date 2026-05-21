import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AdminContext } from '../../contexts/AdminContext';

const API_BASE = `${process.env.REACT_APP_API_URL}`;

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AdminContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/api/admin/login`, { email, password });
      login(res.data.admin, res.data.token);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err?.response?.data?.error || 'Admin login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8">
        <h1 className="text-center text-white text-4xl font-bold font-poppins mb-6">Admin Login</h1>
        <p className="text-center text-gray-400 mb-6">Sign in to manage movies, shows, bookings and analytics.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Password</label>
            <input
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xl font-bold cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg"
            type="submit"
          >
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-400 font-semibold">{error}</p>}

        <div className="text-center mt-6">
          <Link className="text-gray-300 hover:text-white underline" to="/">Back to user site</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;

