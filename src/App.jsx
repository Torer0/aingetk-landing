import BackgroundEffects from './components/BackgroundEffects.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import MarqueeSection from './components/MarqueeSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import ResultsSection from './components/ResultsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import TeamSection from './components/TeamSection.jsx';
import CtaSection from './components/CtaSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import { useLandingSetup } from './hooks/useLandingSetup.js';
import ServiceRoutePage from './components/ServiceRoutePage.jsx';
import LegalRoutePage from './components/LegalRoutePage.jsx';

const serviceRoutes = {
  '/estrategia_diagnostico': {
    title: 'Estrategia y Diagnostico',
    image: '/services/estrategia.svg',
    heroTitle: 'Define el proximo salto digital con una ruta clara',
    heroSubtitle:
      'Aterrizamos tus objetivos en un plan accionable con prioridades, costos estimados y metas de impacto por trimestre.',
    novedades: [
      'Nuevo framework de evaluacion de madurez digital en 5 dimensiones.',
      'Roadmaps por fases con hitos de 30, 60 y 90 dias.',
      'Informe ejecutivo con riesgos y oportunidades por area de negocio.',
    ],
    entregables: [
      'Diagnostico integral de tecnologia y procesos',
      'Mapa de iniciativas con ROI esperado',
      'Plan de implementacion con responsables',
    ],
    startupSolutions: [
      'Sprint de 2 semanas para definir ICP, propuesta de valor y embudo inicial.',
      'Tablero basico de metricas: MRR, CAC, LTV y tasa de conversion.',
      'Backlog de producto priorizado por impacto y esfuerzo.',
    ],
  },
  '/sistemas_automatizacion': {
    title: 'Sistemas y Automatizacion',
    image: '/services/sistemas.svg',
    heroTitle: 'Integra sistemas y elimina tareas manuales repetitivas',
    heroSubtitle:
      'Conectamos ERP, CRM y herramientas operativas para reducir errores, acelerar tiempos y mejorar trazabilidad.',
    novedades: [
      'Plantillas de automatizacion para ventas, finanzas y operaciones.',
      'Integraciones API entre plataformas clave del negocio.',
      'Tablero de monitoreo de procesos automatizados en tiempo real.',
    ],
    entregables: [
      'Arquitectura de integraciones y flujos',
      'Automatizaciones en procesos criticos',
      'Documentacion y transferencia al equipo',
    ],
    startupSolutions: [
      'Automatizacion de CRM + formularios + seguimiento comercial.',
      'Pipeline de ventas con alertas y tareas automaticas.',
      'Flujo de onboarding de clientes con checklist operativo.',
    ],
  },
  '/datos_inteligencia': {
    title: 'Datos e Inteligencia',
    image: '/services/datos.svg',
    heroTitle: 'Convierte datos dispersos en decisiones de alto impacto',
    heroSubtitle:
      'Disenamos analitica accionable y visualizaciones ejecutivas para detectar oportunidades y anticipar riesgos.',
    novedades: [
      'Dashboards por rol: direccion, comercial y operaciones.',
      'Modelos de alertas tempranas para desvio de indicadores.',
      'Estandares de calidad y gobierno de datos.',
    ],
    entregables: [
      'Modelo de datos unificado',
      'Cuadros de mando con KPIs priorizados',
      'Rutina de analitica para toma de decisiones',
    ],
    startupSolutions: [
      'Data mart inicial con datos de ventas, marketing y soporte.',
      'Dashboard semanal para founders con metricas de crecimiento.',
      'Alertas por desvio de conversion, churn y ticket promedio.',
    ],
  },
  '/cloud_seguridad': {
    title: 'Cloud y Seguridad',
    image: '/services/cloud.svg',
    heroTitle: 'Escala con infraestructura moderna y seguridad integrada',
    heroSubtitle:
      'Migramos y optimizamos cargas en la nube con controles de seguridad, continuidad operativa y cumplimiento.',
    novedades: [
      'Blueprint de migracion cloud por criticidad de servicios.',
      'Politicas de acceso, cifrado y respaldo automatizado.',
      'Monitoreo de amenazas y respuesta temprana.',
    ],
    entregables: [
      'Plan de migracion y arquitectura objetivo',
      'Controles de seguridad por capas',
      'Estrategia de respaldo y recuperacion',
    ],
    startupSolutions: [
      'Infraestructura cloud minima viable con alta disponibilidad basica.',
      'Politicas de acceso por roles y autenticacion multifactor.',
      'Backups automaticos y pruebas de restauracion mensuales.',
    ],
  },
  '/iot_industria_4_0': {
    title: 'IoT e Industria 4.0',
    image: '/services/iot.svg',
    heroTitle: 'Conecta equipos fisicos con inteligencia operacional',
    heroSubtitle:
      'Implementamos sensorizacion, telemetria y analitica para mejorar productividad, mantenimiento y trazabilidad.',
    novedades: [
      'Pilotos IoT para monitoreo remoto de activos criticos.',
      'Indicadores OEE y alertas de mantenimiento predictivo.',
      'Integracion de datos de planta con sistemas de gestion.',
    ],
    entregables: [
      'Diseno de arquitectura IoT',
      'Paneles de operacion en tiempo real',
      'Plan de escalamiento por lineas de produccion',
    ],
    startupSolutions: [
      'Piloto de sensorizacion en un proceso critico antes de escalar.',
      'Panel de telemetria con alertas de temperatura, energia o tiempos.',
      'Plan de costos por dispositivo para validar viabilidad financiera.',
    ],
  },
  '/acompanamiento_continuo': {
    title: 'Acompanamiento Continuo',
    image: '/services/acompanamiento.svg',
    heroTitle: 'No solo implementamos: te acompanamos a capturar resultados',
    heroSubtitle:
      'Brindamos seguimiento operativo y estrategico para asegurar adopcion, mejora continua y cumplimiento de objetivos.',
    novedades: [
      'Esquema de seguimiento mensual con tablero de avance.',
      'Mesa de mejora continua con backlog priorizado.',
      'Capacitaciones enfocadas en adopcion y autonomia del equipo.',
    ],
    entregables: [
      'Plan de gobernanza y seguimiento',
      'Indicadores de adopcion y valor',
      'Ruta de mejora continua por trimestre',
    ],
    startupSolutions: [
      'Ritual quincenal de revision de KPI y decisiones operativas.',
      'Plan de capacitacion por rol para acelerar adopcion.',
      'Roadmap trimestral de mejoras con hitos y responsables.',
    ],
  },
};

