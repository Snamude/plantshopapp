import React from 'react'
import ReactDom from 'react-dom/client'
import App from './src/App.jsx'
import ContextProvider from './src/Features/ContextProvider.jsx'
import main from './main.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  
    <ContextProvider>

    <App />
    <main />
  
  </ContextProvider>,
)

export default main
