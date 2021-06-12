import Marcas from '../Marcas';
import './style.css';
import Paragrafo from '../Paragrafo';
const PrateleirasMarcas = () => {
  return (
    <>
      <div className="marcas-wrapper">
        <Paragrafo classe="titulo-center" texto="Nossos parceiros" />
        <section className="prateleiras">
          <div className="prateleirasMarcas">
            <Marcas className="prateleira-item" />
            <Marcas  className="prateleira-item"/>
            <Marcas className="prateleira-item" />
            <Marcas className="prateleira-item" />
            <Marcas className="prateleira-item" />
            <Marcas className="prateleira-item" />
          </div>
        </section>
      </div>
    </>
  );
};
export default PrateleirasMarcas;
