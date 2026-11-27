/** Parallax lento sulle foto dentro le maschere, e fascia a schermo pieno che si apre (clip-path) allo scroll.
    Solo da 768px, senza reduced-motion. */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let mm: gsap.MatchMedia | undefined;

function init() {
  mm?.revert();
  mm = gsap.matchMedia();
  mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    gsap.utils.toArray<HTMLElement>('.mask:not(.no-parallax)').forEach((mask) => {
      const img = mask.querySelector('img');
      if (!img) return;
      gsap.set(img, { scale: 1.16 });
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: mask, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-page-hero]').forEach((hero) => {
      const inner = hero.querySelector<HTMLElement>('[data-ph-inner]');
      const content = hero.querySelector<HTMLElement>('[data-ph-content]');
      const trigger = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
      if (inner) gsap.to(inner, { y: () => hero.offsetHeight * 0.15, ease: 'none', scrollTrigger: { ...trigger, invalidateOnRefresh: true } });
      if (content) gsap.to(content, { y: -60, autoAlpha: 0, ease: 'none', scrollTrigger: { ...trigger, end: 'bottom 40%' } });
    });

    gsap.utils.toArray<HTMLElement>('[data-drift]').forEach((el) => {
      const drift = Number(el.dataset.drift ?? 0);
      if (!drift) return;
      gsap.to(el, {
        y: drift,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    gsap.utils.toArray<HTMLElement>('[data-expand]').forEach((section) => {
      const frame = section.querySelector<HTMLElement>('[data-expand-frame]');
      const img = frame?.querySelector('img');
      const copy = section.querySelector<HTMLElement>('[data-expand-copy]');
      if (!frame) return;
      gsap.set(frame, { clipPath: 'inset(14% 20% round 999px)' });
      if (img) gsap.set(img, { scale: 1.25 });
      if (copy) gsap.set(copy, { autoAlpha: 0, y: 40 });
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: section, start: 'top 85%', end: 'top 5%', scrub: 0.6 },
      });
      tl.to(frame, { clipPath: 'inset(0% 0% round 0px)', duration: 1 }, 0);
      if (img) tl.to(img, { scale: 1, duration: 1 }, 0);
      if (copy) tl.to(copy, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0.6);
    });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => {};
  });
}

document.addEventListener('astro:before-swap', () => mm?.revert());
document.addEventListener('astro:page-load', init);
