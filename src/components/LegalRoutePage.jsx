import BackgroundEffects from './BackgroundEffects.jsx';
import { useLandingSetup } from '../hooks/useLandingSetup.js';

function LegalTopBar() {
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
        Contactar al equipo
      </a>
    </header>
  );
}

export default function LegalRoutePage({ routeData }) {
  useLandingSetup();

  const { title, heroTitle, heroSubtitle, lastUpdated, sections } = routeData;

  return (
    <>
      <BackgroundEffects />
      <main className="service-route-page legal-route-page">
        <div className="service-route-shell">
          <LegalTopBar />

          <section className="service-hero legal-route-hero">
            <div className="service-hero-main">
              <p className="service-kicker">Informacion legal</p>
              <h1>{heroTitle}</h1>
              <p className="service-hero-subtitle">{heroSubtitle}</p>
              <div className="service-hero-tags">
                <span>{title}</span>
                <span>Ultima actualizacion: {lastUpdated}</span>
              </div>
            </div>
          </section>

          <section className="service-panel legal-route-panel">
            {sections.map((section) => (
              <article key={section.heading} className="legal-route-block">
                <h2>{section.heading}</h2>
                {section.paragraphs &&
                  section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
