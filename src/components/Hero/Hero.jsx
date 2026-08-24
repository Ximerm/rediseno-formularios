import "./Hero.css";

import heroForms from "../../assets/images/Hero/hero-forms.png";

function Hero({
  eyebrow = "FRONT-END · PROYECTO PROFESIONAL",

  title = <>Rediseño de formularios corporativos</>,

  description = (
    <>
      Rediseño y maquetación de una suite de formularios institucionales,
      adaptando estructuras existentes para mejorar la legibilidad, la
      consistencia visual y la experiencia de usuario, tanto en pantalla como en
      su exportación a PDF.
    </>
  ),

  image = heroForms,

  imageAlt = "Visualización de un formulario institucional rediseñado",
}) {
  return (
    <section className="hero">
      <div className="hero__container container">
        {/* =====================================================
            CONTENIDO
            ===================================================== */}

        <div className="hero__content">
          <p className="hero__eyebrow">{eyebrow}</p>

          <h1 className="hero__title">{title}</h1>

          <p className="hero__description">{description}</p>
        </div>

        {/* =====================================================
            IMAGEN
            ===================================================== */}

        <div className="hero__visual">
          <img className="hero__image" src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
