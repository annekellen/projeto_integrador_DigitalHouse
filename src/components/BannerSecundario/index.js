import './style.css';
import BotaoSecundario from '../Componentes-Gerais/Botoes/BotaoSecundario';
const BannerSecundario = () => {
  return (
    <section className="banner-secundario">
      <div className="banner-secundario__item">
        <div className="container-item">
          <h1 className="banner-secundario__title">A PARTIR DE R$50</h1>
          <div className="btn_bannerSecundario">
            <BotaoSecundario texto="COMPRE AGORA" />
          </div>
        </div>
      </div>
      <div className="banner-secundario__item">
        <div className="container-item">
          <h1 className="banner-secundario__title">A PARTIR DE R$50</h1>
          <div className="btn_bannerSecundario">
            <BotaoSecundario texto="COMPRE AGORA" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerSecundario;
