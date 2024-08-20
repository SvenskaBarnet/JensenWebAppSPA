import React, { createContext, useState } from 'react';

// Create a context with 'light' as the default value
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}, // Placeholder function
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
	setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
	<ThemeContext.Provider value={{ theme, toggleTheme }}>
	  {children}
	</ThemeContext.Provider>
  );
};