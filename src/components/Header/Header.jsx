import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header__logo" to="/">
          Ximena Rodríguez
        </Link>

        <nav className="header__nav" aria-label="Navegación del proyecto">
          <Link className="header__link" to="/formulario-1">
            Formulario 1
          </Link>

          <Link className="header__link" to="/formulario-2">
            Formulario 2
          </Link>

          <Link className="header__link" to="/formulario-3">
            Formulario 3
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
