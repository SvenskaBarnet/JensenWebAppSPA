import React, { useContext, useEffect } from 'react';
import ArticleList from './components/ArticleList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'; 
import BackToTopButton from './components/BackToTopButton.jsx';
import { ThemeContext } from './utils/ThemeProvider';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Header />
      <ArticleList />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;