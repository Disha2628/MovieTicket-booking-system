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
  );
};

export default PaymentOptions;
