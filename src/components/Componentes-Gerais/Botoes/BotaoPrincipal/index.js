import React from 'react';
import './style.css';

const BotaoPrincipal = ({ ...props }) => {
  return (
    <div>
      <a href="/produtos_home" className="botao-principal">
        {props.texto}
      </a>
    </div>
  );
};

export default BotaoPrincipal;
