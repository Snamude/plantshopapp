import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import ContextProvider from './Features/ContextProvider.jsx'
import '../Data.json'
import './Conference.css'
createRoot(document.getElementById('root')).render(
  
  <ContextProvider>

  <App />

  </ContextProvider>
  );
  