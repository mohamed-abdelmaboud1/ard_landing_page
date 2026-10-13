/* ============================================================
   THE ARD � main.js  | Vanilla JS
   ============================================================ */

/* -- Navbar: scroll opacity & active links --------------- */
const navbar = document.getElementById('navbar');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  lastY = y;
});

/* -- Mobile hamburger ----------------------------------- */
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('navMobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* -- Smooth anchor scrolling ---------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 20;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

/* -- Intersection Observer  reveal animations ---------- */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

/* -- Testimonials slider -------------------------------- */
const testimonials = document.querySelectorAll('.testimonial');
const dots         = document.querySelectorAll('.t-dot');
let currentT = 0;
let autoSlide;

function showTestimonial(idx) {
  testimonials[currentT].classList.remove('active');
  dots[currentT].classList.remove('active');
  currentT = (idx + testimonials.length) % testimonials.length;
  testimonials[currentT].classList.add('active');
  dots[currentT].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => { showTestimonial(i); resetAutoSlide(); });
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => showTestimonial(currentT + 1), 7000);
}
resetAutoSlide();

/* -- Console branding ----------------------------------- */
console.log('%c The ARD ', 'background:#211C18;color:#C9A45C;font-size:18px;font-weight:700;padding:6px 14px;border-radius:4px;');
console.log('%cBeyond the obvious. Decode Egypt.', 'color:#756B5D;font-size:12px;');
