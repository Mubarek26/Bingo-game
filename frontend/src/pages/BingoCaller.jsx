import React, { useState } from 'react';
import './BingoCaller.css';

const BingoGame = () => {
  const [calledNumbers, setCalledNumbers] = useState([17, 28, 39, 27, 55, 36]); // Previous 6 calls
  const [bingoCard] = useState([
    [1, 16, 31, 46, 61],
    [2, 17, 18, 47, 62],
    [3, 18, 'FREE', 48, 63],
    [4, 19, 34, 49, 64],
    [5, 20, 35, 50, 65],
  ]);

  const bingoNumbers = Array.from({ length: 75 }, (_, i) => i + 1).reduce((acc, num) => {
    const letter = 'BINGO'[(num - 1) / 15 | 0];
    acc[letter] = acc[letter] || [];
    acc[letter].push(num);
    return acc;
  }, {});

  const drawNumber = () => {
    const availableNumbers = Array.from({ length: 75 }, (_, i) => i + 1)
      .filter(num => !calledNumbers.includes(num));
    if (availableNumbers.length > 0) {
      const newNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
      setCalledNumbers(prev => [newNumber, ...prev.slice(0, 5)]);
      
    }
  };

  const resetBoard = () => {
    
    setCalledNumbers([]);
  };

  return (
    <div className="bingo-container">
      <header className="bingo-header">
        <h1>Let's Play <span role="img" aria-label="bingo ball">Bingo! 🎱</span></h1>
      </header>

      <div className="game-grid">
    

        <div className="numbers-card">
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
          
        <div className="balls-card">
          <div className="balls-container">
            <h1>Winner Card Numbers 🏆</h1>
            <h2>💰Won Birr 500 ETB.</h2>
            <div className="balls">
              {calledNumbers.slice(0, 6).map((num, index) => (
                <div key={index} className="ball">
                  {num}
                </div>
              ))}
                
              </div>
           
          </div>
        </div>
        </div>

        <div className="card-card">
          <div className="bingo-card-container">
            <h3>Winner Cards</h3>
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


          <div className="bingo-card-container">
            <h3>Your Card No,17 </h3>
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
          

        </div>


        <div className="buttons-card">
          <div className="buttons">
            <button onClick={drawNumber}>  Back</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default BingoGame;