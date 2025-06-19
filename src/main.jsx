import React from 'react';
import { StrictMode } from 'react'; // Make sure StrictMode is imported
import { createRoot } from 'react-dom/client'; 
// No need to import ReactDom from 'react-dom/client' separately when using createRoot
import App from './App.jsx';
import ContextProvider from './Features/ContextProvider.jsx'; // Ensure this path is correct relative to main.jsx
import Data from '../Data.json'; // Ensure this path is correct relative to main.jsx
import './Conference.css'; // Ensure this path is correct relative to main.jsx

// Optional: Log the imported data to verify it loads correctly once the 404 is resolved
console.log("Data loaded:", Data);

createRoot(document.getElementById('root')).render(
  // Wrap your entire application in <StrictMode> for development-time checks and warnings.
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
  