import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './utils/ThemeProvider'; // Import ThemeProvider
import './index.css';
import { topics } from './index.js';

console.log(topics);

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <ThemeProvider>
        <App />
    </ThemeProvider>
    // </StrictMode>,
);