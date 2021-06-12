import './style.css';
import { BsGearFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__texto">
          <h1 className="footer__title">OVERLOOK</h1>
          <p className="caixa__texto">
            Lorem ipsum dolor sit amet, alii reque ei eam, integre repudiare eum
            at. Alienum fierent partiendo id ius. Cu purto sapientem evertitur
            est, has harum eripuit ut. An commune fabellas has, commodo nostrum
            in vim.
          </p>
        </div>
        <p className="footer__link">
          <ul>
            <li>
              <h1 className="footer__title">MEU MENU</h1>
            </li>
            <li>
              <a href="/" className="header__nav__item">
                Home
              </a>
            </li>
            <li>
              <a href="/politicas" className="header__nav__item">
                Politicas
              </a>
            </li>
            <li>
              <a href="/admin" className="header__nav__item">
                <BsGearFill />
              </a>
            </li>
          </ul>
        </p>
      </div>
      <p className="footer__description">
        2021 | www.overlook.com.br | Direitos reservados. <sup>&copy;</sup>
      </p>
    </section>
  );
};
export default Footer;
