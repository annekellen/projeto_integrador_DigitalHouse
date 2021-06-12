import React from 'react';
import './style.css'


const BotaoDestaque = ({ ...props }) => {
  return (
    <>
    <a  href={props.rota} className={`${props.classe}`}>{props.texto}</a>
    
    </>
  );
};

export default BotaoDestaque;
