import { useState, useEffect } from "react";
import "./selectCards.css";

const generatePlayerId = () => `player_${Math.random().toString(36).substr(2, 9)}`;

const Bingo = () => {
  const [selectedCardNumber, setSelectedCardNumber] = useState(null); // Player's own selection
  const [takenCardNumbers, setTakenCardNumbers] = useState([]); // Cards taken by anyone
  const [timer, setTimer] = useState(15);
  const [submitted, setSubmitted] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [error, setError] = useState("");
  const [outOfGame, setOutOfGame] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const cardNumbers = Array.from({ length: 200 }, (_, i) => i + 1); // All 200 cards
  const playerId = generatePlayerId();

  useEffect(() => {
    const storedCard = localStorage.getItem(`bingoCard_${playerId}`);
    if (storedCard) {
      const parsedCard = JSON.parse(storedCard);
      setSelectedCardNumber(parsedCard.cardNumber);
      setSubmitted(true);
    }
  }, [playerId]);

  useEffect(() => {
    const fetchTakenCards = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cards/taken");
        const data = await response.json();
        setTakenCardNumbers(data.takenCardNumbers || []);
      } catch (error) {
        console.error("Failed to fetch taken cards:", error);
      }
    };

    fetchTakenCards();
    const interval = setInterval(fetchTakenCards, 2000); // Poll every 2 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 0 && !outOfGame && !gameStarted) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !outOfGame && !gameStarted) {
      if (submitted) {
        setGameStarted(true);
      } else {
        setOutOfGame(true);
        setError("No card selected - out of game!");
        localStorage.removeItem(`bingoCard_${playerId}`);
      }
    }
  }, [timer, outOfGame, gameStarted, submitted]);

  const submitCard = async (cardNumber) => {
    try {
      const response = await fetch("http://localhost:5000/api/cards/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId,
          cardNumber,
          gameId: "game789",
        }),
      });
      const data = await response.json();
      if (data.success) {
        setCardId(data.cardId);
        setSubmitted(true);
        setError("");
        localStorage.setItem(
          `bingoCard_${playerId}`,
          JSON.stringify({ cardNumber })
        );
      } else {
        setError(data.error || "Failed to submit card");
        setSelectedCardNumber(null);
        localStorage.removeItem(`bingoCard_${playerId}`);
      }
    } catch (error) {
      setError("Error connecting to server");
      setSelectedCardNumber(null);
      localStorage.removeItem(`bingoCard_${playerId}`);
    }
  };

  const selectCard = (cardNumber) => {
    if (timer > 0 && !submitted && !outOfGame && !gameStarted) {
      setSelectedCardNumber(cardNumber);
      submitCard(cardNumber);
    } else if (submitted) {
      setError("You’ve already selected a card!");
    }
  };

  return (
    <div className="bingo-container">
      <div className="timer">
        {timer > 0
          ? `⏳ 0:${timer}`
          : gameStarted
          ? "Game Started!"
          : outOfGame
          ? "Out of Game!"
          : "Time's up!"}
      </div>
      {error && <div className="error" style={{ color: "red" }}>{error}</div>}
      <div className="price-label">10 Birr Per Card</div>
      {outOfGame ? (
        <div>You’re out of the game!</div>
      ) : gameStarted ? (
        <div>
          Game in progress... Your card: {selectedCardNumber}
        </div>
      ) : (
        <div className="card-selection">
          <h3>Select a Card (1-200):</h3>
          <div className="grid">
            {cardNumbers.map((cardNumber) => (
              <div
                key={cardNumber}
                className={`cell 
                  ${selectedCardNumber === cardNumber ? "selected" : ""} 
                  ${takenCardNumbers.includes(cardNumber) && selectedCardNumber !== cardNumber ? "taken" : ""} 
                  ${submitted || outOfGame || gameStarted ? "disabled" : ""}`}
                onClick={() => selectCard(cardNumber)}
              >
                {cardNumber}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bingo;