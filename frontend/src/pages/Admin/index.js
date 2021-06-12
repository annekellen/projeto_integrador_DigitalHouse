import './style.css';
import Paragrafo from '../../components/Paragrafo';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import React from 'react';
import axios from 'axios';

const Admin = () => {
  const [products, setProducts] = React.useState([]);
  const [newProduct, setNewProduct] = React.useState('');
  const [newPrice, setNewPrice] = React.useState('');
  const [newQuantity, setNewQuantity] = React.useState('');
  const [newImg, setNewImg] = React.useState('');
  const [newDesc, setNewDesc] = React.useState('');
  React.useEffect(() => {
    const runApi = async () => {
      try {
        const response = await axios.get('http://localhost:3333/products');
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    runApi();
  }, []);
/*   React.useEffect(() => {
    console.log(newProduct);
    console.log(newPrice);
    console.log(newQuantity);
    console.log(newImg);
    console.log(newDesc);
  }, [newImg, newPrice, newProduct, newQuantity, newDesc]); */

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      
      const response = await axios.post('http://localhost:3333/products/add', {
        "productName": newProduct,
        "productDescription": newDesc,
        "productPrice": newPrice,
        "productQuantity": newQuantity,
        "productImage": newImg,
      });
     

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="titulo-admin">
        <Paragrafo classe="titulo-left" texto="Produtos" />
        <Paragrafo classe="titulo-slogan" texto="Admin" />
      </div>
      <div className="btn-container">
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Produto
            <input
              type="text"
              onChange={(e) => setNewProduct(e.target.value)}
              name="name"
             
            />
          </label>
          <label>
            Categoria
            <select>
              <option value="tshirt">t-shirt</option>
            </select>
          </label>
          <label>
            Preço
            <input
              type="number"
              onChange={(e) => setNewPrice(e.target.value)}
              name="price"
            />
          </label>
          <label>
            Quantidade
            <input
              type="number"
              onChange={(e) => setNewQuantity(e.target.value)}
              name="quantity"
            />
          </label>
          <label>
            imagem
            <input
              type="text"
              onChange={(e) => setNewImg(e.target.value)}
              name="image"
            />
          </label>
          <label>
            descricao
            <input
              type="textarea"
              onChange={(e) => setNewDesc(e.target.value)}
              name="desc"
            />
          </label>
          <button type="submit"  class="btn btn-success">
            + Adicionar Novo Produto
          </button>
        </form>
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
            {products.map((product) => (
              <tr>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>T-shirt</td>
                <td>{product.productPrice}</td>
                <td>{product.productQuantity}</td>
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
            ))}
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
                    <label >Nome</label>
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
                    <label >Categoria</label>
                    <input
                      type="text"
                      class="form-control"
                      
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
              <button type="button"  class="btn btn-dark" data-dismiss="modal">
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
