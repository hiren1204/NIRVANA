const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!nav.contains(target) && !menuToggle.contains(target)) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1060) {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const revealSections = Array.from(document.querySelectorAll('.reveal'));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobileViewport = window.matchMedia('(max-width: 760px)').matches;

if (!prefersReducedMotion && !mobileViewport && 'IntersectionObserver' in window) {
  revealSections.forEach((el) => el.classList.add('is-ready'));

  const observer = new IntersectionObserver(
    (entries, localObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          localObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.06, rootMargin: '0px 0px -8% 0px' }
  );

  revealSections.forEach((el) => observer.observe(el));
} else {
  revealSections.forEach((el) => el.classList.add('show'));
}

const allImages = Array.from(document.querySelectorAll('img'));
allImages.forEach((img) => {
  const isHeroImage = Boolean(img.closest('.hero-media'));
  const inHeader = Boolean(img.closest('.site-header'));
  const shouldLoadSoon = isHeroImage || inHeader;

  if (!img.getAttribute('decoding')) {
    img.decoding = 'async';
  }

  if (!img.getAttribute('loading')) {
    img.loading = shouldLoadSoon ? 'eager' : 'lazy';
  }
});

const heroImage = document.querySelector('.hero-media img');
if (heroImage) {
  heroImage.fetchPriority = 'high';
}
