import React from 'react';
import '../pages/BingoCaller.css'
const BingoCardContainer = ({ bingoCard, calledNumbers }) => {
  return (
    <div className="bingo-card-container">
      <h3>Winner Cards</h3>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bingo-card">
          {bingoCard.map((row, rowIndex) => (
            <div key={rowIndex} className="card-row">
              {row.map((num, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`card-cell ${num === 'FREE' ? 'free' : calledNumbers.includes(num) ? 'called' : ''}`}
                >
                  {num}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BingoCardContainer;
