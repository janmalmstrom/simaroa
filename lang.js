// Simple Language Toggle for Simaroa Marketing
const i18n = {
  en: {
    nav: { home: "Home", pricing: "Pricing", terms: "Terms", privacy: "Privacy", refunds: "Refunds", support: "Support", startTrial: "Start Free Trial", langBtn: "ES" },
    footer: { tagline: "© 2026 Simaroa · Move first. Win more.", home: "Home", pricing: "Pricing", terms: "Terms", privacy: "Privacy", refunds: "Refunds", support: "Support" }
  },
  es: {
    nav: { home: "Inicio", pricing: "Precios", terms: "Términos", privacy: "Privacidad", refunds: "Reembolsos", support: "Soporte", startTrial: "Prueba Gratuita", langBtn: "EN" },
    footer: { tagline: "© 2026 Simaroa · Muéstrate primero. Gana más.", home: "Inicio", pricing: "Precios", terms: "Términos", privacy: "Privacidad", refunds: "Reembolsos", support: "Soporte" }
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  const t = i18n[lang];
  
  // Nav
  document.querySelector('a[href="/"]').textContent = t.nav.home;
  document.querySelector('a[href="/pricing.html"]').textContent = t.nav.pricing;
  document.querySelector('a[href="/terms.html"]').textContent = t.nav.terms;
  document.querySelector('a[href="/privacy.html"]').textContent = t.nav.privacy;
  document.querySelector('a[href="/refund-policy.html"]').textContent = t.nav.refunds;
  document.querySelector('a[href="mailto:support@simaroa.com"]').textContent = t.nav.support;
  document.querySelector('.nav-cta').textContent = t.nav.startTrial;
  document.querySelector('.lang-toggle').textContent = t.nav.langBtn;
  
  // Footer
  document.querySelector('.footer-left').textContent = t.footer.tagline;
  const footerLinks = document.querySelectorAll('.footer-right a');
  footerLinks[0].textContent = t.footer.home;
  footerLinks[1].textContent = t.footer.pricing;
  footerLinks[2].textContent = t.footer.terms;
  footerLinks[3].textContent = t.footer.privacy;
  footerLinks[4].textContent = t.footer.refunds;
  footerLinks[5].textContent = t.footer.support;
}

// Init
const savedLang = localStorage.getItem('lang') || 'en';
setLang(savedLang);
