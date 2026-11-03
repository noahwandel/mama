// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Header border on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Fade-in on scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add('visible'));
}

// Current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Contact form (draft): opens the visitor's e-mail program with the message prefilled.
// No data is sent to any server. Replace RECIPIENT with the real address.
const RECIPIENT = 'kontakt@example.de';
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    if (!d.get('name') || !d.get('email') || !d.get('privacy')) {
      form.reportValidity();
      return;
    }
    const subject = `Anfrage von ${d.get('name')}`;
    const body = `${d.get('message') || ''}\n\n${d.get('name')}\n${d.get('email')}`;
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
