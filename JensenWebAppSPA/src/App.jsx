import './App.css' // Import the CSS file
import ArticleList from './components/ArticleList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'; 

function App() {

  return (
        <div>
            <Header/>
            <h1 className="mainTitle">Articles</h1>
            <ArticleList />
            <Footer/>
        </div>
  );
}

export default App;