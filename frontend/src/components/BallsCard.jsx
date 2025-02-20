import React from 'react';
// import './BingoCaller.css';
import '../pages/BingoCaller.css'
const BallsCard = ({ calledNumbers }) => {
  return (
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
  );
};

export default BallsCard;
