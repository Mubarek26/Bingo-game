import React from 'react';
import '../pages/BingoCaller.css'
const BingoNumbers = ({ bingoNumbers, calledNumbers }) => {
  return (
    <div className="bingo-numbers">
      {Object.entries(bingoNumbers).map(([letter, numbers]) => (
        <div key={letter} className="number-column">
          <h3>{letter}</h3>
          {numbers.map(num => (
            <span
              key={num}
              className={`bingo-number ${calledNumbers.includes(num) ? 'called' : ''}`}
            >
              {num}
            </span>
          ))}
          </div>
          
      ))}
          
    </div>
  );
};

export default BingoNumbers;
