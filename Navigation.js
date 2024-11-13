import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';


function Navigation() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">StreamList</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
