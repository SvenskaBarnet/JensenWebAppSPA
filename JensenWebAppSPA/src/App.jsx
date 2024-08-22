import React, { useContext, useEffect } from 'react';
import {ArticleList, Header, Footer,Scroll, ThemeContext} from './index.js';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Header />
      <ArticleList />
      <Scroll/>
      <Footer />
    </div>
  );
}

export default App;