import React from 'react';
import Carousel from 'react-elastic-carousel';
import CardPromocao from '../CardPromocao';
import QuantidadeItens from '../QuantidadeItem';
import TamanhoVariacoes from '../TamanhoVariacoes';

import './style.css';

const ProdutoDescricao = () => {
  return (
    <section className="section">
      <div className="descricao-container">
        <div>
          <h2 className="descricao__titulo">Camisa Shirt</h2>
          <p className="descricao__categoria">Categoria:Mulher, Shirt</p>

          <p>
            CAMISETA CHIFFON ESSENTIAL confeccionada em chiffon transparente,
            levemente texturizado. Possui shape solto ao corpo, manga curta e
            comprimento alongado. Esta peça faz parte da nossa linha de básicos.
            São itens essenciais e versáteis que podem ser coordenados entre si
            e combinam com todo o seu guarda-roupa.
          </p>
        </div>

        <TamanhoVariacoes />
        <QuantidadeItens />
        <button className="add-card">Add to card</button>
      </div>
      <div className="carroucel">
        <Carousel>
          <CardPromocao />
          <CardPromocao />
        </Carousel>
      </div>
    </section>
  );
};

export default ProdutoDescricao;
