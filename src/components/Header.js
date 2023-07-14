// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import '../styles/Header.css';
import Cart from './Cart';

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleUserMenuClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png" alt="High Clothes Line" className="logo" />
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Inicio</Link></li>
          <li className="nav-item"><Link to="/products">Lista de productos</Link></li>
          <li className="nav-item">
            <button className="icon-button" onClick={handleCartClick}>
              <FaShoppingCart className="cart-icon" />
            </button>
          </li>
          <li className="nav-item user-menu">
            <button className="icon-button" onClick={handleUserMenuClick}>
              <FaUser className="user-icon" />
            </button>
            {isUserMenuOpen && (
              <ul className="user-options" onPointerLeave={handleUserMenuClick}>
                <li>Iniciar sesión</li>
                <li>Cerrar sesión</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-modal">
            <button className="close-button" onClick={handleCartClick}>X</button>
            {< Cart/>}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

