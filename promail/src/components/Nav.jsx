import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css'; // Import the CSS module

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Text Logo */}
        <div className={styles.logo}>
          <Link to="/" className={styles.logo}>Promail</Link>
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/history" className={styles.navLink}>History</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
