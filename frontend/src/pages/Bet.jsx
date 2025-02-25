import React from "react";
import "./Bet.css";

const stakes = [
  { amount: 10, active: "0:39", possibleWin: 17 },
  { amount: 20, active: "0:45", possibleWin: 33 },
  { amount: 30, active: "None", possibleWin: "-" },
  { amount: 50, active: "None", possibleWin: "-" },
  { amount: 80, active: "None", possibleWin: "-" },
  { amount: 100, active: "None", possibleWin: "-" },
  { amount: 150, active: "0:45", possibleWin: 246 },
  { amount: 200, active: "None", possibleWin: "-" },
  { amount: 300, active: "0:44", possibleWin: 504 },
];

const BettingInterface = () => {
    return (
    <div className="bet-container">
      <h1 className="title">Please Choose Your Stake</h1>
      <div className="table-container">
        <div className="table-header">
          <span>Stake</span>
          <span>Active</span>
          <span>Possible Win</span>
          <span>Join</span>
        </div>
        {stakes.map((stake, index) => (
          <div key={index} className="table-row">
            <span>{stake.amount} birr</span>
            <span className={stake.active !== "None" ? "active-time" : "inactive-time"}>
              {stake.active}
            </span>
            <span>{stake.possibleWin !== "-" ? `${stake.possibleWin} Birr` : "-"}</span>
            <button className="join-button">Join »</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BettingInterface;
