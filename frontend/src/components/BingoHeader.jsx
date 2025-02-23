import React from "react";

const BingoHeader = ({ status }) => {
  // Determine background color and message based on game status
  const bgColor = status === "win" ? "#28a745" : status === "lose" ? "#dc3545" : "transparent";
  const message = status === "win" ? "🎉 You Won the Game! Amount : 500 ETB🎉" : status === "lose" ? "❌ You Lost the Game! Amount : 500 ETB" : "";

  return (
    <div
      className="bingo-header"
      style={{
        backgroundColor: bgColor,
        display: "flex",
        justifyContent:"center",
        color: "white",
        padding: "15px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        borderRadius: "10px",
        transition: "background-color 0.5s ease",
        // width: "500px",
        margin:"auto",
      }}
    >
      {message}
    </div>
  );
};

export default BingoHeader;
