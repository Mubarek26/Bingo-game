const bingoService = require('../services/cardGenerateService');

const getBingoCard = (req, res) => {
  const card = bingoService.generateBingoCard();
  res.json({ card });
};

const confirmCard = (req, res) => {
  const { cardNumber } = req.body;
  console.log(`Card ${cardNumber} confirmed`);
  res.json({ message: `Card ${cardNumber} confirmed successfully` });
};

module.exports = { getBingoCard, confirmCard };
