import React, { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";
import History from "./History";
import "./Wallet.css"; // Your custom CSS

export default function App() {
  const [mainBalance, setMainBalance] = useState(0.0);
  const [bonusBalance, setBonusBalance] = useState(0.0);
  const [selected, setSelected] = useState("Deposit");

  const renderComponent = () => {
    switch (selected) {
      case "Deposit":
        return <Deposit />;
      case "Withdraw":
        return <Withdraw  />;
      case "Transfer":
        return <Transfer />;
      case "History":
        return <History />;
      default:
        return <div>Please select an option</div>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 d-flex flex-column justify-content-center ">
          <button
            onClick={() => setSelected("Deposit")}
            className={`btn ${selected === "Deposit" ? "selected" : ""}`}
          >
            <i className="fas fa-wallet"></i> Deposit
          </button>
          <button
            onClick={() => setSelected("Withdraw")}
            className={`btn ${selected === "Withdraw" ? "selected" : ""}`}
          >
            <i className="fas fa-arrow-down"></i> Withdraw
          </button>
          <button
            onClick={() => setSelected("Transfer")}
            className={`btn ${selected === "Transfer" ? "selected" : ""}`}
          >
            <i className="fas fa-exchange-alt"></i> Transfer
          </button>
          <button
            onClick={() => setSelected("History")}
            className={`btn ${selected === "History" ? "selected" : ""}`}
          >
            <i className="fas fa-history"></i> History
          </button>
        </div>

        <div className="col-10">
          <div className="balance-section">
            <div className="balance-box">
              <p>Main Balance</p>
              <p>ETB {mainBalance.toFixed(2)} Birr</p>
            </div>
            <div className="balance-box">
              <p>Bonus Balance</p>
              <p>ETB {bonusBalance.toFixed(2)} Birr</p>
            </div>
          </div>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
