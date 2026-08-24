import { useState } from "react";
import "./FormCaseStudy.css";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

function FormCaseStudy({ data }) {
  const [position, setPosition] = useState(50);

  return (
    <>
      <Header />

      <main className="form-case-study">
        {/* =====================================================
            HERO
            ===================================================== */}

        <Hero
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />

        {/* =====================================================
            COMPARATIVA ANTES / DESPUÉS
            ===================================================== */}

        <section className="form-case-study__comparison">
          <div className="container">
            <div className="form-case-study__section-header">
              <h2 className="form-case-study__title">Comparativa visual</h2>

              <div className="form-case-study__line" />

              <p className="form-case-study__description">
                {data.comparisonDescription}
              </p>
            </div>

            <div className="form-case-study__card">
              <div className="form-case-study__slider">
                {/* DESPUÉS */}

                <img
                  className="form-case-study__slider-image"
                  src={data.afterImage}
                  alt={data.afterAlt}
                />

                {/* ANTES */}

                <div
                  className="form-case-study__before"
                  style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`,
                    backgroundColor: "#ffffff",
                  }}
                >
                  <img
                    className="form-case-study__slider-image"
                    src={data.beforeImage}
                    alt={data.beforeAlt}
                  />
                </div>

                {/* ETIQUETAS */}

                <span className="form-case-study__label form-case-study__label--before">
                  Antes
                </span>

                <span className="form-case-study__label form-case-study__label--after">
                  Después
                </span>

                {/* DIVISOR */}

                <div
                  className="form-case-study__divider"
                  style={{
                    left: `${position}%`,
                  }}
                  aria-hidden="true"
                >
                  <span className="form-case-study__handle">↔</span>
                </div>

                {/* CONTROL */}

                <input
                  className="form-case-study__range"
                  type="range"
                  min="0"
                  max="100"
                  value={position}
                  onChange={(event) => setPosition(Number(event.target.value))}
                  aria-label="Comparar formulario antes y después"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NOTAS
            ===================================================== */}

        <section className="form-case-study__notes">
          <div className="container">
            <div className="form-case-study__notes-grid">
              <article className="form-case-study__note">
                <h2 className="form-case-study__note-title">Nota técnica</h2>

                <p className="form-case-study__note-text">
                  Mi intervención se centró exclusivamente en la arquitectura
                  del layout, estilos globales y contenedores mediante HTML/CSS
                  adaptado para CKEditor 4.21. Las tablas internas corresponden
                  a módulos externos automatizados de la organización.
                </p>
              </article>

              <article className="form-case-study__note">
                <h2 className="form-case-study__note-title">
                  Confidencialidad y datos
                </h2>

                <p className="form-case-study__note-text">
                  Por motivos de confidencialidad, la información institucional,
                  logotipos, nombres y demás datos identificables fueron
                  reemplazados por contenido ficticio o genérico. La estructura
                  visual y técnica presentada corresponde al trabajo realizado.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPLEMENTACIÓN
            ===================================================== */}

        <section className="form-case-study__code">
          <div className="container">
            <div className="form-case-study__code-content">
              <h2 className="form-case-study__code-title">Implementación</h2>

              <div className="form-case-study__code-line" />

              <p className="form-case-study__code-text">
                Consulta la implementación HTML y CSS utilizada para estructurar
                y presentar el formulario.
              </p>

              <a
                className="form-case-study__code-link"
                href={data.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver código en GitHub →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="gray" />
    </>
  );
}

export default FormCaseStudy;
