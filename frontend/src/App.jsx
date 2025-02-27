import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Bet from "./pages/Bet";
import SelectCards from "./pages/SelectCards";
import Bingoboard from "./pages/Bingoboard";
import BingoCaller from "./pages/BingoCaller";
import Bingopopup from "./pages/Bingopopup";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HowToPlay from "./pages/HowToPlay";
import New from "./components/GameResult";
import Wallet from "./pages/Wallet";
import BetHistory from "./pages/BetHistory";
import BalanceButton from "./pages/BalanceButton";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/signup";
  const hideBalance = hideNavbar;

  return (
    <>
      {!hideBalance && <BalanceButton />}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/BetAmountPage" element={<Bet />} />
        <Route path="/SelectCards" element={<SelectCards />} />
        <Route path="/Bingoboard" element={<Bingoboard />} />
        <Route path="/Bingopopup" element={<Bingopopup />} />
        <Route path="/Bingocaller" element={<BingoCaller />} />
        <Route path="/Howtoplay" element={<HowToPlay />} />
        <Route path="/GameResult" element={<New />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/bet-history" element={<BetHistory />} />
      </Routes>
    </>
  );
}

export default App;
