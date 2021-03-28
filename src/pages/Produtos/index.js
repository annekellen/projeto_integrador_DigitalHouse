

import './style.css';
import Prateleiras from '../../components/Prateleiras';
const Produto = () => {
  return (
    <>
      <div className="container-titulos" >
        <h1 className="produtos-titulo">Produtos</h1>
        <p className="subtitulo-produtos">Roupas Femininas</p>
      </div>
      <Prateleiras />
      <Prateleiras />
      <Prateleiras />
    </>
  );
};
export default Produto;
