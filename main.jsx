import React from 'react'
import ReactDom from 'react-dom/client'
import App from './src/App.jsx'
import { aloevera } from '/aloevera.jpg'
import ContextProvider from './src/Features/ContextProvider.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  
    <ContextProvider>

    <App />
  
  </ContextProvider>,
)
