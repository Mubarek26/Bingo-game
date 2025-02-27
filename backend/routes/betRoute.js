const express = require('express');
const router = express.Router();
const gameService = require('../services/betService');

router.post('/join', (req, res) => {
  const { userId, stake } = req.body;
  try {
    const result = gameService.joinRound(userId, stake);
    res.json({
      message: `Joined ${result.roundId} with ${stake} birr`,
      balance: result.balance,
      roundId: result.roundId,
      playersInRound: result.playersInRound,
      timeLeft: result.timeLeft,
      possibleWin: result.possibleWin,
      userId: result.userId,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/end-round', (req, res) => {
  const { roundId, winnerId } = req.body;
  try {
    const result = gameService.endRound(roundId, winnerId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/rounds', (req, res) => {
  try {
    const rounds = gameService.getRounds();
    res.json(rounds);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rounds' });
  }
});

module.exports = router;