import React from "react";

const BingoPopup = () => {
  const styles = {
    popupContainer: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    popupContent: {
      backgroundColor: "#FFD700",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      position: "relative",
      width: "400px",
    },
    popupHeader: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "purple",
    },
    promoImage: {
      width: "100%",
      borderRadius: "5px",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "red",
      color: "purple",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
    },
    prizeTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "10px",
      color: "purple",
    },
    prizes: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "10px",
    },
    prizeColumn: {
      textAlign: "left",
      color: "purple",
      fontSize: "16px ",
      fontWeight: "bold",
    },
    socialLinks: {
      marginTop: "10px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.popupContainer}>
      <div style={styles.popupContent}>
        <h2 style={styles.popupHeader}>እቃዎች ቀላልነት ያላቸው ዝግጅት</h2>
        <img
          src="/frontend/public/images/ahun.jpg"
          alt="Bingo Promotion"
          style={styles.promoImage}
        />
        <div style={styles.prizes}>
          <div style={styles.prizeColumn}>
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
        <div style={styles.socialLinks}>
          <p>@AHUNBINGO_BOT | @AHUNBINGO_CHAT</p>
          <p>
            <a href="https://www.ahungames.com">www.ahungames.com</a>
          </p>
        </div>
        <button style={styles.closeButton} onClick={() => alert("Close Popup")}>
          X
        </button>
      </div>
    </div>
  );
};

export default BingoPopup;
