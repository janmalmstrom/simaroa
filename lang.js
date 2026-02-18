// Language Toggle for Simaroa Marketing
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-pricing': 'Pricing',
    'nav-terms': 'Terms',
    'nav-privacy': 'Privacy',
    'nav-refunds': 'Refunds',
    'nav-support': 'Support',
    'nav-cta': 'Start Free Trial',
    'lang-btn': 'ES',
    'footer-tagline': '© 2026 Simaroa · Move first. Win more.',
    // Version A
    'eyebrow-a': 'Calculate Your Lost Revenue in 30 Seconds',
    'headline-a': 'How Much Revenue Are You Losing Because You Respond Too Slowly?',
    'subheadline-a': "Most service businesses don't lose jobs because they're bad. They lose because they're late. Simaroa helps you respond faster, close more jobs, and recover the revenue you're silently leaving on the table.",
    'calc-title': 'Calculate Your Lost Revenue',
    'calc-subtitle': 'Enter your numbers below — no sign-up required',
    'label-avgjob': 'Average job value ($)',
    'label-leads': 'Leads per month',
    'label-response': 'Response time (minutes)',
    'label-close': 'Close rate (%)',
    'btn-calculate': 'Calculate My Loss',
    'cta-note': 'No credit card required. Full access to all features.',
    'cta-button-a': 'Start Free 14-Day Access',
    'btn-recover': 'Recover This Revenue Now',
    // Version B
    'eyebrow-b': 'What Is Slow Follow-Up Costing You?',
    'headline-b': "Service Businesses Don't Need More Leads. They Need Faster Systems.",
    'subheadline-b': 'Simaroa improves how quickly you respond, quote, and follow up — without adding complexity.',
    'cta-button-b': 'Unlock Faster Response System',
    // Version C
    'eyebrow-c': 'Operational Revenue Impact Estimator',
    'headline-c': 'Turn Response Speed Into Revenue Growth',
    'subheadline-c': 'Small operational delays compound into large revenue losses. Simaroa eliminates quoting friction and accelerates deal velocity.',
    'cta-button-c': 'Request Early Access',
    'btn-calculate-c': 'Calculate Impact',
    // Result labels
    'result-label-a': 'lost due to delayed responses',
    'result-label-b': 'could be recovered monthly with faster response',
    'result-label-c': 'operational revenue impact',
    'result-peak': "You're operating at peak speed. No visible revenue leak detected.",
    'result-format': 'Month ${month} / ${year} Year',
    // Pricing page
    'pricing-title': 'Simple, Transparent Pricing',
    'pricing-subtitle': 'Start with a 14-day free trial. No credit card required.',
    'per-month': '/month',
    'trial-badge': '14 Days Free',
    'plan-trial': 'Trial',
    'plan-starter': 'Starter',
    'plan-professional': 'Professional',
    'plan-enterprise': 'Enterprise',
    'trial-quotes': '50 quotes/month',
    'starter-quotes': '50 quotes/month',
    'professional-quotes': '200 quotes/month',
    'enterprise-quotes': 'Unlimited quotes',
    'start-trial': 'Start Free Trial',
    'get-started': 'Get Started',
    'contact-sales': 'Contact Sales',
    'feature-email': 'Email notifications',
    'feature-basic-templates': 'Basic templates',
    'feature-basic-reporting': 'Basic reporting',
    'feature-email-support': 'Email support',
    'feature-email-sms': 'Email + SMS notifications',
    'feature-advanced-templates': 'Advanced templates',
    'feature-advanced-reporting': 'Advanced reporting',
    'feature-priority-support': 'Priority support',
    'feature-custom-branding': 'Custom branding',
    'feature-api': 'API access',
    'feature-sla': 'SLA guarantee',
    'feature-custom-notifications': 'Custom notifications',
    'feature-unlimited-templates': 'Unlimited templates',
    'feature-custom-reporting': 'Custom reporting',
    'feature-dedicated-support': 'Dedicated support',
    'feature-white-label': 'White-label branding',
    'feature-account-manager': 'Account manager',
    // Terms page
    'terms-title': 'Terms of Service',
    'terms-updated': 'Last Updated: February 2026',
    'terms-intro': 'Simaroa is a subscription-based software platform designed for business users. By accessing or using Simaroa, you agree to these Terms.',
    'terms-section1-title': '1. Service Description',
    'terms-section1-content': 'Simaroa provides web-based tools for lead management, quoting workflows, customer tracking, and performance analytics.',
    'terms-section2-title': '2. Eligibility',
    'terms-section2-content': 'You must be at least 18 years old and using the service for lawful business purposes.',
    'terms-section3-title': '3. Acceptable Use',
    'terms-section3-intro': 'You agree not to:',
    'terms-section3-item1': 'Use the platform for unlawful activity',
    'terms-section3-item2': 'Violate email marketing laws (CAN-SPAM, GDPR where applicable)',
    'terms-section3-item3': 'Attempt to reverse engineer or disrupt the service',
    'terms-section4-title': '4. Payments',
    'terms-section4-item1': 'Subscriptions are billed monthly via Paddle.',
    'terms-section4-item2': 'Fees are non-transferable.',
    'terms-section4-item3': 'Failure to pay may result in suspension.',
    'terms-section5-title': '5. Data',
    'terms-section5-item1': 'You retain ownership of your business data.',
    'terms-section5-item2': 'Simaroa may use anonymized aggregated data for analytics.',
    'terms-section6-title': '6. Termination',
    'terms-section6-content': 'We may suspend or terminate accounts that violate these terms.',
    'terms-section7-title': '7. Limitation of Liability',
    'terms-section7-content': 'Simaroa is provided "as is." We are not liable for indirect or consequential damages.',
    'terms-section8-title': '8. Governing Law',
    'terms-section8-content': 'These terms are governed by applicable international commercial law.',
    'terms-contact-prefix': 'Questions?',
    'terms-contact-link': 'Contact us',
    // Privacy page
    'privacy-title': 'Privacy Policy',
    'privacy-updated': 'Last Updated: February 2026',
    'privacy-intro': 'Simaroa respects your privacy.',
    'privacy-section1-title': '1. Data We Collect',
    'privacy-section1-item1': 'Account information (name, email)',
    'privacy-section1-item2': 'Billing information (processed securely by Paddle)',
    'privacy-section1-item3': 'Usage analytics',
    'privacy-section1-item4': 'Communication logs',
    'privacy-section2-title': '2. Payment Processing',
    'privacy-section2-content': 'Payments are handled by Paddle.com. We do not store credit card details.',
    'privacy-section3-title': '3. Email & Infrastructure',
    'privacy-section3-intro': 'We use:',
    'privacy-section3-item1': 'Amazon Web Services (AWS)',
    'privacy-section3-item2': 'Amazon SES for system notifications',
    'privacy-section3-item3': 'Secure cloud hosting providers',
    'privacy-section4-title': '4. Data Use',
    'privacy-section4-intro': 'We use collected data to:',
    'privacy-section4-item1': 'Provide platform services',
    'privacy-section4-item2': 'Improve system performance',
    'privacy-section4-item3': 'Monitor usage and prevent abuse',
    'privacy-section5-title': '5. Data Sharing',
    'privacy-section5-content': 'We do not sell personal data. Data may be shared with trusted service providers strictly for operational purposes.',
    'privacy-section6-title': '6. Security',
    'privacy-section6-content': 'We use encryption and access controls to protect data.',
    'privacy-section7-title': '7. Data Retention',
    'privacy-section7-content': 'Data is retained while your account is active.',
    'privacy-section8-title': '8. Contact',
    'privacy-contact-email': 'support@simaroa.com',
    // Refund page
    'refund-title': 'Refund Policy',
    'refund-updated': 'Last Updated: February 2026',
    'refund-trial': 'Simaroa offers a 14-day free trial.',
    'refund-nonrefundable': 'After trial expiration, subscription payments are non-refundable.',
    'refund-error': 'If you believe you were charged in error, contact support within 7 days of billing.',
    'refund-discretion': 'We may issue refunds at our discretion.',
    'refund-terms-violation': 'Accounts violating Terms are not eligible for refunds.',
    'refund-questions': 'Questions?',
    'refund-contact': 'Contact us at',
    'refund-email': 'support@simaroa.com'
  },
  es: {
    'nav-home': 'Inicio',
    'nav-pricing': 'Precios',
    'nav-terms': 'Términos',
    'nav-privacy': 'Privacidad',
    'nav-refunds': 'Reembolsos',
    'nav-support': 'Soporte',
    'nav-cta': 'Prueba Gratuita',
    'lang-btn': 'EN',
    'footer-tagline': '© 2026 Simaroa · Muéstrate primero. Gana más.',
    // Version A
    'eyebrow-a': 'Calcula tus Pérdidas de Ingresos en 30 Segundos',
    'headline-a': '¿Cuántos Ingresos Estás Perdiendo Por Responder Demasiado Lento?',
    'subheadline-a': 'La mayoría de las empresas de servicios no pierden trabajos porque sean malas. Pierden porque llegan tarde. Simaroa te ayuda a responder más rápido, cerrar más trabajos y recuperar los ingresos que silenciosamente dejas en la mesa.',
    'calc-title': 'Calcula Tus Pérdidas de Ingresos',
    'calc-subtitle': 'Ingresa tus números a continuación — no requiere registro',
    'label-avgjob': 'Valor promedio del trabajo ($)',
    'label-leads': 'Prospectos por mes',
    'label-response': 'Tiempo de respuesta (minutos)',
    'label-close': 'Tasa de cierre (%)',
    'btn-calculate': 'Calcular Mi Pérdida',
    'cta-note': 'No se requiere tarjeta de crédito. Acceso completo a todas las funciones.',
    'cta-button-a': 'Comenzar Acceso Gratuito de 14 Días',
    'btn-recover': 'Recuperar Estos Ingresos Ahora',
    // Version B
    'eyebrow-b': '¿Qué Te Está Costando El Seguimiento Lento?',
    'headline-b': 'Las Empresas de Servicios No Necesitan Más Prospectos. Necesitan Sistemas Más Rápidos.',
    'subheadline-b': 'Simaroa mejora la rapidez con la que respondes, cotizas y haces seguimiento, sin agregar complejidad.',
    'cta-button-b': 'Desbloquear Sistema de Respuesta Rápida',
    // Version C
    'eyebrow-c': 'Estimador de Impacto de Ingresos Operacionales',
    'headline-c': 'Convierte la Velocidad de Respuesta en Crecimiento de Ingresos',
    'subheadline-c': 'Pequeños retrasos operacionales se convierten en grandes pérdidas de ingresos. Simaroa elimina la fricción de cotización y acelera la velocidad de negociación.',
    'cta-button-c': 'Solicitar Acceso Anticipado',
    'btn-calculate-c': 'Calcular Impacto',
    // Result labels
    'result-label-a': 'perdidos debido a respuestas retrasadas',
    'result-label-b': 'podrían recuperarse mensualmente con respuesta más rápida',
    'result-label-c': 'impacto de ingresos operacionales',
    'result-peak': 'Estás operando a velocidad máxima. No se detecta pérdida visible de ingresos.',
    'result-format': 'Mes ${month} / ${year} Año',
    // Pricing page
    'pricing-title': 'Precios Simples y Transparentes',
    'pricing-subtitle': 'Comienza con una prueba gratuita de 14 días. No se requiere tarjeta de crédito.',
    'per-month': '/mes',
    'trial-badge': '14 Días Gratis',
    'plan-trial': 'Prueba',
    'plan-starter': 'Inicial',
    'plan-professional': 'Profesional',
    'plan-enterprise': 'Empresarial',
    'trial-quotes': '50 cotizaciones/mes',
    'starter-quotes': '50 cotizaciones/mes',
    'professional-quotes': '200 cotizaciones/mes',
    'enterprise-quotes': 'Cotizaciones ilimitadas',
    'start-trial': 'Comenzar Prueba Gratuita',
    'get-started': 'Comenzar',
    'contact-sales': 'Contactar Ventas',
    'feature-email': 'Notificaciones por email',
    'feature-basic-templates': 'Plantillas básicas',
    'feature-basic-reporting': 'Reportes básicos',
    'feature-email-support': 'Soporte por email',
    'feature-email-sms': 'Notificaciones por email y SMS',
    'feature-advanced-templates': 'Plantillas avanzadas',
    'feature-advanced-reporting': 'Reportes avanzados',
    'feature-priority-support': 'Soporte prioritario',
    'feature-custom-branding': 'Marca personalizada',
    'feature-api': 'Acceso a API',
    'feature-sla': 'Garantía SLA',
    'feature-custom-notifications': 'Notificaciones personalizadas',
    'feature-unlimited-templates': 'Plantillas ilimitadas',
    'feature-custom-reporting': 'Reportes personalizados',
    'feature-dedicated-support': 'Soporte dedicado',
    'feature-white-label': 'Marca blanca',
    'feature-account-manager': 'Gerente de cuenta',
    // Terms page
    'terms-title': 'Términos de Servicio',
    'terms-updated': 'Última actualización: Febrero 2026',
    'terms-intro': 'Simaroa es una plataforma de software de suscripción diseñada para usuarios empresariales. Al acceder o usar Simaroa, aceptas estos Términos.',
    'terms-section1-title': '1. Descripción del Servicio',
    'terms-section1-content': 'Simaroa proporciona herramientas basadas en web para la gestión de prospectos, flujos de trabajo de cotización, seguimiento de clientes y análisis de rendimiento.',
    'terms-section2-title': '2. Elegibilidad',
    'terms-section2-content': 'Debes tener al menos 18 años y usar el servicio para fines comerciales legítimos.',
    'terms-section3-title': '3. Uso Aceptable',
    'terms-section3-intro': 'Acuerdas no:',
    'terms-section3-item1': 'Usar la plataforma para actividades ilegales',
    'terms-section3-item2': 'Violar las leyes de marketing por correo electrónico (CAN-SPAM, GDPR cuando sea aplicable)',
    'terms-section3-item3': 'Intentar realizar ingeniería inversa o interrumpir el servicio',
    'terms-section4-title': '4. Pagos',
    'terms-section4-item1': 'Las suscripciones se facturan mensualmente a través de Paddle.',
    'terms-section4-item2': 'Las tarifas no son transferibles.',
    'terms-section4-item3': 'El incumplimiento del pago puede resultar en suspensión.',
    'terms-section5-title': '5. Datos',
    'terms-section5-item1': 'Conservas la propiedad de tus datos comerciales.',
    'terms-section5-item2': 'Simaroa puede usar datos agregados anonimizados para análisis.',
    'terms-section6-title': '6. Terminación',
    'terms-section6-content': 'Podemos suspender o terminar cuentas que violen estos términos.',
    'terms-section7-title': '7. Limitación de Responsabilidad',
    'terms-section7-content': 'Simaroa se proporciona "tal cual". No somos responsables de daños indirectos o consecuentes.',
    'terms-section8-title': '8. Ley Aplicable',
    'terms-section8-content': 'Estos términos se rigen por la ley comercial internacional aplicable.',
    'terms-contact-prefix': '¿Preguntas?',
    'terms-contact-link': 'Contáctanos',
    // Privacy page
    'privacy-title': 'Política de Privacidad',
    'privacy-updated': 'Última actualización: Febrero 2026',
    'privacy-intro': 'Simaroa respeta tu privacidad.',
    'privacy-section1-title': '1. Datos que Recopilamos',
    'privacy-section1-item1': 'Información de cuenta (nombre, email)',
    'privacy-section1-item2': 'Información de facturación (procesada de forma segura por Paddle)',
    'privacy-section1-item3': 'Análisis de uso',
    'privacy-section1-item4': 'Registros de comunicación',
    'privacy-section2-title': '2. Procesamiento de Pagos',
    'privacy-section2-content': 'Los pagos son manejados por Paddle.com. No almacenamos detalles de tarjetas de crédito.',
    'privacy-section3-title': '3. Correo e Infraestructura',
    'privacy-section3-intro': 'Usamos:',
    'privacy-section3-item1': 'Amazon Web Services (AWS)',
    'privacy-section3-item2': 'Amazon SES para notificaciones del sistema',
    'privacy-section3-item3': 'Proveedores de alojamiento en la nube seguros',
    'privacy-section4-title': '4. Uso de Datos',
    'privacy-section4-intro': 'Usamos los datos recopilados para:',
    'privacy-section4-item1': 'Proporcionar servicios de la plataforma',
    'privacy-section4-item2': 'Mejorar el rendimiento del sistema',
    'privacy-section4-item3': 'Monitorear el uso y prevenir abusos',
    'privacy-section5-title': '5. Compartición de Datos',
    'privacy-section5-content': 'No vendemos datos personales. Los datos pueden compartirse con proveedores de servicios confiables estrictamente para fines operativos.',
    'privacy-section6-title': '6. Seguridad',
    'privacy-section6-content': 'Usamos encriptación y controles de acceso para proteger los datos.',
    'privacy-section7-title': '7. Retención de Datos',
    'privacy-section7-content': 'Los datos se retienen mientras tu cuenta esté activa.',
    'privacy-section8-title': '8. Contacto',
    'privacy-contact-email': 'support@simaroa.com',
    // Refund page
    'refund-title': 'Política de Reembolso',
    'refund-updated': 'Última actualización: Febrero 2026',
    'refund-trial': 'Simaroa ofrece una prueba gratuita de 14 días.',
    'refund-nonrefundable': 'Después de la expiración de la prueba, los pagos de suscripción no son reembolsables.',
    'refund-error': 'Si crees que se te cobró por error, contacta al soporte dentro de los 7 días de facturación.',
    'refund-discretion': 'Podemos emitir reembolsos a nuestra discreción.',
    'refund-terms-violation': 'Las cuentas que violan los Términos no son elegibles para reembolsos.',
    'refund-questions': '¿Preguntas?',
    'refund-contact': 'Contáctanos en',
    'refund-email': 'support@simaroa.com'
  }
};

