import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
       <Link to="/" className="navbar-link navbar-logo">DURGESH KUMAR</Link>
       <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/about" className="navbar-link">About</Link>
      <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
