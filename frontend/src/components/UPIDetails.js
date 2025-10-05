import React from 'react';

const UPIDetails = ({ upiSelectedOption, setUpiSelectedOption }) => {
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
            marginTop: '10px',
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
  );
};

export default UPIDetails;
