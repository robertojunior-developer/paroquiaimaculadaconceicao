import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Paróquia Imaculada Conceição. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://www.instagram.com/agenciaessencialdev/" target="_blank" rel="noopener noreferrer">SJR Informática</a></p>
      </div>
    </footer>
  );
};

export default Footer;
