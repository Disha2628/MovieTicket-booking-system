import React from 'react';

const PaymentOptions = ({ selectedPaymentMethod, setSelectedPaymentMethod, setShowUPIDetails }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <button
        onClick={() => {
          setSelectedPaymentMethod('UPI');
          setShowUPIDetails(true);
        }}
        style={{
          padding: '15px',
          border: 'none',
          borderLeft: selectedPaymentMethod === 'UPI' ? '4px solid #2563EB' : 'none',
          backgroundColor: selectedPaymentMethod === 'UPI' ? '#333333' : '#222222',
          cursor: 'pointer',
          textAlign: 'left',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: 'white',
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
          border: 'none',
          borderLeft: selectedPaymentMethod === 'Card' ? '4px solid #2563EB' : 'none',
          backgroundColor: selectedPaymentMethod === 'Card' ? '#333333' : '#222222',
          cursor: 'pointer',
          textAlign: 'left',
          fontWeight: '600',
          color: 'white',
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
          border: 'none',
          borderLeft: selectedPaymentMethod === 'Wallet' ? '4px solid #2563EB' : 'none',
          backgroundColor: selectedPaymentMethod === 'Wallet' ? '#333333' : '#222222',
          cursor: 'pointer',
          textAlign: 'left',
          fontWeight: '600',
          color: 'white',
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
          border: 'none',
          borderLeft: selectedPaymentMethod === 'NetBanking' ? '4px solid #2563EB' : 'none',
          backgroundColor: selectedPaymentMethod === 'NetBanking' ? '#333333' : '#222222',
          cursor: 'pointer',
          textAlign: 'left',
          fontWeight: '600',
          color: 'white',
        }}
      >
        Net Banking
      </button>
    </div>
  );
};

export default PaymentOptions;
