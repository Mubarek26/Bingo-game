import React, { useState } from "react";
import "./History.css"; // Optional: Add custom styles for better appearance

const dummyData = [
  { type: "Deposit", date: "2025-02-25", amount: 500, status: "Completed" },
  { type: "Withdraw", date: "2025-02-24", amount: 200, status: "Declined" },
  { type: "Deposit", date: "2025-02-23", amount: 1000, status: "Completed" },
  { type: "Withdraw", date: "2025-02-22", amount: 300, status: "Completed" },
  { type: "Deposit", date: "2025-02-21", amount: 150, status: "Declined" },
  { type: "Withdraw", date: "2025-02-20", amount: 450, status: "Completed" },
  { type: "Deposit", date: "2025-02-19", amount: 700, status: "Completed" },
  { type: "Withdraw", date: "2025-02-18", amount: 250, status: "Declined" },
  { type: "Deposit", date: "2025-02-17", amount: 800, status: "Completed" },
  { type: "Withdraw", date: "2025-02-16", amount: 100, status: "Completed" },
  // Add more dummy data to simulate large history
];

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination logic
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  const currentItems = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="history-container">
      <h2>Transaction History</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((transaction, index) => (
            <tr key={index}>
              <td
                className={`type ${transaction.type === "Withdraw" ? "withdraw" : "deposit"}`}
              >
                {transaction.type}
              </td>
              <td>{transaction.date}</td>
              <td>{transaction.amount} ETB</td>
              <td className={`status ${transaction.status === "Completed" ? "completed" : "declined"}`}>
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => handlePageChange(1)}>&lt;</button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            className={currentPage === page + 1 ? "active" : ""}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(totalPages)}>&gt;</button>
      </div>
    </div>
  );
};

export default History;
