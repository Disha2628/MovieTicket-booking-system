import React from 'react';

const CardDetails = ({ cardDetails, setCardDetails }) => {
  return (
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
  );
};

export default CardDetails;
