import "./Results.css";

import { Link } from "react-router-dom";

function Results() {
  return (
    <section className="results" id="resultados">
      <div className="results__container">
        <div className="results__header">
          <h2 className="results__title">Explora los resultados.</h2>

          <div className="results__line"></div>

          <p className="results__intro">
            Tres formularios, un mismo enfoque de rediseño y estandarización.
          </p>
        </div>

        <div className="results__cards">
          <Link to="/formulario-1" className="results__card">
            <h3 className="results__card-title">Formulario 1</h3>

            <p className="results__card-text">
              Programa de auditorías internas.
            </p>

            <span className="results__link">Ver formulario →</span>
          </Link>

          <Link to="/formulario-2" className="results__card">
            <h3 className="results__card-title">Formulario 2</h3>

            <p className="results__card-text">
              Informe de resultados de auditoría.
            </p>

            <span className="results__link">Ver formulario →</span>
          </Link>

          <Link to="/formulario-3" className="results__card">
            <h3 className="results__card-title">Formulario 3</h3>

            <p className="results__card-text">
              Control de liberación de producto.
            </p>

            <span className="results__link">Ver formulario →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Results;
