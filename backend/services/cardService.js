// In-memory storage for cards
//This module handles the business logic for managing cards (claiming, releasing, and querying).
const cards = {}; // Key: stringified numbers (e.g., "5,23,67"), Value: { playerId, cardId, ... }

// Card Service
const cardService = {
  // Claim a card
  claimCard(playerId, selectedNumbers, gameId) {
    if (!playerId || !selectedNumbers || !gameId) {
      throw new Error("Missing required fields");
    }
    if (!Array.isArray(selectedNumbers) || selectedNumbers.length > 5) {
      throw new Error("Invalid number of selections (max 5)");
    }
    if (selectedNumbers.some(num => num < 1 || num > 200)) {
      throw new Error("Numbers must be between 1 and 200");
    }

    const cardKey = selectedNumbers.sort((a, b) => a - b).join(",");
    if (cards[cardKey] && cards[cardKey].playerId !== playerId) {
      throw new Error("This card is already taken by another player");
    }

    const card = {
      cardId: `card_${Date.now()}`,
      playerId,
      selectedNumbers: [...selectedNumbers], // Preserve original order
      gameId,
      cost: 10,
      createdAt: new Date().toISOString(),
    };

    cards[cardKey] = card;
    return card;
  },

  // Release a card
  releaseCard(playerId, cardId) {
    if (!playerId || !cardId) {
      throw new Error("Missing playerId or cardId");
    }

    const card = Object.values(cards).find(c => c.cardId === cardId && c.playerId === playerId);
    if (!card) {
      throw new Error("Card not found or not owned by this player");
    }

    const cardKey = card.selectedNumbers.sort((a, b) => a - b).join(",");
    delete cards[cardKey];
    return { message: "Card released" };
  },

  // Get all cards for a player
  getPlayerCards(playerId) {
    return Object.values(cards).filter(card => card.playerId === playerId);
  },
};

module.exports = cardService;