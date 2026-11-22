export type QuotePayload = {
  nome: string;
  email: string;
  telefono: string;
  arrivo: string;
  partenza: string;
  ospiti: string;
  tipologia: string;
  messaggio: string;
  privacy: boolean;
  company?: string;
};

export type QuoteResult = { ok: boolean; message: string };

const fallback =
  'L’invio online non è ancora collegato alla casella. Scrivi a info@residencesoleluna.it oppure chiama il +39 0985 779029.';

export async function submitQuote(payload: QuotePayload): Promise<QuoteResult> {
  if (payload.company) {
    return { ok: true, message: 'Richiesta registrata.' };
  }

  const endpoint = import.meta.env.PUBLIC_QUOTE_ENDPOINT;
  if (!endpoint) {
    return { ok: false, message: fallback };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        nome: payload.nome,
        email: payload.email,
        telefono: payload.telefono,
        arrivo: payload.arrivo,
        partenza: payload.partenza,
        ospiti: payload.ospiti,
        tipologia: payload.tipologia,
        messaggio: payload.messaggio,
        privacy: payload.privacy,
      }),
    });
    if (!response.ok) {
      return {
        ok: false,
        message: `Non siamo riusciti a inviare la richiesta. Riprova tra poco, oppure scrivi a info@residencesoleluna.it o chiama il +39 0985 779029.`,
      };
    }
    return {
      ok: true,
      message: 'Richiesta inviata. Ti rispondiamo all’email che hai scritto.',
    };
  } catch {
    return {
      ok: false,
      message: `Non siamo riusciti a inviare la richiesta. Controlla la connessione, oppure scrivi a info@residencesoleluna.it o chiama il +39 0985 779029.`,
    };
  }
}
