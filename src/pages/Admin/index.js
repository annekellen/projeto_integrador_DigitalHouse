import './style.css';
import BotaoDestaque from '../../components/Componentes-Gerais/Botoes/BotaoDestaque';
import Paragrafo from '../../components/Paragrafo';

const Admin = () => {
  return (
    <>
      <div className="titulo-admin">
        <Paragrafo classe="titulo-left" texto="Produtos" />
        <Paragrafo classe="titulo-slogan" texto="Admin" />
      </div>
      <div className="btn-container">
        <button type="button" class="btn btn-success">
          + Adicionar Novo Produto
        </button>
      </div>
      <table className="table table-bordered tabela table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOME</th>
            <th scope="col">CATEGORIA</th>
            <th scope="col">PREÇO</th>
            <th scope="col">QUANTIDADE</th>
            <th scope="col">EDITAR</th>
            <th scope="col">EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0110</td>
            <td>Camiseta shirt</td>
            <td>T-shirt</td>
            <td>R$49,90</td>
            <td>2</td>
            <td>
              <button type="button" class="btn btn-primary">
                EDITAR
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger">
                EXCLUIR
              </button>
            </td>
          </tr>
          <tr>
            <td className="tamanho-tabela1">0120</td>
            <td className="tamanho-tabela">Camiseta shirt</td>
            <td className="tamanho-tabela">T-shirt</td>
            <td className="tamanho-tabela">R$49,90</td>
            <td className="tamanho-tabela1">7</td>
            <td className="tamanho-tabela1">
              <button type="button" class="btn btn-primary">
                EDITAR
              </button>
            </td>
            <td className="tamanho-tabela1">
              <button type="button" class="btn btn-danger">
                EXCLUIR
              </button>
            </td>
          </tr>
          <tr>
            <td>0130</td>
            <td>Camiseta shirt</td>
            <td>T-shirt</td>
            <td>R$49,90</td>
            <td>4</td>
            <td>
              <button type="button" class="btn btn-primary">
                EDITAR
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger">
                EXCLUIR
              </button>
            </td>
          </tr>
          <tr>
            <td>0140</td>
            <td>Camiseta shirt</td>
            <td>T-shirt</td>
            <td>R$49,90</td>
            <td>2</td>
            <td>
              <button type="button" class="btn btn-primary">
                EDITAR
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger">
                EXCLUIR
              </button>
            </td>
          </tr>
          <tr>
            <td>0150</td>
            <td>Camiseta shirt</td>
            <td>T-shirt</td>
            <td>R$49,90</td>
            <td>4</td>
            <td>
              <button type="button" class="btn btn-primary">
                EDITAR
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger">
                EXCLUIR
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Admin;
