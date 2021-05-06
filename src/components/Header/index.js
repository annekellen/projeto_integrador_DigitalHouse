import './style.css';
import React from 'react';
import MobileNavegation from './MobileNavegation';
import Navegation from './Navegation';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const navToggle = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="header__title">OVERLOOK</h1>

        <Navegation />
        <MobileNavegation />
      </div>
    </header>
  );
};
export default Header;
