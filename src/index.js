
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './Features/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>

    <App />
  
  </ContextProvider>,
);


