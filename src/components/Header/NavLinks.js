import React from 'react';
import './style.css'


const NavLinks = () => {
  return (
    <>
      <ul>
        <li>
          <a href="/" className="header__nav__item">
            Home
          </a>
        </li>
        <li>
          <a href="/produtos" className="header__nav__item">
            Produtos
          </a>
        </li>
        <li>
          <a href="/meuspedidos" className="header__nav__item">
            Pedidos
          </a>
        </li>
        <li>
          <a href="/politicas" className="header__nav__item">
            Politicas
          </a>
        </li>
        <li>
          <a href="/sobre" className="header__nav__item">
            Sobre
          </a>
        </li>
        <li>
          <a href="/admin" className="header__nav__item">
            Admin
          </a>
        </li>

        <li >
          <a   href="/cadastro" className="header__nav__item link-destaque">
            Cadastro/Login
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
