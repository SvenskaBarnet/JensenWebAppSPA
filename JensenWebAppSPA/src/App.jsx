import React, { useContext, useEffect } from 'react'; // Importing necessary hooks from React
import { ArticleList, Header, Footer, ThemeContext } from './index.js'; // Importing components and context from a relative path

function App() {
  const { theme } = useContext(ThemeContext); // Using useContext to access the current theme from ThemeContext

  useEffect(() => {
    document.body.className = theme; // Setting the body's className to the current theme
  }, [theme]); // Dependency array ensures this runs whenever the theme changes

  return (
    <div>
      <Header /> {/* Rendering Header component */}
      <ArticleList /> {/* Rendering ArticleList component */}
      <Footer /> {/* Rendering Footer component */}
    </div>
  );
}

export default App; // Exporting the App component as default