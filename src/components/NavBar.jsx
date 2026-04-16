import React, { useState } from 'react';
import '../assets/style/Navbar.css';
import Logo from '../assets/image/main-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">
            <img src={Logo} alt="" />
          </div>
          <span className="logo-text">Abiit</span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#markets">Markets</a>
          <a href="#spot">Spot Trading</a>
          <a href="#futures">Futures</a>
          <a href="#bonus" className="bonus-link">$30 New User Bonus</a>
        </div>

        <div className="nav-actions">
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;