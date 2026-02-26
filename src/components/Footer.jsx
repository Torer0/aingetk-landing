export default function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-brand">
                <a href="#" className="logo">
                    <div className="logo-icon">
                        <img src="assets/logo.png" alt="AINGETK" width="140" height="140" loading="lazy" decoding="async" />
                    </div>
                    <span className="logo-text">AINGETK</span>
                </a>
                <p>Transformamos negocios con soluciones tecnologicas que generan resultados medibles. Tu socio estrategico en transformacion digital.</p>
                <div className="footer-social">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://wa.me/51967865811" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div className="footer-links">
                <h4>Soluciones</h4>
                <ul>
                    <li><a href="/estrategia_diagnostico/">Estrategia y Diagnostico</a></li>
                    <li><a href="/sistemas_automatizacion/">Sistemas y Automatizacion</a></li>
                    <li><a href="/datos_inteligencia/">Datos e Inteligencia</a></li>
                    <li><a href="/cloud_seguridad/">Cloud y Seguridad</a></li>
                    <li><a href="/iot_industria_4_0/">IoT e Industria 4.0</a></li>
                    <li><a href="/acompanamiento_continuo/">Acompanamiento Continuo</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Empresa</h4>
                <ul>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#proceso">Metodologia</a></li>
                    <li><a href="#resultados">Resultados</a></li>
                    <li><a href="#equipo">Equipo</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
            <div className="footer-links">
                <h4>Legal</h4>
                <ul>
                    <li><a href="/terminos-de-servicio.html" target="_blank" rel="noopener noreferrer">Terminos de Servicio</a></li>
                    <li><a href="/politica-de-privacidad.html" target="_blank" rel="noopener noreferrer">Politica de Privacidad</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 AINGETK. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
}
