import './style.css'
const Header = () => {
  return (
    <section className="header">
      <h1 className="header__title">OVERLOOK</h1>
      <nav className="header__nav">
        <a href="/" className="header__nav__item">HOME</a>
        <a href="/sobre" className="header__nav__item">MULHER</a>
        <a href="/produtos" className="header__nav__item">HOMEM</a>
        <a href="/produtos" className="header__nav__item">CRIANÇA</a>
        <a href="/produtos" className="header__nav__item">PROMOÇÃO</a>
      </nav>
    </section>
  
  )
}
export default Header