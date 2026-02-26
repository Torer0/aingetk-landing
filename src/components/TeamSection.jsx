export default function TeamSection({ handleImageError }) {
  return (
    <section className="team-section" id="equipo">
        <div className="section-header">
            <div className="section-label">
                <i className="fas fa-users"></i>
                Nuestro equipo
            </div>
            <h2 className="section-title">Las personas detrás de tu éxito</h2>
            <p className="section-subtitle">Un equipo apasionado por generar impacto real en los negocios de nuestros clientes.</p>
        </div>
        <div className="team-carousel-container">
            <div className="team-carousel" id="teamCarousel">
                
                <div className="team-card">
                    <div className="team-photo">
                        
                        <img src="assets/team/enzo-rivas.jpg" alt="Enzo Rivas" loading="lazy" decoding="async" width="180" height="180" onError={handleImageError} />
                        <div className="team-photo-placeholder" style={{ display: "none" }}>ER</div>
                    </div>
                    <h3 className="team-name">Enzo Rivas</h3>
                    <p className="team-role">CEO & Co-Founder</p>
                    <p className="team-quote">
                        Fundamos AINGETK con una misión clara: cambiar la forma en que las empresas adoptan tecnología. No queremos vender software, queremos ser el socio estratégico que te ayuda a crecer.
                    </p>
                    <div className="team-social">
                        <a href="https://www.linkedin.com/in/enzo-nicolas-julio-rivas-rojas-602b20249/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Torer0" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                
                <div className="team-card">
                    <div className="team-photo">
                        
                        <img src="assets/team/diego-pozo.jpg" alt="Diego Pozo" loading="lazy" decoding="async" width="180" height="180" onError={handleImageError} />
                        <div className="team-photo-placeholder" style={{ display: "none" }}>DP</div>
                    </div>
                    <h3 className="team-name">Diego Pozo</h3>
                    <p className="team-role">Co-Founder</p>
                    <p className="team-quote">
                        Creemos que cada cliente es único e importante. Nuestro compromiso es acompañarlos de cerca con soluciones que realmente generen impacto en su negocio.
                    </p>
                    <div className="team-social">
                        <a href="https://www.linkedin.com/in/diego-pozo-abregu/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Pozzzo" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                
                <div className="team-card">
                    <div className="team-photo">
                        <img src="assets/team/diana-sologuren.jpeg" alt="Diana Sologuren" loading="lazy" decoding="async" width="180" height="180" onError={handleImageError} />
                        <div className="team-photo-placeholder" style={{ display: "none" }}>MT</div>
                    </div>
                    <h3 className="team-name">Diana Sologuren</h3>
                    <p className="team-role">Directora de Proyectos</p>
                    <p className="team-quote">
                        La clave del éxito está en entender el negocio antes de proponer cualquier solución. Cada proyecto es una oportunidad de generar valor real.
                    </p>
                    <div className="team-social">
                        <a href="https://www.linkedin.com/in/dianasologuren/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"  aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                
                <div className="team-card">
                    <div className="team-photo">
                        <img src="assets/team/arturo-noriega.jpeg" alt="Arturo Noriega" loading="lazy" decoding="async" width="180" height="180" onError={handleImageError} />
                        <div className="team-photo-placeholder" style={{ display: "none" }}>CG</div>
                    </div>
                    <h3 className="team-name">Arturo Noriega</h3>
                    <p className="team-role">Lead Developer</p>
                    <p className="team-quote">
                        La tecnología debe ser invisible para el usuario y poderosa para el negocio. Construimos soluciones robustas que escalan con tu empresa.
                    </p>
                    <div className="team-social">
                        <a href="https://www.linkedin.com/in/arturo-manuel-noriega-noriega-7163b3252/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/ArturoManuel" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                
                <div className="team-card">
                    <div className="team-photo">
                        <img src="assets/team/ricardo-bravo.jpeg" alt="Ricardo Bravo" loading="lazy" decoding="async" width="180" height="180" onError={handleImageError} />
                        <div className="team-photo-placeholder" style={{ display: "none" }}>AL</div>
                    </div>
                    <h3 className="team-name">Ricardo Bravo</h3>
                    <p className="team-role">Cybersecurity Specialist</p>
                    <p className="team-quote">
                        Transformar un negocio requiere más que tecnología: requiere entender a las personas y los procesos. Ese es nuestro diferencial.
                    </p>
                    <div className="team-social">
                        <a href="https://www.linkedin.com/in/ricardo-bravo-wong-2a377221b/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Kotrixx"  aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>

            
            <div className="carousel-controls">
                <button className="carousel-btn" id="prevBtn" aria-label="Anterior">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button className="carousel-btn" id="nextBtn" aria-label="Siguiente">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>

            
            <div className="carousel-dots" id="carouselDots"></div>
        </div>
    </section>
  );
}

