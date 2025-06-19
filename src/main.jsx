import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import ContextProvider from './Features/ContextProvider.jsx'
<<<<<<< HEAD
import '../Data.json'
import './Conference.css'
=======
import '../Data.json';
import './Conference.css';
>>>>>>> origin/main

createRoot(document.getElementById('root')).render(
  
  <ContextProvider>

  <App />

  </ContextProvider>
  );
  