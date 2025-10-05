import React from 'react';

const WalletDetails = ({ walletSelectedOption, setWalletSelectedOption }) => {
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
  );
};

export default WalletDetails;
