import React from "react"; // Importing React library
import styles from '../styles/Footer.module.css'; // Importing CSS module for scoped styles

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerTitle}>
                    &copy; 2024 - JensensWebApp {/* Footer title with copyright information */}
                </div>
                <nav className={styles.footerNav}>
                    <ul className={styles.navList}>
                        <li>
                            <a className={styles.footerNavLink} href="/">Home</a> {/* Link to Home page */}
                        </li>
                        <li>
                            <a className={styles.footerNavLink} href="/privacy">Privacy</a> {/* Link to Privacy page */}
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer; // Exporting the Footer component as default