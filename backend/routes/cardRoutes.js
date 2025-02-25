const express = require("express");

module.exports = (cards) => {
  const router = express.Router();

  // POST /api/cards/create - Claim a card
  router.post("/create", (req, res) => {
    const { playerId, selectedNumbers, gameId } = req.body;

    try {
      if (!playerId || !selectedNumbers || !gameId) {
        throw new Error("Missing required fields");
      }
      if (!Array.isArray(selectedNumbers) || selectedNumbers.length > 5) {
        throw new Error("Invalid number of selections (max 5)");
      }
      if (selectedNumbers.some(num => num < 1 || num > 200)) {
        throw new Error("Numbers must be between 1 and 200");
      }

      const playerHasCard = Object.values(cards).some(card => card.playerId === playerId);
      if (playerHasCard) {
        throw new Error("You can only claim one card at a time");
      }

      const cardKey = selectedNumbers.sort((a, b) => a - b).join(",");
      if (cards[cardKey] && cards[cardKey].playerId !== playerId) {
        throw new Error("This card is already taken by another player");
      }

      const card = {
        cardId: `card_${Date.now()}`,
        playerId,
        selectedNumbers: [...selectedNumbers],
        gameId,
        cost: 10,
        createdAt: new Date().toISOString(),
      };

      cards[cardKey] = card;
      res.status(201).json({ success: true, cardId: card.cardId });
    } catch (error) {
      res.status(error.message.includes("already taken") || error.message.includes("one card") ? 409 : 400).json({ error: error.message });
    }
  });

  // POST /api/cards/release - Release a card
  router.post("/release", (req, res) => {
    const { playerId, cardId } = req.body;

    try {
      if (!playerId || !cardId) {
        throw new Error("Missing playerId or cardId");
      }

      const card = Object.values(cards).find(c => c.cardId === cardId && c.playerId === playerId);
      if (!card) {
        throw new Error("Card not found or not owned by this player");
      }

      const cardKey = card.selectedNumbers.sort((a, b) => a - b).join(",");
      delete cards[cardKey];
      res.json({ success: true, message: "Card released" });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  // GET /api/cards/:playerId - Get all cards for a player
  router.get("/:playerId", (req, res) => {
    try {
      const playerCards = Object.values(cards).filter(card => card.playerId === req.params.playerId);
      res.json(playerCards);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cards" });
    }
  });

  return router;
};