import React, { useContext } from 'react'; // Importing React and useContext hook
import { ThemeContext } from '../index.js'; // Importing ThemeContext from a relative path

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Using useContext to access theme and toggleTheme from ThemeContext

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'} {/* Button text changes based on the current theme */}
        </button>
    );
};

export default ThemeToggleButton; // Exporting the ThemeToggleButton component as default