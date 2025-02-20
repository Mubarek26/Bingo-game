import React from 'react';
import './BingoCaller.css';

const BingoCaller = () => {
  const columns = ['B', 'I', 'N', 'G', 'O'];
  const numbers = [
    Array.from({length: 15}, (_, i) => i + 1),
    Array.from({length: 15}, (_, i) => i + 16),
    Array.from({length: 15}, (_, i) => i + 31),
    Array.from({length: 15}, (_, i) => i + 46),
    Array.from({length: 15}, (_, i) => i + 61)
  ];

  return (
    <div className="bingo-caller">
      <div className="caller-info">
        <div className="bingo-ball">
          <div className="ball-inner"></div>
        </div>
        <div className="caller-stats">
          <p>Balls Called: <span className="balls-called">0</span></p>
          <p>Win: <span className="win-amount">0 ETB</span></p>
        </div>
        <button className="sound-toggle">
          <span role="img" aria-label="sound">🔊</span>
        </button>
      </div>
      <div className="bingo-board">
        <h2>Good Luck!!</h2>
        <div className="number-grid">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="column">
              <div className={`column-header ${column.toLowerCase()}`}>{column}</div>
              {numbers[columnIndex].map((number, numberIndex) => (
                <div key={numberIndex} className="number-cell-call">{number}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BingoCaller;