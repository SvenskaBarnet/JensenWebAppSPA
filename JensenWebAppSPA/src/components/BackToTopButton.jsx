import React, { useState, useEffect } from 'react';
import styles from '../styles/BackToTopButton.module.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={styles.backToTopButton}
                    aria-label="Back to top"
                >
                    <span className={styles.arrow}>↑</span>
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;