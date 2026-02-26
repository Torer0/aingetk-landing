export default function ServicesSection() {
  return (
    <section className="services-section" id="soluciones">
        <div className="section-header">
            <div className="section-label">
                <i className="fas fa-cubes"></i>
                Lo que hacemos
            </div>
            <h2 className="section-title">Soluciones que transforman</h2>
            <p className="section-subtitle">No vendemos productos, disenamos soluciones integrales adaptadas a lo que tu empresa realmente necesita.</p>
        </div>
        <div className="services-grid">
            <a className="service-card service-card-link" href="/estrategia_diagnostico/">
                <div className="service-card-content">
                    <div className="service-number">01</div>
                    <h3>Estrategia y Diagnostico</h3>
                    <p>Evaluamos tu situacion actual y disenamos un roadmap tecnologico con enfoque en retorno de inversion real y medible.</p>
                    <span className="service-benefit">
                        <i className="fas fa-arrow-right"></i>
                        Ver apartado: Estrategia y Diagnostico
                    </span>
                </div>
            </a>
            <a className="service-card service-card-link" href="/sistemas_automatizacion/">
                <div className="service-card-content">
                    <div className="service-number">02</div>
                    <h3>Sistemas y Automatizacion</h3>
                    <p>Implementamos ERP, CRM y sistemas a medida que automatizan tus procesos y centralizan tu informacion critica.</p>
                    <span className="service-benefit">
                        <i className="fas fa-arrow-right"></i>
                        Ver apartado: Sistemas y Automatizacion
                    </span>
                </div>
            </a>
            <a className="service-card service-card-link" href="/datos_inteligencia/">
                <div className="service-card-content">
                    <div className="service-number">03</div>
                    <h3>Datos e Inteligencia</h3>
                    <p>Convertimos tus datos dispersos en decisiones estrategicas con dashboards ejecutivos y analitica predictiva.</p>
                    <span className="service-benefit">
                        <i className="fas fa-arrow-right"></i>
                        Ver apartado: Datos e Inteligencia
                    </span>
                </div>
            </a>
            <a className="service-card service-card-link" href="/cloud_seguridad/">
                <div className="service-card-content">
                    <div className="service-number">04</div>
                    <h3>Cloud y Seguridad</h3>
                    <p>Migramos tu infraestructura a la nube de forma segura, reduciendo costos y mejorando disponibilidad 24/7.</p>
                    <span className="service-benefit">
                        <i className="fas fa-arrow-right"></i>
                        Ver apartado: Cloud y Seguridad
                    </span>
                </div>
            </a>
            <a className="service-card service-card-link" href="/iot_industria_4_0/">
                <div className="service-card-content">
                    <div className="service-number">05</div>
                    <h3>IoT e Industria 4.0</h3>
                    <p>Conectamos el mundo fisico con el digital para monitoreo remoto, mantenimiento predictivo y manufactura inteligente.</p>
                    <span className="service-benefit">
                        <i className="fas fa-arrow-right"></i>
                        Ver apartado: IoT e Industria 4.0
                    </span>
                </div>
            </a>
            <a className="service-card service-card-link" href="/acompanamiento_continuo/">
                <div className="service-card-content">
                    <div className="service-number">06</div>
                    <h3>Acompanamiento Continuo</h3>
                    <p>No desaparecemos despues de implementar. Te acompanamos hasta que logres los resultados esperados y mas alla.</p>
                    <span className="service-benefit">
                        <i className="fas fa-arrow-right"></i>
                        Ver apartado: Acompanamiento Continuo
                    </span>
                </div>
            </a>
        </div>
    </section>
  );
}
