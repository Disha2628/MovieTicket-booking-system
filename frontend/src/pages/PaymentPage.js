
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentOptions from '../components/PaymentOptions';
import UPIDetails from '../components/UPIDetails';
import WalletDetails from '../components/WalletDetails';
import NetBankingDetails from '../components/NetBankingDetails';
import CardDetails from '../components/CardDetails';
import OrderSummary from '../components/OrderSummary';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (!canClickPayNow()) {
      alert('Please complete the payment details before proceeding.');
      return;
    }
    alert('Payment successful! Booking confirmed.');

    // Add current booking to booking history in localStorage
    const bookingHistoryStr = localStorage.getItem('bookingHistory');
    let bookingHistory = [];
    if (bookingHistoryStr) {
      try {
        bookingHistory = JSON.parse(bookingHistoryStr);
      } catch (e) {
        bookingHistory = [];
      }
    }
    const newBooking = {
      id: bookingHistory.length > 0 ? bookingHistory[bookingHistory.length - 1].id + 1 : 1,
      movieName: movieName || 'Unknown Movie',
      theatre: selectedShow?.theatre || 'Unknown Theatre',
      date: selectedShow?.show?.fullDate ? selectedShow.show.fullDate.toLocaleDateString() : 'Unknown Date',
      time: selectedShow?.show?.time || 'Unknown Time',
      seats: selectedSeats.join(', '),
      totalAmount: parseFloat(orderTotal)
    };
    bookingHistory.push(newBooking);
    localStorage.setItem('bookingHistory', JSON.stringify(bookingHistory));

    navigate('/booking-history');
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
        border: '4px solid hsl(47, 80%, 61%)',
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
