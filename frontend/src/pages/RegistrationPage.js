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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements for beauty */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-1000/20 to-pink-900/20 animate-pulse"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>

      <div className="w-full max-w-3xl min-w-[500px] bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl relative z-10 overflow-hidden">
        <h1 className="text-center text-white text-4xl font-bold font-poppins mb-6">Welcome to Movie-Matrix</h1>
        <h2 className="text-center text-gray-400 text-2xl font-semibold font-poppins mb-8">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl">👤</span>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
              autoComplete="given-name"
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl">👤</span>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
              autoComplete="family-name"
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl">👤</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl">📱</span>
            <input
              type="tel"
              name="phn_no"
              placeholder="Phone Number"
              value={formData.phn_no}
              onChange={handleChange}
              required
              autoComplete="tel"
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
            />
          </div>
          <button type="submit" className="w-full py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white text-xl font-bold font-poppins cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50">
            Register
          </button>
        </form>
        <div className="flex justify-center items-center mt-6 text-sm font-poppins">
          <span className="text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-red-500 hover:text-red-400 transition-colors duration-300 underline">
              Sign in
            </Link>
          </span>
        </div>
        {message && <p className="mt-4 text-center text-green-400 text-lg font-semibold">{message}</p>}
        {error && <p className="mt-4 text-center text-red-400 text-lg font-semibold">{error}</p>}
      </div>
    </div>
  );
};

export default RegistrationPage;
