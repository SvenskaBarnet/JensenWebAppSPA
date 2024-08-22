import React from "react"; // Importing React library
import styles from '../styles/Header.module.css'; // Importing CSS module for scoped styles
import { ThemeToggleButton } from '../index.js'; // Importing ThemeToggleButton component

const Header = ({searchTerm, onSearchChange}) => {
    return (
        <header>
            <a className={styles.appTitle} href="/">JensensWebApp</a> {/* Link to Home with app title */}

            <ThemeToggleButton /> {/* Theme toggle button component */}

            <div className={styles.searchContainer}>
                <input 
                    type="text" 
                    className={styles.inputBox} 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={onSearchChange}/> {/* Search input box */}
                <button className={styles.searchButton}> Search</button> {/* Search button */}
            </div>

            <div className={styles.headerLinks}>
                <ul className={styles.navList}>
                    <li>
                        <a className={styles.navLink} href="/">Home</a> {/* Link to Home page */}
                    </li>
                    <li>
                        <a className={styles.navLink} href="/privacy">Privacy</a> {/* Link to Privacy page */}
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header; // Exporting the Header component as default