import React, { useState, useEffect } from 'react';
import './Bingoboard.css';

const BingoBoard = () => {
  const [cardData, setCardData] = useState({ numbers: [], cardNumber: null });
  const letters = ['B', 'I', 'N', 'G', 'O'];

  useEffect(() => {
    fetch('http://localhost:5000/api/bingo-card')
      .then((response) => response.json())
      .then((data) => {
        const cardNumber = Math.floor(Math.random() * 1000) + 1; // Random card number
        setCardData({ numbers: data.card, cardNumber });
      })
      .catch((error) => console.error('Error fetching card:', error));
  }, []);

  const getLetterColor = (letter) => {
    switch (letter) {
      case 'B': return '#3b5998';
      case 'I': return '#d4af37';
      case 'N': return '#cc0000';
      case 'G': return '#008000';
      case 'O': return '#ff4500';
      default: return 'black';
    }
  };

  const handleConfirmCards = () => {
    fetch('http://localhost:5000/api/confirm-cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cardNumber: cardData.cardNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message); // Show confirmation message
      })
      .catch((error) => console.error('Error confirming card:', error));
  };

  return (
    <div className="game-container">
      <div className="timer">0:45</div>
      <div className="card-label">10 Birr Per Card</div>
      <div className="card">
        <h3 className="card-header">Card No. {cardData.cardNumber || 'Loading...'}</h3>
        <div className="letter-row">
          {letters.map((letter, index) => (
            <div key={index} className="letter" style={{ background: getLetterColor(letter) }}>
              {letter}
            </div>
          ))}
        </div>
        <div className="number-grid">
          {cardData.numbers.length > 0 ? (
            // Render the card numbers in a grid
            cardData.numbers[0].map((_, rowIndex) => (
              <div key={rowIndex} className="number-row">
                {cardData.numbers.map((column, colIndex) => (
                  <div key={colIndex} className={`number-cell ${column[rowIndex] === 'F' ? 'free' : ''}`}>
                    {column[rowIndex]}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Loading card...</p>
          )}
        </div>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => alert('Go Back')}>Go Back</button>
        <button className="button" onClick={handleConfirmCards}>Confirm Cards</button>
      </div>
    </div>
  );
};

export default BingoBoard;