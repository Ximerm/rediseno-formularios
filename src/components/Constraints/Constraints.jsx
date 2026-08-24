import "./Constraints.css";

function Constraints() {
  return (
    <section className="constraints">
      <div className="constraints__container container">
        <div className="constraints__header">
          <h2 className="constraints__title">Condiciones del proyecto.</h2>
          <div className="constraints__line" />
        </div>

        <div className="constraints__grid">
          <article className="constraints__item">
            <h3 className="constraints__subtitle">Estructura y contenido</h3>

            <p className="constraints__text">
              Preservar la estructura original de los campos y mantener el orden
              requerido por las reglas de negocio.
            </p>
          </article>

          <article className="constraints__item">
            <h3 className="constraints__subtitle">Entorno técnico</h3>

            <p className="constraints__text">
              Estilización integrada directamente en la estructura HTML (sin
              hojas de estilo externas) para garantizar compatibilidad con
              CKEditor 4.21, motor utilizado para la edición y renderizado.
            </p>
          </article>

          <article className="constraints__item">
            <h3 className="constraints__subtitle">Pantalla y PDF</h3>

            <p className="constraints__text">
              Garantizar un diseño claro y consistente tanto para la
              visualización en pantalla como para la generación de documentos
              destinados a impresión o PDF.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Constraints;
