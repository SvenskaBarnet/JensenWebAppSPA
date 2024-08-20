import ArticleList from './components/ArticleList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'; 
import BackToTopButton from './components/BackToTopButton.jsx';

function App() {

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