import ProdutoDescricao from '../../components/ProdutoDescricao';
import FormAvaliacao from '../../components/Formularios/Avaliacao';
import Card from '../../components/Card'

import './style.css';
const Produtos = () => {
  return (
    <>
      <ProdutoDescricao />
      <div className="form-prateleira">
        <div className="form-left">
           <FormAvaliacao />
        
        </div>
        <div className="itens-relacionados">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};
export default Produtos;
