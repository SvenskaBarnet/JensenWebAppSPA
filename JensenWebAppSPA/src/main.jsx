import { StrictMode } from 'react'; // Importing StrictMode from React for highlighting potential problems
import { createRoot } from 'react-dom/client'; // Importing createRoot from React DOM for creating a root to render the app
import App from './App.jsx'; // Importing the main App component
import { ThemeProvider } from './utils/ThemeProvider'; // Importing ThemeProvider for theme context
import './index.css'; // Importing global CSS

createRoot(document.getElementById('root')).render(
    // <StrictMode> 
    <ThemeProvider> {/* Wrapping App component with ThemeProvider for theme context */}
        <App /> {/* Rendering the main App component */}
    </ThemeProvider>
    // </StrictMode>, 
);