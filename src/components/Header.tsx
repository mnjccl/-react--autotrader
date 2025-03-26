import logoIcon from "../imgs/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoIcon} alt="Logo Icon" className="logo-box__icon" />
        <p className="logo-box__text">Polovni automobili</p>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Početna
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              O nama
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Uloguj se
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Registruj se
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
