import type { QuotePayload } from '../lib/quote';
import { submitQuote } from '../lib/quote';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digits(value: string) {
  return value.replace(/\D/g, '');
}

function read(form: HTMLFormElement): QuotePayload {
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? '').trim();
  return {
    nome: value('nome'),
    email: value('email'),
    telefono: value('telefono'),
    arrivo: value('arrivo'),
    partenza: value('partenza'),
    ospiti: value('ospiti'),
    tipologia: value('tipologia'),
    messaggio: value('messaggio'),
    privacy: data.get('privacy') === 'on',
    company: value('company'),
  };
}

function problems(payload: QuotePayload, needsType: boolean) {
  const errors: Record<string, string> = {};
  if (payload.nome.length < 2) errors.nome = 'Scrivi nome e cognome.';
  if (!EMAIL.test(payload.email)) errors.email = 'Scrivi l’email nel formato nome@dominio.';
  if (digits(payload.telefono).length < 6) errors.telefono = 'Scrivi un telefono con almeno 6 cifre.';
  if (!payload.arrivo) errors.arrivo = 'Scegli la data di arrivo.';
  if (!payload.partenza) errors.partenza = 'Scegli la data di partenza.';
  if (payload.arrivo && payload.partenza && payload.partenza <= payload.arrivo) {
    errors.partenza = 'La partenza è dopo l’arrivo.';
  }
  const guests = Number(payload.ospiti);
  if (!payload.ospiti || !Number.isInteger(guests) || guests < 1 || guests > 99) {
    errors.ospiti = 'Scrivi il numero di ospiti, da 1 a 99.';
  }
  if (needsType && !payload.tipologia) errors.tipologia = 'Scegli una tipologia, oppure «Non so ancora».';
  if (!payload.privacy) errors.privacy = 'Serve il consenso per leggere la richiesta.';
  return errors;
}

function showErrors(form: HTMLFormElement, errors: Record<string, string>) {
  form.querySelectorAll<HTMLElement>('[data-error]').forEach((node) => {
    node.textContent = '';
  });
  for (const [name, message] of Object.entries(errors)) {
    const slot = form.querySelector<HTMLElement>(`[data-error="${name}"]`);
    const field = form.querySelector<HTMLElement>(`[name="${name}"]`);
    if (slot) slot.textContent = message;
    if (field) field.setAttribute('aria-invalid', 'true');
  }
  form.querySelectorAll<HTMLElement>('[name]').forEach((field) => {
    if (!errors[field.getAttribute('name') || '']) field.removeAttribute('aria-invalid');
  });
}

function bind(form: HTMLFormElement) {
  if (form.dataset.bound === '1') return;
  form.dataset.bound = '1';
  const status = form.querySelector<HTMLElement>('[data-status]');
  const started = Date.now();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = read(form);
    const needsType = form.dataset.needsType === 'true';
    const errors = problems(payload, needsType);
    showErrors(form, errors);
    if (!status) return;

    if (Object.keys(errors).length) {
      status.dataset.kind = 'error';
      status.textContent = 'Controlla i campi segnati e invia di nuovo.';
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    if (Date.now() - started < 3000) {
      status.dataset.kind = 'error';
      status.textContent = 'Attendi un momento e invia di nuovo.';
      return;
    }

    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
    if (submit) submit.disabled = true;
    status.dataset.kind = '';
    status.textContent = 'Invio in corso.';

    const result = await submitQuote(payload);
    status.dataset.kind = result.ok ? 'ok' : 'error';
    status.textContent = result.message;
    if (result.ok) form.reset();
    if (submit) submit.disabled = false;
  });
}

export function initQuoteForms() {
  document.querySelectorAll<HTMLFormElement>('[data-quote]').forEach(bind);
}

document.addEventListener('astro:page-load', initQuoteForms);
initQuoteForms();
