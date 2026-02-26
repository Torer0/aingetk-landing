export default function CtaSection() {
  return (
    <section className="cta-section">
        <div className="cta-bg-text">CRECER</div>
        <div className="cta-container">
            <h2 className="cta-title">¿Listo para transformar tu negocio?</h2>
            <p className="cta-subtitle">Agenda una reunión sin compromiso. Analizaremos tu situación y te mostraremos las oportunidades que detectemos.</p>
            <div className="cta-buttons">
                <a href="#contacto" className="btn btn-primary">
                    Solicitar diagnóstico gratuito
                    <i className="fas fa-arrow-right"></i>
                </a>
                <a href="https://wa.me/51967865811" target="_blank" className="btn btn-outline">
                    <i className="fab fa-whatsapp"></i>
                    WhatsApp directo
                </a>
            </div>
        </div>
    </section>
  );
}

