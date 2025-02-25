import React, { useState } from 'react';
import './Deposit.css'; // You'll need to create a CSS file for styling

const Deposit = () => {
  
  const [depositAmount, setDepositAmount] = useState('');

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleDeposit = () => {
    if (depositAmount && !isNaN(depositAmount) && parseFloat(depositAmount) > 0) {
      setMainBalance(prev => prev + parseFloat(depositAmount));
      setDepositAmount('');
    }
  };

  const handleWithdraw = () => {
    if (mainBalance > 0) {
      setMainBalance(0);
    }
  };

  const handleTransfer = () => {
    // Add transfer logic here
    alert('Transfer functionality would be implemented here');
  };

  return (
    <div className="deposit-container">
      <div className="deposit-section">
        <div className="deposit-input">
          <input
            type="number"
            value={depositAmount}
            onChange={handleDepositChange}
            placeholder="Deposit Amount"
            min="0"
          />
        </div>
      </div>

      <div className="transaction-section">
        <button className="transaction-button featured">
          <span role="img" aria-label="star">⭐</span>
          Better Transaction Fee
        </button>
        <button className="transaction-button">Transaction Checker</button>
        <button className="transaction-button">Telebirr</button>
        
        <button className="transaction-button featured">
          <span role="img" aria-label="star">⭐</span>
          Better Transaction Fee
        </button>
        <button className="transaction-button">Transaction Checker</button>
        <button className="transaction-button">CBE Birr</button>
      </div>
    </div>
  );
};

export default Deposit;