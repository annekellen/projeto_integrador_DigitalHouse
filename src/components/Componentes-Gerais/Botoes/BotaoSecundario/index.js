import React from 'react';
import './style.css';

const BotaoSecundario = ({ ...props }) => {
  return (
    <div>
      <a href="/produto" className="botao-secundario">
        {props.texto}
      </a>
    </div>
  );
};

export default BotaoSecundario;
