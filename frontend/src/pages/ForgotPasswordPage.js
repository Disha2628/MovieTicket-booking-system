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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements for beauty */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-1000/20 to-pink-900/20 animate-pulse"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>

      <div className="w-full max-w-xl min-w-[400px] bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl relative z-10 overflow-hidden">
        <h1 className="text-center text-white text-4xl font-bold font-poppins mb-6">Forgot password?</h1>
        <p className="text-center text-gray-400 text-xl font-medium font-poppins mb-8">No worries, we'll send you reset instructions.</p>

        {step === 1 ? (
          <form onSubmit={handleSendOTP} className="flex flex-col gap-6">
            <div>
              <label className="block text-white text-lg font-medium mb-2 font-poppins">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl">👤</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-white text-lg font-medium mb-2 font-poppins">Phone Number</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl">📱</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                />
              </div>
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white text-xl font-bold font-poppins cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50">
              {getButtonText()}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-6">
            <div>
              <label className="block text-white text-lg font-medium mb-2 font-poppins">OTP</label>
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-white text-lg font-medium mb-2 font-poppins">New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white text-lg outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
              />
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white text-xl font-bold font-poppins cursor-pointer border-none hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50">
              Reset Password
            </button>
          </form>
        )}

        <div className="text-center mt-6">
          <Link to="/login" className="text-gray-400 hover:text-white transition-colors duration-300 underline text-lg font-poppins">
            Back to login
          </Link>
        </div>

        {message && <p className="mt-4 text-center text-green-400 text-lg font-semibold">{message}</p>}
        {error && <p className="mt-4 text-center text-red-400 text-lg font-semibold">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
