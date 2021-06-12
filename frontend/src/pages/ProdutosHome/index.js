import ProdutoDescricao from '../../components/ProdutoDescricao';
import Prateleiras from '../../components/Prateleiras';
import axios from 'axios';
import React from 'react';
import './style.css';
import BotaoDestaque from '../../components/Componentes-Gerais/Botoes/BotaoDestaque';
import {useParams} from 'react-router-dom'

const Produtos = ({ match }) => {
  const [productDetail, setProductDetail] = React.useState([]);
const {id} = useParams()
  React.useEffect(() => {
    const runApi = async () => {
      try {
        
        console.log(id);
        const response = await axios.get(
          `http://localhost:3333/products/${id}`,
        );
        setProductDetail(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    runApi();
  }, [id]);
  return (
    <>
      <ProdutoDescricao product={productDetail} />

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
     
          <Prateleiras />
        </div>
      </div>
    </>
  );
};
export default Produtos;
