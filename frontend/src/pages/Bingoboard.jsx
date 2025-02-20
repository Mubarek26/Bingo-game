import React from 'react';
import './Bingoboard.css';

const BingoGame = () => {
  const numbers = [
    [7, 28, 45, 59, 74],
    [1, 19, 44, 50, 71],
    [10, 16, 'F', 51, 61],
    [6, 27, 37, 47, 72],
    [3, 29, 42, 52, 70]
  ];

  const letters = ['B', 'I', 'N', 'G', 'O'];

  const getLetterColor = (letter) => {
    switch(letter) {
      case 'B': return '#3b5998';
      case 'I': return '#d4af37';
      case 'N': return '#cc0000';
      case 'G': return '#008000';
      case 'O': return '#ff4500';
      default: return 'black';
    }
  };

  return (
    <div className="game-container">
      <div className="timer">0:45</div>
      <div className="card-label">10 Birr Per Card</div>
      <div className="card">
        <h3 className="card-header">Card No. 25</h3>
        <div className="letter-row">
          {letters.map((letter, index) => (
            <div key={index} className="letter" style={{ background: getLetterColor(letter) }}>{letter}</div>
          ))}
        </div>
        <div className="number-grid">
          {numbers.map((row, rowIndex) => (
            <div key={rowIndex} className="number-row">
              {row.map((num, colIndex) => (
                <div key={colIndex} className={`number-cell ${num === 'F' ? 'free' : ''}`}>
                  {num}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => alert('Go Back')}>Go Back</button>
        <button className="button" onClick={() => alert('Confirm Cards')}>Confirm Cards</button>
      </div>
    </div>
  );
};

export default BingoGame;