import React from 'react';

const NetBankingDetails = ({ netBankingSelectedOption, setNetBankingSelectedOption }) => {
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
  );
};

export default NetBankingDetails;
