import React from 'react';
import Paragrafo from '../Paragrafo';
import './style.css';
import { BsFillTrashFill } from 'react-icons/bs';

const TabelaPedidos = () => {
  return (
    <div className="border-coluna">
      <Paragrafo classe="titulo-left titulo-compras" texto="Minhas compras" />

      <table className="table table-bordered tabela table-striped">
        <thead>
          <tr>
            <th scope="col" className="tamanho2">
              Item
            </th>
            <th scope="col" className="tamanho1">
              Tamanho
            </th>
            <th scope="col" className="tamanho3">
              Preco
            </th>
            <th scope="col" className="tamanho1">
              Quantidade
            </th>
            <th scope="col" className="tamanho1">
              Exluir
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Camiseta shirt</td>
            <td>XL</td>
            <td>R$49,90</td>
            <td>1</td>

            <td>
              <button type="button" class="btn btn-danger">
                <BsFillTrashFill className="btn-trash" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Camiseta shirt</td>
            <td>XL</td>
            <td>R$49,90</td>
            <td>1</td>

            <td>
              <button type="button" class="btn btn-danger">
                <BsFillTrashFill className="btn-trash" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Camiseta shirt</td>
            <td>XL</td>
            <td>R$49,90</td>
            <td>1</td>

            <td>
              <button type="button" class="btn btn-danger">
                <BsFillTrashFill className="btn-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaPedidos;
