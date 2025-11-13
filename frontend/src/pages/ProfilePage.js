import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    first_name: '',
    last_name: '',
    phn_no: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/customers/${user.id}`);
      setProfile(response.data);
      setEditForm({
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        phn_no: response.data.phn_no
      });
    } catch (error) {
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/customers/${user.id}`, editForm);

      // Update local state
      const updatedProfile = { ...profile, ...editForm };
      setProfile(updatedProfile);
      setUser(updatedProfile);
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update profile');
    }
  };

  const handleCancel = () => {
    setEditForm({
      first_name: profile.first_name,
      last_name: profile.last_name,
      phn_no: profile.phn_no
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">Error: {error}</div>;
  if (!profile) return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">No profile data</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements for beauty */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-1000/20 to-pink-900/20 animate-pulse"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>

      <div className="w-full max-w-4xl min-w-[600px] bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl relative z-10 overflow-hidden">
        <h2 className="text-center text-white text-4xl font-bold font-poppins mb-6">My Profile</h2>

        <div className="flex gap-8 items-start md:flex-row flex-col">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <label className="text-gray-400 font-poppins min-w-[120px] text-lg">First Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.first_name}
                  onChange={(e) => setEditForm({ ...editForm, first_name: e.target.value })}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                />
              ) : (
                <p className="m-0 text-white text-lg">{profile.first_name}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <label className="text-gray-400 font-poppins min-w-[120px] text-lg">Last Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.last_name}
                  onChange={(e) => setEditForm({ ...editForm, last_name: e.target.value })}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                />
              ) : (
                <p className="m-0 text-white text-lg">{profile.last_name}</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <label className="text-gray-400 font-poppins min-w-[120px] text-lg">Email:</label>
              <p className="m-0 text-white text-lg">{profile.email}</p>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-gray-400 font-poppins min-w-[120px] text-lg">Phone No.:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.phn_no}
                  onChange={(e) => setEditForm({ ...editForm, phn_no: e.target.value })}
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                />
              ) : (
                <p className="m-0 text-white text-lg">{profile.phn_no}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 w-44 -ml-5">
            <div className="w-36 h-36 rounded-full bg-gray-700 flex items-center justify-center text-6xl font-bold text-white font-poppins shadow-lg hover:shadow-xl transition-shadow duration-300">
              {profile.first_name ? profile.first_name.charAt(0).toUpperCase() : 'U'}
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap justify-center mt-8">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white text-xl cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 py-4 bg-gray-800 rounded-full text-white text-xl cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white text-xl cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={handleLogout}
            className="flex-1 py-4 bg-gray-800 rounded-full text-white text-xl cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Logout
          </button>
        </div>

        <div className="mt-5">
          <button
            onClick={() => navigate('/booking-history')}
            className="w-full py-4 bg-transparent border border-white rounded-full text-white text-xl cursor-pointer hover:bg-white/15 transition-all duration-300"
          >
            Booking History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;