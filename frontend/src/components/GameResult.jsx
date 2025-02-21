import React from 'react';
import './GameResult.css';
import WinnerCards from './WinnerCards';
import BingoHeader from './BingoHeader';
import YourCard from './YourCard';

const BingoGame = () => {
  const bingoCard = [
    [12, 24, 5, 6, 16],
    [15, 42, 32, 19, 18],
    [50, 72, 'FREE', 10, 65],
    [7, 69, 15, 3, 9],
    [14, 22, 11, 70, 4],
  ];

  const calledNumbers = [16, 50, 69, 11]; // Numbers highlighted in green
  const numbersBoard = Array.from({ length: 15 }, (_, i) => [
    i + 1, // B
    i + 16, // I
    i + 31, // N
    i + 46, // G
    i + 61, // O
  ]);

  return (
    <div className="bingo-container">
          <BingoHeader status="lose" /> 

      <div className="bingo-content">
        <div className="left-panel">
          <div className="player-avatars">
            <div className="avatar">👑</div>
            <div className="avatar">👩‍🦰</div>
            <div className="avatar">👩‍🦱</div>
          </div>
          <div className="dolphin">🐬</div>
        </div>
        <div className="bingo-card-wrapper">
         
            
                <YourCard bingoCard={ bingoCard} calledNumbers={calledNumbers} gameStatus="lose" />        
                 
            <WinnerCards bingoCard={ bingoCard} calledNumbers={calledNumbers} gameStatus="win"/>
          
          <button className="bingo-button">Play again!</button>
              </div>
              
        <div className="numbers-board">
          <div className="board-grid">
            {['B', 'I', 'N', 'G', 'O'].map((letter, colIndex) => (
              <div key={letter} className="board-column">
                <div className="letter">{letter}</div>
                {numbersBoard.map((row, rowIndex) => (
                  <div key={`${letter}-${rowIndex}`} className="number">
                    {row[colIndex]}
                  </div>
                ))}
              </div>
            ))}
          </div>
                  
              </div>
              
      </div>
    </div>
  );
};

export default BingoGame;