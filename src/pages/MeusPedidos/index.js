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
          <button className="form-input-btn continuar-comprando" type="submit">
            Continuar Comprando
          </button>
          <button className="form-input-btn btn-finalizar" type="submit">
            Finalizar
          </button>
        </div>
      </div>
      <Paragrafo classe="titulo-center" texto="Não perca..." />
      <Prateleiras />
      <Prateleiras />
    </>
  );
};
export default MeusPedidos;
