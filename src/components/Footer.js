import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" className="footer-logo" />
      <nav className="footer-nav">
        <Link to="/AboutUs">About Us</Link>
        <Link to="/AboutUs">Terms And Conditions</Link>
        <Link to="/AboutUs">Refund and Exchange</Link>
        <Link to="/AboutUs">Contact Us</Link>
      </nav>
      <p className="footer-copy">© 2025 PawShoppe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
