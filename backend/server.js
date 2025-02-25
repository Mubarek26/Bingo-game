const express = require('express');
const cors = require('cors');
const path = require('path');
const bingoRoutes = require('./routes/cardGenerateRoute');
const corsConfig = require('./config/corsConfig');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors(corsConfig));

// Middleware to parse JSON for POST requests
app.use(express.json());

// Serve static files from the frontend/dist folder
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Use bingo routes
app.use('/api', bingoRoutes);

// Catch-all route for React app (MUST BE LAST)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
