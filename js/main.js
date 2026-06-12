// ── Scroll-reveal ──────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Active nav link on scroll ──────────────────────
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-pill a');
const activateLink = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
};
window.addEventListener('scroll', activateLink, { passive: true });

// ── Drag-to-scroll on project cards ───────────────
(() => {
  const wrapper = document.querySelector('.projects-scroll-wrapper');
  let isDown = false, startX, scrollLeft;

  wrapper.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
    wrapper.style.cursor = 'grabbing';
    e.preventDefault();
  });
  document.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    wrapper.style.cursor = 'grab';
  });
  document.addEventListener('mousemove', e => {
    if (!isDown) return;
    const x = e.pageX - wrapper.offsetLeft;
    wrapper.scrollLeft = scrollLeft - (x - startX);
  });

  wrapper.style.cursor = 'grab';
  wrapper.querySelectorAll('img').forEach(img => img.setAttribute('draggable', 'false'));
})();

// ── Project card click → project page ─────────────
document.querySelectorAll('.project-card[data-href]').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    // Uncomment when project pages exist:
    // window.location.href = card.dataset.href;
    console.log('Navigate to:', card.dataset.href);
  });
});
