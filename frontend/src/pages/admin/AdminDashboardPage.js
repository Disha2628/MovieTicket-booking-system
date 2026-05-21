import React, { useContext } from 'react';
import { NavLink, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';

import AdminMoviesPage from './AdminMoviesPage';
import AdminShowsPage from './AdminShowsPage';
import AdminBookingsPage from './AdminBookingsPage';
import AdminAnalyticsPage from './AdminAnalyticsPage';

const AdminDashboardPage = () => {
  const { admin, adminToken, logout } = useContext(AdminContext);
  const navigate = useNavigate();

  if (!admin || !adminToken) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-300">{admin.email}</p>
          </div>

          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg hover:bg-white/15"
          >
            Logout
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/admin/dashboard/movies"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg border transition ${
                  isActive ? 'bg-blue-600 border-blue-400' : 'border-white/20 hover:bg-white/10'
                }`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/admin/dashboard/shows"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg border transition ${
                  isActive ? 'bg-blue-600 border-blue-400' : 'border-white/20 hover:bg-white/10'
                }`
              }
            >
              Shows
            </NavLink>
            <NavLink
              to="/admin/dashboard/bookings"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg border transition ${
                  isActive ? 'bg-blue-600 border-blue-400' : 'border-white/20 hover:bg-white/10'
                }`
              }
            >
              Bookings
            </NavLink>
            <NavLink
              to="/admin/dashboard/analytics"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg border transition ${
                  isActive ? 'bg-blue-600 border-blue-400' : 'border-white/20 hover:bg-white/10'
                }`
              }
            >
              Analytics
            </NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/movies" element={<AdminMoviesPage />} />
          <Route path="/shows" element={<AdminShowsPage />} />
          <Route path="/bookings" element={<AdminBookingsPage />} />
          <Route path="/analytics" element={<AdminAnalyticsPage />} />
          <Route path="*" element={<AdminMoviesPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

