import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Bet.css";

const stakes = [
  { amount: 10, active: "0:39" },
  { amount: 20, active: "0:45" },
  { amount: 30, active: "None" },
  { amount: 50, active: "None" },
  { amount: 80, active: "None" },
  { amount: 100, active: "None" },
  { amount: 150, active: "0:45" },
  { amount: 200, active: "None" },
  { amount: 300, active: "0:44" },
];

const BettingInterface = () => {
  const [joinStatus, setJoinStatus] = useState({});
  const [roundData, setRoundData] = useState({});
  const navigate = useNavigate();

  const getUserId = () => {
    let userId = localStorage.getItem('bingoUserId');
    if (!userId) {
      userId = `user-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      localStorage.setItem('bingoUserId', userId);
    }
    return userId;
  };

  const userId = getUserId();

  useEffect(() => {
    const fetchRounds = async () => {
      try {
        const response = await fetch('http://localhost:5000/rounds');
        const data = await response.json();
        console.log('Fetched rounds:', data);
        setRoundData({ ...data });
      } catch (error) {
        console.error('Error fetching rounds:', error);
      }
    };

    fetchRounds();
    const interval = setInterval(fetchRounds, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleJoin = async (stake) => {
    try {
      const response = await fetch('http://localhost:5000/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, stake }),
      });
      const data = await response.json();

      if (data.error) {
        setJoinStatus((prev) => ({
          ...prev,
          [stake]: { error: data.error },
        }));
      } else {
        setJoinStatus((prev) => ({
          ...prev,
          [stake]: {
            message: data.alreadyJoined ? "You’re already in this round" : data.message,
            timeLeft: data.timeLeft,
            roundId: data.roundId,
          },
        }));
        if (!data.alreadyJoined) {
          navigate('/selectcards', {
            state: {
              roundId: data.roundId,
              userId: data.userId,
              stake,
              possibleWin: data.possibleWin,
            },
          });
        }
      }
    } catch (error) {
      console.error('Error joining:', error);
      setJoinStatus((prev) => ({
        ...prev,
        [stake]: { error: 'Failed to join - network error' },
      }));
    }
  };

  return (
    <div className="container">
      <h1 className="title">Please Choose Your Stake</h1>
      <div className="table-container">
        <div className="table-header">
          <span>Stake</span>
          <span>Time Left</span>
          <span>Possible Win</span>
          <span>Join</span>
        </div>
        {stakes.map((stake, index) => {
          // Find the current "open" round for this stake
          const openRound = roundData[stake.amount]?.find(
            r => r.status === 'open' && r.timeLeft > 0
          ) || null;
          const isOpen = openRound !== null;
          const isJoined = openRound && openRound.players?.includes(userId);
          const displayTime = openRound
            ? `${openRound.timeLeft}s`
            : roundData[stake.amount]?.length > 0 ? 'Active' : 'None';
          const displayWin = openRound && openRound.possibleWin > 0
            ? `${openRound.possibleWin} Birr`
            : "-";

          return (
            <div key={index} className="table-row">
              <span>{stake.amount} birr</span>
              <span className={displayTime !== "None" ? "active-time" : "inactive-time"}>
                {displayTime}
                {openRound && openRound.players?.length > 0 && ` (${openRound.players.length} players)`}
              </span>
              <span>{displayWin}</span>
              <button
                className="join-button"
                onClick={() => handleJoin(stake.amount)}
                disabled={false} // Only disable if no open round
              >
                {isJoined ? "Joined" : "Join »"}
              </button>
            </div>
          );
        })}
      </div>
      {Object.entries(joinStatus).map(([stake, status]) => (
        <p key={stake} className={status.error ? "error-message" : "success-message"}>
          {status.error || status.message}
          {status.timeLeft !== undefined && !status.error ? ` (${status.timeLeft}s left)` : ""}
        </p>
      ))}
    </div>
  );
};

export default BettingInterface;