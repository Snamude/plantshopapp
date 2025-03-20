import React from 'react'
import ReactDom from 'react-dom/client'
import App from './src/App.jsx'
import ContextProvider from './src/Features/ContextProvider.jsx'

import { Provider } from 'react-redux'

ReactDom.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider>
    <ContextProvider>

    <App />
      
    </Provider>
  </ContextProvider>
  </React.StrictMode>,
  );
