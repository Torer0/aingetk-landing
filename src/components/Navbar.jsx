export default function Navbar({ toggleMenu }) {
  return (
    <nav className="navbar">
        <a href="#" className="logo">
            <div className="logo-icon">
                <img src="assets/logo.png" alt="AINGETK" width="140" height="140" decoding="async" fetchPriority="high" />
            </div>
            <span className="logo-text">AINGETK</span>
        </a>
        <ul className="nav-links">
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#resultados">Resultados</a></li>
            <li><a href="#soluciones">Soluciones</a></li>
            <li><a href="#equipo">Equipo</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="https://wa.me/51967865811" target="_blank" rel="noopener noreferrer" className="nav-cta" aria-label="Contacto por WhatsApp" title="Contacto">
            <span className="contact-icon" aria-hidden="true">
                <i className="fas fa-helmet-safety"></i>
                <i className="fas fa-phone"></i>
            </span>
        </a>
        <div className="mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  );
}


