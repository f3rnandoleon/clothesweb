import logo from './logo.svg';
// App.js (componente principal)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import PaymentMethods from './components/PaymentMethods';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route  path="/" element={< Home/>} />
          <Route  path="/products" element={< ProductList/>} />
          <Route  path="/products/:id" element={< ProductDetails/>} />
          <Route  path="/cart" element={< Cart/>} />
          <Route  path="/payment" element={< PaymentMethods/>} />
          <Route  path="/about" element={< About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

