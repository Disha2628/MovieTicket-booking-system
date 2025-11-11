import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const RegistrationPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phn_no: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      if (response.status === 201) {
        setMessage('Registration successful!');
        login(response.data.user, response.data.token);
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phn_no: '',
          password: ''
        });
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

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
        maxWidth: '700px',
        minWidth: '400px',
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
        <h1 style={{
          textAlign: 'center',
          color: '#ffffff',
          fontSize: '3rem',
          fontWeight: '700',
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '20px'
        }}>Welcome to Movie-Matrix</h1>
        <h2 style={{
          textAlign: 'center',
          color: '#bbbbbb',
          fontSize: '1.5rem',
          fontWeight: '600',
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '40px'
        }}>Register</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#ffffff',
              fontSize: '1.2rem'
            }}>👤</span>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
              autoComplete="given-name"
              style={{
                width: '90%',
                padding: '12px 15px 12px 40px',
                margin: '0 auto',
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
            <style>
              {`
                input::placeholder {
                  color: #bbbbbb;
                }
              `}
            </style>
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#ffffff',
              fontSize: '1.2rem'
            }}>👤</span>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
              autoComplete="family-name"
              style={{
                width: '90%',
                padding: '12px 15px 12px 40px',
                margin: '0 auto',
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#ffffff',
              fontSize: '1.2rem'
            }}>👤</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              style={{
                width: '90%',
                padding: '12px 15px 12px 40px',
                margin: '0 auto',
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#ffffff',
              fontSize: '1.2rem'
            }}>📱</span>
            <input
              type="tel"
              name="phn_no"
              placeholder="Phone Number"
              value={formData.phn_no}
              onChange={handleChange}
              required
              autoComplete="tel"
              style={{
                width: '90%',
                padding: '12px 15px 12px 40px',
                margin: '0 auto',
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#ffffff',
              fontSize: '1.2rem'
            }}>🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              style={{
                width: '90%',
                padding: '12px 15px 12px 40px',
                margin: '0 auto',
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(90deg, #E50914, #B20710)',
            border: 'none',
            borderRadius: '50px',
            color: '#ffffff',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            fontFamily: "'Poppins', sans-serif",
            cursor: 'pointer',
            transition: 'all 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 18px rgba(229, 9, 20, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'none';
            e.target.style.boxShadow = 'none';
          }}>
            Register
          </button>
        </form>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          fontSize: '0.85rem',
          fontFamily: "'Poppins', sans-serif"
        }}>
          <span style={{ color: '#bbbbbb' }}>
            Already have an account?{' '}
            <Link to="/login" style={{
              color: '#E50914',
              textDecoration: 'none',
              transition: 'text-decoration 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Sign in
            </Link>
          </span>
        </div>
        {message && <p style={{
          marginTop: '15px',
          textAlign: 'center',
          color: 'lightgreen',
          fontSize: '1.1rem',
          textShadow: '0 0 5px lightgreen'
        }}>{message}</p>}
        {error && <p style={{
          marginTop: '15px',
          textAlign: 'center',
          color: 'red',
          fontSize: '1.1rem',
          textShadow: '0 0 5px red'
        }}>{error}</p>}
      </div>
    </div>
  );
};

export default RegistrationPage;
