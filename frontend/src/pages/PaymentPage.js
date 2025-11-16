import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import OrderSummary from '../components/OrderSummary';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName, selectedSeats } = location.state || {};

  const [seatPrices, setSeatPrices] = useState({});
  const [donationChecked, setDonationChecked] = useState(false);

  // Fetch seat prices from API
  useEffect(() => {
    const fetchSeatPrices = async () => {
      if (!selectedShow || !selectedSeats || selectedSeats.length === 0) return;

      try {
        const response = await axios.get('http://localhost:5000/api/seats/prices', {
          params: {
            show_id: selectedShow.show.show_id,
            seat_names: selectedSeats.join(',')
          }
        });

        if (response.data.success) {
          setSeatPrices(response.data.prices);
        }
      } catch (error) {
        console.error('Error fetching seat prices:', error);
        // Fallback to hardcoded prices if API fails
        const fallbackPrices = {};
        selectedSeats.forEach(seat => {
          const row = seat.charAt(0);
          if (row === 'A') fallbackPrices[seat] = 280;
          else if (['B', 'C', 'D', 'E'].includes(row)) fallbackPrices[seat] = 220;
          else if (['I', 'J'].includes(row)) fallbackPrices[seat] = 180;
          else fallbackPrices[seat] = 0;
        });
        setSeatPrices(fallbackPrices);
      }
    };

    fetchSeatPrices();
  }, [selectedShow, selectedSeats]);

  const totalCost = selectedSeats.reduce((sum, seat) => sum + (seatPrices[seat] || 0), 0);
  const convenienceFee = (totalCost * 0.16).toFixed(2);
  const donationAmount = donationChecked ? 2.00 : 0;
  const orderTotal = (totalCost + parseFloat(convenienceFee) + donationAmount).toFixed(2);

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
      <div className="p-5 text-white">
        Missing booking info.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8">
          <OrderSummary
            movieName={movieName}
            selectedShow={selectedShow}
            totalCost={totalCost}
            convenienceFee={convenienceFee}
            donationAmount={donationAmount}
            donationChecked={donationChecked}
            setDonationChecked={setDonationChecked}
            orderTotal={orderTotal}
            handlePayment={handlePayment}
            canClickPayNow={true}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
