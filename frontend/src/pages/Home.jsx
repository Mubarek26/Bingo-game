import React from 'react';
import styles from './Home.module.css'; // Import the CSS Module file

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome</h1>
      <p>Start playing and have fun!</p>
    </div>
  );
}

export default Home;
