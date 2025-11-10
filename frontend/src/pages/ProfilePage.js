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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data</div>;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #080C14 0%, #0D1117 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        minWidth: '600px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '40px 30px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#ffffff',
          fontSize: '2.5rem',
          fontWeight: '700',
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '20px'
        }}>My Profile</h2>
        <style>
          {`
            .profile-flex {
              display: flex;
              gap: 30px;
              align-items: flex-start;
            }
            @media (max-width: 768px) {
              .profile-flex {
                flex-direction: column;
              }
            }
          `}
        </style>
        <div className="profile-flex">
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ color: '#bbbbbb', fontFamily: "'Poppins', sans-serif", minWidth: '120px' }}>First Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.first_name}
                  onChange={(e) => setEditForm({ ...editForm, first_name: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(229, 9, 20, 0.5)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              ) : (
                <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>{profile.first_name}</p>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ color: '#bbbbbb', fontFamily: "'Poppins', sans-serif", minWidth: '120px' }}>Last Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.last_name}
                  onChange={(e) => setEditForm({ ...editForm, last_name: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(229, 9, 20, 0.5)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              ) : (
                <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>{profile.last_name}</p>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ color: '#bbbbbb', fontFamily: "'Poppins', sans-serif", minWidth: '120px' }}>Email:</label>
              <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>{profile.email}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ color: '#bbbbbb', fontFamily: "'Poppins', sans-serif", minWidth: '120px' }}>Phone No.:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.phn_no}
                  onChange={(e) => setEditForm({ ...editForm, phn_no: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(229, 9, 20, 0.5)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              ) : (
                <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>{profile.phn_no}</p>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', flex: '0 0 180px', marginLeft: '-20px' }}>
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              backgroundColor: '#333333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#ffffff',
              fontFamily: "'Poppins', sans-serif"
            }}>
              {profile.first_name ? profile.first_name.charAt(0).toUpperCase() : 'U'}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
          {isEditing ? (
            <>
              <button onClick={handleSave} style={{
                flex: 1,
                padding: '15px',
                background: 'linear-gradient(90deg,rgb(76, 17, 194),rgb(67, 8, 101))',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '1.1rem',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'none'}>
                Save
              </button>
              <button onClick={handleCancel} style={{
                flex: 1,
                padding: '15px',
                background: '#1a1a1a',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '1.1rem',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'none'}>
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEdit} style={{
              flex: 1,
              padding: '15px',
              background: 'linear-gradient(90deg,rgb(76, 17, 194),rgb(67, 8, 101))',
              borderRadius: '50px',
              color: '#ffffff',
              fontSize: '1.1rem',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'none'}>
              Edit Profile
            </button>
          )}
          <button onClick={handleLogout} style={{
            flex: 1,
            padding: '15px',
            background: '#1a1a1a',
            borderRadius: '50px',
            color: '#ffffff',
            fontSize: '1.1rem',
            cursor: 'pointer',
            border: 'none',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'none'}>
            Logout
          </button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => navigate('/booking-history')} style={{
            width: '100%',
            padding: '15px',
            background: 'transparent',
            border: '1px solid #ffffff',
            borderRadius: '50px',
            color: '#ffffff',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Booking History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;