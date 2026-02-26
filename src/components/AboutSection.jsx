export default function AboutSection() {
  return (
    <section className="about-section" id="nosotros">
        <div className="about-grid">
            <div className="about-content">
                <div className="about-label">Sobre nosotros</div>
                <h2 className="about-title">Trabajamos diferente porque pensamos diferente</h2>
                <p className="about-text">
                    En AINGETK no empezamos por la tecnología. Empezamos por entender tu negocio, identificar dónde pierdes dinero, y diseñar soluciones que generan retorno real. Somos tu socio estratégico, no un proveedor más.
                </p>
                <div className="about-features">
                    <div className="about-feature">
                        <div className="about-feature-icon">
                            <i className="fas fa-bullseye"></i>
                        </div>
                        <div className="about-feature-text">
                            <h4>Enfoque en ROI</h4>
                            <p>Cada proyecto tiene métricas de retorno definidas</p>
                        </div>
                    </div>
                    <div className="about-feature">
                        <div className="about-feature-icon">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <div className="about-feature-text">
                            <h4>Acompañamiento real</h4>
                            <p>No desaparecemos después de implementar</p>
                        </div>
                    </div>
                    <div className="about-feature">
                        <div className="about-feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="about-feature-text">
                            <h4>Equipo local</h4>
                            <p>100% basados en Perú, siempre disponibles</p>
                        </div>
                    </div>
                    <div className="about-feature">
                        <div className="about-feature-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="about-feature-text">
                            <h4>Resultados medibles</h4>
                            <p>Si no se puede medir, no lo hacemos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-visual">
                <div className="about-image">
                    <div className="about-image-content">
                        <div className="about-image-number">360°</div>
                        <div className="about-image-text">Metodología integral</div>
                    </div>
                </div>
                <div className="about-floating-card">
                    <p>"Transformamos negocios con soluciones que realmente funcionan"</p>
                </div>
            </div>
        </div>
    </section>
  );
}

