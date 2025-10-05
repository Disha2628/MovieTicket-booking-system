import React from 'react';

const OrderSummary = ({ movieName, selectedShow, totalCost, convenienceFee, donation, orderTotal, handlePayment, canClickPayNow }) => {
  return (
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
        disabled={!canClickPayNow}
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '15px',
          backgroundColor: canClickPayNow ? '#d4af37' : '#a3a3a3',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          cursor: canClickPayNow ? 'pointer' : 'not-allowed',
          color: canClickPayNow ? '#1f2937' : '#6b7280',
        }}
      >
        Secure Pay Now
      </button>
    </div>
  );
};

export default OrderSummary;
