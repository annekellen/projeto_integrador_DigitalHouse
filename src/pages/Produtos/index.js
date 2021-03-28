
import Title from '../../components/Title'
import './style.css';
import Prateleiras from '../../components/Prateleiras';
const Produto = () => {
  return (
    <>
      <div className="container-titulos" >
        <Title text1="Produtos"/>
        <Title text2="Roupas femininas"/>
      </div>
      <Prateleiras />
      <Prateleiras />
      <Prateleiras />
    </>
  );
};
export default Produto;
