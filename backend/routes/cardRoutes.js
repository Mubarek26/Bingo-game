const express = require("express");
const router = express.Router();
const cardService = require("../services/cardService");

module.exports = (cards) => {
  router.post("/create", async (req, res) => {
    const { playerId, cardNumber, gameId } = req.body;
    if (!playerId || !cardNumber || !gameId) {
      return res.status(400).json({
        success: false,
        error: "Missing playerId, cardNumber, or gameId",
      });
    }
    if (!Number.isInteger(cardNumber) || cardNumber < 1 || cardNumber > 200) {
      return res.status(400).json({
        success: false,
        error: "cardNumber must be an integer between 1 and 200",
      });
    }
    try {
      const cardId = await cardService.createCard(playerId, cardNumber, gameId, cards);
      res.status(201).json({
        success: true,
        cardId,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  });

  router.get("/taken", (req, res) => {
    const takenCardNumbers = Object.keys(cards).map(Number);
    res.json({ takenCardNumbers });
  });

  return router;
};