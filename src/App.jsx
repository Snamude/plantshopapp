import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar.jsx';
import Products from './Pages/Products.jsx';
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart.jsx';
import './Conference.css';
 
//const App = () => {  
  function App() { 
  return (
    <>
    <HashRouter >
    
    <Navbar />
          <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
       
    </HashRouter>
      </>
  )
}

export default App;
