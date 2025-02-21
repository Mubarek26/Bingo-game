import { useState } from "react";
import './Language.css';  // Import the CSS file

const Language = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleChange = (e) => {
    setSelectedLang(e.target.value);
  };

  return (
    <div className="language-container">
      <select id="lang" value={selectedLang} onChange={handleChange}>
        <option value="en">English</option>
        <option value="am">Amharic</option>
      </select>
    </div>
  );
};

export default Language;
