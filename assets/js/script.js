'use strict';

const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = () => root.dataset.theme || (systemDark.matches ? 'dark' : 'light');

const syncToggle = () => {
  if (toggle) toggle.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
};

if (toggle) {
  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Storage blocked: the choice lasts for this page view only.
    }
    syncToggle();
  });
}

systemDark.addEventListener('change', syncToggle);
syncToggle();

// Hairline under the header once the page scrolls.
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
