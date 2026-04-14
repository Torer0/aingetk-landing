import { createContext, useContext, useEffect, useMemo, useState } from 'react';

/* ─── Section media map ─────────────────────────────────────────────
   video: local MP4 path  → coloca el archivo en /public/assets/videos/
   poster: imagen de fondo → se muestra mientras el video carga
   ──────────────────────────────────────────────────────────────── */
const MEDIA = {
  hero:      { video: '/assets/videos/hero.mp4',       poster: 'https://picsum.photos/seed/aingetk-hero-industrial-plant/1920/1080' },
  platform:  { video: '/assets/videos/platform.mp4',   poster: 'https://picsum.photos/seed/aingetk-platform-datacenter/1920/900' },
  solutions: { video: '/assets/videos/solutions.mp4',  poster: 'https://picsum.photos/seed/aingetk-solutions-industrial/1920/900' },
  industries:{ video: '/assets/videos/industries.mp4', poster: 'https://picsum.photos/seed/aingetk-industries-factory/1920/900' },
  tech:      { video: '/assets/videos/tech.mp4',       poster: 'https://picsum.photos/seed/aingetk-tech-cloud-infra/1920/900' },
  cases:     { video: '/assets/videos/cases.mp4',      poster: 'https://picsum.photos/seed/aingetk-cases-operations/1920/900' },
  cta:       { video: '/assets/videos/cta.mp4',        poster: 'https://picsum.photos/seed/aingetk-cta-latam-city/1920/800' },
};

/* ─── Card reference images ──────────────────────────────────────────
   Reemplaza estas URLs con fotos reales de operaciones de tu empresa.
   ──────────────────────────────────────────────────────────────── */
const IMG = {
  maintenance: 'https://picsum.photos/seed/aingetk-maintenance-assets/800/450',
  fleet:       'https://picsum.photos/seed/aingetk-fleet-logistics/800/450',
  analytics:   'https://picsum.photos/seed/aingetk-analytics-dashboard/800/450',
  iot:         'https://picsum.photos/seed/aingetk-iot-sensors-plant/800/450',
  manufacturing:'https://picsum.photos/seed/aingetk-manufacturing-plant/800/400',
  logistics:   'https://picsum.photos/seed/aingetk-logistics-warehouse/800/400',
  transport:   'https://picsum.photos/seed/aingetk-transport-fleet/800/400',
  energy:      'https://picsum.photos/seed/aingetk-energy-field/800/400',
  food:        'https://picsum.photos/seed/aingetk-food-production/800/400',
  case1:       'https://picsum.photos/seed/aingetk-case-maintenance-ops/800/420',
  case2:       'https://picsum.photos/seed/aingetk-case-fleet-efficiency/800/420',
  case3:       'https://picsum.photos/seed/aingetk-case-analytics-result/800/420',
};

/* ─── SectionVideo component ──────────────────────────────────────── */
function SectionVideo({ media, children, className = '', variant = '', style = {} }) {
  return (
    <div className={`sv${variant ? ` sv--${variant}` : ''} ${className}`} style={style}>
      <div className="sv__bg">
        <video autoPlay muted loop playsInline poster={media?.poster}>
          {media?.video && <source src={media.video} type="video/mp4" />}
        </video>
      </div>
      <div className="sv__overlay" />
      <div className="sv__content">{children}</div>
    </div>
  );
}

/* ─── Language context ───────────────────────────────────────────── */
const LangCtx = createContext({ lang: 'es', setLang: () => {} });
function useLang() { return useContext(LangCtx); }

