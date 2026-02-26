import BackgroundEffects from './BackgroundEffects.jsx';
import { useLandingSetup } from '../hooks/useLandingSetup.js';

function ServiceTopBar() {
  return (
    <header className="service-topbar">
      <a className="service-back-link" href="/">
        <i className="fas fa-arrow-left" aria-hidden="true"></i>
        Volver al inicio
      </a>
      <a
        className="service-top-cta"
        href="https://wa.me/51967865811"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hablar con consultoria
      </a>
    </header>
  );
}

export default function ServiceRoutePage({ routeData }) {
  useLandingSetup();

  const {
    title,
    image,
    heroTitle,
    heroSubtitle,
    novedades,
    entregables,
    startupSolutions,
  } = routeData;

  return (
    <>
      <BackgroundEffects />
      <main className="service-route-page">
        <div className="service-route-shell">
          <ServiceTopBar />

          <section className="service-hero">
            <div className="service-hero-main">
              <p className="service-kicker">Solucion AINGETK</p>
              <h1>{heroTitle}</h1>
              <p className="service-hero-subtitle">{heroSubtitle}</p>
              <div className="service-hero-tags">
                <span>{title}</span>
                <span>Implementacion guiada</span>
                <span>Impacto medible</span>
              </div>
            </div>
            <div className="service-hero-image-wrap">
              <img
                className="service-hero-image"
                src={image}
                alt={`Ilustracion de ${title}`}
                loading="eager"
                decoding="async"
              />
            </div>
          </section>

          <section className="service-grid-block">
            <article className="service-panel">
              <h2>Novedades</h2>
              <ul>
                {novedades.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="service-panel">
              <h2>Que incluye</h2>
              <ul>
                {entregables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="service-panel service-startup-panel">
            <h2>Soluciones viables para startup inicial</h2>
            <ul>
              {startupSolutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="service-cta-band">
            <h3>Listo para activar esta solucion en tu empresa?</h3>
            <p>
              Te ayudamos a priorizar, implementar y medir resultados con un plan
              realista y enfoque de negocio.
            </p>
            <a
              className="service-cta-btn"
              href="https://wa.me/51967865811"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar una llamada
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
