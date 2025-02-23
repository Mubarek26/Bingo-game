import React, { useState } from 'react';
import './BingoCaller.css';

import BallsCard from '../components/BallsCard';
import ControlButtons from '../components/ControlButtons';
import BingoCardContainer from '../components/BingoCardContainer';
import BingoNumbers from '../components/BingoNumbers';
import YourCard from '../components/YourCard';
// import BingoNumbers from './BingoNumbers';
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

  return (
    <div className="bingo-container">
      <header className="bingo-header">
        <h1>Let's Play <span role="img" aria-label="bingo ball">Bingo! 🎱</span></h1>
      </header>
      <div className="game-grid">
        <div className="numbers-card">
          <BingoNumbers bingoNumbers={bingoNumbers} calledNumbers={calledNumbers} />
          <BallsCard calledNumbers={ calledNumbers} />
        </div>
        <div className="card-card">
         <BingoCardContainer bingoCard={bingoCard} calledNumbers={calledNumbers} />
           <YourCard title="Your Card No. 17" bingoCard={bingoCard} calledNumbers={calledNumbers} />
        </div>
        <ControlButtons/>
      </div>
    </div>
  );
};

export default BingoGame;