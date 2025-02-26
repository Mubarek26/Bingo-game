import React from "react";
import "./WinLossPopup.css";

const WinLossPopup = () => {
  const status = "loss"; // Static: Can be "win" or "loss"
  const amount = 510; // Static: Example amount
  const cardNumber = 76; // Static: Example card number

  const bingoBoard = [
    [6, 23, 37, 49, 75],
    [2, 38, 19, 60, 64],
    [10, 36, "F", 54, 45],
    [4, 18, 50, 11, 55],
    [20, 28, 31, 46, 72],
  ];

  return (
    <div className="popup-overlay">
      <div className={`popup-container ${status === "win" ? "win" : "loss"}`}>
        <h2 className="popup-title">
          {status === "win" ? "🎉 You Won!" : "😢 You Lost"}
        </h2>
        <p className="popup-amount">Amount: {amount} ETB</p>

        {/* Static Bingo Board */}
        <div className="popup-card-grid">
          <div className="letter-row">
            {["B", "I", "N", "G", "O"].map((letter, index) => (
              <div key={index} className="popup-letter">
                {letter}
              </div>
            ))}
          </div>
          {bingoBoard.map((row, rowIndex) => (
            <div key={rowIndex} className="number-row">
              {row.map((num, colIndex) => (
                <div
                  key={colIndex}
                  className={`popup-number-cell ${num === "F" ? "free" : ""}`}
                >
                  {num}
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="popup-button">Play Again</button>
      </div>
    </div>
  );
};

export default WinLossPopup;
