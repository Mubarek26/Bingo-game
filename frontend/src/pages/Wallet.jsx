import React, { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";
import WalletHistory from "./WalletHistory";
import styles from "./Wallet.module.css"; // Import the CSS Module

const Wallet = () => {
  const [mainBalance, setMainBalance] = useState(0.0);
  const [bonusBalance, setBonusBalance] = useState(0.0);
  const [selected, setSelected] = useState("Deposit");

  const renderComponent = () => {
    switch (selected) {
      case "Deposit":
        return <Deposit />;
      case "Withdraw":
        return <Withdraw />;
      case "Transfer":
        return <Transfer />;
      case "History":
        return <WalletHistory />;
      default:
        return <div>Please select an option</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.balanceBox}>
          <p>Main Balance</p>
          <p>ETB {mainBalance.toFixed(2)} Birr</p>
        </div>
        <div className={styles.balanceBox}>
          <p>Bonus Balance</p>
          <p>ETB {bonusBalance.toFixed(2)} Birr</p>
        </div>
      </div>

      <div className={styles.dFlex}>
        <button
          onClick={() => setSelected("Deposit")}
          className={`${styles.btn} ${selected === "Deposit" ? styles.selected : ""}`}
        >
          Deposit
        </button>
        <button
          onClick={() => setSelected("Withdraw")}
          className={`${styles.btn} ${selected === "Withdraw" ? styles.selected : ""}`}
        >
          Withdraw
        </button>
        <button
          onClick={() => setSelected("Transfer")}
          className={`${styles.btn} ${selected === "Transfer" ? styles.selected : ""}`}
        >
          Transfer
        </button>
        <button
          onClick={() => setSelected("History")}
          className={`${styles.btn} ${selected === "History" ? styles.selected : ""}`}
        >
          History
        </button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default Wallet;
