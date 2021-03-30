import BotaoPrincipal from '../Componentes-Gerais/Botoes/BotaoPrincipal'
import './style.css'
const Card = () => {
  return (
    <article className="card">
      <div className="card__foto"></div>
      <h3 className="card__title">Lorem ipsum is a pseudo-Latin</h3>
      <p className="card__preco">R$29,99</p>
      <BotaoPrincipal texto="Adicionar Card" />


    </article>
  )
}
export default Card