// Helper function to get current language
function getCurrentLanguage() {
  return localStorage.getItem('simaroa_lang') || 'en';
}

// Helper function to translate result labels
function getResultLabel(version) {
  const lang = getCurrentLanguage();
  const t = translations[lang];
  const key = 'result-label-' + version.toLowerCase();
  return t[key] || t['result-label-a'];
}

// Helper function to translate peak performance message
function getPeakMessage() {
  const lang = getCurrentLanguage();
  return translations[lang]['result-peak'];
}

// Helper function to translate result format
function getResultFormat(month, year) {
  const lang = getCurrentLanguage();
  const format = translations[lang]['result-format'];
  return format.replace('${month}', month).replace('${year}', year);
}

function setLanguage(lang) {
  const t = translations[lang];
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update version-specific content based on which version is active
  const activeVersion = document.querySelector('.version-content.active');
  if (activeVersion) {
    const versionId = activeVersion.id;

    // Update calculator titles
    const calcHeader = activeVersion.querySelector('.calc-header h2');
    if (calcHeader) calcHeader.textContent = t['calc-title'];

    const calcSubtitle = activeVersion.querySelector('.calc-header p');
    if (calcSubtitle) calcSubtitle.textContent = t['calc-subtitle'];

    // Update labels
    const labels = activeVersion.querySelectorAll('.calc-field label');
    if (labels.length >= 4) {
      labels[0].textContent = t['label-avgjob'];
      labels[1].textContent = t['label-leads'];
      labels[2].textContent = t['label-response'];
      labels[3].textContent = t['label-close'];
    }

    // Update CTA button
    const ctaButton = activeVersion.querySelector('.cta-button');
    const ctaNote = activeVersion.querySelector('.cta-note');

    if (versionId === 'version-a') {
      if (ctaButton) ctaButton.textContent = t['cta-button-a'];
      if (ctaNote) ctaNote.textContent = t['cta-note'];
    } else if (versionId === 'version-b') {
      if (ctaButton) ctaButton.textContent = t['cta-button-b'];
      if (ctaNote) ctaNote.textContent = t['cta-note'];
    } else if (versionId === 'version-c') {
      if (ctaButton) ctaButton.textContent = t['cta-button-c'];
      if (ctaNote) ctaNote.textContent = t['cta-note'];
    }

    // Update calculator button
    const calcButton = activeVersion.querySelector('.calc-button');
    if (versionId === 'version-c' && calcButton) {
      calcButton.textContent = t['btn-calculate-c'];
    }
  }

  // Update lang toggle button
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.textContent = t['lang-btn'];
  }

  localStorage.setItem('simaroa_lang', lang);
}

function toggleLang() {
  const current = localStorage.getItem('simaroa_lang') || 'en';
  const newLang = current === 'en' ? 'es' : 'en';
  setLanguage(newLang);
}

// Initialize
(function() {
  const savedLang = localStorage.getItem('simaroa_lang') || 'en';
  setLanguage(savedLang);
})();
