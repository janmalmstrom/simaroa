// Comprehensive Spanish translations for simaroa.com
const esContent = {
  // Index page
  'index': {
    '.eyebrow': 'Calcula tus Pérdidas de Ingresos en 30 Segundos',
    '.headline': '¿Cuántos Ingresos Estás Perdiendo Por Responder Demasiado Lento?',
    '.subheadline': 'La mayoría de las empresas de servicios no pierden trabajos porque sean malas. Pierden porque llegan tarde. Simaroa te ayuda a responder más rápido, cerrar más trabajos y recuperar los ingresos que silenciosamente dejas en la mesa.',
    '.calc-header h2': 'Calcula Tus Pérdidas de Ingresos',
    '.calc-header p': 'Ingresa tus números a continuación — no requiere registro',
    'label[for="avgJobValue"]': 'Valor promedio del trabajo ($)',
    'label[for="leadsPerMonth"]': 'Prospectos por mes',
    'label[for="responseTime"]': 'Tiempo de respuesta (minutos)',
    'label[for="closeRate"]': 'Tasa de cierre (%)',
    '.calc-note': 'No se requiere tarjeta de crédito. Acceso completo a todas las funciones.'
  },
  // Common elements
  'common': {
    'a[href="/pricing.html"]': 'Precios',
    'a[href="/terms.html"]': 'Términos',
    'a[href="/privacy.html"]': 'Privacidad',
    'a[href="/refund-policy.html"]': 'Reembolsos',
    'a[href="mailto:support@simaroa.com"]': 'Soporte',
    '.nav-cta': 'Prueba Gratuita',
    '.footer-left': '© 2026 Simaroa · Muéstrate primero. Gana más.'
  }
};

const enContent = {
  // Index page
  'index': {
    '.eyebrow': 'Calculate Your Lost Revenue in 30 Seconds',
    '.headline': 'How Much Revenue Are You Losing Because You Respond Too Slowly?',
    '.subheadline': 'Most service businesses don\\'t lose jobs because they\\'re bad. They lose because they\\'re late. Simaroa helps you respond faster, close more jobs, and recover the revenue you\\'re silently leaving on the table.',
    '.calc-header h2': 'Calculate Your Lost Revenue',
    '.calc-header p': 'Enter your numbers below — no sign-up required',
    'label[for="avgJobValue"]': 'Average job value ($)',
    'label[for="leadsPerMonth"]': 'Leads per month',
    'label[for="responseTime"]': 'Response time (minutes)',
    'label[for="closeRate"]': 'Close rate (%)',
    '.calc-note': 'No credit card required. Full access to all features.'
  },
  // Common elements
  'common': {
    'a[href="/pricing.html"]': 'Pricing',
    'a[href="/terms.html"]': 'Terms',
    'a[href="/privacy.html"]': 'Privacy',
    'a[href="/refund-policy.html"]': 'Refunds',
    'a[href="mailto:support@simaroa.com"]': 'Support',
    '.nav-cta': 'Start Free Trial',
    '.footer-left': '© 2026 Simaroa · Move first. Win more.'
  }
};

function updatePageContent(lang) {
  const content = lang === 'es' ? esContent : enContent;

  // Update common elements
  Object.entries(content.common).forEach(([selector, text]) => {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = text;
    });
  });

  // Update index page content
  if (document.querySelector('.hero')) {
    const indexContent = content.index;
    document.querySelectorAll('.eyebrow').forEach((el, i) => {
      if (i === 0 && typeof indexContent['.eyebrow'] === 'string') el.textContent = indexContent['.eyebrow'];
    });

    const headline = document.querySelector('.headline');
    if (headline && typeof indexContent['.headline'] === 'string') headline.textContent = indexContent['.headline'];

    const subheadline = document.querySelector('.subheadline');
    if (subheadline && typeof indexContent['.subheadline'] === 'string') subheadline.textContent = indexContent['.subheadline'];

    const calcTitle = document.querySelector('.calc-header h2');
    if (calcTitle) calcTitle.textContent = indexContent['.calc-header h2'];

    const calcSubtitle = document.querySelector('.calc-header p');
    if (calcSubtitle) calcSubtitle.textContent = indexContent['.calc-header p'];

    // Update calculator labels
    Object.entries(indexContent).forEach(([selector, text]) => {
      if (selector.startsWith('label[')) {
        document.querySelectorAll(selector).forEach(el => el.textContent = text);
      }
    });
  }
}

function toggleLang() {
  const currentLang = localStorage.getItem('simaroa_lang') || 'en';
  const newLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('simaroa_lang', newLang);

  // Update language button text
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.textContent = newLang === 'en' ? 'ES' : 'EN';
  }

  // Update page content
  updatePageContent(newLang);
}

// Initialize language on page load
(function() {
  const savedLang = localStorage.getItem('simaroa_lang') || 'en';
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.textContent = savedLang === 'en' ? 'ES' : 'EN';
  }
  updatePageContent(savedLang);
})();
