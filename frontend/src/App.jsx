import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Bet from "./pages/Bet";
import SelectCards from "./pages/SelectCards";
import Bingoboard from "./pages/Bingoboard";
import BingoCaller from "./pages/BingoCaller";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HowToPlay from "./pages/HowToPlay";
import New from "./components/GameResult"; // Keeping this from mubarek branch

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/BetAmountPage" element={<Bet />} />
        <Route path="/SelectCards" element={<SelectCards />} />
        <Route path="/Bingoboard" element={<Bingoboard />} />
        <Route path="/Bingocaller" element={<BingoCaller />} />
        <Route path="/Howtoplay" element={<HowToPlay />} />
        <Route path="/GameResult" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
