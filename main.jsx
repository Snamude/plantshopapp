import React from 'react'
import ReactDom from 'react-dom/client'
import App from './src/App.jsx'
import ContextProvider from './src/Features/ContextProvider.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ContextProvider>

    <App />
  
  </ContextProvider>
    <React.StrictMode>,
  );
