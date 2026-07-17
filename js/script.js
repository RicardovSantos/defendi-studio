// Defendi Studio — interações. Preenchido na Task 11.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // fecha o menu ao clicar num link (mobile)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  initServicesCarousel();
});

// Carrossel "Nossos Serviços": sempre 3 cards por vez (2 no tablet, 1 no mobile),
// avanço automático e loop infinito via clones do início da lista.
function initServicesCarousel() {
  const carousel = document.querySelector('.services-carousel');
  const track = document.getElementById('servicesTrack');
  if (!carousel || !track) return;

  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const originalCards = Array.from(track.children);
  const total = originalCards.length;

  let clones = [];
  let index = 0;
  let autoplayTimer = null;

  function cardsPerView() {
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  }

  function setupClones() {
    clones.forEach(c => c.remove());
    clones = [];
    const n = cardsPerView();
    for (let i = 0; i < n; i++) {
      const clone = originalCards[i % total].cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('a, button').forEach(el => { el.tabIndex = -1; });
      track.appendChild(clone);
      clones.push(clone);
    }
  }

  function goTo(i, animate = true) {
    if (!animate) track.style.transition = 'none';
    const step = track.children[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);
    track.style.transform = `translateX(-${i * step}px)`;
    if (!animate) {
      track.getBoundingClientRect(); // força reflow antes de reativar a transição
      track.style.transition = '';
    }
  }

  function next() {
    index++;
    goTo(index);
  }

  function prev() {
    if (index === 0) {
      goTo(total, false);
      index = total;
      requestAnimationFrame(() => { index--; goTo(index); });
    } else {
      index--;
      goTo(index);
    }
  }

  track.addEventListener('transitionend', () => {
    if (index === total) {
      index = 0;
      goTo(0, false);
    }
  });

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, 4000);
  }
  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  prevBtn.addEventListener('click', () => { prev(); startAutoplay(); });
  nextBtn.addEventListener('click', () => { next(); startAutoplay(); });
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      index = 0;
      setupClones();
      goTo(0, false);
    }, 200);
  });

  setupClones();
  goTo(0, false);
  startAutoplay();
}
