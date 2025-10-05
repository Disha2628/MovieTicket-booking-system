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
  const [bookings, setBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/customer/${user.id}`);
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
      await axios.put(`http://localhost:5000/api/customer/${user.id}`, editForm);

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

  const handleShowBookings = async () => {
    if (!showBookings) {
      try {
        const response = await axios.get(`http://localhost:5000/api/bookings/${user.id}`);
        setBookings(response.data);
      } catch (error) {
        setError('Failed to load booking history');
      }
    }
    setShowBookings(!showBookings);
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '120px auto', padding: '30px', backgroundColor: '#1f2937', borderRadius: '12px', border: '5px solid hsl(47, 80.90%, 61.00%)', color: 'white' }}>
      <h2 style={{ textAlign: 'center', color: '#d4af37', marginBottom: '40px', fontSize: '2rem' }}>My Profile</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', minWidth: '120px' }}>First Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={editForm.first_name}
              onChange={(e) => setEditForm({ ...editForm, first_name: e.target.value })}
              style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none' }}
            />
          ) : (
            <p style={{ margin: 0 }}>{profile.first_name}</p>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', minWidth: '120px' }}>Last Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={editForm.last_name}
              onChange={(e) => setEditForm({ ...editForm, last_name: e.target.value })}
              style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none' }}
            />
          ) : (
            <p style={{ margin: 0 }}>{profile.last_name}</p>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', minWidth: '120px' }}>Email : </label>
          <p style={{ margin: 0 }}>{profile.email}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold', minWidth: '120px' }}>Phone No. : </label>
          {isEditing ? (
            <input
              type="text"
              value={editForm.phn_no}
              onChange={(e) => setEditForm({ ...editForm, phn_no: e.target.value })}
              style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none' }}
            />
          ) : (
            <p style={{ margin: 0 }}>{profile.phn_no}</p>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          {isEditing ? (
            <>
              <button onClick={handleSave} style={{ backgroundColor: '#10b981', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Save
              </button>
              <button onClick={handleCancel} style={{ backgroundColor: '#ef4444', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEdit} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Edit Profile
            </button>
          )}
          <button onClick={handleLogout} style={{ backgroundColor: '#dc2626', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>

        <div style={{ marginTop: '40px' }}>
          <button onClick={handleShowBookings} style={{ backgroundColor: '#f59e0b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            {showBookings ? 'Hide Booking History' : 'Show Booking History'}
          </button>

          {showBookings && (
            <div style={{ marginTop: '20px' }}>
              <h3>Booking History</h3>
              {bookings.length > 0 ? (
                <ul>
                  {bookings.map(booking => (
                    <li key={booking.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#374151', borderRadius: '5px' }}>
                      <strong>{booking.movie}</strong> - {booking.date} at {booking.time}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No bookings found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
