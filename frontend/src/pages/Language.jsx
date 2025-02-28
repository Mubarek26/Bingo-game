import { useState } from "react";
import styles from './Language.module.css';  // Import the CSS Module file

const Language = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleChange = (e) => {
    setSelectedLang(e.target.value);
  };

  return (
    <div className={styles.languageContainer}>
      <select id="lang" value={selectedLang} onChange={handleChange}>
        <option value="en">English</option>
        <option value="am">Amharic</option>
      </select>
    </div>
  );
};

export default Language;
