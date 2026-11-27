/** Piantina con punti cliccabili: tab, selezione, frecce. Senza JS restano visibili tutte le schede. */
function initMaps() {
  document.querySelectorAll<HTMLElement>('[data-map]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    root.classList.add('is-ready');

    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-map-tab]'));
    const views = Array.from(root.querySelectorAll<HTMLElement>('[data-map-view]'));

    const select = (view: HTMLElement, id: string) => {
      view.querySelectorAll<HTMLElement>('[data-spot]').forEach((el) => {
        const on = el.dataset.spot === id;
        el.classList.toggle('is-active', on);
        el.setAttribute('aria-pressed', String(on));
      });
      view.querySelectorAll<HTMLElement>('[data-legend]').forEach((el) => {
        el.classList.toggle('is-active', el.dataset.legend === id);
      });
      view.querySelectorAll<HTMLElement>('[data-panel]').forEach((el) => {
        el.classList.toggle('is-active', el.dataset.panel === id);
      });
    };

    const show = (id: string) => {
      tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.mapTab === id)));
      views.forEach((view) => {
        const on = view.dataset.mapView === id;
        view.hidden = !on;
        if (on && !view.querySelector('.is-active[data-panel]')) {
          const first = view.querySelector<HTMLElement>('[data-spot]');
          if (first?.dataset.spot) select(view, first.dataset.spot);
        }
      });
    };

    tabs.forEach((tab) => tab.addEventListener('click', () => show(tab.dataset.mapTab ?? '')));
    tabs.forEach((tab, index) =>
      tab.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        next.focus();
        show(next.dataset.mapTab ?? '');
      }),
    );

    views.forEach((view) => {
      view.querySelectorAll<HTMLElement>('[data-spot],[data-legend]').forEach((el) => {
        el.addEventListener('click', () => select(view, el.dataset.spot ?? el.dataset.legend ?? ''));
      });
    });

    show(tabs[0]?.dataset.mapTab ?? '');
  });
}

document.addEventListener('astro:page-load', initMaps);
initMaps();
