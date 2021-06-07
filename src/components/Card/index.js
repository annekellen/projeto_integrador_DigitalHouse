import BotaoPrincipal from '../Componentes-Gerais/Botoes/BotaoPrincipal';
import { Link } from 'react-router-dom';

import './style.css';

const Card = ({ product }) => {
  const { photo, name, price, id } = product;
  return (
   
      <article className="card" key={id}>
        <div className="card__foto" onClick={() => console.log('clicado')}>
        <Link to={`/${product.id}`} product={product}>
          <img className="card__foto" src={photo} alt={name} />
          </Link>
        </div>
        <h3 className="card__title">{name}</h3>
        <p className="card__preco">{`R$ ${price}`}</p>

      
        <Link to={`/${product.id}`} product={product}>
      
        <BotaoPrincipal texto="Comprar" />
        </Link>
      </article>
    
  );
};
export default Card;
