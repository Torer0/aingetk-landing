export default function ResultsSection() {
  return (
    <section className="results-section" id="resultados">
        <div className="results-bg"></div>
        <div className="section-header">
            <div className="section-label">
                <i className="fas fa-trophy"></i>
                Impacto real
            </div>
            <h2 className="section-title">Números que hablan por sí solos</h2>
            <p className="section-subtitle">Estos son los resultados promedio que nuestros clientes han logrado trabajando con nosotros.</p>
        </div>
        <div className="results-grid">
            <div className="result-card">
                <div className="result-icon">
                    <i className="fas fa-clock"></i>
                </div>
                <div className="result-value">-60%</div>
                <div className="result-label">Tiempo en procesos</div>
            </div>
            <div className="result-card">
                <div className="result-icon">
                    <i className="fas fa-dollar-sign"></i>
                </div>
                <div className="result-value">-35%</div>
                <div className="result-label">Costos operativos</div>
            </div>
            <div className="result-card">
                <div className="result-icon">
                    <i className="fas fa-bug"></i>
                </div>
                <div className="result-value">-80%</div>
                <div className="result-label">Errores y reprocesos</div>
            </div>
            <div className="result-card">
                <div className="result-icon">
                    <i className="fas fa-rocket"></i>
                </div>
                <div className="result-value">+45%</div>
                <div className="result-label">Productividad</div>
            </div>
        </div>
    </section>
  );
}

