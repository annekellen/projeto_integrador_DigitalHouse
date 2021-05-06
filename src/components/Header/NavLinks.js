import React from 'react';
import './style.css'


const NavLinks = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/" className="header__nav__item">
            HOME
          </a>
        </li>
        <li>
          <a href="/produtos" className="header__nav__item">
            PRODUTOS
          </a>
        </li>
        <li>
          <a href="/meuspedidos" className="header__nav__item">
            PEDIDOS
          </a>
        </li>
        <li>
          <a href="/politicas" className="header__nav__item">
            POLITICAS
          </a>
        </li>
        <li>
          <a href="/sobre" className="header__nav__item">
            SOBRE
          </a>
        </li>
        <li>
          <a href="/admin" className="header__nav__item">
            ADMIN
          </a>
        </li>

        <li>
          <a href="/cadastro" className="header__nav__item">
            CADASTRO/LOGIN
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
