
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
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
      const response = await axios.post('http://localhost:5000/api/login', {
        Email: formData.email,      // ✅ match backend variable names
        Password: formData.password
      });
      if (response.status === 200) {
        setMessage('Login successful!');
        login(response.data.user, response.data.token);
        setFormData({
          email: '',
          password: ''
        });
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };
  

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at top, #8b0000 0%, #1a0000 80%)',
      //background: 'linear-gradient(135deg, #140101 0%, #751212 50%, #3d0303 100%)',
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
        maxWidth: '520px',
        minWidth: '320px',
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
        <h1 style={{
          textAlign: 'center',
          color: '#ffd700',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          fontFamily: 'serif',
          marginBottom: '20px',
          textShadow: '0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)'
        }}>Welcome To Movie-Matrix</h1>
        <h2 style={{
          textAlign: 'center',
          color: '#ffd700',
          fontSize: '2rem',
          fontWeight: 'bold',
          fontFamily: 'serif',
          marginBottom: '40px',
          textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
        }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ position: 'relative', marginBottom: '10px' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#ffd700',
              fontSize: '1.2rem'
            }}>👤</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '85%', // <— visibly reduces width and matches reference
                padding: '12px 15px 12px 40px',
                margin: '0 auto',
                display: 'block',
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
          </div>
          <div style={{ position: 'relative', marginBottom: '10px' }}>
            <span style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#ffd700',
              fontSize: '1.2rem'
            }}>🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '85%', // <— visibly reduces width and matches reference
                padding: '12px 15px 12px 40px',
                margin: '0 auto',
                display: 'block',
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
          </div>
          <button type="submit" style={{
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
            Log In
          </button>
        </form>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          fontSize: '0.9rem'
        }}>
          <Link to="/forgot-password" style={{
            color: '#ffd700',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}
           >
            Forgot Password?
          </Link>
          <span style={{ color: '#ffffff' }}>
            New to MovieMatrix?{' '}
            <Link to="/register" style={{
              color: '#ffd700',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Sign up
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

export default LoginPage;
