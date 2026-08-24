import "./Footer.css";

import { Link } from "react-router-dom";

import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

import footerVector from "../../assets/images/Footer/footer_vector.svg";

import contact from "../../data/contact";

function Footer() {
  const handleGoHome = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="footer footer--gray">
      <div className="footer__content">
        {/* Redes sociales */}
        <div className="footer__social">
          <a
            className="footer__social-link"
            href={`mailto:${contact.email}`}
            aria-label="Enviar correo electrónico"
          >
            <img
              className="footer__social-icon"
              src={emailIcon}
              alt="Correo electrónico"
            />
          </a>

          <a
            className="footer__social-link"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img
              className="footer__social-icon"
              src={githubIcon}
              alt="GitHub"
            />
          </a>

          <a
            className="footer__social-link"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img
              className="footer__social-icon"
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>
        </div>

        {/* Navegación */}
        <nav
          className="footer__navigation"
          aria-label="Navegación del pie de página"
        >
          <Link
            className="footer__navigation-link"
            to="/"
            onClick={handleGoHome}
          >
            Inicio
          </Link>

          <span className="footer__navigation-separator" aria-hidden="true">
            ·
          </span>

          <Link className="footer__navigation-link" to="/formulario-1">
            Formulario 1
          </Link>

          <span className="footer__navigation-separator" aria-hidden="true">
            ·
          </span>

          <Link className="footer__navigation-link" to="/formulario-2">
            Formulario 2
          </Link>

          <span className="footer__navigation-separator" aria-hidden="true">
            ·
          </span>

          <Link className="footer__navigation-link" to="/formulario-3">
            Formulario 3
          </Link>

          <span className="footer__navigation-separator" aria-hidden="true">
            ·
          </span>

          <Link className="footer__navigation-link" to="/contacto">
            Portafolio
          </Link>
        </nav>

        {/* Identidad */}
        <p className="footer__tagline">
          Arquitectura · Tecnología · Datos · Sostenibilidad
        </p>

        {/* Derechos de autor */}
        <p className="footer__copyright">© 2026 Ximena Rodríguez</p>
      </div>

      {/* Vector decorativo */}
      <img
        className="footer__vector"
        src={footerVector}
        alt=""
        aria-hidden="true"
      />
    </footer>
  );
}

export default Footer;
