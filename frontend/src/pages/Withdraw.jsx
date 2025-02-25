import React, { useState } from 'react';
import "./Withdraw.css"

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('TeleBirr');
  
  // Handle the withdrawal submission
  const handleWithdraw = (e) => {
    e.preventDefault();
    
    // Convert amount to a number and validate it
    const withdrawAmount = parseFloat(amount);
    if (withdrawAmount <= 0 || isNaN(withdrawAmount)) {
      alert('Please enter a valid amount');
      return;
    }

    // Logic for withdrawing money, you can add API calls or state updates here
    alert(`Withdrawing ${withdrawAmount} from ${selectedBank}`);
    
    // Reset the form
    setAmount('');
  };

  return (
    <div className="withdraw-container">
      <h2>Withdraw Funds</h2>

      <form onSubmit={handleWithdraw}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="input-field"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Select Bank</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="bank"
                value="TeleBirr"
                checked={selectedBank === 'TeleBirr'}
                onChange={() => setSelectedBank('TeleBirr')}
              />
              TeleBirr
            </label>
            <label>
              <input
                type="radio"
                name="bank"
                value="CBE Birr"
                checked={selectedBank === 'CBE Birr'}
                onChange={() => setSelectedBank('CBE Birr')}
              />
              CBE Birr
            </label>
          </div>
        </div>

        <button type="submit" className="withdraw-button">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
