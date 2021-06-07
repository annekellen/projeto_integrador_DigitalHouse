import React from 'react';
import Carousel from 'react-elastic-carousel';

import BotaoDestaque from '../Componentes-Gerais/Botoes/BotaoDestaque';

import TamanhoVariacoes from '../TamanhoVariacoes';

import './style.css';

const ProdutoDescricao = ({product}) => {
  console.log(product)
  const {name , descricao , photo, price} = product
  return (
    <section className="section">
      <div className="descricao-container">
        <div>
          <h2 className="descricao__titulo">{name}</h2>
          <p className="descricao__categoria"></p>

          <p>
           {descricao}
          </p>
        </div>

        <TamanhoVariacoes />
        <div>
          <p>{`${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</p>
        </div>
        <div className="descricao-btn-container">
          <BotaoDestaque classe="botao-continuar" texto="Add to card" />
        </div>
      </div>
      <div className="carroucel">
        <Carousel>
         <img src={photo} alt="" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProdutoDescricao;
