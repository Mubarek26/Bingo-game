import React from 'react';
import '../pages/BingoCaller.css'
const YourCard = ({ title, bingoCard, calledNumbers }) => {
  return (
    <div className="bingo-card-container">
      <h3>{title}</h3>
      <div className="bingo-card">
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
    </div>
  );
};

export default YourCard;
