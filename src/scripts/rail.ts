/** Carosello orizzontale: scroll-snap nativo, frecce, barra di avanzamento e trascinamento col mouse. */
function initRails() {
  document.querySelectorAll<HTMLElement>('[data-rail]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    const track = root.querySelector<HTMLElement>('[data-rail-track]');
    const bar = root.querySelector<HTMLElement>('[data-rail-progress]');
    const prev = root.querySelector<HTMLButtonElement>('[data-rail-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-rail-next]');
    if (!track) return;

    const step = () => (track.querySelector<HTMLElement>('.rail-card')?.offsetWidth ?? 320) + 24;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      const visible = max > 0 ? track.clientWidth / track.scrollWidth : 1;
      if (bar) {
        bar.style.width = `${Math.max(visible, 0.12) * 100}%`;
        bar.style.transform = `translateX(${ratio * (1 / Math.max(visible, 0.12) - 1) * 100}%)`;
      }
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const go = (dir: number) => track.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
    prev?.addEventListener('click', () => go(-1));
    next?.addEventListener('click', () => go(1));
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    window.addEventListener('resize', update);
    track.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    });

    let startX = 0;
    let startLeft = 0;
    let dragging = false;
    let moved = false;
    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse') return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startLeft = track.scrollLeft;
    });
    window.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 4) {
        moved = true;
        track.classList.add('is-dragging');
      }
      track.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');
    });
    track.addEventListener(
      'click',
      (event) => {
        if (moved) {
          event.preventDefault();
          event.stopPropagation();
          moved = false;
        }
      },
      true,
    );

    update();
  });
}

document.addEventListener('astro:page-load', initRails);
initRails();
