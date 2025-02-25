import { useState } from "react";
import "./Profile.css"; // Import updated CSS file

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    if (option === "Logout") {
      alert("Logging out..."); // Replace with actual logout logic
    }
  };

  return (
    <div
      className="profile-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Profile Image and Username */}
      <div className="profile-header">
        <img 
          src="https://placehold.co/40x40" 
          alt="Profile" 
          className="profile-image" 
        />
        <span className="profile-username">Username</span>
      </div>

      {isOpen && (
        <>
          <ul className="menu">
            <li onClick={() => handleSelection("Wallet")}>Wallet</li>
            <li onClick={() => handleSelection("Profile")}>Profile</li>
            <li onClick={() => handleSelection("History")}>History</li>
            <li className="logout" onClick={() => handleSelection("Logout")}>
              Logout
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Profile;
