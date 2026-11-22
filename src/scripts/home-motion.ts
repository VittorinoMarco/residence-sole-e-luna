import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let cleanup: (() => void) | undefined;

function clearMotion() {
  cleanup?.();
  cleanup = undefined;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export function initHomeMotion() {
  clearMotion();
  const opening = document.querySelector<HTMLElement>('[data-shrink]');
  const reel = document.querySelector<HTMLElement>('[data-reel]');
  if (!opening && !reel) return;

  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    if (opening) {
      const frame = opening.querySelector<HTMLElement>('[data-shrink-frame]');
        const intro = opening.querySelector<HTMLElement>('[data-intro]');
        if (frame) {
          gsap.set(frame, {
            left: 0,
            top: 0,
            xPercent: 0,
            yPercent: 0,
            width: () => window.innerWidth,
            height: () => window.innerHeight,
          });
          if (intro) gsap.set(intro, { autoAlpha: 0, y: 32 });
        const span = 1467;
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: opening,
            start: 'top top',
            end: `+=${span}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        const keys = [
          { at: 82, width: 1410, height: 887, left: 15, top: 6 },
          { at: 155, width: 1333, height: 854, left: 54, top: 23 },
          { at: 241, width: 1182, height: 789, left: 129, top: 56 },
          { at: 315, width: 999, height: 711, left: 220, top: 94 },
          { at: 400, width: 746, height: 602, left: 347, top: 149 },
          { at: 477, width: 558, height: 522, left: 441, top: 189 },
          { at: 559, width: 417, height: 461, left: 512, top: 220 },
          { at: 639, width: 336, height: 427, left: 552, top: 236 },
          { at: 716, width: 312, height: 417, left: 564, top: 242 },
          { at: 799, width: 309, height: 411, left: 566, top: 244 },
          { at: 884, width: 300, height: 393, left: 570, top: 254 },
          { at: 959, width: 288, height: 368, left: 576, top: 266 },
          { at: 1033, width: 271, height: 334, left: 584, top: 283 },
          { at: 1117, width: 246, height: 285, left: 597, top: 308 },
          { at: 1199, width: 217, height: 226, left: 612, top: 337 },
          { at: 1283, width: 208, height: 208, left: 616, top: 284 },
          { at: 1364, width: 208, height: 208, left: 616, top: 203 },
          { at: 1439, width: 208, height: 208, left: 616, top: 128 },
          { at: span, width: 208, height: 208, left: 616, top: 100 },
        ];
        const sx = () => window.innerWidth / 1440;
        const sy = () => window.innerHeight / 900;
        let prev = 0;
        for (const key of keys) {
          tl.to(
            frame,
            {
              width: () => key.width * sx(),
              height: () => key.height * sy(),
              left: () => key.left * sx(),
              top: () => key.top * sy(),
              duration: (key.at - prev) / span,
            },
            prev / span,
          );
          prev = key.at;
        }
          if (intro) {
            tl.to(intro, { autoAlpha: 1, y: 0, duration: 0.14, ease: 'expo.out' }, 0.84);
          }
      }
    }

    if (reel) {
      const photos = gsap.utils.toArray<HTMLElement>('[data-reel-photo]', reel);
      const row = reel.querySelector<HTMLElement>('[data-reel-words]');
      const words = row ? gsap.utils.toArray<HTMLElement>('.reel-word', row) : [];
      if (photos.length > 1 && row && words.length === photos.length) {
        reel.classList.add('is-motion');
        const center = (index: number) => {
          const word = words[index];
          return window.innerWidth / 2 - (word.offsetLeft + word.offsetWidth / 2);
        };
        gsap.set(photos, { autoAlpha: 0 });
        gsap.set(photos[0], { autoAlpha: 1 });
        gsap.set(words, { opacity: 0.5 });
        gsap.set(words[0], { opacity: 1 });
        gsap.set(row, { x: () => center(0) });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: reel,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * 0.9) * (photos.length - 1)}`,
            pin: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        photos.slice(1).forEach((photo, index) => {
          const at = index + 1;
          tl.to(photos[at - 1], { autoAlpha: 0, duration: 0.45 }, at);
          tl.to(photo, { autoAlpha: 1, duration: 0.45 }, at);
          tl.to(words[at - 1], { opacity: 0.5, duration: 0.45, ease: 'power3.out' }, at);
          tl.to(words[at], { opacity: 1, duration: 0.45, ease: 'power3.out' }, at);
          tl.to(row, { x: () => center(at), duration: 0.45, ease: 'power3.out' }, at);
        });
      }
    }

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => {
      reel?.classList.remove('is-motion');
    };
  });

  cleanup = () => mm.revert();
}

document.addEventListener('astro:before-swap', clearMotion);
document.addEventListener('astro:page-load', initHomeMotion);
initHomeMotion();
