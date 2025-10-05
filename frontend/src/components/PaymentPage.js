
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
    navigate('/');
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => {
              setSelectedPaymentMethod('UPI');
              setShowUPIDetails(true);
            }}
            style={{
              padding: '15px',
              border: selectedPaymentMethod === 'UPI' ? '2px solid #d4af37' : '1px solid #374151',
              backgroundColor: selectedPaymentMethod === 'UPI' ? '#fef3c7' : 'transparent',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: selectedPaymentMethod === 'UPI' ? '#92400e' : 'white',
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/UPI_Logo.svg/1200px-UPI_Logo.svg.png"
              alt="UPI"
              style={{ width: '30px' }}
            />
            Pay by any UPI App
          </button>
          <button
            onClick={() => {
              setSelectedPaymentMethod('Card');
              setShowUPIDetails(false);
            }}
            style={{
              padding: '15px',
              border: selectedPaymentMethod === 'Card' ? '2px solid #d4af37' : '1px solid #374151',
              backgroundColor: selectedPaymentMethod === 'Card' ? '#fef3c7' : 'transparent',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: '600',
              color: selectedPaymentMethod === 'Card' ? '#92400e' : 'white',
            }}
          >
            Debit/Credit Card
          </button>
          <button
            onClick={() => {
              setSelectedPaymentMethod('Wallet');
              setShowUPIDetails(false);
            }}
            style={{
              padding: '15px',
              border: selectedPaymentMethod === 'Wallet' ? '2px solid #d4af37' : '1px solid #374151',
              backgroundColor: selectedPaymentMethod === 'Wallet' ? '#fef3c7' : 'transparent',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: '600',
              color: selectedPaymentMethod === 'Wallet' ? '#92400e' : 'white',
            }}
          >
            Mobile Wallets
          </button>
          <button
            onClick={() => {
              setSelectedPaymentMethod('NetBanking');
              setShowUPIDetails(false);
            }}
            style={{
              padding: '15px',
              border: selectedPaymentMethod === 'NetBanking' ? '2px solid #d4af37' : '1px solid #374151',
              backgroundColor: selectedPaymentMethod === 'NetBanking' ? '#fef3c7' : 'transparent',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: '600',
              color: selectedPaymentMethod === 'NetBanking' ? '#92400e' : 'white',
            }}
          >
            Net Banking
          </button>
        </div>

        {/* UPI Details */}
        {showUPIDetails && selectedPaymentMethod === 'UPI' && (
          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              border: '1px solid #374151',
              borderRadius: '8px',
              backgroundColor: '#fef3c7',
              color: '#92400e',
            }}
          >
            <h4>Pay by any UPI App</h4>
            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => setUpiSelectedOption('Google Pay')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  width: '100%',
                  border: upiSelectedOption === 'Google Pay' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  backgroundColor: upiSelectedOption === 'Google Pay' ? '#fef3c7' : 'white',
                  color: upiSelectedOption === 'Google Pay' ? '#92400e' : 'black',
                  marginBottom: '10px'
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png"
                  alt="Google Pay"
                  style={{ width: '30px' }}
                />
                Google Pay
              </button>
              <button
                onClick={() => setUpiSelectedOption('Phone Pay')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  width: '100%',
                  border: upiSelectedOption === 'Phone Pay' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  backgroundColor: upiSelectedOption === 'Phone Pay' ? '#fef3c7' : 'white',
                  color: upiSelectedOption === 'Phone Pay' ? '#92400e' : 'black',
                  marginBottom: '10px'
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png"
                  alt="Phone Pay"
                  style={{ width: '30px' }}
                />
                Phone Pay
              </button>
              <button
                onClick={() => setUpiSelectedOption('PayTM')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  width: '100%',
                  border: upiSelectedOption === 'PayTM' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  backgroundColor: upiSelectedOption === 'PayTM' ? '#fef3c7' : 'white',
                  color: upiSelectedOption === 'PayTM' ? '#92400e' : 'black',
                  marginBottom: '10px'
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png"
                  alt="PayTM"
                  style={{ width: '30px' }}
                />
                PayTM
              </button>
              <button
                style={{
                  display: 'flex',
                  marginTop : '10px',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  width: '100%',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  marginTop: '10px',
                  cursor: 'pointer',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              >
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>+</span> Add new UPI
              </button>
            </div>
          </div>
        )}

        {/* Mobile Wallet Details */}
        {selectedPaymentMethod === 'Wallet' && (
          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              border: '1px solid #374151',
              borderRadius: '8px',
              backgroundColor: '#fef3c7',
              color: '#92400e',
            }}
          >
            <h4>Mobile Wallets</h4>
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                onClick={() => setWalletSelectedOption('Amazon Pay Balance')}
                style={{
                  border: walletSelectedOption === 'Amazon Pay Balance' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: walletSelectedOption === 'Amazon Pay Balance' ? '#fef3c7' : 'white',
                  color: walletSelectedOption === 'Amazon Pay Balance' ? '#92400e' : 'black',
                }}
              >
                <strong>Amazon Pay Balance</strong>
                <div style={{ fontSize: '0.8rem' }}>
                  Pay using Amazon Pay Balance and get upto INR 75* back. *T&C Apply
                </div>
              </div>
              <div
                onClick={() => setWalletSelectedOption('Paytm (Wallet | UPI | Saved Cards)')}
                style={{
                  border: walletSelectedOption === 'Paytm (Wallet | UPI | Saved Cards)' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: walletSelectedOption === 'Paytm (Wallet | UPI | Saved Cards)' ? '#fef3c7' : 'white',
                  color: walletSelectedOption === 'Paytm (Wallet | UPI | Saved Cards)' ? '#92400e' : 'black',
                }}
              >
                <strong>Paytm (Wallet | UPI | Saved Cards)</strong>
              </div>
              <div
                onClick={() => setWalletSelectedOption('PayZapp (Wallet | Saved Cards)')}
                style={{
                  border: walletSelectedOption === 'PayZapp (Wallet | Saved Cards)' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: walletSelectedOption === 'PayZapp (Wallet | Saved Cards)' ? '#fef3c7' : 'white',
                  color: walletSelectedOption === 'PayZapp (Wallet | Saved Cards)' ? '#92400e' : 'black',
                }}
              >
                <strong>PayZapp (Wallet | Saved Cards)</strong>
              </div>
            </div>
          </div>
        )}
        {/* Net Banking Details */}
        {selectedPaymentMethod === 'NetBanking' && (
          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              border: '1px solid #374151',
              borderRadius: '8px',
              backgroundColor: '#fef3c7',
              color: '#92400e',
            }}
          >
            <h4>Net Banking</h4>
            <input
              type="text"
              placeholder="Search by Bank Name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
            />
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Popular Banks</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
              <div
                onClick={() => setNetBankingSelectedOption('SBI Bank')}
                style={{
                  border: netBankingSelectedOption === 'SBI Bank' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: netBankingSelectedOption === 'SBI Bank' ? '#fef3c7' : 'white',
                  color: netBankingSelectedOption === 'SBI Bank' ? '#92400e' : 'black',
                }}
              >
                SBI Bank
                <div style={{ fontSize: '0.8rem', color: 'red' }}>
                  SBI bank is currently facing issues, please try UPI or other options.
                </div>
              </div>
              <div
                onClick={() => setNetBankingSelectedOption('HDFC Bank')}
                style={{
                  border: netBankingSelectedOption === 'HDFC Bank' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: netBankingSelectedOption === 'HDFC Bank' ? '#fef3c7' : 'white',
                  color: netBankingSelectedOption === 'HDFC Bank' ? '#92400e' : 'black',
                }}
              >
                HDFC Bank
              </div>
              <div
                onClick={() => setNetBankingSelectedOption('ICICI Bank')}
                style={{
                  border: netBankingSelectedOption === 'ICICI Bank' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: netBankingSelectedOption === 'ICICI Bank' ? '#fef3c7' : 'white',
                  color: netBankingSelectedOption === 'ICICI Bank' ? '#92400e' : 'black',
                }}
              >
                ICICI Bank
              </div>
              <div
                onClick={() => setNetBankingSelectedOption('AXIS Bank')}
                style={{
                  border: netBankingSelectedOption === 'AXIS Bank' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: netBankingSelectedOption === 'AXIS Bank' ? '#fef3c7' : 'white',
                  color: netBankingSelectedOption === 'AXIS Bank' ? '#92400e' : 'black',
                }}
              >
                AXIS Bank
              </div>
            </div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Other Banks</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                onClick={() => setNetBankingSelectedOption('Kotak Bank')}
                style={{
                  border: netBankingSelectedOption === 'Kotak Bank' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: netBankingSelectedOption === 'Kotak Bank' ? '#fef3c7' : 'white',
                  color: netBankingSelectedOption === 'Kotak Bank' ? '#92400e' : 'black',
                }}
              >
                Kotak Bank
              </div>
              <div
                onClick={() => setNetBankingSelectedOption('Bank of India')}
                style={{
                  border: netBankingSelectedOption === 'Bank of India' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: netBankingSelectedOption === 'Bank of India' ? '#fef3c7' : 'white',
                  color: netBankingSelectedOption === 'Bank of India' ? '#92400e' : 'black',
                }}
              >
                Bank of India
              </div>
              <div
                onClick={() => setNetBankingSelectedOption('Bank of Maharashtra')}
                style={{
                  border: netBankingSelectedOption === 'Bank of Maharashtra' ? '2px solid #d4af37' : '1px solid #ddd',
                  borderRadius: '6px',
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: netBankingSelectedOption === 'Bank of Maharashtra' ? '#fef3c7' : 'white',
                  color: netBankingSelectedOption === 'Bank of Maharashtra' ? '#92400e' : 'black',
                }}
              >
                Bank of Maharashtra
              </div>
            </div>
          </div>
        )}
        {/* Debit/Credit Card Details */}
        {selectedPaymentMethod === 'Card' && (
          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              border: '1px solid #374151',
              borderRadius: '8px',
              backgroundColor: '#fef3c7',
              color: '#92400e',
            }}
          >
            <h4>Pay by Debit/Credit Card</h4>
            <form style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="text"
                placeholder="Card Number"
                maxLength={19}
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
              />
              <input
                type="text"
                placeholder="Name on Card"
                value={cardDetails.nameOnCard}
                onChange={(e) => setCardDetails({ ...cardDetails, nameOnCard: e.target.value })}
                style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  placeholder="Expiry MM/YY"
                  maxLength={5}
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  maxLength={3}
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                />
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Right Panel - Order Summary */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#111827',
          borderRadius: '8px',
          padding: '20px',
          height: 'fit-content',
          color: 'white',
        }}
      >
        <h3 style={{ marginBottom: '15px' }}>{movieName}</h3>
        <div style={{ fontSize: '0.9rem', color: '#d4af37', marginBottom: '10px' }}>
          {selectedShow.theatre} | {selectedShow.show.fullDate?.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} | {selectedShow.show.time}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#d4af37', marginBottom: '10px' }}>
          Screen 3 (example)
        </div>
        <hr style={{ borderColor: '#374151' }} />
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Ticket(s) price</span>
            <span>₹{totalCost.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Convenience fees</span>
            <span>₹{convenienceFee}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ef4444' }}>
            <span>Give to Underprivileged Musicians</span>
            <span>₹{donation.toFixed(2)}</span>
          </div>
          <hr style={{ borderColor: '#374151' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
            <span>Order total</span>
            <span>₹{orderTotal}</span>
          </div>
        </div>
        <hr style={{ borderColor: '#374151' }} />
        <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#d4af37' }}>
          <strong>Your details</strong>
          <div>disha2603@gmail.com</div>
          <div>9607172625 | Madhya Pradesh</div>
        </div>
        <hr style={{ borderColor: '#374151' }} />
        <div style={{ marginTop: '10px', cursor: 'pointer', color: '#d4af37', fontWeight: 'bold' }}>
          Apply Offers
        </div>
        <hr style={{ borderColor: '#374151' }} />
        <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#d4af37' }}>
          By proceeding, I express my consent to complete this transaction.
        </div>
          <button
            onClick={handlePayment}
            disabled={!canClickPayNow()}
            style={{
              marginTop: '20px',
              width: '100%',
              padding: '15px',
              backgroundColor: canClickPayNow() ? '#d4af37' : '#a3a3a3',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: canClickPayNow() ? 'pointer' : 'not-allowed',
              color: canClickPayNow() ? '#1f2937' : '#6b7280',
            }}
          >
            Secure Pay Now
          </button>
      </div>
    </div>
  );
};

export default PaymentPage;
