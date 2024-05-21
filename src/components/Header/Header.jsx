import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";
import hamburgerIcon from "../../images/icons/hamburgerIcon.png";

const Header = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.userName}>
        <h1>Hi, Jabez</h1>
        <button className={styles.hamburgerIcon} onClick={toggleMenu}>
          <img src={hamburgerIcon} alt="Menu" width={24} height={24} />
        </button>
      </div>
      <div className={styles.totals}>
        <div className={styles.total}>
          <h2>Total Planned Expenses</h2>
          <p>$1,000</p>
        </div>
        <div className={styles.total}>
          <h2>Total Remaining Expenses</h2>
          <p>$1,000</p>
        </div>
      </div>

      {isOpen && (
        <nav className={styles.mobileMenu}>
          <button className={styles.closeMenuIcon} onClick={toggleMenu}>
            <h2>x</h2>
          </button>
          <ul>
            <li>Dashboard</li>
            <li className={styles.active}><Link to="/">Budget</Link></li>
            <li>Transactions</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      )}
    </header>

  );

};

export default Header;
