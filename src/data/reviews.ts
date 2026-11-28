/** Recensioni copiate parola per parola dal sito attuale (sezione «I nostri ospiti»).
 *  Solo testi reali, con fonte e link. Nessun punteggio aggregato e nessun markup Review (regole del progetto).
 *  Consenso del cliente ancora da confermare: vedi docs/TODO-CLIENTE.md. */
export const reviewSources = {
  Google: 'https://www.google.com/maps/search/?api=1&query=Residence%20Soleluna%20Praia%20a%20Mare',
  TripAdvisor: 'https://www.tripadvisor.it/Search?q=Residence%20Soleluna%20Praia%20a%20Mare',
} as const;

export interface Review {
  author: string;
  source: keyof typeof reviewSources;
  text: string;
}

export const reviews: Review[] = [
  {
    author: 'Adele Vanacore',
    source: 'Google',
    text: 'Nostra meta ormai da anni. I proprietari Pierluigi e Emanuele sono persone eccezionali. Qui regna cortesia, gentilezza e ospitalità... Una delle cose che mi lascia senza parole è la grande pulizia della struttura. Consigliatissimo. Grazie di tutto. Ci rivediamo ad Agosto..',
  },
  {
    author: 'Stella A',
    source: 'TripAdvisor',
    text: 'Semplicemente perfetto, location, piscina, personale, pulizia, gentilezza, disponibilità… insomma tutto al top! La pulizia dell’appartamento è eccellente, la disponibilità del personale e della proprietà è impeccabile, animazione carina, parco giochi per bambini, piscina stupenda e pulita e non da sottolineare il parcheggio privato all’interno del residence. Torneremo assolutamente',
  },
  {
    author: 'Rosaria De Luca',
    source: 'Google',
    text: 'Abbiamo soggiornato per il secondo anno in questa struttura. Personale accogliente e qualificato sempre disponibile per ogni richiesta. Ottima pulizia. Posizione e servizi eccellenti. Lo consiglio vivamente',
  },
  {
    author: 'Pasquale - Enza',
    source: 'TripAdvisor',
    text: 'Dopo 15 gg al Soleluna la vacanza purtroppo volge al termine. La prima volta in questa bellissima struttura, gli appartamenti sono nuovissimi molto comodi e dotati di ogni cosa, non manca proprio nulla, a partire da un ampio e bellissimo balcone dove poter mangiare e godere del panorama incantevole dell’isola di Dino. La struttura è dotata di una bella piscina in alternativa al mare presso il lido convenzionato point-break (consigliatissimo) raggiungibile in 2 minuti in auto oppure usufruendo della navetta del residence che parte con frequenza. Potrei continuare con altre notizie positive, ma concludo con la cordialità, ospitalità e disponibilità del proprietario Pierluigi, persona gentilissima come tutto lo staff, veramente bravi bravi. Ci ritorneremo con piacere.... Per ultimo, si dorme benissimo, è sempre ventilato durante tutta la vacanza non ho mai acceso il condizionatore.',
  },
];
