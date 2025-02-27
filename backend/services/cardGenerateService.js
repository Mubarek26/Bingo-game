function generateBingoCard() {
    const generateColumn = (min, max) => {
      const numbers = new Set();
      while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return Array.from(numbers);
    };
  
    const card = [
      generateColumn(1, 15),   // B
      generateColumn(16, 30),  // I
      generateColumn(31, 45),  // N
      generateColumn(46, 60),  // G
      generateColumn(61, 75)   // O
    ];
  
    // Replace the center cell with 'F' (Free Space)
    card[2][2] = 'F';
  
    return card;
  }
  
  module.exports = { generateBingoCard };
  