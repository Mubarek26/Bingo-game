
import "./BalanceButton.css"; // Import the CSS file

const BalanceButton = ({ balance }) => {
  return (
    <div className="balance-container">
      <button className="balance-button">Balance: ${balance}</button>
    </div>
  );
};

export default BalanceButton;
