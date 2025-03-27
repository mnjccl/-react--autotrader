import logoIcon from "../imgs/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoIcon} alt="Logo Icon" className="header__icon" />
        <p className="header__heading">
          <span className="header__heading--first">Polovni</span>
          <span className="header__heading--second">Automobili</span>
        </p>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Početna
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Kontakt
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Uloguj se
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Registruj se
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
