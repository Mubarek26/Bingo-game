const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON for POST requests
app.use(express.json());

// Serve static files from the frontend/dist folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Function to generate a unique bingo card
function generateBingoCard() {
  const generateColumn = (min, max) => {
    const numbers = new Set();
    while (numbers.size < 5) {
      numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers);
  };

  const card = [
    generateColumn(1, 15,5),   // B
    generateColumn(16, 30,5),  // I
    generateColumn(31, 45,5),  // N
    generateColumn(46, 60,5),  // G
    generateColumn(61, 75,5)   // O
  ];

  // Replace the center cell with 'F' (Free Space)
  card[2][2] = 'F';

  return card;
}

// API endpoint to get a bingo card
app.get('/api/bingo-card', (req, res) => {
  // Generate a new card for every request
  const card = generateBingoCard();
  res.json({ card });
});

// API endpoint to confirm cards
app.post('/api/confirm-cards', (req, res) => {
  const { cardNumber } = req.body;
  console.log(`Card ${cardNumber} confirmed`);
  res.json({ message: `Card ${cardNumber} confirmed successfully` });
});

// Catch-all route for React app (MUST BE LAST)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});