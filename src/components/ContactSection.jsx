export default function ContactSection() {
  return (
    <section className="contact-section" id="contacto">
        <div className="contact-grid">
            <div className="contact-info">
                <h2>Hablemos de tu próximo paso</h2>
                <p>Cuéntanos qué desafíos enfrenta tu negocio. Te escuchamos y te proponemos soluciones concretas, sin compromiso y sin jerga técnica.</p>
                <div className="contact-details">
                    <div className="contact-item">
                        <div className="contact-item-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-item-text">
                            <h4>Email</h4>
                            <p>contacto@aingetk.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-item-text">
                            <h4>Teléfono</h4>
                            <p>+51 967 865 811</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <div className="contact-item-text">
                            <h4>WhatsApp</h4>
                            <p>+51 967 865 811</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-item-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-item-text">
                            <h4>Ubicación</h4>
                            <p>Lima, Perú</p>
                        </div>
                    </div>
                </div>
            </div>
            <form className="contact-form" id="contactForm"
			action="https://formsubmit.co/aingetk@gmail.com"
			method="POST">
                <div className="form-row">
                    <div className="form-group">
                        <label>Nombre completo</label>
                        <input type="text" name="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                        <label>Email corporativo</label>
                        <input type="email" name="email" placeholder="tu@empresa.com" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Empresa</label>
                        <input type="text" name="company" placeholder="Nombre de tu empresa" />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input type="tel" name="phone" placeholder="+51 999 999 999" />
                    </div>
                </div>
                <div className="form-group">
                    <label>¿Cuál es tu principal desafío?</label>
                    <select name="challenge">
                        <option value="">Selecciona una opción</option>
                        <option value="procesos">Procesos manuales y errores</option>
                        <option value="sistemas">Necesito un sistema/ERP</option>
                        <option value="datos">No tengo visibilidad de mi negocio</option>
                        <option value="costos">Quiero reducir costos operativos</option>
                        <option value="crecimiento">Quiero escalar mi operación</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Cuéntanos más</label>
                    <textarea name="message" placeholder="Describe brevemente tu situación actual..."></textarea>
                </div>
                <div className="legal-consent">
                    <label>
                        <input type="checkbox" name="privacy_acceptance" required />
                        <span>
                            Acepto los <a href="/terminos-de-servicio/">Terminos de Servicio</a> y la <a href="/politica-de-privacidad/">Politica de Privacidad</a>.
                        </span>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Enviar solicitud
                    <i className="fas fa-paper-plane"></i>
                </button>
				<input type="hidden" name="_subject" value="Nuevo contacto desde la web" />
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value="https://aingetk.com" />
            </form>
        </div>
    </section>
  );
}


