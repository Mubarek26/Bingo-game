import React, { useState } from 'react';
import styles from './Deposit.module.css'; // Import the module

const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [mainBalance, setMainBalance] = useState(0);

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };


  return (
    <div className={styles.depositContainer}>
      <div className={styles.depositSection}>
        <div className={styles.depositInput}>
          <input
            type="number"
            value={depositAmount}
            onChange={handleDepositChange}
            placeholder="Deposit Amount"
            min="0"
          />
        </div>
      </div>

      <div className={styles.transactionSection}>
        <button className={`${styles.transactionButton} ${styles.featured}`}>⭐ Better Transaction Fee</button>
        <button className={styles.transactionButton}>Transaction Checker</button>
        <button className={styles.transactionButton}>Telebirr</button>

        <button className={`${styles.transactionButton} ${styles.featured}`}>⭐ Better Transaction Fee</button>
        <button className={styles.transactionButton}>Transaction Checker</button>
        <button className={styles.transactionButton}>CBE Birr</button>
      </div>
    </div>
  );
};

export default Deposit;
