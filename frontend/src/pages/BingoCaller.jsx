import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./BingoCaller.css"; // Import custom styles

const BingoGame = () => {
  // Bingo board (1-75)
  const boardNumbers = Array.from({ length: 75 }, (_, i) => i + 1);

  // Called numbers (for demo, select some numbers)
  const calledNumbers = [1, 9, 12, 16, 29, 31, 39, 46, 55, 57, 61, 70];

  // Bingo card numbers
  const bingoCard = [
    [2, 27, 35, 50, 68],
    [9, 25, 38, 47, 62],
    [8, 22, "F", 57, 67], // "F" is free space
    [4, 20, 39, 59, 63],
    [12, 3, 33, 56, 64],
  ];

  // State to track the latest number called
  const [latestNumber, setLatestNumber] = useState(29);
  const bingoLetters = ["B", "I", "N", "G", "O"];
  return (
    <div className="bingo-wrapper row">
      {/* Number Called Display */}
      <div className="bingo-call-display text-center col-12 m-auto col-lg-4">
        <div className="bingo-number-circle">{latestNumber}</div>
        <p>Balls Called: {calledNumbers.length}</p>
        <p>Win - 510 ETB</p>
      </div>

      {/* Bingo Board (Visible Only on Large Screens) */}
          <div className="bingo-main-board d-none d-lg-grid col-lg-6">
          
              {boardNumbers.map((num, index) => (
                  
              
            
            <div
            
            key={num}
            className={`bingo-board-cell ${
                num === latestNumber
                ? "bingo-latest"
                : calledNumbers.includes(num)
                ? "bingo-called"
                : ""
                }`}
                >
                {num}
                </div>
            ))}
            </div>

      {/* Bingo Card */}
      <div className="bingo-card-section mt-5">
        <div className="bingo-card-box">
          <div className="bingo-card-header">
            <span>B</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>O</span>
          </div>

          {bingoCard.map((row, rowIndex) => (
            <div key={rowIndex} className="bingo-card-row">
              {row.map((num, colIndex) => (
                <div
                  key={colIndex}
                  className={`bingo-card-cell ${
                    calledNumbers.includes(num) || num === "F" ? "bingo-marked" : ""
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          ))}
        </div>
      <button className="btn btn-primary mt-3 bingo-button">Bingo</button>
      </div>

      {/* Bingo Button */}
    </div>
  );
};

export default BingoGame;
