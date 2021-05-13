import BotaoPrincipal from '../Componentes-Gerais/Botoes/BotaoPrincipal'
import './style.css'
const Card = ({produto}) => {
  
  return (
    <article className="card">
      <div className="card__foto">
        <img className="card__foto" src={produto.photo} alt={produto.name} />
      </div>
      <h3 className="card__title">{produto.name}</h3>
      <p className="card__preco">{`R$ ${produto.price}`}</p>
      <BotaoPrincipal texto="Adicionar Card" />


    </article>
  )
}
export default Card