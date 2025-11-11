
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import OrderSummary from '../components/OrderSummary';
  
const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName, selectedSeats } = location.state || {};

  // Function to get price based on row
  const getSeatPrice = (seatId) => {
    const row = seatId.charAt(0);
    if (row === 'A') return 280; // Platinum
    if (['B', 'C', 'D', 'E'].includes(row)) return 220; // Gold
    if (['I', 'J'].includes(row)) return 220; // Silver
    return 0;
  };

  const totalCost = selectedSeats.reduce((sum, seat) => sum + getSeatPrice(seat), 0);
  const convenienceFee = (totalCost * 0.16).toFixed(2); // example convenience fee 16%
  const donation = 2.00; // example donation amount
  const orderTotal = (totalCost + parseFloat(convenienceFee) + donation).toFixed(2);

  const handlePayment = async () => {
    if (!user) {
      alert('Please log in to proceed with payment.');
      return;
    }

    try {
      // Create Razorpay order
      const orderResponse = await axios.post('http://localhost:5000/api/payments/create-order', {
        amount: parseFloat(orderTotal),
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
      });

      const { order } = orderResponse.data;
      const { id: order_id, amount, currency } = order;

      // Load Razorpay script if not loaded
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_RaqZEkZRISullC", // Replace with your Razorpay key
        amount: amount,
        currency: currency,
        name: 'Movie Booking',
        description: `Booking for ${movieName}`,
        order_id: order_id,
        handler: async (response) => {
          try {
            // Verify payment
            await axios.post('http://localhost:5000/api/payments/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            // Create booking
            const bookingResponse = await axios.post('http://localhost:5000/api/bookings', {
              customerId: user.id,
              showId: selectedShow.show.show_id,
              amount: parseFloat(orderTotal),
              paymentMethod: 'Razorpay',
              seats: selectedSeats, // Assuming selectedSeats are seat_ids
            });

            alert('Payment successful! Booking confirmed.');
            navigate('/booking-history');
          } catch (error) {
            console.error('Error processing payment:', error);
            alert('Payment verification failed. Please try again.');
          }
        },
        prefill: {
          name: user.first_name + ' ' + user.last_name,
          email: user.email,
          contact: user.phn_no,
        },
        theme: {
          color: '#ffd700',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to initiate payment. Please try again.');
    }
  };

  if (!selectedShow || !selectedSeats) {
    return (
      <div style={{ padding: '20px', color: 'white' }}>
        Missing booking info.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '50px',
        color: 'white',
        maxWidth: '600px',
        margin: '110px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
      }}
    >
      <OrderSummary
        movieName={movieName}
        selectedShow={selectedShow}
        totalCost={totalCost}
        convenienceFee={convenienceFee}
        donation={donation}
        orderTotal={orderTotal}
        handlePayment={handlePayment}
        canClickPayNow={true}
      />
    </div>
  );
};

export default PaymentPage;
