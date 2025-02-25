const express = require('express');
const cors = require('cors');
const path = require('path');
const bingoRoutes = require('./routes/cardGenerateRoute'); // Your existing route
const cardRoutes = require("./routes/cardRoutes"); // New modularized card routes
const corsConfig = require('./config/corsConfig');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors(corsConfig));

// Middleware to parse JSON for POST requests
app.use(express.json());

// Serve static files from the frontend/dist folder
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// In-memory game state (shared across routes if needed)
const gameState = {
  gameId: "game789",
  drawnNumbers: [],
};

// Initialize cardRoutes with in-memory cards storage
const cards = {}; // Key: stringified numbers (e.g., "5,23,67"), Value: { playerId, cardId, ... }
app.use('/api/cards', cardRoutes(cards)); // Pass cards to the cardRoutes module

// Use existing bingo routes
app.use('/api', bingoRoutes);

// Expose game state (optional, for testing or frontend use)
app.get('/api/game', (req, res) => {
  res.json(gameState);
});

// Catch-all route for React app (MUST BE LAST)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export for testing (optional)
module.exports = { app, gameState, cards };