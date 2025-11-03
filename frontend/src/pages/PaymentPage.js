
import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import PaymentOptions from '../components/PaymentOptions';
import UPIDetails from '../components/UPIDetails';
import WalletDetails from '../components/WalletDetails';
import NetBankingDetails from '../components/NetBankingDetails';
import CardDetails from '../components/CardDetails';
import OrderSummary from '../components/OrderSummary';

console.log("Frontend Razorpay Key:", process.env.REACT_APP_RAZORPAY_KEY_ID);


const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { selectedShow, selectedSeatType, selectedSeatCount, movieName, selectedSeats } = location.state || {};

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('UPI');
  const [showUPIDetails, setShowUPIDetails] = useState(true);

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

  const [upiSelectedOption, setUpiSelectedOption] = React.useState('');
  const [cardDetails, setCardDetails] = React.useState({
    cardNumber: '',
    nameOnCard: '',
    expiry: '',
    cvv: '',
  });

  const isCardFormValid = () => {
    const { cardNumber, nameOnCard, expiry, cvv } = cardDetails;
    return (
      cardNumber.trim().length === 19 &&
      nameOnCard.trim().length > 0 &&
      expiry.trim().length === 5 &&
      cvv.trim().length === 3
    );
  };

  const isUpiOptionSelected = () => {
    return upiSelectedOption.trim().length > 0;
  };

  const [walletSelectedOption, setWalletSelectedOption] = React.useState('');
  const [netBankingSelectedOption, setNetBankingSelectedOption] = React.useState('');

  const canClickPayNow = () => {
    if (selectedPaymentMethod === 'UPI') {
      return isUpiOptionSelected();
    } else if (selectedPaymentMethod === 'Card') {
      return isCardFormValid();
    } else if (selectedPaymentMethod === 'Wallet') {
      return walletSelectedOption.trim().length > 0;
    } else if (selectedPaymentMethod === 'NetBanking') {
      return netBankingSelectedOption.trim().length > 0;
    }
    // For other payment methods, allow pay now for now
    return true;
  };

  const handlePayment = async () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (!canClickPayNow()) {
      alert('Please complete the payment details before proceeding.');
      return;
    }
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
              paymentMethod: selectedPaymentMethod,
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
        padding: '30px',
        color: 'white',
        maxWidth: '1000px',
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1f2937',
        borderRadius: '12px',
        border: '4px solid #ffd700',
        display: 'flex',
        gap: '20px',
      }}
    >
      {/* Left Panel - Payment Options */}
      <div
        style={{
          flex: 2,
          backgroundColor: '#111827',
          borderRadius: '8px',
          padding: '20px',
          color: 'white',
        }}
      >
        <h3 style={{ marginBottom: '20px', color: '#d4af37' }}>Payment options</h3>
        <PaymentOptions
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
          setShowUPIDetails={setShowUPIDetails}
        />

        {/* UPI Details */}
        {showUPIDetails && selectedPaymentMethod === 'UPI' && (
          <UPIDetails
            upiSelectedOption={upiSelectedOption}
            setUpiSelectedOption={setUpiSelectedOption}
          />
        )}

        {/* Mobile Wallet Details */}
        {selectedPaymentMethod === 'Wallet' && (
          <WalletDetails
            walletSelectedOption={walletSelectedOption}
            setWalletSelectedOption={setWalletSelectedOption}
          />
        )}
        {/* Net Banking Details */}
        {selectedPaymentMethod === 'NetBanking' && (
          <NetBankingDetails
            netBankingSelectedOption={netBankingSelectedOption}
            setNetBankingSelectedOption={setNetBankingSelectedOption}
          />
        )}
        {/* Debit/Credit Card Details */}
        {selectedPaymentMethod === 'Card' && (
          <CardDetails
            cardDetails={cardDetails}
            setCardDetails={setCardDetails}
          />
        )}
      </div>

      {/* Right Panel - Order Summary */}
      <OrderSummary
        movieName={movieName}
        selectedShow={selectedShow}
        totalCost={totalCost}
        convenienceFee={convenienceFee}
        donation={donation}
        orderTotal={orderTotal}
        handlePayment={handlePayment}
        canClickPayNow={canClickPayNow()}
      />
    </div>
  );
};

export default PaymentPage;
