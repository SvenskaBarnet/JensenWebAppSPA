import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ArticleList from './compontents/ArticleList.jsx';
import Header from './compontents/Header.jsx';
import Footer from './compontents/Footer.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const Main = () => {
    return (
        <div>
            <Header/>
            <h1 className="mainTitle">Articles</h1>
            <ArticleList />
            <Footer/>
        </div>
    );
};

export default Main;