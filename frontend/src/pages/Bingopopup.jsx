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
      color: "white",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
    },
    prizeTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "10px",
    },
    prizes: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "10px",
    },
    prizeColumn: {
      textAlign: "left",
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
          src="/mnt/data/pop.png"
          alt="Bingo Promotion"
          style={styles.promoImage}
        />
        <p style={styles.prizeTitle}>የ12,000 ብር የሽልማት መድረሻ</p>
        <div style={styles.prizes}>
          <div style={styles.prizeColumn}>
            <h3>ትንሹ እጩዎች</h3>
            <ul>
              <li>1ኛ ሽልማት - 5,000 ብር</li>
              <li>2ኛ ሽልማት - 2,500 ብር</li>
              <li>3ኛ ሽልማት - 1,500 ብር</li>
            </ul>
          </div>
          <div style={styles.prizeColumn}>
            <h3>አንዳንድ እጩዎች</h3>
            <ul>
              <li>1ኛ ሽልማት - 1,500 ብር</li>
              <li>2ኛ ሽልማት - 1,000 ብር</li>
              <li>3ኛ ሽልማት - 500 ብር</li>
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
