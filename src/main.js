import '@fontsource/anton/latin-400.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-700.css';
import './style.css';
import { config } from './config.js';

document.documentElement.classList.add('js');

const isExternalUrl = (value) => /^https?:\/\//i.test(value);
const setExternalLink = (link, href) => {
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
};

const instagramUrl = isExternalUrl(config.instagramUrl)
  ? config.instagramUrl
  : 'https://instagram.com/destraatlacht_official';
const instagramDmUrl = isExternalUrl(config.instagramDmUrl)
  ? config.instagramDmUrl
  : instagramUrl;
const instagramHandle = String(config.instagramHandle || 'destraatlacht_official').replace(/^@+/, '');
const email = typeof config.email === 'string' ? config.email.trim() : '';
const phone = typeof config.phone === 'string' ? config.phone.trim() : '';
const whatsapp = typeof config.whatsapp === 'string' ? config.whatsapp.trim() : '';

document.querySelectorAll('[data-ig-link]').forEach((link) => {
  setExternalLink(link, instagramUrl);
});

document.querySelectorAll('[data-ig-handle]').forEach((element) => {
  element.textContent = `@${instagramHandle}`;
});

const emailIsValid = email.includes('@');
const whatsappIsValid = /^\d+$/.test(whatsapp);
const phoneIsValid = phone.length > 0;
const collaborationLink = document.querySelector('[data-collaboration-link]');

if (collaborationLink) {
  if (emailIsValid) {
    collaborationLink.href = `mailto:${email}`;
    collaborationLink.removeAttribute('target');
    collaborationLink.removeAttribute('rel');
  } else {
    setExternalLink(collaborationLink, instagramDmUrl);
  }
}

const contactSettings = [
  {
    selector: '[data-contact-email]',
    valid: emailIsValid,
    value: email,
    href: emailIsValid ? `mailto:${email}` : '',
  },
  {
    selector: '[data-contact-phone]',
    valid: phoneIsValid,
    value: phone,
    href: phoneIsValid ? `tel:${phone.replace(/[^\d+]/g, '')}` : '',
  },
  {
    selector: '[data-contact-whatsapp]',
    valid: whatsappIsValid,
    value: whatsappIsValid ? `WhatsApp: +${whatsapp}` : '',
    href: whatsappIsValid ? `https://wa.me/${whatsapp}` : '',
    external: true,
  },
];

contactSettings.forEach(({ selector, valid, value, href, external }) => {
  const row = document.querySelector(selector);
  if (!row || !valid) return;

  const link = row.querySelector('a');
  link.textContent = value;
  if (external) setExternalLink(link, href);
  else link.href = href;
  row.hidden = false;
});

const fakesniffLink = document.querySelector('[data-fakesniff-link]');
if (fakesniffLink && isExternalUrl(config.fakesniffUrl)) {
  setExternalLink(fakesniffLink, config.fakesniffUrl);
  fakesniffLink.classList.add('fakesniff--linked');
}

const logoWrapper = document.querySelector('[data-logo]');
const logoImage = logoWrapper?.querySelector('img');

if (logoImage && logoWrapper) {
  const showFallback = () => logoWrapper.classList.add('logo--missing');
  logoImage.addEventListener('error', showFallback, { once: true });
  const logoUrl = config.logoSrc ? new URL(config.logoSrc, document.baseURI).href : '';
  if (logoUrl && logoImage.src !== logoUrl) logoImage.src = logoUrl;
  else if (logoImage.complete && !logoImage.naturalWidth) showFallback();
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('[data-reveal]');

if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
