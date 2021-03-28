
import './style.css';
import Prateleiras from '../../components/Prateleiras';
import Paragrafo from '../../components/Paragrafo';
const Produto = () => {
  return (
    <>
      <div className="container-titulos" >
      <Paragrafo classe="titulo-left"  texto="Produtos" />
      <Paragrafo classe="titulo-slogan"  texto="Roupas Femininas" />
       
      </div>
       <Prateleiras />
      <Prateleiras />
      <Prateleiras />
    </>
  );
};
export default Produto;
