import React, { useState, useEffect } from 'react';

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Load bookings from localStorage
    const storedBookings = localStorage.getItem('bookingHistory');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    } else {
      // Initialize with sample data if no data exists
      const sampleBookings = [
        {
          id: 1,
          movieName: 'Inception',
          theatre: 'PVR Cinemas',
          date: '2023-10-15',
          time: '18:00',
          seats: 'A1, A2',
          totalAmount: 440
        },
        {
          id: 2,
          movieName: 'The Dark Knight',
          theatre: 'INOX',
          date: '2023-10-10',
          time: '20:30',
          seats: 'B3, B4, B5',
          totalAmount: 660
        },
        {
          id: 3,
          movieName: 'Interstellar',
          theatre: 'Cinepolis',
          date: '2023-09-25',
          time: '15:00',
          seats: 'C1',
          totalAmount: 280
        }
      ];
      localStorage.setItem('bookingHistory', JSON.stringify(sampleBookings));
      setBookings(sampleBookings);
    }
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '120px auto', padding: '30px', backgroundColor: '#1f2937', borderRadius: '12px', border: '5px solid hsl(47, 80.90%, 61.00%)', color: 'white' }}>
      <h2 style={{ textAlign: 'center', color: '#d4af37', marginBottom: '40px', fontSize: '2rem' }}>Booking History</h2>

      {bookings.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#374151', borderRadius: '8px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ backgroundColor: '#d4af37', color: '#1f2937' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Movie Title</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Theatre Name</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Date & Show Time</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Seats</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id} style={{ borderBottom: index !== bookings.length - 1 ? '1px solid #4b5563' : 'none' }}>
                <td style={{ padding: '15px' }}>{booking.movieName}</td>
                <td style={{ padding: '15px' }}>{booking.theatre}</td>
                <td style={{ padding: '15px' }}>{booking.date} at {booking.time}</td>
                <td style={{ padding: '15px' }}>{booking.seats}</td>
                <td style={{ padding: '15px' }}>₹{booking.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', color: '#9ca3af' }}>No booking history available.</p>
      )}
    </div>
  );
};

export default BookingHistoryPage;
