// src/components/Header.js
import React from 'react';
import logo from '../images/8.webp';

const Header = () => (
  <header className="logo">
    <div>
      <img className="bloclogo" src={logo} alt="Aux ciseaux de Shirley" />
    </div>
  </header>
);

export default Header;
