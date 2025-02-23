import { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    // Handle different options
    if (value === 'wallet') {
      console.log("Wallet selected");
    } else if (value === 'profile') {
      console.log("Profile selected");
    } else if (value === 'history') {
      console.log("History selected");
    } else if (value === 'logout') {
      console.log("Logout selected");
    }
  };

  return (
    <div className="dropdown-container">
          <select
            id="dropdown-select"
            value={selectedOption}
            onChange={handleSelectChange}
            className="dropdown-select"
          >
            <option value="wallet">Wallet</option>
            <option value="profile">Profile</option>
            <option value="history">History</option>
            <option value="logout">Logout</option>
          </select>
    </div>
  );
};

export default Profile;
