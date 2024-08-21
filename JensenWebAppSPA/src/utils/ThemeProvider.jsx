import React, { createContext, useState, useEffect, useMemo } from 'react'; // Importing necessary hooks from React

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}, // Placeholder function for toggling theme
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // State to manage the current theme

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkScheme ? 'dark' : 'light'); // Set theme based on user's system preference
  }, []); // Empty dependency array ensures this runs only once on mount

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Function to toggle between light and dark theme
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]); // Memoize the context value to optimize performance

  return (
    <ThemeContext.Provider value={value}>
      {children} {/* Render children components */}
    </ThemeContext.Provider>
  );
};