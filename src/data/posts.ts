import { nightPool, paths, photos } from './site';

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  photo: { src: string; alt: string };
  focus: string;
  body: Block[];
}

/** Bozze scritte con i fatti già presenti nel sito attuale. Nessun dato nuovo: Marco e il cliente rivedono prima di pubblicare. */
export const posts: Post[] = [
  {
    slug: 'isola-dino-grotte-barca-immersioni',
    title: 'Isola Dino: grotte, barca e immersioni',
    category: 'Luoghi',
    date: '2026-11-24',
    excerpt: 'Dal residence si vede il golfo e, dall’alto, l’Isola Dino. Cosa c’è da vedere e da fare intorno a questo scoglio.',
    photo: photos.golfo,
    focus: '50% 30%',
    body: [
      {
        type: 'p',
        text: 'Dal Residence Soleluna, in alto sul golfo di Policastro, si vede il mare e, in mezzo al golfo, l’Isola Dino. È uno dei primi luoghi che si impara a conoscere, arrivando a Praia a Mare.',
      },
      { type: 'h2', text: 'Scoglio o isola?' },
      {
        type: 'p',
        text: 'L’Isola Dino è descritta come lo scoglio più grande del Mediterraneo o come l’isola più piccola del Mar Tirreno. Le sue rocce sono calcaree.',
      },
      { type: 'h2', text: 'Le grotte' },
      {
        type: 'p',
        text: 'Intorno all’isola si fanno gite in barca. Da visitare le grotte:',
      },
      { type: 'ul', items: ['Grotta Azzurra', 'Grotta del Leone', 'Grotta delle Cascate'] },
      { type: 'h2', text: 'Le immersioni' },
      {
        type: 'p',
        text: 'Il residence è convenzionato con un diving center e una scuola sub, per le immersioni tra i fondali più affascinanti della costa calabrese, intorno all’Isola Dino.',
      },
      { type: 'h2', text: 'Come organizzarsi' },
      {
        type: 'p',
        text: 'Per prenotare un’attività chiedi al residence: scrivici dal modulo di preventivo o chiama lo 0985 779029.',
      },
    ],
  },
  {
    slug: 'arcomagno-maratea-costa-tirrenica',
    title: 'Arcomagno e Maratea, due tappe sulla costa tirrenica',
    category: 'Luoghi',
    date: '2026-11-24',
    excerpt: 'Una baia con la bandiera blu e una costa fatta di insenature, grotte e scogli, a pochi chilometri dal residence.',
    photo: photos.lido,
    focus: '50% 62%',
    body: [
      {
        type: 'p',
        text: 'Il mare di Praia a Mare è incontaminato, con più di 4 km di lungomare. Due luoghi vicini valgono una giornata: Arcomagno e Maratea.',
      },
      { type: 'h2', text: 'Arcomagno' },
      {
        type: 'p',
        text: 'La spiaggia prende il nome dall’arco di pietra che ne delimita l’accesso al mare. È una piccola baia sabbiosa circondata da vegetazione, con la bandiera blu dal 2019.',
      },
      { type: 'h2', text: 'Maratea' },
      {
        type: 'p',
        text: 'Maratea ha circa 32 km di costa sul Tirreno, fatta di insenature, grotte e scogli. La statua del Redentore è sulla vetta del monte San Biagio, sopra il centro storico.',
      },
      { type: 'h2', text: 'E la spiaggia del residence' },
      {
        type: 'p',
        text: 'Il servizio spiaggia è in convenzione con il lido Point Break, sulla spiaggia di Praia a Mare, di sabbia e ghiaia, a circa 1 km dal residence. La navetta per la spiaggia è gratuita.',
      },
    ],
  },
  {
    slug: 'diamante-aieta-tortora-murales-borghi-musei',
    title: 'Diamante, Aieta e Tortora: murales, borghi e musei',
    category: 'Luoghi',
    date: '2026-11-24',
    excerpt: 'Tre luoghi per le giornate senza spiaggia: i murales, un borgo tra i più belli d’Italia e un museo archeologico.',
    photo: photos.panorama,
    focus: '50% 25%',
    body: [
      {
        type: 'p',
        text: 'Quando si vuole lasciare il mare per un giorno, nei dintorni di Praia a Mare ci sono tre luoghi da conoscere.',
      },
      { type: 'h2', text: 'Diamante, la città dei murales' },
      {
        type: 'p',
        text: 'A Diamante si vedono circa 110 dipinti passeggiando per i vicoli. L’evento più conosciuto è il Festival del Peperoncino.',
      },
      { type: 'h2', text: 'Aieta' },
      {
        type: 'p',
        text: 'Aieta è tra i Borghi più Belli d’Italia. Da visitare:',
      },
      {
        type: 'ul',
        items: ['il Palazzo Rinascimentale con il museo virtuale MU.VI.D’A.', 'la Chiesa Madre', 'la Valle dei Mulini'],
      },
      { type: 'h2', text: 'Tortora' },
      {
        type: 'p',
        text: 'Tortora è in gran parte nel Parco Nazionale del Pollino. Il Museo Archeologico di Blanda raccoglie i reperti degli scavi della necropoli di San Brancato.',
      },
    ],
  },
  {
    slug: 'una-giornata-al-residence-piscina-lido-serate',
    title: 'Una giornata al residence: piscina, lido e serate',
    category: 'Residence',
    date: '2026-11-24',
    excerpt: 'Piscina, navetta, lido e animazione: come si può mettere insieme una giornata senza prendere l’auto.',
    photo: nightPool[0],
    focus: '50% 55%',
    body: [
      {
        type: 'p',
        text: 'Il Residence Soleluna è a circa 1 km dal centro di Praia a Mare e dalla spiaggia. Molto di quello che serve per una vacanza è già dentro il residence o a pochi minuti.',
      },
      { type: 'h2', text: 'La piscina' },
      {
        type: 'p',
        text: 'La piscina è riservata agli ospiti. Ha un ampio solarium, il chiosco bar, lettini, ombrelloni e docce, e un assistente alla balneazione è sempre presente.',
      },
      { type: 'h2', text: 'Il lido, con la navetta' },
      {
        type: 'p',
        text: 'Per il mare c’è il lido Point Break, in convenzione con il residence. La navetta per la spiaggia è gratuita e passa ogni 30 minuti.',
      },
      { type: 'h2', text: 'La sera' },
      {
        type: 'p',
        text: 'L’animazione c’è tutti i giorni, per adulti e bambini: spettacoli, miniclub, serate giochi, karaoke, aquagym e balli di gruppo.',
      },
      { type: 'h2', text: 'Parcheggio' },
      {
        type: 'p',
        text: 'Il parcheggio è interno al residence e il cancello carrabile si apre con il telecomando che ogni ospite riceve.',
      },
      {
        type: 'p',
        text: `Per le date libere e le tariffe scrivici dal modulo di preventivo: <a href="${paths.contact}#preventivo">richiedi un preventivo</a>.`,
      },
    ],
  },
];

export const minutes = (post: Post) => {
  const words = post.body
    .map((block) => (block.type === 'ul' ? block.items.join(' ') : block.text))
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const dateLabel = (iso: string) =>
  new Intl.DateTimeFormat('it-IT', { month: 'long', year: 'numeric' }).format(new Date(iso));
