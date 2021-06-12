import './style.css';
import React from 'react';
import MobileNavegation from './MobileNavegation';
import Navegation from './Navegation';

const Header = () => {

  return (
    <header className="header">
      <nav className="header-wrapper">
        <h1 className="header__title">OVERLOOK</h1>

        <Navegation />
        <MobileNavegation />
      </nav>
    </header>
  );
};
export default Header;
