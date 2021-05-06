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
      <h1 className="header__title">OVERLOOK</h1>
      
      
      <Navegation />
      <MobileNavegation />
      
    </header>
  );
};
export default Header;
