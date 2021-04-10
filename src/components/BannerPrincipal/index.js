import BotaoSecundario from '../Componentes-Gerais/Botoes/BotaoSecundario';
import './style.css';
const BannerPrincipal = () => {
  return (
    <section className="banner-principal">
      <h1 className="banner-principal__title">NOVIDADES DA SEMANA</h1>
      <p className="banner-principal__slogan">
        o melhor da moda, beleza, bem-estar em um só lugar. Vem ver os looks que
        acabaram de chegar
      </p>
      <BotaoSecundario texto="COMPRE AGORA" />
    </section>
  );
};
export default BannerPrincipal;
