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
      background: 'radial-gradient(circle at top, #8b0000 0%, #1a0000 80%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Faint outer vignette */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        minWidth: '600px',
        backgroundColor: 'rgba(12, 18, 32, 0.9)',
        borderRadius: '24px',
        padding: '40px 30px',
        boxShadow: `
          inset 0 4px 8px rgba(0,0,0,0.3),
          0 0 20px rgba(255, 215, 0, 0.3),
          0 0 40px rgba(255, 215, 0, 0.2),
          0 0 60px rgba(255, 215, 0, 0.1) inset,
          0 0 80px rgba(255, 215, 0, 0.1) inset
        `,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#ffd700',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          fontFamily: 'serif',
          marginBottom: '20px',
          textShadow: '0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)'
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
              <label style={{ color: '#ffd700', fontWeight: 'bold', fontFamily: 'serif', minWidth: '120px' }}>First Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.first_name}
                  onChange={(e) => setEditForm({ ...editForm, first_name: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    backgroundColor: 'rgba(12, 18, 32, 0.8)',
                    border: 'none',
                    borderBottom: '2px solid #ffd700',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              ) : (
                <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>{profile.first_name}</p>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ color: '#ffd700', fontWeight: 'bold', fontFamily: 'serif', minWidth: '120px' }}>Last Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.last_name}
                  onChange={(e) => setEditForm({ ...editForm, last_name: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    backgroundColor: 'rgba(12, 18, 32, 0.8)',
                    border: 'none',
                    borderBottom: '2px solid #ffd700',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                />
              ) : (
                <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>{profile.last_name}</p>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ color: '#ffd700', fontWeight: 'bold', fontFamily: 'serif', minWidth: '120px' }}>Email:</label>
              <p style={{ margin: 0, color: '#ffffff', fontSize: '1rem' }}>{profile.email}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label style={{ color: '#ffd700', fontWeight: 'bold', fontFamily: 'serif', minWidth: '120px' }}>Phone No.:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editForm.phn_no}
                  onChange={(e) => setEditForm({ ...editForm, phn_no: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '12px 15px',
                    backgroundColor: 'rgba(12, 18, 32, 0.8)',
                    border: 'none',
                    borderBottom: '2px solid #ffd700',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)'}
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
              backgroundColor: '#8b0000',
              border: '3px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#ffd700',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.8)',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
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
                backgroundColor: 'transparent',
                border: '2px solid #ffd700',
                borderRadius: '50px',
                color: '#ffd700',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'none';
                e.target.style.backgroundColor = 'transparent';
              }}>
                Save
              </button>
              <button onClick={handleCancel} style={{
                flex: 1,
                padding: '15px',
                backgroundColor: 'transparent',
                border: '2px solid #ffd700',
                borderRadius: '50px',
                color: '#ffd700',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'none';
                e.target.style.backgroundColor = 'transparent';
              }}>
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEdit} style={{
              flex: 1,
              padding: '15px',
              backgroundColor: 'transparent',
              border: '2px solid #ffd700',
              borderRadius: '50px',
              color: '#ffd700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'none';
              e.target.style.backgroundColor = 'transparent';
            }}>
              Edit Profile
            </button>
          )}
          <button onClick={handleLogout} style={{
            flex: 1,
            padding: '15px',
            backgroundColor: 'transparent',
            border: '2px solid #ffd700',
            borderRadius: '50px',
            color: '#ffd700',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'none';
            e.target.style.backgroundColor = 'transparent';
          }}>
            Logout
          </button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => navigate('/booking-history')} style={{
            width: '100%',
            padding: '15px',
            backgroundColor: 'transparent',
            border: '2px solid #ffd700',
            borderRadius: '50px',
            color: '#ffd700',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'none';
            e.target.style.backgroundColor = 'transparent';
          }}>
            Booking History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;