import '@fontsource/anton/latin-400.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-700.css';
import './style.css';
import { config } from './config.js';

const isExternalUrl = (value) => /^https?:\/\//i.test(value);

const instagramUrl = isExternalUrl(config.instagramUrl)
  ? config.instagramUrl
  : 'https://instagram.com/destraatlacht_official';
const instagramHandle = String(config.instagramHandle || 'destraatlacht_official').replace(/^@+/, '');

document.querySelectorAll('[data-ig-link]').forEach((link) => {
  link.href = instagramUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelectorAll('[data-ig-handle]').forEach((element) => {
  element.textContent = `@${instagramHandle}`;
});

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
