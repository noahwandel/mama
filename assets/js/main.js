const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- mobile menu ---------- */
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
const header = document.querySelector('.site-header');
function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  document.documentElement.style.overflow = open ? 'hidden' : '';
}
if (toggle && menu) {
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
}

/* ---------- header background on scroll ---------- */
const onScrollHeader = () => header && header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

/* ---------- reveal on scroll ---------- */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

/* ---------- "Der Weg": a path that runs through the page and draws itself on scroll ----------
   It runs along the page margins and only crosses sides in the empty space between sections,
   so it never runs through text. */
const main = document.getElementById('main');
const svg = main && main.querySelector('.path');
const line = document.getElementById('path-line');
let pathLength = 0;

function buildPath() {
  if (!svg || !line) return;
  const W = main.clientWidth, H = main.scrollHeight;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const wrap = main.querySelector('.wrap');
  const margin = wrap ? wrap.getBoundingClientRect().left : 24;
  const left = Math.max(8, margin * 0.5), right = W - left;
  const wobble = Math.min(14, margin * 0.25);
  const top = main.getBoundingClientRect().top + window.scrollY;
  const sections = [...main.querySelectorAll(':scope > section')];

  let side = right, y = 0;
  let d = `M ${side} ${y}`;
  const vertical = (toY) => { // gentle wobble along the margin
    const steps = Math.max(1, Math.round((toY - y) / 420));
    const h = (toY - y) / steps;
    for (let i = 0; i < steps; i++) {
      const dir = i % 2 ? 1 : -1;
      d += ` C ${side + dir * wobble} ${y + h * .33}, ${side - dir * wobble} ${y + h * .66}, ${side} ${y + h}`;
      y += h;
    }
  };
  sections.slice(1).forEach(sec => {
    const secTop = sec.getBoundingClientRect().top + window.scrollY - top;
    const pad = parseFloat(getComputedStyle(sec).paddingTop);
    const gap = Math.min(110, (pad || 80) * 0.7);
    const from = secTop - gap * .6, to = secTop + gap;
    if (from > y) vertical(from);
    const next = side === right ? left : right;
    d += ` C ${side} ${from + (to - from) * .55}, ${next} ${from + (to - from) * .45}, ${next} ${to}`;
    side = next; y = to;
  });
  vertical(H);
  line.setAttribute('d', d);
  pathLength = line.getTotalLength();
  line.style.strokeDasharray = pathLength;
  drawPath();
}
function drawPath() {
  if (!pathLength) return;
  if (reduceMotion) { line.style.strokeDashoffset = 0; return; }
  const rect = main.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.75 - rect.top) / rect.height));
  line.style.strokeDashoffset = pathLength * (1 - progress);
}
let pathTimer;
window.addEventListener('scroll', drawPath, { passive: true });
window.addEventListener('resize', () => { clearTimeout(pathTimer); pathTimer = setTimeout(buildPath, 150); });
window.addEventListener('load', buildPath);
if (document.fonts) document.fonts.ready.then(buildPath);
buildPath();

/* ---------- mobile quick bar: appears after the hero buttons, hides at the contact section ---------- */
const bar = document.querySelector('.quickbar');
const heroActions = document.querySelector('.hero-actions');
const contact = document.getElementById('kontakt');
if (bar && heroActions && 'IntersectionObserver' in window) {
  let pastHero = false, atContact = false;
  const update = () => bar.classList.toggle('show', pastHero && !atContact);
  new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting && e.boundingClientRect.top < 0; update(); }).observe(heroActions);
  if (contact) new IntersectionObserver(([e]) => { atContact = e.isIntersecting; update(); }, { threshold: 0.2 }).observe(contact);
}

/* ---------- footer year ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- contact form (draft): opens the visitor's e-mail program, nothing is sent to a server ---------- */
const RECIPIENT = 'kontakt@example.de'; // TODO: real address
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    if (!d.get('name') || !d.get('email') || !d.get('privacy')) { form.reportValidity(); return; }
    const subject = `Anfrage von ${d.get('name')}`;
    const body = `${d.get('message') || ''}\n\n${d.get('name')}\n${d.get('email')}`;
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
