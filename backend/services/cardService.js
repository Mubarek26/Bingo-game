// services/cardService.js
const createCard = async (playerId, cardNumber, gameId, cards) => {
  // Use cardNumber as the key (since it’s a single unique number 1-200)
  const cardKey = cardNumber.toString();

  // Check if cardNumber is already taken
  if (cards[cardKey]) {
    const existingCard = cards[cardKey];
    if (existingCard.playerId !== playerId) {
      throw new Error("Card already taken by another player");
    }
    // Same player re-submitting, return existing cardId (idempotent)
    return existingCard.cardId;
  }

  // Generate a unique cardId
  const cardId = `${playerId}_${cardNumber}_${Date.now()}`;

  // Store the card in the shared cards object
  cards[cardKey] = {
    playerId,
    cardNumber,
    gameId,
    cardId,
    createdAt: Date.now(),
  };

  return cardId;
};

module.exports = { createCard };