/** Comparsa allo scroll: solo opacity e transform, una volta. Gli elementi già in vista non si nascondono mai.
    I titoli h2 e l'h1 delle pagine interne salgono parola per parola. */
let observer: IntersectionObserver | undefined;
let titles: IntersectionObserver | undefined;

function splitWords(heading: HTMLElement) {
  if (heading.dataset.split) return;
  const onlyText = Array.from(heading.childNodes).every((node) => node.nodeType === Node.TEXT_NODE || (node as HTMLElement).tagName === 'BR');
  if (!onlyText) return;
  heading.dataset.split = 'true';
  const label = heading.textContent?.trim() ?? '';
  heading.setAttribute('aria-label', label);
  const fragment = document.createDocumentFragment();
  let index = 0;
  heading.childNodes.forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) {
      fragment.append(node.cloneNode());
      return;
    }
    (node.textContent ?? '').split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        fragment.append(' ');
        return;
      }
      const outer = document.createElement('span');
      outer.className = 'w';
      outer.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.className = 'wi';
      inner.style.setProperty('--i', String(index++));
      inner.textContent = part;
      outer.append(inner);
      fragment.append(outer);
    });
  });
  heading.replaceChildren(fragment);
}

function init() {
  observer?.disconnect();
  titles?.disconnect();
  observer = undefined;
  titles = undefined;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  titles = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // Anche i titoli già superati (salto con un'àncora, scroll veloce) devono comparire.
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) continue;
        entry.target.classList.add('is-in');
        titles?.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
  );
  document
    .querySelectorAll<HTMLElement>('main h2:not(.reel-copy h2):not(.no-split), .page-hero h1')
    .forEach((heading) => {
      splitWords(heading);
      if (heading.dataset.split) {
        heading.classList.add('split-title');
        titles?.observe(heading);
        if (heading.getBoundingClientRect().top < window.innerHeight * 0.85) {
          requestAnimationFrame(() => requestAnimationFrame(() => heading.classList.add('is-in')));
        }
      }
    });

  const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  const below = items.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
  if (!below.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) continue;
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
