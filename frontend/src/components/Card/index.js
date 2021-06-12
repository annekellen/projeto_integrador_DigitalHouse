import BotaoPrincipal from '../Componentes-Gerais/Botoes/BotaoPrincipal';
import { Link } from 'react-router-dom';

import './style.css';

const Card = ({ product }) => {
  const { productImage, productName, productPrice, _id } = product;
  return (
    <article className="card" key={_id}>
      <div className="card__foto">
        <Link to={`/product/${product._id}`} product={product}>
          <img className="card__foto" src={productImage} alt={productName} />
        </Link>
      </div>
      <h3 className="card__title">{productName}</h3>
      <p className="card__preco">{`R$ ${productPrice}`}</p>

      <Link to={`/product/${product._id}`} product={product}>
        <BotaoPrincipal texto="Comprar" />
      </Link>
    </article>
  );
};
export default Card;
