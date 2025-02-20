import { useState, useEffect } from "react";
import "./selectCards.css";

const Bingo = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [timer, setTimer] = useState(15);
  const numbers = Array.from({ length: 200 }, (_, i) => i + 1);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const toggleNumber = (num) => {
    setSelectedNumbers((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const shuffleNumbers = () => {
    numbers.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="bingo-container">
      <div className="timer">{timer > 0 ? `⏳ 0:${timer}` : "Time's up!"}</div>
      <button className="shuffle-btn" onClick={shuffleNumbers}>🔀</button>
      <div className="price-label">10 Birr Per Card</div>
      <div className="grid">
        {numbers.map((num) => (
          <div
            key={num}
            className={`cell ${selectedNumbers.includes(num) ? "selected" : ""}`}
            onClick={() => toggleNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bingo;
