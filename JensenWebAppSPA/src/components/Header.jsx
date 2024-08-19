import React from "react";
import styles from '../styles/Header.module.css';
import '../App.css'

const Header = () => {
    return (
        <header>
            <a className={styles.appTitle} href="/">JensensWebApp</a>

            <div className={styles.searchContainer}>
                <input type="text" className={styles.inputBox} placeholder="Search articles..." />
                <button className={styles.searchButton}> Search</button>
            </div>

            <div className={styles.headerLinks}>
                <ul className={styles.navList}>
                    <li>
                        <a className={styles.navLink} href="/">Home</a>
                    </li>
                    <li>
                        <a className={styles.navLink} href="/privacy">Privacy</a>
                    </li>
                </ul>
            </div>


        </header>
    );
}

export default Header;