const express = require('express');
const router = express.Router();
const bingoController = require('../controllers/cardGenerateController');

router.get('/bingo-card', bingoController.getBingoCard);
router.post('/confirm-cards', bingoController.confirmCard);

module.exports = router;
