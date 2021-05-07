import './style.css';
import Paragrafo from '../../components/Paragrafo';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

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
      <div>
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
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  <AiFillEdit />
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger w-100"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  <BsFillTrashFill className="btn-trash " />
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
                <button type="button" class="btn btn-primary w-100">
                  <AiFillEdit className="btn-edit " />
                </button>
              </td>
              <td className="tamanho-tabela1">
                <button type="button" class="btn btn-danger w-100">
                  <BsFillTrashFill className="btn-trash" />
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
                <button type="button" class="btn btn-primary w-100">
                  <AiFillEdit className="btn-edit " />
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-danger w-100">
                  <BsFillTrashFill className="btn-trash" />
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
                <button type="button" class="btn btn-primary w-100 ">
                  <AiFillEdit className="btn-edit " />
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-danger w-100">
                  <BsFillTrashFill className="btn-trash" />
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
                <button type="button" class="btn btn-primary w-100">
                  <AiFillEdit className="btn-edit" />
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-danger w-100">
                  <BsFillTrashFill className="btn-trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edição
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-10">
                  <div class="form-group">
                    <label for="">Nome</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Nome"
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Qtd</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-9">
                  <div class="form-group">
                    <label for="">Categoria</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Categoria"
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="">Preço</label>
                    <input
                      type="number"
                      class="form-control"
                      id=""
                      placeholder="preço"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">
                Sair
              </button>
              <button type="button" class="btn btn-success">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Excluir
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h3>Tem Certeza que deseja excluir?</h3>
            </div>
            <div class="estilo-botao">
              <button
                type="button"
                class="btn btn-lg btn-success "
                data-dismiss="modal"
              >
                Não
              </button>
              <button type="button" class="btn btn-danger btn-lg ">
                Sim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
