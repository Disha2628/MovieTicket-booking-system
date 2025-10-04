import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
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
      const response = await axios.post('http://localhost:5000/api/login', formData);
      if (response.status === 200) {
        setMessage('Login successful!');
        setFormData({
          email: '',
          password: ''
        });
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
    <div style={{ maxWidth: '600px', margin: '120px auto', padding: '30px', backgroundColor: '#1f2937', borderRadius: '12px', color: 'white' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Welcome Back !</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '15px', borderRadius: '10px', border: 'none', fontSize: '1rem' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: '15px', borderRadius: '10px', border: 'none', fontSize: '1rem' }}
        />
        <button type="submit" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '15px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>
          Log In
        </button>
      </form>
      {message && <p style={{ marginTop: '15px', textAlign: 'center', color: 'lightgreen', fontSize: '1.1rem' }}>{message}</p>}
      {error && <p style={{ marginTop: '15px', textAlign: 'center', color: 'red', fontSize: '1.1rem' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;