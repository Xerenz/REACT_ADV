import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // v6
import './App.css';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/products" element ={<ProductList/>}/>
        <Route path="/cart" element ={<Cart/>}/>
        <Route path="/details/:id" element ={<Details/>}/>
        <Route path="/" element ={<ProductList/>}/>
        <Route path="*" element ={<Default/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
