import BannerPrincipal from '../BannerPrincipal';
import BannerSecundario from '../BannerSecundario';
import Prateleiras from '../Prateleiras';
import PrateleirasMarcas from '../PrateleirasMarcas';
import PrateleirasPromocao from '../PrateleirasPromocao';
import './style.css';
import Paragrafo from '../Paragrafo';
const Main = () => {
  return (
    <main className="main">
      <BannerPrincipal />
      <BannerSecundario />
      <div className="prateleira-wrapper">
        <Paragrafo classe="titulo-center" texto="Confira nossos produtos" />
        <Prateleiras />
      </div>
      <PrateleirasPromocao />
      <PrateleirasMarcas />
    </main>
  );
};
export default Main;
