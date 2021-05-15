import ProdutoDescricao from '../../components/ProdutoDescricao';
import Prateleiras from '../../components/Prateleiras';


import './style.css';
import BotaoDestaque from '../../components/Componentes-Gerais/Botoes/BotaoDestaque';
const Produtos = () => {
  return (
    <>
      <ProdutoDescricao />
      <div className="form-prateleira">
        <div className="form-left">
       
          <h3>Seu comentário é muito importante para nós!</h3>
          <form className="form__avaliacao">
            <input
              type="text"
              className="input__avaliacao input"
              required
              placeholder="Nome"
            />
            <input
              type="email"
              className="input__avaliacao input"
              required
              placeholder="Email"
            />
            <textarea
              name=""
              placeholder="Mensagem"
              className="input__avaliacao"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <BotaoDestaque
              classe="botao-continuar botao-avaliacao"
              texto="Enviar"
            />
          </form>
        </div>
        <div className="itens-relacionados">
          {/*   <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          <Prateleiras />
        </div>
      </div>
    </>
  );
};
export default Produtos;
