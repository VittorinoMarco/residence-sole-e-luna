/** Pulsanti: il testo scorre verso l'alto e al suo posto sale una copia (come i bottoni di vineyard).
    Solo markup: le curve sono nel CSS. */
function init() {
  document.querySelectorAll<HTMLElement>('a.btn, button.btn').forEach((btn) => {
    if (btn.dataset.roll) return;
    const label = btn.textContent?.trim();
    if (!label || btn.children.length > 0) return;
    btn.dataset.roll = 'true';
    const roll = document.createElement('span');
    roll.className = 'btn-roll';
    const a = document.createElement('span');
    a.className = 'btn-roll-a';
    a.textContent = label;
    const b = document.createElement('span');
    b.className = 'btn-roll-b';
    b.setAttribute('aria-hidden', 'true');
    b.textContent = label;
    roll.append(a, b);
    btn.replaceChildren(roll);
  });
}

document.addEventListener('astro:page-load', init);
