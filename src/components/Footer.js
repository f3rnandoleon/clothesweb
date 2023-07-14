import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
          <img src={"https://f3rnandoleon.github.io/sistema_blog/imgs/libro.png"} alt="Logo" className="logo-footer" />
          
        <div className="about-us">
          <h3>Acerca de nosotros</h3>
          <p>
            En Tu Tienda de Ropa, nos dedicamos a ofrecerte las últimas tendencias en moda a precios
            asequibles. Nuestra misión es ayudarte a lucir bien y sentirte cómodo con nuestras prendas
            de alta calidad. ¡Explora nuestra colección y encuentra tu estilo único!
          </p>
        </div>
        <div>
            <h3>Siguenos</h3>
            <div className="social-media">               
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon" />
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="icon" />
                </a>
            </div>
        </div>
        
      </div>
      <p>© {new Date().getFullYear()} High Clothes Line. Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;
