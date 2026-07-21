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

  initCarousel('.services-carousel', 'servicesTrack');
  initCarousel('.testimonials-carousel', 'testimonialsTrack');
  initCarousel('.gallery-carousel', 'galleryTrack');
  initTestimonialExpand();
  initLightbox('earGuideTrigger', 'earGuideLightbox', 'earGuideClose');
  initLightbox('colorCatalogTrigger', 'colorCatalogLightbox', 'colorCatalogClose');
});

// Abre/fecha uma imagem em tela cheia: clique no gatilho abre, clique no X,
// clique fora da imagem ou tecla Esc fecha.
function initLightbox(triggerId, lightboxId, closeId) {
  const trigger = document.getElementById(triggerId);
  const lightbox = document.getElementById(lightboxId);
  const closeBtn = document.getElementById(closeId);
  if (!trigger || !lightbox || !closeBtn) return;

  // O botão flutuante do WhatsApp fica por cima do overlay em alguns
  // navegadores mesmo com z-index menor, então escondemos ele manualmente.
  const waFloat = document.querySelector('.whatsapp-float');

  function open() {
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (waFloat) waFloat.style.visibility = 'hidden';
    closeBtn.focus();
  }
  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (waFloat) waFloat.style.visibility = '';
    trigger.focus();
  }

  trigger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

// Carrossel genérico: sempre 3 cards por vez (2 no tablet, 1 no mobile),
// avanço automático e loop infinito via clones do início da lista.
function initCarousel(carouselSelector, trackId) {
  const carousel = document.querySelector(carouselSelector);
  const track = document.getElementById(trackId);
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

// Depoimentos: mostra "Ver mais" só nos cards cujo texto realmente é cortado
// pelo line-clamp, e alterna a expansão ao clicar (delegado, funciona nos clones do carrossel).
function initTestimonialExpand() {
  function updateTruncation() {
    document.querySelectorAll('.testimonial-card').forEach(card => {
      const text = card.querySelector('.testimonial-text');
      const btn = card.querySelector('.testimonial-more');
      if (!text || !btn) return;
      text.classList.remove('is-expanded');
      btn.textContent = 'Ver mais';
      const truncated = text.scrollHeight > text.clientHeight + 2;
      btn.style.display = truncated ? 'inline-block' : 'none';
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.testimonial-more');
    if (!btn) return;
    const text = btn.closest('.testimonial-card').querySelector('.testimonial-text');
    const expanded = text.classList.toggle('is-expanded');
    btn.textContent = expanded ? 'Ver menos' : 'Ver mais';
  });

  updateTruncation();
  // recalcula depois que fontes/imagens terminam de carregar (podem reflowar o texto)
  window.addEventListener('load', updateTruncation);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateTruncation);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateTruncation, 350);
  });
}
