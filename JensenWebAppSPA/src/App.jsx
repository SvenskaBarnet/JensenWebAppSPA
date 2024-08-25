import React, { useContext, useEffect, useState } from 'react'; // Importing necessary hooks from React
import { ArticleList, Header, Footer, ThemeContext } from './index.js'; // Importing components and context from a relative path

function App() {
  const { theme } = useContext(ThemeContext); // Using useContext to access the current theme from ThemeContext
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

  useEffect(() => {
    document.body.className = theme; // Setting the body's className to the current theme
  }, [theme]); // Dependency array ensures this runs whenever the theme changes

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term when the user types in the search bar
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} /> {/* Rendering Header component */}
      <ArticleList searchTerm={searchTerm} /> {/* Rendering ArticleList component */}
      <Footer /> {/* Rendering Footer component */}
    </div>
  );
}

export default App; // Exporting the App component as default