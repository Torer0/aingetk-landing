export default function HeroSection() {
  return (
    <section className="hero">
        <div className="hero-bg">
            <div className="hero-gradient hero-gradient-1"></div>
            <div className="hero-gradient hero-gradient-2"></div>
            <div className="hero-gradient hero-gradient-3"></div>
        </div>
        <div className="hero-grid">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Consultora de Transformación Digital
                </div>
                <h1 className="hero-title">
                    <span className="line">Hacemos crecer</span>
                    <span className="line">tu negocio con</span>
                    <span className="line gradient-text">resultados reales</span>
                </h1>
                <p className="hero-subtitle">
                    No vendemos software. Diseñamos soluciones que transforman tu operación y generan retorno de inversión medible.
                </p>
                <p className="hero-statement">
                    "No vendemos tecnología. Diseñamos soluciones empresariales con impacto medible."
                </p>
                <div className="hero-ctas">
                    <a href="#contacto" className="btn btn-primary">
                        Solicita diagnóstico gratuito
                        <i className="fas fa-arrow-right"></i>
                    </a>
                    <a href="#proceso" className="btn btn-outline">
                        Ver metodología
                    </a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hero-card hero-card-1">
                    <div className="card-stat">+50</div>
                    <div className="card-stat-label">Empresas transformadas</div>
                    <div className="card-chart">
                        <div className="card-chart-bar"></div>
                        <div className="card-chart-bar"></div>
                        <div className="card-chart-bar"></div>
                        <div className="card-chart-bar"></div>
                        <div className="card-chart-bar"></div>
                        <div className="card-chart-bar"></div>
                        <div className="card-chart-bar"></div>
                    </div>
                </div>
                <div className="hero-card hero-card-2">
                    <div className="card-stat">-35%</div>
                    <div className="card-stat-label">Reducción promedio en costos operativos</div>
                </div>
                <div className="hero-card hero-card-3">
                    <div className="card-stat">6</div>
                    <div className="card-stat-label">Meses para ver ROI</div>
                </div>
            </div>
        </div>
    </section>
  );
}

