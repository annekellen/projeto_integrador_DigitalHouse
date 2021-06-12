import BotaoDestaque from '../../components/Componentes-Gerais/Botoes/BotaoDestaque';
import Paragrafo from '../../components/Paragrafo';
import Prateleiras from '../../components/Prateleiras';
import TabelaPedidos from '../../components/TabelaPedidos';
import './style.css';
const MeusPedidos = () => {
  return (
    <>
      <div className="container-pedidos">
        <TabelaPedidos />
        <div className="btn-container">
          <BotaoDestaque classe="botao-continuar mg-lat-10" texto="Continuar Comprando" />

          <BotaoDestaque classe="botao-finalizar" texto="Finalizar" />
        </div>
      </div>
      <Paragrafo classe="titulo-center" texto="Não perca..." />
      <Prateleiras />
      <Prateleiras />
    </>
  );
};
export default MeusPedidos;
