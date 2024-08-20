import React, { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeProvider';
import styles from '../styles/ThemeToggleButton.module.css';

const ThemeToggleButton = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={styles.themeToggleButton}>
            Toggle Theme
        </button>
    );
};

export default ThemeToggleButton;