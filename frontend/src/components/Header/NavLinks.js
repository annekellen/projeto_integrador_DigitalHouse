import React from 'react';
import {BiCart} from 'react-icons/bi'
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
          <a href="/sobre" className="header__nav__item">
            Sobre
          </a>
        </li>
         <li>
          <a href="/meuspedidos" className="header__nav__item">
            <BiCart className="cart-icon" />
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