/* ─── Bilingual content ──────────────────────────────────────────── */
const CONTENT = {
  en: {
    nav: [
      { label: 'Home',         href: '/' },
      { label: 'Platform',     href: '/platform' },
      { label: 'Solutions',    href: '/solutions' },
      { label: 'Industries',   href: '/industries' },
      { label: 'Technology',   href: '/technology' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Insights',     href: '/insights' },
      { label: 'Company',      href: '/company' },
      { label: 'Contact',      href: '/contact' },
    ],
    navCta: 'Contact Us',
    mobileLocation: 'Lima, Peru · Latin America',

    hero: {
      eyebrow: 'Technology platforms · Peru & Latin America',
      title: 'Technology to optimize ',
      titleAccent: 'modern operations.',
      body: 'AINGETK builds software platforms that help companies automate processes, monitor operations and make data-driven decisions.',
      cta1: 'Explore Solutions',
      cta2: 'Contact Us',
    },
    problem: {
      title: 'Many companies still operate with ',
      titleAccent: 'fragmented systems.',
      body: 'Operational inefficiencies, manual processes and disconnected software generate unnecessary costs and slow down decision-making across industrial and service companies.',
      m1: 'Operational efficiency across key industrial sectors in the region',
      m2: 'Lost annually in avoidable operational inefficiencies',
      m3: 'Of operations have real-time visibility into critical processes',
    },
    platform: {
      title: 'Operational Intelligence ',
      titleAccent: 'Platform',
      body: 'Our technology integrates operational data, analytics and automation into a single digital ecosystem — designed for industrial and service companies.',
      components: [
        { name: 'Operational Dashboards',      icon: '▦' },
        { name: 'Automation Tools',            icon: '⟳' },
        { name: 'AI-Powered Analytics',        icon: '◎' },
        { name: 'Industrial IoT Integrations', icon: '⬡' },
        { name: 'Data Infrastructure',         icon: '◈' },
      ],
      layers: [
        { num: '01', name: 'Edge Layer',         summary: 'IoT devices, gateways and industrial sensors capturing operational events at source.' },
        { num: '02', name: 'Data Layer',          summary: 'Real-time ingestion, stream processing and industrial data pipelines across sites.' },
        { num: '03', name: 'AI Layer',            summary: 'Prediction models, anomaly detection and operational intelligence services.' },
        { num: '04', name: 'Application Layer',   summary: 'SaaS platforms, workflow apps and real-time dashboards for every operation.' },
      ],
      pageEyebrow: 'Platform',
      pageTitle: 'Operational Intelligence Platform',
      pageSubtitle: 'A unified technology stack that integrates operational data, analytics and automation into a single digital ecosystem for industrial and service companies.',
    },
    solutions: {
      sectionTitle: 'Our ',
      sectionTitleAccent: 'Solutions',
      sectionBody: 'Software platforms built to solve specific operational challenges — deployed and integrated into your existing infrastructure.',
      learnMore: 'Learn More',
      viewSolution: 'View Solution',
      pageEyebrow: 'Solutions',
      pageTitle: 'Software Platforms for Operational Excellence',
      pageSubtitle: 'Each solution is built on our shared intelligence core and designed to solve specific operational challenges in industrial and service companies.',
      challengeLabel: 'The Challenge',
      featuresLabel: 'Platform Features',
      benefitsLabel: 'Operational Benefits',
      items: [
        {
          slug: 'maintenance-management',
          name: 'Maintenance Management Systems',
          icon: '⚙', img: 'maintenance',
          summary: 'Reduce downtime and equipment failures with predictive maintenance intelligence.',
          problem: 'Maintenance teams operate with reactive workflows and disconnected asset records, causing avoidable downtime and high emergency costs.',
          features: ['Asset health monitoring and anomaly detection', 'Predictive maintenance scheduling and workload balancing', 'Work-order management with mobile technician workflows'],
          benefits: ['Higher equipment uptime and asset reliability', 'Lower emergency intervention costs', 'Faster resolution cycles across facilities'],
        },
        {
          slug: 'fleet-logistics',
          name: 'Fleet and Logistics Monitoring',
          icon: '◈', img: 'fleet',
          summary: 'Unified visibility over fleets, routes and logistics operations in real time.',
          problem: 'Fleet operators lack consolidated visibility across routes, fuel consumption, maintenance cycles and asset utilization.',
          features: ['Real-time telematics and route efficiency analytics', 'Predictive alerts for fleet risks and maintenance windows', 'Dispatch optimization and operational control dashboards'],
          benefits: ['Improved fleet productivity and utilization', 'Lower fuel and non-productive route costs', 'Reduced delays and asset downtime'],
        },
        {
          slug: 'operational-analytics',
          name: 'Operational Analytics Platforms',
          icon: '◎', img: 'analytics',
          summary: 'Turn operational data into decisions with real-time analytics and AI.',
          problem: 'Companies lack the tools to consolidate operational data and generate actionable intelligence at the speed of business.',
          features: ['Real-time operational dashboards and KPI monitoring', 'AI-powered analytics and operational forecasting', 'Automated reporting and threshold-based alerting'],
          benefits: ['Faster, data-driven decision-making', 'Improved process accountability across teams', 'Consistent operational efficiency gains'],
        },
        {
          slug: 'iot-monitoring',
          name: 'IoT Monitoring Systems',
          icon: '⬡', img: 'iot',
          summary: 'Connect industrial assets and field equipment to intelligent monitoring systems.',
          problem: 'Field operations run blind without real-time sensor data integrated into operational systems and decision workflows.',
          features: ['Industrial IoT sensor and gateway integration', 'Edge computing for low-latency field data processing', 'Live monitoring with automated incident alerting'],
          benefits: ['Real-time visibility into field assets', 'Faster incident detection and response', 'Reduced operational risk and equipment failures'],
        },
      ],
    },
    industries: {
      sectionTitle: 'Industries We ',
      sectionTitleAccent: 'Serve',
      challengeLabel: 'Challenge',
      approachLabel: 'Our Approach',
      pageEyebrow: 'Industries',
      pageTitle: 'Industries We Serve',
      pageSubtitle: 'We design and implement software platforms tailored to the specific operational challenges of each industry sector in Latin America.',
      items: [
        { title: 'Manufacturing',    icon: '⚙', img: 'manufacturing', challenge: 'Unplanned downtime, reactive maintenance and limited real-time production visibility increase operational costs.', solution: 'Predictive maintenance systems, unified asset monitoring and AI-driven production optimization.' },
        { title: 'Logistics',        icon: '◈', img: 'logistics',     challenge: 'Fragmented transport workflows and low traceability across warehousing and distribution operations.',    solution: 'Operational control towers, route intelligence and automated execution workflows.' },
        { title: 'Transport',        icon: '▷', img: 'transport',     challenge: 'Fleet inefficiencies, underutilized assets and rising costs due to poor operational data visibility.',    solution: 'Real-time telematics, predictive servicing and performance-driven dispatching.' },
        { title: 'Energy',           icon: '◎', img: 'energy',        challenge: 'Complex field operations, delayed incident response and limited remote asset monitoring.',                solution: 'Edge monitoring, risk prediction and resilient infrastructure visibility.' },
        { title: 'Food Operations',  icon: '▦', img: 'food',          challenge: 'Waste leakage, quality inconsistency and opaque process execution across production lines.',              solution: 'AI quality control, waste intelligence and continuous operational optimization.' },
      ],
    },
    technology: {
      sectionTitle: 'Built on ',
      sectionTitleAccent: 'Modern Technology',
      sectionBody: 'Our platforms are engineered with scalable, secure and enterprise-ready technology designed for mission-critical operational environments.',
      pageEyebrow: 'Technology',
      pageTitle: 'Enterprise-Ready Technology Infrastructure',
      pageSubtitle: 'Our platforms are engineered for resilience, high-frequency operational data and secure enterprise deployment across industrial environments.',
      items: [
        { name: 'Artificial Intelligence', desc: 'Predictive models, anomaly detection and operational forecasting built for industrial environments.',                                  img: 'https://picsum.photos/seed/aingetk-ai-ml-models/600/340' },
        { name: 'Industrial IoT',          desc: 'Edge devices, gateways and sensor networks connecting physical operations to digital systems.',                                       img: 'https://picsum.photos/seed/aingetk-iot-edge-devices/600/340' },
        { name: 'Cloud Infrastructure',    desc: 'Scalable, secure cloud architecture for enterprise-grade operational data and applications.',                                         img: 'https://picsum.photos/seed/aingetk-cloud-servers/600/340' },
        { name: 'Data Platforms',          desc: 'Real-time pipelines, data lakes and analytics infrastructure designed for high-frequency industrial data.',                           img: 'https://picsum.photos/seed/aingetk-data-pipelines/600/340' },
      ],
    },
    cases: {
      sectionTitle: 'Measurable ',
      sectionTitleAccent: 'Operational Impact',
      pageEyebrow: 'Case Studies',
      pageTitle: 'Measurable Operational Impact',
      pageSubtitle: 'Real outcomes from software platform deployments across maintenance, fleet, logistics and operational analytics in Latin America.',
      items: [
        { company: 'Manufacturing operator', img: 'case1', impact: 'Reduced maintenance costs by 37%',   story: 'Unified asset telemetry and predictive scheduling replaced reactive workflows across production lines.' },
        { company: 'Transport company',      img: 'case2', impact: 'Improved fleet efficiency by 42%',   story: 'Real-time route analytics and operating insights increased fleet utilization and reduced idle time.' },
        { company: 'Food operation',         img: 'case3', impact: 'Reduced waste by 28%',               story: 'AI waste monitoring provided shift-level intelligence and rapid operational correction cycles.' },
      ],
    },
    insights: {
      pageEyebrow: 'Insights',
      pageTitle: 'Industrial Intelligence Insights',
      pageSubtitle: 'Thought leadership on industrial AI, operational intelligence, IoT architectures and digital evolution in heavy operations.',
      items: [
        { title: 'Industrial AI as a Core Operating Layer',             category: 'Industrial AI',                    excerpt: 'Why next-generation operations require intelligence embedded directly into production and field workflows.' },
        { title: 'Designing Operational Intelligence Systems for Scale',category: 'Operational Intelligence',         excerpt: 'Architecture patterns that connect frontline execution, data and decision loops in real time.' },
        { title: 'IoT Architectures Built for Latin American Industry', category: 'IoT Architectures',               excerpt: 'Practical edge and cloud design strategies for resilient industrial deployments in complex environments.' },
        { title: 'Beyond Legacy Transformation Programs',               category: 'Digital Transformation',          excerpt: 'How platform-led product builders outperform one-time modernization projects in long-term value creation.' },
      ],
    },
    company: {
      pageEyebrow: 'Company',
      pageTitle: 'A Technology Company Built for Operational Impact',
      pageSubtitle: 'AINGETK develops and implements software platforms that improve efficiency, automation and decision-making in industrial and service companies across Latin America.',
      items: [
        { title: 'Mission',    text: 'Develop and implement software platforms that improve operational efficiency for companies in Peru and Latin America.' },
        { title: 'Vision',     text: "Become the leading operational software platform for the region's industrial and service companies." },
        { title: 'Leadership', text: 'Engineers, operators and product leaders with deep expertise in industrial systems, software and enterprise deployment.' },
        { title: 'Careers',    text: 'We hire engineers and product professionals who want to build software that drives real operational impact.' },
        { title: 'Partners',   text: 'Technology and industry alliances that accelerate platform deployment and regional market expansion.' },
      ],
      teamEyebrow: 'Our Team',
      teamTitle: 'The People Behind AINGETK',
      team: [
        { name: 'Enzo Rivas',      role: 'CEO & Co-founder',             bio: 'Co-founder of AINGETK, focused on turning the company into the strategic partner that guides clients through technology adoption.', img: 'assets/team/enzo-rivas.jpg', linkedin: 'https://www.linkedin.com/in/enzo-nicolas-julio-rivas-rojas-602b20249/', github: 'https://github.com/Torer0' },
        { name: 'Diana Sologuren', role: 'Head of Projects',             bio: 'Leads projects by first understanding the client’s business, so every proposed solution delivers real, measurable value.', img: 'assets/team/diana-sologuren.jpeg', linkedin: 'https://www.linkedin.com/in/dianasologuren/', github: null },
        { name: 'Diego Pozo',      role: 'Co-founder',                   bio: 'Co-founder of AINGETK, committed to working closely with every client to deliver solutions that create real business impact.', img: 'assets/team/diego-pozo.jpg', linkedin: 'https://www.linkedin.com/in/diego-pozo-abregu/', github: 'https://github.com/Pozzzo' },
        { name: 'Arturo Noriega',  role: 'Lead Developer',               bio: 'Builds robust, scalable solutions, convinced that technology must stay invisible to the user while being powerful for the business.', img: 'assets/team/arturo-noriega.jpeg', linkedin: 'https://www.linkedin.com/in/arturo-manuel-noriega-noriega-7163b3252/', github: 'https://github.com/ArturoManuel' },
        { name: 'Ricardo Bravo',   role: 'Cybersecurity Specialist',     bio: 'Approaches business transformation beyond technology, treating people and processes as the true competitive differentiator.', img: 'assets/team/ricardo-bravo.jpeg', linkedin: 'https://www.linkedin.com/in/ricardo-bravo-wong-2a377221b/', github: 'https://github.com/Kotrixx' },
      ],
    },
    contact: {
      pageEyebrow: 'Contact',
      pageTitle: "Let's Talk About Your Operations",
      pageSubtitle: 'Tell us about your operational challenges. Our team will show you how AINGETK platforms can help you automate, monitor and optimize your business.',
      card1Title: 'Get in Touch',
      card1Body: 'For companies evaluating operational software platforms, partnerships or enterprise deployments.',
      card2Title: 'Our Location',
      card2Body: 'Headquartered in Lima, Peru — serving industrial and service companies across Latin America.',
      card2Footer: 'Lima, Peru — Latin America',
    },
    footer: {
      tagline: 'Technology platforms to optimize business operations for companies in Peru and Latin America.',
      col1: 'Platform',
      col1Links: [
        { label: 'Operational Intelligence Platform', href: '/platform' },
        { label: 'Technology',                        href: '/technology' },
        { label: 'Solutions',                         href: '/solutions' },
      ],
      col2: 'Company',
      col2Links: [
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Insights',     href: '/insights' },
        { label: 'About Us',     href: '/company' },
      ],
      col3: 'Contact',
      contactUs: 'Contact Us',
      location: 'Lima, Peru · Latin America',
      copyright: 'Operational Software Platforms',
    },
    cta: {
      eyebrow: 'Get started',
      title: 'Helping companies',
      titleAccent: 'operate smarter.',
      body: 'Talk to our team about how AINGETK can help your company automate processes, monitor operations and make better decisions.',
      cta1: 'Contact Us',
      cta2: 'Explore Solutions',
    },
    notFound: {
      eyebrow: '404',
      title: 'Page Not Found',
      subtitle: 'The page you are looking for is not available. Explore the platform and solutions from the main navigation.',
    },
  },

  /* ──────────────────── ESPAÑOL ──────────────────── */
  es: {
    nav: [
      { label: 'Inicio',         href: '/' },
      { label: 'Plataforma',     href: '/platform' },
      { label: 'Soluciones',     href: '/solutions' },
      { label: 'Industrias',     href: '/industries' },
      { label: 'Tecnología',     href: '/technology' },
      { label: 'Casos de Éxito', href: '/case-studies' },
      { label: 'Insights',       href: '/insights' },
      { label: 'Empresa',        href: '/company' },
      { label: 'Contacto',       href: '/contact' },
    ],
    navCta: 'Contáctenos',
    mobileLocation: 'Lima, Perú · Latinoamérica',

    hero: {
      eyebrow: 'Plataformas tecnológicas · Perú y Latinoamérica',
      title: 'Tecnología para optimizar ',
      titleAccent: 'las operaciones modernas.',
      body: 'AINGETK desarrolla plataformas de software que ayudan a empresas a automatizar procesos, monitorear operaciones y tomar decisiones basadas en datos.',
      cta1: 'Explorar Soluciones',
      cta2: 'Contáctenos',
    },
    problem: {
      title: 'Muchas empresas aún operan con ',
      titleAccent: 'sistemas fragmentados.',
      body: 'Las ineficiencias operacionales, procesos manuales y software desconectado generan costos innecesarios y ralentizan la toma de decisiones en empresas industriales y de servicios.',
      m1: 'Eficiencia operacional en sectores industriales clave de la región',
      m2: 'Pérdidos anualmente en ineficiencias operacionales evitables',
      m3: 'De las operaciones tienen visibilidad en tiempo real de procesos críticos',
    },
    platform: {
      title: 'Plataforma de ',
      titleAccent: 'Inteligencia Operacional',
      body: 'Nuestra tecnología integra datos operacionales, analítica y automatización en un único ecosistema digital — diseñado para empresas industriales y de servicios.',
      components: [
        { name: 'Dashboards Operacionales',    icon: '▦' },
        { name: 'Herramientas de Automatización', icon: '⟳' },
        { name: 'Analítica con IA',            icon: '◎' },
        { name: 'Integraciones IoT Industrial',icon: '⬡' },
        { name: 'Infraestructura de Datos',    icon: '◈' },
      ],
      layers: [
        { num: '01', name: 'Capa Edge',          summary: 'Dispositivos IoT, gateways y sensores industriales que capturan eventos operacionales en la fuente.' },
        { num: '02', name: 'Capa de Datos',       summary: 'Ingesta en tiempo real, procesamiento de streams y pipelines de datos industriales a través de sitios.' },
        { num: '03', name: 'Capa de IA',          summary: 'Modelos predictivos, detección de anomalías e inteligencia operacional.' },
        { num: '04', name: 'Capa de Aplicación',  summary: 'Plataformas SaaS, apps de flujo de trabajo y dashboards en tiempo real para cada operación.' },
      ],
      pageEyebrow: 'Plataforma',
      pageTitle: 'Plataforma de Inteligencia Operacional',
      pageSubtitle: 'Una pila tecnológica unificada que integra datos operacionales, analítica y automatización en un único ecosistema digital para empresas industriales y de servicios.',
    },
    solutions: {
      sectionTitle: 'Nuestras ',
      sectionTitleAccent: 'Soluciones',
      sectionBody: 'Plataformas de software construidas para resolver desafíos operacionales específicos — desplegadas e integradas en su infraestructura existente.',
      learnMore: 'Más Información',
      viewSolution: 'Ver Solución',
      pageEyebrow: 'Soluciones',
      pageTitle: 'Plataformas de Software para la Excelencia Operacional',
      pageSubtitle: 'Cada solución está construida sobre nuestra base de inteligencia compartida y diseñada para resolver desafíos operacionales específicos en empresas industriales y de servicios.',
      challengeLabel: 'El Desafío',
      featuresLabel: 'Características de la Plataforma',
      benefitsLabel: 'Beneficios Operacionales',
      items: [
        {
          slug: 'maintenance-management',
          name: 'Sistemas de Gestión de Mantenimiento',
          icon: '⚙', img: 'maintenance',
          summary: 'Reduce el tiempo de inactividad y fallos de equipos con inteligencia de mantenimiento predictivo.',
          problem: 'Los equipos de mantenimiento operan con flujos reactivos y registros de activos desconectados, causando tiempo de inactividad evitable y altos costos de emergencia.',
          features: ['Monitoreo de salud de activos y detección de anomalías', 'Programación de mantenimiento predictivo y balanceo de carga de trabajo', 'Gestión de órdenes de trabajo con flujos de técnicos móviles'],
          benefits: ['Mayor disponibilidad de equipos y confiabilidad de activos', 'Menores costos de intervención de emergencia', 'Ciclos de resolución más rápidos en todas las instalaciones'],
        },
        {
          slug: 'fleet-logistics',
          name: 'Monitoreo de Flotas y Logística',
          icon: '◈', img: 'fleet',
          summary: 'Visibilidad unificada sobre flotas, rutas y operaciones logísticas en tiempo real.',
          problem: 'Los operadores de flota carecen de visibilidad consolidada sobre rutas, consumo de combustible, ciclos de mantenimiento y utilización de activos.',
          features: ['Telemática en tiempo real y analítica de eficiencia de rutas', 'Alertas predictivas para riesgos de flota y ventanas de mantenimiento', 'Optimización de despacho y dashboards de control operacional'],
          benefits: ['Mayor productividad y utilización de flota', 'Menores costos de rutas improductivas y combustible', 'Reducción de retrasos y tiempo de inactividad de activos'],
        },
        {
          slug: 'operational-analytics',
          name: 'Plataformas de Analítica Operacional',
          icon: '◎', img: 'analytics',
          summary: 'Convierte datos operacionales en decisiones con analítica en tiempo real e IA.',
          problem: 'Las empresas carecen de herramientas para consolidar datos operacionales y generar inteligencia accionable a la velocidad del negocio.',
          features: ['Dashboards operacionales en tiempo real y monitoreo de KPIs', 'Analítica con IA y pronóstico operacional', 'Reportes automatizados y alertas basadas en umbrales'],
          benefits: ['Toma de decisiones más rápida y basada en datos', 'Mayor responsabilidad de procesos en todos los equipos', 'Ganancias consistentes de eficiencia operacional'],
        },
        {
          slug: 'iot-monitoring',
          name: 'Sistemas de Monitoreo IoT',
          icon: '⬡', img: 'iot',
          summary: 'Conecta activos industriales y equipos de campo a sistemas de monitoreo inteligentes.',
          problem: 'Las operaciones de campo operan a ciegas sin datos de sensores en tiempo real integrados en sistemas operacionales y flujos de decisión.',
          features: ['Integración de sensores y gateways IoT industriales', 'Computación edge para procesamiento de datos de campo de baja latencia', 'Monitoreo en vivo con alertas automáticas de incidentes'],
          benefits: ['Visibilidad en tiempo real de activos de campo', 'Detección y respuesta más rápida a incidentes', 'Reducción de riesgos operacionales y fallos de equipos'],
        },
      ],
    },
    industries: {
      sectionTitle: 'Industrias que ',
      sectionTitleAccent: 'Servimos',
      challengeLabel: 'Desafío',
      approachLabel: 'Nuestro Enfoque',
      pageEyebrow: 'Industrias',
      pageTitle: 'Industrias que Servimos',
      pageSubtitle: 'Diseñamos e implementamos plataformas de software adaptadas a los desafíos operacionales específicos de cada sector industrial en Latinoamérica.',
      items: [
        { title: 'Manufactura',         icon: '⚙', img: 'manufacturing', challenge: 'Tiempo de inactividad no planificado, mantenimiento reactivo y visibilidad limitada de producción en tiempo real aumentan los costos operacionales.', solution: 'Sistemas de mantenimiento predictivo, monitoreo unificado de activos y optimización de producción con IA.' },
        { title: 'Logística',           icon: '◈', img: 'logistics',     challenge: 'Flujos de transporte fragmentados y baja trazabilidad en operaciones de almacenamiento y distribución.',    solution: 'Torres de control operacional, inteligencia de rutas y flujos de ejecución automatizados.' },
        { title: 'Transporte',          icon: '▷', img: 'transport',     challenge: 'Ineficiencias de flota, activos subutilizados y costos crecientes por baja visibilidad de datos operacionales.', solution: 'Telemática en tiempo real, servicio predictivo y despacho orientado al rendimiento.' },
        { title: 'Energía',             icon: '◎', img: 'energy',        challenge: 'Operaciones de campo complejas, respuesta tardía a incidentes y monitoreo remoto limitado de activos.',    solution: 'Monitoreo edge, predicción de riesgos y visibilidad de infraestructura resiliente.' },
        { title: 'Operaciones Alimentarias', icon: '▦', img: 'food',     challenge: 'Pérdida de mermas, inconsistencia de calidad y ejecución opaca de procesos en líneas de producción.',      solution: 'Control de calidad con IA, inteligencia de residuos y optimización operacional continua.' },
      ],
    },
    technology: {
      sectionTitle: 'Construido sobre ',
      sectionTitleAccent: 'Tecnología Moderna',
      sectionBody: 'Nuestras plataformas están diseñadas con tecnología escalable, segura y lista para empresas en entornos operacionales de misión crítica.',
      pageEyebrow: 'Tecnología',
      pageTitle: 'Infraestructura Tecnológica Empresarial',
      pageSubtitle: 'Nuestras plataformas están diseñadas para resiliencia, datos operacionales de alta frecuencia y despliegue empresarial seguro en entornos industriales.',
      items: [
        { name: 'Inteligencia Artificial', desc: 'Modelos predictivos, detección de anomalías y pronóstico operacional construidos para entornos industriales.',                          img: 'https://picsum.photos/seed/aingetk-ai-ml-models/600/340' },
        { name: 'IoT Industrial',          desc: 'Dispositivos edge, gateways y redes de sensores que conectan operaciones físicas con sistemas digitales.',                            img: 'https://picsum.photos/seed/aingetk-iot-edge-devices/600/340' },
        { name: 'Infraestructura Cloud',   desc: 'Arquitectura cloud escalable y segura para datos operacionales y aplicaciones empresariales.',                                        img: 'https://picsum.photos/seed/aingetk-cloud-servers/600/340' },
        { name: 'Plataformas de Datos',    desc: 'Pipelines en tiempo real, data lakes e infraestructura de analítica diseñada para datos industriales de alta frecuencia.',            img: 'https://picsum.photos/seed/aingetk-data-pipelines/600/340' },
      ],
    },
    cases: {
      sectionTitle: 'Impacto Operacional ',
      sectionTitleAccent: 'Medible',
      pageEyebrow: 'Casos de Éxito',
      pageTitle: 'Impacto Operacional Medible',
      pageSubtitle: 'Resultados reales de despliegues de plataformas de software en mantenimiento, flotas, logística y analítica operacional en Latinoamérica.',
      items: [
        { company: 'Operador de manufactura', img: 'case1', impact: 'Costos de mantenimiento reducidos en 37%',  story: 'La telemetría unificada de activos y la programación predictiva reemplazaron flujos reactivos en líneas de producción.' },
        { company: 'Empresa de transporte',   img: 'case2', impact: 'Eficiencia de flota mejorada en 42%',       story: 'La analítica de rutas en tiempo real y los insights operacionales aumentaron la utilización de flota y redujeron el tiempo muerto.' },
        { company: 'Operación alimentaria',   img: 'case3', impact: 'Residuos reducidos en 28%',                 story: 'El monitoreo de residuos con IA proporcionó inteligencia por turno y ciclos rápidos de corrección operacional.' },
      ],
    },
    insights: {
      pageEyebrow: 'Perspectivas',
      pageTitle: 'Perspectivas de Inteligencia Industrial',
      pageSubtitle: 'Liderazgo de pensamiento sobre IA industrial, inteligencia operacional, arquitecturas IoT y evolución digital en operaciones industriales.',
      items: [
        { title: 'IA Industrial como Capa Operacional Central',              category: 'IA Industrial',                      excerpt: 'Por qué las operaciones de próxima generación requieren inteligencia integrada directamente en flujos de producción y campo.' },
        { title: 'Diseñando Sistemas de Inteligencia Operacional a Escala',  category: 'Inteligencia Operacional',           excerpt: 'Patrones de arquitectura que conectan ejecución de primera línea, datos y bucles de decisión en tiempo real.' },
        { title: 'Arquitecturas IoT para la Industria Latinoamericana',      category: 'Arquitecturas IoT',                  excerpt: 'Estrategias prácticas de diseño edge y cloud para despliegues industriales resilientes en entornos complejos.' },
        { title: 'Más Allá de los Programas de Transformación Legados',      category: 'Transformación Digital Industrial',  excerpt: 'Cómo los constructores de productos liderados por plataformas superan a los proyectos de modernización únicos en creación de valor.' },
      ],
    },
    company: {
      pageEyebrow: 'Empresa',
      pageTitle: 'Una Empresa de Tecnología para el Impacto Operacional',
      pageSubtitle: 'AINGETK desarrolla e implementa plataformas de software que mejoran la eficiencia, automatización y toma de decisiones en empresas industriales y de servicios en Latinoamérica.',
      items: [
        { title: 'Misión',    text: 'Desarrollar e implementar plataformas de software que mejoren la eficiencia operacional de empresas en Perú y Latinoamérica.' },
        { title: 'Visión',    text: 'Convertirnos en la plataforma de software operacional líder para las empresas industriales y de servicios de la región.' },
        { title: 'Liderazgo', text: 'Ingenieros, operadores y líderes de producto con profunda experiencia en sistemas industriales, software y despliegue empresarial.' },
        { title: 'Carreras',  text: 'Contratamos ingenieros y profesionales de producto que quieren desarrollar software con impacto operacional real.' },
        { title: 'Socios',    text: 'Alianzas tecnológicas e industriales que aceleran el despliegue de plataformas y la expansión del mercado regional.' },
      ],
      teamEyebrow: 'Nuestro Equipo',
      teamTitle: 'Las Personas Detrás de AINGETK',
      team: [
      { name: 'Enzo Rivas',      role: 'CEO & Co-fundador',                        bio: 'Co-fundador de AINGETK, enfocado en convertir a la empresa en el socio estratégico que acompaña a sus clientes en la adopción de tecnología.', img: 'assets/team/enzo-rivas.jpg', linkedin: 'https://www.linkedin.com/in/enzo-nicolas-julio-rivas-rojas-602b20249/', github: 'https://github.com/Torer0' },
      { name: 'Diana Sologuren', role: 'Directora de Proyectos',                   bio: 'Lidera proyectos entendiendo primero el negocio del cliente, para que cada solución propuesta genere valor real y medible.', img: 'assets/team/diana-sologuren.jpeg', linkedin: 'https://www.linkedin.com/in/dianasologuren/', github: null },
      { name: 'Diego Pozo',      role: 'Co-fundador',                              bio: 'Co-fundador de AINGETK, comprometido en acompañar de cerca a cada cliente con soluciones que generen impacto real en su negocio.', img: 'assets/team/diego-pozo.jpg', linkedin: 'https://www.linkedin.com/in/diego-pozo-abregu/', github: 'https://github.com/Pozzzo' },
      { name: 'Arturo Noriega',  role: 'Lead Developer',                           bio: 'Construye soluciones robustas y escalables, con la convicción de que la tecnología debe ser invisible para el usuario y poderosa para el negocio.', img: 'assets/team/arturo-noriega.jpeg', linkedin: 'https://www.linkedin.com/in/arturo-manuel-noriega-noriega-7163b3252/', github: 'https://github.com/ArturoManuel' },
      { name: 'Ricardo Bravo',   role: 'Especialista en Ciberseguridad',           bio: 'Aborda la transformación del negocio más allá de la tecnología, entendiendo a las personas y los procesos como el verdadero diferencial.', img: 'assets/team/ricardo-bravo.jpeg', linkedin: 'https://www.linkedin.com/in/ricardo-bravo-wong-2a377221b/', github: 'https://github.com/Kotrixx' },
      ],
    },
    contact: {
      pageEyebrow: 'Contacto',
      pageTitle: 'Hablemos sobre sus Operaciones',
      pageSubtitle: 'Cuéntenos sus desafíos operacionales. Nuestro equipo le mostrará cómo las plataformas AINGETK pueden ayudarle a automatizar, monitorear y optimizar su negocio.',
      card1Title: 'Contáctenos',
      card1Body: 'Para empresas que evalúan plataformas de software operacional, alianzas o despliegues empresariales.',
      card2Title: 'Nuestra Ubicación',
      card2Body: 'Con sede en Lima, Perú — atendiendo a empresas industriales y de servicios en toda Latinoamérica.',
      card2Footer: 'Lima, Perú — Latinoamérica',
    },
    footer: {
      tagline: 'Plataformas tecnológicas para optimizar las operaciones empresariales en Perú y Latinoamérica.',
      col1: 'Plataforma',
      col1Links: [
        { label: 'Plataforma de Inteligencia Operacional', href: '/platform' },
        { label: 'Tecnología',                             href: '/technology' },
        { label: 'Soluciones',                             href: '/solutions' },
      ],
      col2: 'Empresa',
      col2Links: [
        { label: 'Casos de Éxito', href: '/case-studies' },
        { label: 'Insights',       href: '/insights' },
        { label: 'Quiénes Somos',  href: '/company' },
      ],
      col3: 'Contacto',
      contactUs: 'Contáctenos',
      location: 'Lima, Perú · Latinoamérica',
      copyright: 'Plataformas de Software Operacional',
    },
    cta: {
      eyebrow: 'Comencemos',
      title: 'Ayudando a empresas a',
      titleAccent: 'operar con inteligencia.',
      body: 'Hable con nuestro equipo sobre cómo AINGETK puede ayudar a su empresa a automatizar procesos, monitorear operaciones y tomar mejores decisiones.',
      cta1: 'Contáctenos',
      cta2: 'Explorar Soluciones',
    },
    notFound: {
      eyebrow: '404',
      title: 'Página No Encontrada',
      subtitle: 'La página que busca no está disponible. Explore la plataforma y las soluciones desde la navegación principal.',
    },
  },
};

/* ─── Helpers ────────────────────────────────────────────────────── */
function normalizePath(pathname) {
  if (!pathname) return '/';
  if (pathname !== '/' && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

/* ─── Navbar ─────────────────────────────────────────────────────── */
function AppNavbar({ currentPath }) {
  const { lang, setLang } = useLang();
  const C = CONTENT[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => { setOpen(false); }, [currentPath]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? Math.min(100, (y / docH) * 100) : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navLinks = C.nav.filter((i) => i.href !== '/contact');

  function toggleLang() {
    setLang(lang === 'es' ? 'en' : 'es');
  }

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <div className="nav-progress" style={{ '--pct': `${scrollPct}%` }} />

      <div className="container shell nav-shell">
        {/* Brand */}
        <a href="/" className="brand" aria-label="AINGETK home">
          <span className="brand-logo-wrap">
            <img src="/assets/logo.png" alt="" className="brand-logo" width="28" height="28" />
          </span>
          <span className="brand-text">AINGETK</span>
          <span className="brand-badge">Platform</span>
        </a>

        {/* Desktop nav */}
        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map((item) => {
            const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(`${item.href}/`));
            return (
              <a key={item.href} href={item.href} className={`nav-link${isActive ? ' active' : ''}`}>
                {item.label}
                <span className="nav-link-dot" />
              </a>
            );
          })}
        </nav>

        {/* Language toggle + CTA */}
        <div className="nav-right">
          <button
            className="lang-switcher"
            onClick={toggleLang}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
            <span className="lang-sep">|</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
          <a href="/contact" className="nav-cta btn btn-primary">{C.navCta}</a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className={`menu-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen((p) => !p)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="bar bar-1" />
          <span className="bar bar-2" />
          <span className="bar bar-3" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav className="mobile-nav">
          {C.nav.map((item, i) => {
            const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(`${item.href}/`));
            return (
              <a
                key={item.href}
                href={item.href}
                className={`mobile-nav-link${isActive ? ' active' : ''}`}
                style={{ '--i': i }}
                onClick={() => setOpen(false)}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                {item.label}
              </a>
            );
          })}
        </nav>
        {/* Mobile language toggle */}
        <div className="mobile-lang-row">
          <button
            className={`mobile-lang-btn${lang === 'es' ? ' active' : ''}`}
            onClick={() => { setLang('es'); setOpen(false); }}
          >
            🇵🇪 Español
          </button>
          <button
            className={`mobile-lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={() => { setLang('en'); setOpen(false); }}
          >
            🇺🇸 English
          </button>
        </div>
        <div className="mobile-menu-footer">
          <a href="mailto:contacto@aingetk.com" className="mobile-email">contacto@aingetk.com</a>
          <span className="muted" style={{ fontSize: '0.82rem' }}>{C.mobileLocation}</span>
        </div>
      </div>
    </header>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────── */
function AppFooter() {
  const { lang } = useLang();
  const F = CONTENT[lang].footer;
  return (
    <footer className="site-footer">
      <div className="container shell footer-grid">
        <div>
          <a href="/" className="brand footer-brand">
            <span className="brand-logo-wrap">
              <img src="/assets/logo.png" alt="" className="brand-logo" width="22" height="22" />
            </span>
            <span className="brand-text">AINGETK</span>
          </a>
          <p className="muted" style={{ marginTop: '14px', lineHeight: '1.65', fontSize: '0.88rem' }}>{F.tagline}</p>
        </div>
        <div>
          <h4>{F.col1}</h4>
          {F.col1Links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div>
          <h4>{F.col2}</h4>
          {F.col2Links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div>
          <h4>{F.col3}</h4>
          <a href="mailto:contacto@aingetk.com">contacto@aingetk.com</a>
          <a href="/contact">{F.contactUs}</a>
          <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{F.location}</span>
        </div>
      </div>
      <div className="container shell footer-bottom">
        <span>&copy; {new Date().getFullYear()} AINGETK. All rights reserved.</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="footer-accent-dot" />
          {F.copyright}
        </span>
      </div>
    </footer>
  );
}

/* ─── Page intro (static pages) ─────────────────────────────────── */
function PageIntro({ title, subtitle, eyebrow }) {
  return (
    <section className="page-intro section-fade">
      <div className="container shell narrow">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

/* ─── Final CTA ─────────────────────────────────────────────────── */
function FinalCta() {
  const { lang } = useLang();
  const C = CONTENT[lang].cta;
  return (
    <SectionVideo media={MEDIA.cta} className="section section-fade" style={{ marginTop: '32px' }}>
      <div className="container shell final-cta-inner">
        <span className="eyebrow" style={{ display: 'flex', margin: '0 auto 24px' }}>{C.eyebrow}</span>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
          {C.title}<br /><span className="gradient-word">{C.titleAccent}</span>
        </h2>
        <p style={{ color: 'var(--muted-light)', maxWidth: '520px', margin: '16px auto 0', textAlign: 'center', lineHeight: '1.7' }}>
          {C.body}
        </p>
        <div className="cta-row" style={{ justifyContent: 'center', marginTop: '36px' }}>
          <a href="/contact" className="btn btn-primary">{C.cta1}</a>
          <a href="/solutions" className="btn btn-secondary">{C.cta2}</a>
        </div>
      </div>
    </SectionVideo>
  );
}

/* ─── Home Page ──────────────────────────────────────────────────── */
function HomePage() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const { hero, problem, platform, solutions: sol, industries: ind, technology: tech, cases } = C;

  return (
    <>
      {/* Hero */}
      <SectionVideo media={MEDIA.hero} className="hero section-fade" variant="hero">
        <div className="container shell hero-shell">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}<span className="gradient-word">{hero.titleAccent}</span></h1>
          <p>{hero.body}</p>
          <div className="cta-row">
            <a href="/solutions" className="btn btn-primary">{hero.cta1}</a>
            <a href="/contact" className="btn btn-secondary">{hero.cta2}</a>
          </div>
        </div>
      </SectionVideo>

      {/* Problem */}
      <section className="section section-fade">
        <div className="container shell">
          <h2>{problem.title}<span className="gradient-word">{problem.titleAccent}</span></h2>
          <p className="section-copy">{problem.body}</p>
          <div className="metric-grid">
            <article className="panel metric-card"><strong>-60%</strong><span>{problem.m1}</span></article>
            <article className="panel metric-card"><strong>$B+</strong><span>{problem.m2}</span></article>
            <article className="panel metric-card"><strong>&lt;10%</strong><span>{problem.m3}</span></article>
          </div>
        </div>
      </section>

      {/* Platform */}
      <SectionVideo media={MEDIA.platform} className="section section-fade sv--subtle">
        <div className="container shell">
          <h2>{platform.title}<span className="gradient-word">{platform.titleAccent}</span></h2>
          <p className="section-copy">{platform.body}</p>
          <div className="platform-grid">
            {platform.components.map((c) => (
              <article key={c.name} className="panel tag-card">
                <span style={{ color: 'var(--accent)', fontSize: '1rem', opacity: 0.7, marginRight: '8px' }}>{c.icon}</span>
                <h3>{c.name}</h3>
              </article>
            ))}
          </div>
          <div className="layer-grid">
            {platform.layers.map((l) => (
              <article key={l.name} className="panel layer-card">
                <span className="layer-number">{l.num}</span>
                <h3>{l.name}</h3>
                <p>{l.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>

      {/* Solutions */}
      <SectionVideo media={MEDIA.solutions} className="section section-fade sv--subtle">
        <div className="container shell">
          <h2>{sol.sectionTitle}<span className="gradient-word">{sol.sectionTitleAccent}</span></h2>
          <p className="section-copy">{sol.sectionBody}</p>
          <div className="product-grid">
            {sol.items.map((s) => (
              <article key={s.slug} className="panel product-card has-img">
                <div className="card-img-wrap">
                  <img src={IMG[s.img]} alt={s.name} className="card-img" loading="lazy" />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--accent)', opacity: 0.8 }}>{s.icon}</div>
                  <h3>{s.name}</h3>
                  <p>{s.summary}</p>
                  <a className="inline-link" href={`/solutions/${s.slug}`}>{sol.learnMore}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>

      {/* Industries */}
      <SectionVideo media={MEDIA.industries} className="section section-fade sv--subtle">
        <div className="container shell">
          <h2>{ind.sectionTitle}<span className="gradient-word">{ind.sectionTitleAccent}</span></h2>
          <div className="industry-grid">
            {ind.items.map((industry) => (
              <article key={industry.title} className="panel industry-card has-img">
                <div className="card-img-wrap">
                  <img src={IMG[industry.img]} alt={industry.title} className="card-img" loading="lazy" />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent)', opacity: 0.75 }}>{industry.icon}</div>
                  <h3>{industry.title}</h3>
                  <p style={{ marginBottom: '10px' }}>
                    <span style={{ color: 'var(--brand-strong)', fontWeight: 700, fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{ind.challengeLabel}</span>
                    <br />{industry.challenge}
                  </p>
                  <p>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{ind.approachLabel}</span>
                    <br />{industry.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>

      {/* Technology */}
      <SectionVideo media={MEDIA.tech} className="section section-fade sv--subtle">
        <div className="container shell">
          <h2>{tech.sectionTitle}<span className="gradient-word">{tech.sectionTitleAccent}</span></h2>
          <p className="section-copy">{tech.sectionBody}</p>
          <div className="tech-grid">
            {tech.items.map((cap) => (
              <article key={cap.name} className="panel tech-card has-img">
                <div className="card-img-wrap">
                  <img src={cap.img} alt={cap.name} className="card-img" loading="lazy" />
                </div>
                <div className="card-body">
                  <span style={{ color: 'var(--accent)', fontSize: '1rem', opacity: 0.7 }}>◎</span>
                  <h3 style={{ marginTop: '8px' }}>{cap.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.55' }}>{cap.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>

      {/* Case Studies */}
      <SectionVideo media={MEDIA.cases} className="section section-fade sv--subtle">
        <div className="container shell">
          <h2>{cases.sectionTitle}<span className="gradient-word">{cases.sectionTitleAccent}</span></h2>
          <div className="case-grid">
            {cases.items.map((cs) => (
              <article key={cs.company} className="panel case-card has-img">
                <div className="card-img-wrap">
                  <img src={IMG[cs.img]} alt={cs.company} className="card-img" loading="lazy" />
                </div>
                <div className="card-body">
                  <p className="case-company">{cs.company}</p>
                  <h3>{cs.impact}</h3>
                  <p>{cs.story}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>

      <FinalCta />
    </>
  );
}

/* ─── Platform Page ──────────────────────────────────────────────── */
function PlatformPage() {
  const { lang } = useLang();
  const P = CONTENT[lang].platform;
  return (
    <>
      <SectionVideo media={MEDIA.hero} className="page-intro section-fade" variant="hero">
        <div className="container shell narrow">
          <span className="eyebrow">{P.pageEyebrow}</span>
          <h1>{P.pageTitle}</h1>
          <p>{P.pageSubtitle}</p>
        </div>
      </SectionVideo>
      <SectionVideo media={MEDIA.platform} className="section section-fade sv--subtle">
        <div className="container shell">
          <div className="layer-grid">
            {P.layers.map((l) => (
              <article key={l.name} className="panel layer-card">
                <span className="layer-number">{l.num}</span>
                <h3>{l.name}</h3>
                <p>{l.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>
      <FinalCta />
    </>
  );
}

/* ─── Solution Detail ────────────────────────────────────────────── */
function SolutionDetail({ sol, labels }) {
  return (
    <section className="section section-fade">
      <div className="container shell">
        <article className="panel product-detail-card">
          <h2>{sol.name}</h2>
          <p className="section-copy">{sol.summary}</p>
          <div className="detail-grid">
            <div><h3>{labels.challengeLabel}</h3><p>{sol.problem}</p></div>
            <div>
              <h3>{labels.featuresLabel}</h3>
              <ul>{sol.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
            <div>
              <h3>{labels.benefitsLabel}</h3>
              <ul>{sol.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ─── Solutions Page ─────────────────────────────────────────────── */
function SolutionsPage({ selectedSlug }) {
  const { lang } = useLang();
  const S = CONTENT[lang].solutions;
  const display = selectedSlug ? S.items.filter((s) => s.slug === selectedSlug) : S.items;
  const labels = { challengeLabel: S.challengeLabel, featuresLabel: S.featuresLabel, benefitsLabel: S.benefitsLabel };

  return (
    <>
      <SectionVideo media={MEDIA.solutions} className="page-intro section-fade" variant="hero">
        <div className="container shell narrow">
          <span className="eyebrow">{S.pageEyebrow}</span>
          <h1>{S.pageTitle}</h1>
          <p>{S.pageSubtitle}</p>
        </div>
      </SectionVideo>
      {display.map((s) => <SolutionDetail key={s.slug} sol={s} labels={labels} />)}
      {!selectedSlug && (
        <SectionVideo media={MEDIA.solutions} className="section section-fade sv--subtle">
          <div className="container shell">
            <div className="product-grid">
              {S.items.map((s) => (
                <article key={s.slug} className="panel product-card has-img">
                  <div className="card-img-wrap">
                    <img src={IMG[s.img]} alt={s.name} className="card-img" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <div style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--accent)', opacity: 0.8 }}>{s.icon}</div>
                    <h3>{s.name}</h3>
                    <p>{s.summary}</p>
                    <a href={`/solutions/${s.slug}`} className="inline-link">{S.viewSolution}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionVideo>
      )}
      <FinalCta />
    </>
  );
}

/* ─── Industries Page ────────────────────────────────────────────── */
function IndustriesPage() {
  const { lang } = useLang();
  const I = CONTENT[lang].industries;
  return (
    <>
      <SectionVideo media={MEDIA.industries} className="page-intro section-fade" variant="hero">
        <div className="container shell narrow">
          <span className="eyebrow">{I.pageEyebrow}</span>
          <h1>{I.pageTitle}</h1>
          <p>{I.pageSubtitle}</p>
        </div>
      </SectionVideo>
      <SectionVideo media={MEDIA.industries} className="section section-fade sv--subtle">
        <div className="container shell">
          <div className="industry-grid">
            {I.items.map((industry) => (
              <article key={industry.title} className="panel industry-card has-img">
                <div className="card-img-wrap">
                  <img src={IMG[industry.img]} alt={industry.title} className="card-img" loading="lazy" />
                </div>
                <div className="card-body">
                  <div style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent)', opacity: 0.75 }}>{industry.icon}</div>
                  <h3>{industry.title}</h3>
                  <p style={{ marginBottom: '10px' }}>
                    <span style={{ color: 'var(--brand-strong)', fontWeight: 700, fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{I.challengeLabel}</span>
                    <br />{industry.challenge}
                  </p>
                  <p>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{I.approachLabel}</span>
                    <br />{industry.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>
      <FinalCta />
    </>
  );
}

/* ─── Technology Page ────────────────────────────────────────────── */
function TechnologyPage() {
  const { lang } = useLang();
  const T = CONTENT[lang].technology;
  return (
    <>
      <SectionVideo media={MEDIA.tech} className="page-intro section-fade" variant="hero">
        <div className="container shell narrow">
          <span className="eyebrow">{T.pageEyebrow}</span>
          <h1>{T.pageTitle}</h1>
          <p>{T.pageSubtitle}</p>
        </div>
      </SectionVideo>
      <section className="section section-fade">
        <div className="container shell">
          <div className="tech-grid">
            {T.items.map((cap) => (
              <article key={cap.name} className="panel tech-card has-img">
                <div className="card-img-wrap">
                  <img src={cap.img} alt={cap.name} className="card-img" loading="lazy" />
                </div>
                <div className="card-body">
                  <span style={{ color: 'var(--accent)', fontSize: '1rem', opacity: 0.7 }}>◎</span>
                  <h3 style={{ marginTop: '8px' }}>{cap.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '6px', lineHeight: '1.55' }}>{cap.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

/* ─── Case Studies Page ──────────────────────────────────────────── */
function CaseStudiesPage() {
  const { lang } = useLang();
  const CS = CONTENT[lang].cases;
  return (
    <>
      <SectionVideo media={MEDIA.cases} className="page-intro section-fade" variant="hero">
        <div className="container shell narrow">
          <span className="eyebrow">{CS.pageEyebrow}</span>
          <h1>{CS.pageTitle}</h1>
          <p>{CS.pageSubtitle}</p>
        </div>
      </SectionVideo>
      <SectionVideo media={MEDIA.cases} className="section section-fade sv--subtle">
        <div className="container shell">
          <div className="case-grid">
            {CS.items.map((cs) => (
              <article key={cs.company} className="panel case-card has-img">
                <div className="card-img-wrap">
                  <img src={IMG[cs.img]} alt={cs.company} className="card-img" loading="lazy" />
                </div>
                <div className="card-body">
                  <p className="case-company">{cs.company}</p>
                  <h3>{cs.impact}</h3>
                  <p>{cs.story}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionVideo>
      <FinalCta />
    </>
  );
}

/* ─── Insights Page ──────────────────────────────────────────────── */
function InsightsPage() {
  const { lang } = useLang();
  const IN = CONTENT[lang].insights;
  return (
    <>
      <PageIntro eyebrow={IN.pageEyebrow} title={IN.pageTitle} subtitle={IN.pageSubtitle} />
      <section className="section section-fade">
        <div className="container shell">
          <div className="insight-grid">
            {IN.items.map((item) => (
              <article key={item.title} className="panel insight-card">
                <span className="insight-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

/* ─── Company Page ───────────────────────────────────────────────── */
/* ─── Team Carousel ──────────────────────────────────────────────── */
function TeamCarousel({ team, eyebrow, title }) {
  const [active, setActive] = useState(0);
  const total = team.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  /* Auto-advance every 4s */
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [active]);

  /* Visible indexes: prev, active, next */
  const idx = (offset) => (active + offset + total) % total;

  return (
    <section className="section section-fade">
      <div className="container shell">
        <div className="section-eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        <div className="team-carousel">
          {/* Cards track */}
          <div className="team-track">
            {team.map((member, i) => {
              const pos =
                i === active          ? 'center'
                : i === idx(-1)       ? 'left'
                : i === idx(1)        ? 'right'
                : 'hidden';
              return (
                <article
                  key={member.name}
                  className={`team-card team-card--${pos}`}
                  onClick={() => pos !== 'hidden' && setActive(i)}
                >
                  <div className="team-avatar-wrap">
                    <img className="team-avatar" src={member.img} alt={member.name} loading="lazy" />
                    <div className="team-avatar-ring" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-socials">
                      {member.linkedin && (
                        <a href={member.linkedin} className="team-social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={e => e.stopPropagation()}>
                          {/* LinkedIn icon */}
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM3.56 20.45h3.57V9H3.56v11.45z"/></svg>
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} className="team-social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={e => e.stopPropagation()}>
                          {/* GitHub icon */}
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Controls */}
          <div className="team-controls">
            <button className="team-btn" onClick={prev} aria-label="Anterior">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className="team-dots">
              {team.map((_, i) => (
                <button
                  key={i}
                  className={`team-dot${i === active ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Miembro ${i + 1}`}
                />
              ))}
            </div>
            <button className="team-btn" onClick={next} aria-label="Siguiente">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* pillar icons — one per index */
const PILLAR_ICONS = [
  /* Mission — rocket */
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4C20 4 28 8 28 20C28 28 22 34 20 36C18 34 12 28 12 20C12 8 20 4 20 4Z" stroke="url(#pi0)" strokeWidth="1.5" fill="none"/><circle cx="20" cy="20" r="3" fill="url(#pi0)"/><path d="M14 28L8 34M26 28L32 34" stroke="url(#pi0)" strokeWidth="1.5" strokeLinecap="round"/><defs><linearGradient id="pi0" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#6B9FFF"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs></svg>,
  /* Vision — eye */
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="20" rx="14" ry="8" stroke="url(#pi1)" strokeWidth="1.5"/><circle cx="20" cy="20" r="4" fill="url(#pi1)"/><circle cx="21" cy="19" r="1.2" fill="#fff" opacity=".6"/><defs><linearGradient id="pi1" x1="6" y1="12" x2="34" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#6B9FFF"/><stop offset="1" stopColor="#38BDF8"/></linearGradient></defs></svg>,
  /* Leadership — star */
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L23.5 15H33L25.5 20.5L28.5 30L20 24.5L11.5 30L14.5 20.5L7 15H16.5L20 6Z" stroke="url(#pi2)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/><defs><linearGradient id="pi2" x1="7" y1="6" x2="33" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#FBBF24"/><stop offset="1" stopColor="#F97316"/></linearGradient></defs></svg>,
  /* Careers — lightning */
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6L10 22H20L18 34L30 18H20L22 6Z" stroke="url(#pi3)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/><defs><linearGradient id="pi3" x1="10" y1="6" x2="30" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#34D399"/><stop offset="1" stopColor="#6B9FFF"/></linearGradient></defs></svg>,
  /* Partners — nodes */
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="3.5" stroke="url(#pi4)" strokeWidth="1.5"/><circle cx="8" cy="12" r="2.5" stroke="url(#pi4)" strokeWidth="1.5"/><circle cx="32" cy="12" r="2.5" stroke="url(#pi4)" strokeWidth="1.5"/><circle cx="8" cy="28" r="2.5" stroke="url(#pi4)" strokeWidth="1.5"/><circle cx="32" cy="28" r="2.5" stroke="url(#pi4)" strokeWidth="1.5"/><path d="M10.5 13.5L17 18M29.5 13.5L23 18M10.5 26.5L17 22M29.5 26.5L23 22" stroke="url(#pi4)" strokeWidth="1.2"/><defs><linearGradient id="pi4" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#A78BFA"/><stop offset="1" stopColor="#6B9FFF"/></linearGradient></defs></svg>,
];

function CompanyPillars({ items }) {
  return (
    <section className="section section-fade">
      <div className="container shell">
        <div className="pillars-grid">
          {items.map((item, i) => (
            <article key={item.title} className="pillar-card" style={{ '--pi': i }}>
              {/* spinning conic border */}
              <div className="pillar-ring" />
              {/* watermark number */}
              <span className="pillar-num" aria-hidden="true">0{i + 1}</span>
              {/* icon */}
              <div className="pillar-icon">{PILLAR_ICONS[i % PILLAR_ICONS.length]}</div>
              <h3 className="pillar-title">{item.title}</h3>
              <p className="pillar-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyPage() {
  const { lang } = useLang();
  const CO = CONTENT[lang].company;
  return (
    <>
      <PageIntro eyebrow={CO.pageEyebrow} title={CO.pageTitle} subtitle={CO.pageSubtitle} />
      <CompanyPillars items={CO.items} />
      <TeamCarousel team={CO.team} eyebrow={CO.teamEyebrow} title={CO.teamTitle} />
      <FinalCta />
    </>
  );
}

/* ─── Contact Page ───────────────────────────────────────────────── */
function ContactPage() {
  const { lang } = useLang();
  const CT = CONTENT[lang].contact;
  return (
    <>
      <PageIntro eyebrow={CT.pageEyebrow} title={CT.pageTitle} subtitle={CT.pageSubtitle} />
      <section className="section section-fade">
        <div className="container shell contact-layout">
          <article className="panel">
            <h3>{CT.card1Title}</h3>
            <p>{CT.card1Body}</p>
            <a className="inline-link" href="mailto:contacto@aingetk.com">contacto@aingetk.com</a>
          </article>
          <article className="panel">
            <h3>{CT.card2Title}</h3>
            <p>{CT.card2Body}</p>
            <span className="muted">{CT.card2Footer}</span>
          </article>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

/* ─── 404 Page ───────────────────────────────────────────────────── */
function NotFoundPage() {
  const { lang } = useLang();
  const NF = CONTENT[lang].notFound;
  return (
    <>
      <PageIntro eyebrow={NF.eyebrow} title={NF.title} subtitle={NF.subtitle} />
      <FinalCta />
    </>
  );
}

/* ─── Router ─────────────────────────────────────────────────────── */
function resolvePage(pathname) {
  if (pathname === '/') return <HomePage />;
  if (pathname === '/platform') return <PlatformPage />;
  if (pathname === '/solutions') return <SolutionsPage />;
  if (pathname.startsWith('/solutions/')) {
    const slug = pathname.replace('/solutions/', '');
    return <SolutionsPage selectedSlug={slug} />;
  }
  if (pathname === '/products' || pathname === '/venture-studio') return <SolutionsPage />;
  if (pathname === '/industries') return <IndustriesPage />;
  if (pathname === '/technology') return <TechnologyPage />;
  if (pathname === '/case-studies') return <CaseStudiesPage />;
  if (pathname === '/insights') return <InsightsPage />;
  if (pathname === '/company') return <CompanyPage />;
  if (pathname === '/contact') return <ContactPage />;
  return <NotFoundPage />;
}

/* ─── WhatsApp Floating Button ───────────────────────────────────── */
const WA_NUMBER = '51999999999'; // ← reemplaza con tu número real (código país sin +)
const WA_MSG_ES = 'Hola, quiero saber más sobre las plataformas AINGETK.';
const WA_MSG_EN = 'Hello, I would like to know more about AINGETK platforms.';

function WhatsAppButton() {
  const { lang } = useLang();
  const label = lang === 'es' ? 'Contáctanos' : 'Contact Us';
  const msg   = encodeURIComponent(lang === 'es' ? WA_MSG_ES : WA_MSG_EN);
  const href  = `https://wa.me/${WA_NUMBER}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label={label}
    >
      {/* WhatsApp SVG icon */}
      <svg className="wa-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="url(#wag)"/>
        <defs>
          <linearGradient id="wag" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#25D366"/>
            <stop offset="100%" stopColor="#128C7E"/>
          </linearGradient>
        </defs>
        <path fill="#fff" d="M22.5 19.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.8 8.8 0 01-2.6-1.6 9.6 9.6 0 01-1.8-2.3c-.2-.4 0-.6.1-.7l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4 2.4 3.6 5.8 5.1c.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/>
      </svg>
      <span className="wa-label">{label}</span>
    </a>
  );
}

/* ─── App root ───────────────────────────────────────────────────── */
export default function App() {
  const currentPath = normalizePath(window.location.pathname);
  const page = useMemo(() => resolvePage(currentPath), [currentPath]);

  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('aingetk_lang') || 'es'; } catch { return 'es'; }
  });

  /* Persist preference + update html lang attr for SEO */
  useEffect(() => {
    try { localStorage.setItem('aingetk_lang', lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang }}>
      <div className="site-shell">
        <AppNavbar currentPath={currentPath} />
        <main>{page}</main>
        <AppFooter />
        <WhatsAppButton />
      </div>
    </LangCtx.Provider>
  );
}
