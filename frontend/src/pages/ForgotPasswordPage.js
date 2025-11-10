import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    otp: '',
    newPassword: ''
  });

  const [step, setStep] = useState(1); // 1: Enter email/phone, 2: Enter OTP and new password
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', {
        email: formData.email,
        phone: formData.phone
      });
      setMessage('OTP sent successfully to your email and/or phone!');
      setStep(2);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Failed to send OTP. Please try again.');
      }
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!formData.otp || !formData.newPassword) {
      setError('Please enter OTP and new password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/reset-password', {
        email: formData.email,
        phone: formData.phone,
        otp: formData.otp,
        newPassword: formData.newPassword
      });
      setMessage('Password reset successful! You can now log in with your new password.');
      setStep(1);
      setFormData({
        email: '',
        phone: '',
        otp: '',
        newPassword: ''
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Failed to reset password. Please try again.');
      }
    }
  };

  const getButtonText = () => {
    if (formData.email && !formData.phone) return 'Send Reset Link';
    if (formData.phone && !formData.email) return 'Send OTP';
    if (formData.email && formData.phone) return 'Send Reset Link'; // Default to email if both
    return 'Send Reset Link'; // Default
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
        }}>Forgot password?</h1>
        <p style={{
          textAlign: 'center',
          color: '#bbbbbb',
          fontSize: '1.2rem',
          fontWeight: '400',
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '40px'
        }}>No worries, we'll send you reset instructions.</p>
        {step === 1 ? (
          <form onSubmit={handleSendOTP} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px',
                fontFamily: "'Poppins', sans-serif"
              }}>Email</label>
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
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
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
            </div>
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px',
                fontFamily: "'Poppins', sans-serif"
              }}>Phone Number</label>
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
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
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
              {getButtonText()}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px',
                fontFamily: "'Poppins', sans-serif"
              }}>OTP</label>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                required
                style={{
                  width: '90%',
                  padding: '12px 15px',
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
            <div>
              <label style={{
                display: 'block',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px',
                fontFamily: "'Poppins', sans-serif"
              }}>New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                value={formData.newPassword}
                onChange={handleChange}
                required
                style={{
                  width: '90%',
                  padding: '12px 15px',
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
              Reset Password
            </button>
          </form>
        )}
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '0.85rem',
          fontFamily: "'Poppins', sans-serif"
        }}>
          <Link to="/login" style={{
            color: '#bbbbbb',
            textDecoration: 'none',
            transition: 'text-decoration 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >
            Back to login
          </Link>
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

export default ForgotPasswordPage;