const legalRoutes = {
  '/terminos-de-servicio': {
    title: 'Terminos de Servicio',
    heroTitle: 'Condiciones de uso de AINGETK',
    heroSubtitle:
      'Estas condiciones regulan el uso del sitio web y el marco general de contratacion de servicios.',
    lastUpdated: '27 de febrero de 2026',
    sections: [
      {
        heading: '1. Aceptacion y alcance',
        paragraphs: [
          'Al navegar o utilizar este sitio, aceptas estos terminos de servicio. Si no estas de acuerdo con alguna condicion, debes abstenerte de usarlo.',
          'Estos terminos aplican al uso del sitio web de AINGETK y complementan cualquier acuerdo comercial especifico firmado con clientes.',
        ],
      },
      {
        heading: '2. Uso permitido del sitio',
        list: [
          'No usar el sitio para actividades ilicitas o no autorizadas.',
          'No intentar acceder sin autorizacion a sistemas, datos o cuentas.',
          'No copiar, alterar o distribuir contenido sin permiso expreso.',
        ],
      },
      {
        heading: '3. Propiedad intelectual',
        paragraphs: [
          'La marca, diseno, textos y demas contenidos del sitio son propiedad de AINGETK o de sus respectivos titulares.',
        ],
      },
      {
        heading: '4. Limitacion de responsabilidad',
        paragraphs: [
          'AINGETK no garantiza disponibilidad ininterrumpida del sitio. En la medida permitida por ley, no asume responsabilidad por danos derivados del uso del sitio.',
        ],
      },
      {
        heading: '5. Modificaciones y contacto',
        paragraphs: [
          'Podemos actualizar estos terminos en cualquier momento. La version vigente sera la publicada en esta pagina.',
          'Para consultas legales, escribe a contacto@aingetk.com.',
        ],
      },
    ],
  },
  '/politica-de-privacidad': {
    title: 'Politica de Privacidad',
    heroTitle: 'Como tratamos tus datos personales',
    heroSubtitle:
      'Explicamos que datos recopilamos, con que finalidad y que derechos tienes sobre tu informacion.',
    lastUpdated: '27 de febrero de 2026',
    sections: [
      {
        heading: '1. Datos que recopilamos',
        list: [
          'Nombre, correo, telefono, empresa y mensaje enviados desde formularios.',
          'Datos tecnicos basicos de navegacion para operacion y seguridad del sitio.',
        ],
      },
      {
        heading: '2. Finalidades de uso',
        list: [
          'Responder consultas y solicitudes comerciales.',
          'Coordinar reuniones, propuestas y seguimiento de oportunidades.',
          'Mejorar la calidad del servicio y la experiencia del sitio.',
        ],
      },
      {
        heading: '3. Base de tratamiento y conservacion',
        paragraphs: [
          'Tratamos tus datos con base en tu consentimiento y/o en la necesidad de gestionar una relacion precontractual o contractual.',
          'Conservamos la informacion durante el tiempo necesario para cumplir dichas finalidades y obligaciones aplicables.',
        ],
      },
      {
        heading: '4. Comparticion y seguridad',
        paragraphs: [
          'No vendemos datos personales. Solo compartimos informacion con proveedores necesarios para operar el servicio bajo obligaciones de confidencialidad.',
          'Aplicamos medidas razonables de seguridad para proteger tus datos frente a accesos no autorizados.',
        ],
      },
      {
        heading: '5. Derechos del titular',
        paragraphs: [
          'Puedes solicitar acceso, rectificacion o eliminacion de tus datos contactando a contacto@aingetk.com.',
        ],
      },
    ],
  },
};

function handleImageError(event) {
  const image = event.currentTarget;
  image.style.display = 'none';
  const placeholder = image.nextElementSibling;
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}

function LandingPage() {
  useLandingSetup();

  return (
    <>
      <BackgroundEffects />
      <Navbar toggleMenu={toggleMenu} />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProcessSection />
      <ResultsSection />
      <ServicesSection />
      <TeamSection handleImageError={handleImageError} />
      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function normalizePath(pathname) {
  if (!pathname) return '/';
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default function App() {
  const currentPath = normalizePath(window.location.pathname);
  const legalRouteData = legalRoutes[currentPath];
  const routeData = serviceRoutes[currentPath];

  if (legalRouteData) {
    return <LegalRoutePage routeData={legalRouteData} />;
  }

  if (routeData) {
    return <ServiceRoutePage routeData={routeData} />;
  }

  return <LandingPage />;
}
