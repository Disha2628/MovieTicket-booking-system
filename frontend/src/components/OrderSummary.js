import React from 'react';

const OrderSummary = ({ movieName, selectedShow, totalCost, convenienceFee, donation, orderTotal, handlePayment, canClickPayNow }) => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#222222',
        borderRadius: '8px',
        padding: '20px',
        height: 'fit-content',
        color: 'white',
      }}
    >
      <h3 style={{ marginBottom: '15px', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>{movieName}</h3>
      <div style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '10px' }}>
        {selectedShow.theatre} | {selectedShow.show.fullDate?.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} | {selectedShow.show.time}
      </div>
      <div style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '10px' }}>
        Screen 3 (example)
      </div>
      <hr style={{ borderColor: '#374151' }} />
      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#9CA3AF' }}>Ticket(s) price</span>
          <span style={{ color: 'white' }}>₹{totalCost.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#9CA3AF' }}>Convenience fees</span>
          <span style={{ color: 'white' }}>₹{convenienceFee}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#60A5FA' }}>
          <span>Give to Underprivileged Musicians</span>
          <span>₹{donation.toFixed(2)}</span>
        </div>
        <hr style={{ borderColor: '#374151' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
          <span style={{ color: '#9CA3AF' }}>Order total</span>
          <span style={{ color: '#2563EB' }}>₹{orderTotal}</span>
        </div>
      </div>
      <hr style={{ borderColor: '#374151' }} />
      <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#9CA3AF' }}>
        <strong style={{ color: 'white' }}>Your details</strong>
        <div>disha2603@gmail.com</div>
        <div>9607172625 | Madhya Pradesh</div>
      </div>
      <hr style={{ borderColor: '#374151' }} />
      <div style={{ marginTop: '10px', cursor: 'pointer', color: '#9CA3AF', fontWeight: 'bold' }}>
        Apply Offers
      </div>
      <hr style={{ borderColor: '#374151' }} />
      <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#9CA3AF' }}>
        By proceeding, I express my consent to complete this transaction.
      </div>
      <button
        onClick={handlePayment}
        disabled={!canClickPayNow}
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '15px',
          backgroundColor: canClickPayNow ? '#2563EB' : '#a3a3a3',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          cursor: canClickPayNow ? 'pointer' : 'not-allowed',
          color: 'white',
        }}
      >
        Secure Pay Now
      </button>
    </div>
  );
};

export default OrderSummary;
