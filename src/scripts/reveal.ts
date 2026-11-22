/** Comparsa allo scroll: solo opacity e transform, una volta. Gli elementi già in vista non si nascondono mai. */
let observer: IntersectionObserver | undefined;

function init() {
  observer?.disconnect();
  observer = undefined;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  const below = items.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
  if (!below.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove('is-pending');
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  below.forEach((el, index) => {
    el.classList.add('is-pending');
    el.style.transitionDelay = `${(index % 3) * 70}ms`;
    observer?.observe(el);
  });
}

document.addEventListener('astro:page-load', init);
