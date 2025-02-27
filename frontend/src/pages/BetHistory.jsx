// BetHistory.js
import React, { useState } from 'react';
import './BetHistory.css';

const BetHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const betsPerPage = 5;

  // Sample bet history data (you can replace this with real data from an API)
  const betHistory = [
    { id: 1, stake: '10 Birr', winning: '510 Birr', winnerCards: [76], yourCards: [164], date: '21/2/2025', result: 'Lost' },
    { id: 2, stake: '10 Birr', winning: '780 Birr', winnerCards: [93], yourCards: [94], date: '20/2/2025', result: 'Lost' },
    { id: 3, stake: '10 Birr', winning: '577 Birr', winnerCards: [41], yourCards: [5], date: '20/2/2025', result: 'Lost' },
    { id: 4, stake: '10 Birr', winning: '540 Birr', winnerCards: [43], yourCards: [12], date: '20/2/2025', result: 'Lost' },
    { id: 5, stake: '10 Birr', winning: '690 Birr', winnerCards: [26, 62, 63, 44], yourCards: [21], date: '17/2/2025', result: 'Lost' },
  ];

  const renderCard = (card) => (
    <span className="card">{card}</span>
  );

  const renderCards = (cards) => (
    cards.map((card, index) => renderCard(card))
  );

  return (
    <div className="bet-history-container">
      <h1>Bet History</h1>
      <table className="bet-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Stake</th>
            <th>Game Winning</th>
            <th>Winner Cards</th>
            <th>Your Cards</th>
            <th>Date</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {betHistory.map((bet) => (
            <tr key={bet.id}>
              <td>{bet.id}</td>
              <td>{bet.stake}</td>
              <td>{bet.winning}</td>
              <td>{renderCards(bet.winnerCards)}</td>
              <td>{renderCards(bet.yourCards)}</td>
              <td>{bet.date}</td>
              <td className={bet.result === 'Lost' ? 'lost-result' : 'won-result'}>
                {bet.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button className="pagination-button">&lt;&lt;</button>
        <button className="pagination-button active">{currentPage}</button>
        <button className="pagination-button">&gt;&gt;</button>
      </div>
    </div>
  );
};

export default BetHistory;