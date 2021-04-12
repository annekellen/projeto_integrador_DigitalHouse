import './style.css';
const Header = () => {
  return (
    <section className="header">
      <h1 className="header__title">OVERLOOK</h1>
      <nav className="header__nav">
        <a href="/" className="header__nav__item">
          HOME
        </a>
        <a href="/produtos" className="header__nav__item">
          PRODUTOS
        </a>
        <a href="/meuspedidos" className="header__nav__item">
          MEUS PEDIDOS
        </a>
        <a href="/politicas" className="header__nav__item">
          POLITICAS
        </a>
        <a href="/sobre" className="header__nav__item">
          SOBRE
        </a>
        <a href="/admin" className="header__nav__item">
          ADMIN
        </a>
        <a href="/cadastro" className="header__nav__item">
          CADASTRO/LOGIN
        </a>
      </nav>
    </section>
  );
};
export default Header;
