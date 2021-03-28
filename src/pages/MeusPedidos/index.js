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
      <h1 className="prateleiras__title">Não perca...</h1>
      <Prateleiras />
      <Prateleiras />
    </>
  );
};
export default MeusPedidos;
