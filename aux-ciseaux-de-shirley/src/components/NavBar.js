// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <div className="containe gray highlightTextIn outlined-text border">
      <Link to="/mariages">CELEBRATION</Link>
      <Link to="/femmes">FEMME</Link>
      <Link to="/hommes">HOMME</Link>
      <Link to="/enfants">ENFANT</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  </nav>
);

export default NavBar;
