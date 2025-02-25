import { useState } from "react";
import { Link } from "react-router-dom";
import "./Wallet.css"; // Import the new CSS file

const Wallet = () => {
  const [mainBalance, setMainBalance] = useState(1000);
  const [bonusBalance, setBonusBalance] = useState(500);
  const [depositAmount, setDepositAmount] = useState(0);
  const [selectedButton, setSelectedButton] = useState("Wallet");

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleBankSelection = (bank) => {
    // Handle logic for selecting a bank
    console.log(`Selected bank: ${bank}`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left side with navigation buttons */}
        <div className="col-md-3">
          <ul className="list-unstyled">
            {["Wallet", "Profile", "History", "Settings"].map((button) => (
              <li
                key={button}
                className={`nav-item ${selectedButton === button ? "active" : ""}`}
                onClick={() => setSelectedButton(button)}
              >
                <Link to={`/${button.toLowerCase()}`} className="nav-link">
                  {button}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side with balance and deposit */}
        <div className="col-md-9">
          {/* Balance Section */}
          <div className="row">
            <div className="col-md-6">
              <h3>Main Balance: ${mainBalance}</h3>
            </div>
            <div className="col-md-6">
              <h3>Bonus Balance: ${bonusBalance}</h3>
            </div>
          </div>

          {/* Deposit Field */}
          <div className="mt-4">
            <label htmlFor="depositAmount" className="form-label">
              Enter Deposit Amount
            </label>
            <input
              type="number"
              id="depositAmount"
              className="form-control"
              value={depositAmount}
              onChange={handleDepositChange}
            />
          </div>

          {/* Bank Selection */}
          <div className="mt-4">
            <h4>Select a Bank</h4>
            <div className="row">
              {["Bank A", "Bank B", "Bank C", "Bank D", "Bank E", "Bank F"].map((bank, index) => (
                <div key={index} className="col-12 col-md-4 mb-3">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleBankSelection(bank)}
                  >
                    {bank}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
