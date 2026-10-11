document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded', String(open));nav.classList.toggle('open', open);});
nav.addEventListener('click', event => {if (event.target.closest('a')) {menu.setAttribute('aria-expanded', 'false');nav.classList.remove('open');}});
document.addEventListener('keydown', event => {if(event.key === 'Escape'){menu.setAttribute('aria-expanded', 'false');nav.classList.remove('open');}});
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const collectionToggle = document.getElementById('collection-toggle');
let collectionExpanded = false;
function setupCarousel(prefix) {
  const track = document.getElementById(`${prefix}-track`);
  const slides = Array.from(track.children);
  const count = document.getElementById(`${prefix}-count`);
  let active = 0;
  let visibleCount = 5;
  function fitHeight() {
    if (prefix === 'review' && track.clientWidth) {
      track.style.height = `${Math.ceil(slides[active].getBoundingClientRect().height)}px`;
    }
  }
  function render() {
    count.textContent = `${active + 1} / ${visibleCount}`;
    fitHeight();
  }
  function show(index, instant = false) {
    active = (index + visibleCount) % visibleCount;
    render();
    track.scrollTo({left: active * track.clientWidth, behavior: instant || reducedMotion.matches ? 'instant' : 'smooth'});
  }
  function updateCollection() {
    visibleCount = collectionExpanded ? slides.length : 5;
    active = Math.min(active, visibleCount - 1);
    slides.forEach((slide, index) => {
      slide.hidden = index >= visibleCount;
      slide.setAttribute('aria-label', `${index + 1} of ${visibleCount}`);
    });
    show(active, true);
  }
  document.getElementById(`${prefix}-prev`).addEventListener('click', () => show(active - 1));
  document.getElementById(`${prefix}-next`).addEventListener('click', () => show(active + 1));
  track.addEventListener('scroll', () => {
    if (!track.clientWidth) return;
    active = Math.min(visibleCount - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth)));
    render();
  }, {passive: true});
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();show(active + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  window.addEventListener('resize', () => show(active, true));
  // Individual slide measurements prevent the longest review setting every slide's height.
  const sizeObserver = new ResizeObserver(fitHeight);
  slides.forEach(slide => sizeObserver.observe(slide));
  if (document.fonts) document.fonts.ready.then(fitHeight);
  updateCollection();
  return updateCollection;
}
if (document.getElementById('review-track')) {
const updateReviews = setupCarousel('review');
const updatePhotos = setupCarousel('photo');
collectionToggle.addEventListener('click', () => {
  collectionExpanded = !collectionExpanded;
  collectionToggle.setAttribute('aria-expanded', String(collectionExpanded));
  collectionToggle.textContent = collectionExpanded ? '− Show featured five' : '+ Show all reviews & photos';
  updateReviews();
  updatePhotos();
});

}
