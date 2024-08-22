// Import components
import ArticleFilter from './components/ArticleFilter';
import ArticleList from './components/ArticleList';
import ArticleSorter from './components/ArticleSorter';
import Footer from './components/Footer';
import Header from './components/Header';
import Scroll from './components/Scroll.jsx';
import ThemeToggleButton from './components/ThemeToggleButton';

// Import utilities
import {ThemeProvider, ThemeContext } from './utils/ThemeProvider.jsx';

// Import assets
import {topics} from './assets/topics.js';

// Export all modules individually
export {
  ArticleFilter,
  ArticleList,
  ArticleSorter,
  Footer,
  Header,
  Scroll,
  ThemeToggleButton,
  ThemeProvider,
  ThemeContext,
  topics
};