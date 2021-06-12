import React from 'react';
import './style.css'


const Paragrafo = ({ ...props }) => {
  return (
    <div>
      <p className={`${props.classe}`}>{props.texto}</p>
    </div>
  );
};

export default Paragrafo;
