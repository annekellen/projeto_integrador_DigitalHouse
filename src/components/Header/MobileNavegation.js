import React from 'react';
import NavLinks from './NavLinks';
import { CgMenu } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';
import './style.css';

const MobileNavegation = () => {
  const [open, setOpen] = React.useState(false);

  const hamburgerIcon = (
    <CgMenu
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <>
      <nav className="MobileNavigation">
               
        {open ? closeIcon : hamburgerIcon }
        {open && <NavLinks />}
      </nav>
    </>
  );
};

export default MobileNavegation;
