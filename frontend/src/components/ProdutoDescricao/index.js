import React from 'react';
import Carousel from 'react-elastic-carousel';
import BotaoDestaque from '../Componentes-Gerais/Botoes/BotaoDestaque';
import TamanhoVariacoes from '../TamanhoVariacoes';
import './style.css';


const ProdutoDescricao = ({product}) => {
  const { productImage, productName, productPrice, productDescription } =
    product;
    console.log(product)
  return (
    <section className="section">
      <div className="descricao-container">
        <div>
          <h2 className="descricao__titulo">{productName}</h2>
          <p className="descricao__categoria"></p>

          <p>{productDescription}</p>
        </div>

        <TamanhoVariacoes />
        <div>
         
        <p >{`R$ ${productPrice}`}</p>
        </div>
        <div className="descricao-btn-container">
          
          <BotaoDestaque
            classe="botao-continuar"
            texto="Add to card"
            rota="/meuspedidos"
          />
        </div>
      </div>
      <div className="carroucel">
        <Carousel>
          <img src={productImage} alt="" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProdutoDescricao;
