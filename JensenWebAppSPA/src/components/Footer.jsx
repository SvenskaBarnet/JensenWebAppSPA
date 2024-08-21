import React from "react";
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerTitle}>
                    &copy; 2024 - JensensWebApp
                </div>
                <nav className={styles.footerNav}>
                    <ul className={styles.navList}>
                        <li>
                            <a className={styles.footerNavLink} href="/">Home</a>
                        </li>
                        <li>
                            <a className={styles.footerNavLink} href="/privacy">Privacy</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
