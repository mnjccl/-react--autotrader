import logoIcon from "../imgs/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoIcon} alt="Logo Icon" className="header__icon" />
        <h1 className="header__heading">
          <span className="header__heading--first">Auto</span>
          <span className="header__heading--second">Trader</span>
        </h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Contact
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Log In
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
