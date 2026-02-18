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
    'cta-button': 'Start Free 14-Day Access'
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
    'cta-button': 'Comenzar Acceso Gratuito de 14 Días'
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

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
