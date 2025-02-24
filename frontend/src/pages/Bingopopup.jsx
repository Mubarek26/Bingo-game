import React from "react";
import "./BingoPopup.css";

const BingoPopup = () => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2 className="popup-header">እቃዎች ቀላልነት ያላቸው ዝግጅት</h2>
        <img
          src="/frontend/public/images/ahun.jpg"
          alt="Bingo Promotion"
          className="promo-image"
        />
        <div className="prizes">
          <div className="prize-column">
            <ul className="prize-list">
              <li>1 ጨዋታ = 1 ነጥብ ይቀላቀሉ </li>
              <li>ተጫውተው ብቻ ይሸለሙ</li>
              <li>
                ለመከታተል <a href="#">Leaderboard</a> ይግቡ
              </li>
              <li>ለተጨማሪ ኢንፎርሜሽን የቴሌግራም ግሩፓችንን</li>
              <li>
                ለመቀላቀል <a href="#">ይህን ይጫኑ</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="close-button" onClick={() => alert("Close Popup")}>
          X
        </button>
      </div>
    </div>
  );
};

export default BingoPopup;
