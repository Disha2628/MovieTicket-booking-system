import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import jsPDF from 'jspdf';

const API_BASE_URL = 'http://localhost:5000/api';

const BookingHistoryPage = () => {
  const { user, token } = useContext(UserContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || !user.id) {
      navigate('/login');
      return;
    }
    if (!token) {
      setError('Authentication required. Please log in again.');
      setLoading(false);
      return;
    }
    fetchBookingHistory();
  }, [user, token, navigate]);

  const fetchBookingHistory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/customers/${user.id}/bookings`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setBookings(response.data);
    } catch (error) {
      setError('Failed to load booking history');
    } finally {
      setLoading(false);
    }
  };

  const downloadTicket = (booking) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Movie Ticket', 105, 20, null, null, 'center');
    doc.setFontSize(12);
    doc.text(`Booking ID: ${booking.id}`, 20, 40);
    doc.text(`Movie: ${booking.movieName}`, 20, 50);
    doc.text(`Theatre: ${booking.theatre}`, 20, 60);
    doc.text(`City: ${booking.city}`, 20, 70);
    doc.text(`Screen: ${booking.screenName}`, 20, 80);
    doc.text(`Date: ${new Date(booking.date).toLocaleDateString('en-IN')}`, 20, 90);
    doc.text(`Time: ${booking.time}`, 20, 100);
    doc.text(`Seats: ${booking.seats}`, 20, 110);
    doc.text(`Total Amount: ₹${booking.totalAmount}`, 20, 120);
    doc.save(`ticket_${booking.id}.pdf`);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '120px auto', padding: '30px', backgroundColor: '#1A1A1A', borderRadius: '12px', color: 'white' }}>
      <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '40px', fontSize: '2rem' }}>Booking History</h2>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>Loading booking history...</p>
      ) : error ? (
        <p style={{ textAlign: 'center', color: '#ef4444' }}>{error}</p>
      ) : bookings.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#222222', borderRadius: '8px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ backgroundColor: '#333333', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Movie Title</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Theatre Name</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>City</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Screen Name</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Date & Show Time</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Seats</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Total Amount</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Ticket Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              const formattedDate = new Date(booking.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              });
              return (
                <tr key={booking.id} style={{ backgroundColor: index % 2 === 0 ? '#222222' : '#2A2A2A', borderBottom: index !== bookings.length - 1 ? '1px solid #4b5563' : 'none' }}>
                  <td style={{ padding: '15px' }}>{booking.movieName}</td>
                  <td style={{ padding: '15px' }}>{booking.theatre}</td>
                  <td style={{ padding: '15px' }}>{booking.city}</td>
                  <td style={{ padding: '15px' }}>{booking.screenName}</td>
                  <td style={{ padding: '15px' }}>{formattedDate} at {booking.time}</td>
                  <td style={{ padding: '15px' }}>{booking.seats}</td>
                  <td style={{ padding: '15px' }}>₹{booking.totalAmount}</td>
                  <td style={{ padding: '15px' }}>
                    <button
                      onClick={() => downloadTicket(booking)}
                      style={{
                        backgroundColor: '#2563EB',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      Download Ticket
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>No booking history available.</p>
      )}
    </div>
  );
};

export default BookingHistoryPage;
