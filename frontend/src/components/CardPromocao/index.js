import BotaoPrincipal from '../Componentes-Gerais/Botoes/BotaoPrincipal'
import './style.css'
const CardPromocao = () => {
  return (
    <article className="cardPromocao">
      <div className="cardPromocao__foto"></div>
      <h3 className="cardPromocao__title">Lorem ipsum is a pseudo-Latin</h3>
      <p className="cardPromocao__preco">R$29,99</p>      
      <BotaoPrincipal texto="Adicionar Card" />
    </article>
  )
}
export default CardPromocao