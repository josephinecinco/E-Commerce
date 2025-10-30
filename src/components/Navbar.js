import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import "../styles/navbar.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
};

export default Navbar;
