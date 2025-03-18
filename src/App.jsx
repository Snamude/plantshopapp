import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
//import Products from './Pages/Products'
import Product from './Components/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'


function App() {  

  return (
    <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Product></Product>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
     
    </Routes>
   
    </BrowserRouter>
  )
}

export default App
