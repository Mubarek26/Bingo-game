import styles from "./BalanceButton.module.css"; // Import the CSS module

const BalanceButton = ({ balance }) => {
  return (
    <div className={styles.balanceContainer}>
      <button className={styles.balanceButton}>Balance: ${balance}</button>
    </div>
  );
};

export default BalanceButton;
