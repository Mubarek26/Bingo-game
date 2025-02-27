import React, { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";
import WalletHistory from "./WalletHistory";
import "./Wallet.css"; // Your custom CSS

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
    <div className="">
      <div className="row">
        <div className="col balance-box">
          <p>Main Balance</p>
          <p>ETB {mainBalance.toFixed(2)} Birr</p>
        </div>
        <div className="col balance-box">
          <p>Bonus Balance</p>
          <p>ETB {bonusBalance.toFixed(2)} Birr</p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button
          onClick={() => setSelected("Deposit")}
          className={`btn ${selected === "Deposit" ? "selected" : ""}`}
        >
          Deposit
        </button>
        <button
          onClick={() => setSelected("Withdraw")}
          className={`btn ${selected === "Withdraw" ? "selected" : ""}`}
        >
          Withdraw
        </button>
        <button
          onClick={() => setSelected("Transfer")}
          className={`btn ${selected === "Transfer" ? "selected" : ""}`}
        >
          Transfer
        </button>
        <button
          onClick={() => setSelected("History")}
          className={`btn ${selected === "History" ? "selected" : ""}`}
        >
          History
        </button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default Wallet;
