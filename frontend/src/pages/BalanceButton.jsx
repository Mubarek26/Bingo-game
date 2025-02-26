
import "./BalanceButton.css"; // Import the CSS file

const BalanceButton = ({ balance }) => {
  return (
      <button className="balance-button">Balance: ${balance}</button>

  );
};

export default BalanceButton;
