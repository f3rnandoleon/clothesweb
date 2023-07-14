import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Tu Tienda de Ropa</p>
      </div>
    </footer>
  );
}

export default Footer;
