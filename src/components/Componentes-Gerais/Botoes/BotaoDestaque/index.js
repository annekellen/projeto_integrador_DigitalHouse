import React from 'react';
import './style.css'


const BotaoDestaque = ({ ...props }) => {
  return (
    <>
    <button className={`${props.classe}`} type="submit">{props.texto}</button>
    </>
  );
};

export default BotaoDestaque;
