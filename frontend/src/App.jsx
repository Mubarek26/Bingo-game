import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Bet from './pages/Bet';
import SelectCards from './pages/SelectCards';
import Bingoboard from './pages/Bingoboard'

import New from './components/GameResult';
import BingoCaller from './pages/BingoCaller';
function App() {
  return (
    <> 
      <Routes>
        
        <Route path="/BetAmountPage" element={<Bet />} />
        <Route path="/SelectCards" element={<SelectCards />} />
        <Route path='/Bingoboard' element={<Bingoboard/> } />
        <Route path='/GameResult' element={<New/> } />
        <Route path='/BingoCaller' element={<BingoCaller/> } />
       
      </Routes>
      
   </>
   
  );
}

export default App;
