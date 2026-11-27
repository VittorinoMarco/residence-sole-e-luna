import { apartmentGallery, photos } from './site';

/** Offerte dal sito attuale. Il cliente manda le nuove tariffe: qui si aggiornano, la pagina fa il resto.
    Un'offerta con `until` già passata si mostra come terminata, senza spacciarla per attuale. */
export const offerPeriods = [
  {
    id: 'giugno-2026',
    label: 'Soggiorni dal 21 al 28 giugno 2026',
    validFrom: '2026-06-10',
    until: '2026-06-28',
    note: 'Offerte valide per prenotazioni effettuate dal 10 giugno 2026.',
    included: ['Consumi', 'Pulizia iniziale e finale', 'Piscina', 'Lido', 'Tutti gli altri servizi'],
    offers: [
      { title: 'Bilocale', beds: '3 o 4 posti', price: 450, photo: photos.bilocale },
      { title: 'Trilocale', beds: '4 posti', price: 500, photo: photos.trilocale },
      { title: 'Trilocale', beds: '5 posti', price: 550, photo: apartmentGallery[4] },
    ],
  },
] as const;
