import './GameResult.css';

function WinnerCards({ bingoCard, calledNumbers, gameStatus }) {
 
  return (  // Added return statement
    <>
       
      <div className="bingo-card mt-4 "
       style={{
        backgroundColor: gameStatus === "win" ? "#4CAF50" : gameStatus === "lose" ? "#F44336" : "#ffffff",
      }}
      
      >
      <div className="card-header">
        {['B', 'I', 'N', 'G', 'O'].map((letter) => (
          <span key={letter} className="letter">{letter}</span>
        ))}
      </div>
      <div className="card-grid">
        {bingoCard.map((row, rowIndex) => (
          <div key={rowIndex} className="card-row">
            {row.map((number, colIndex) => (
              <div
              key={`${rowIndex}-${colIndex}`}
              className={`number ${calledNumbers.includes(number) ? 'highlighted' : ''}`}
              >
                {number === 'FREE' ? 'FREE' : number}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
        </>
  );
}

export default WinnerCards;
