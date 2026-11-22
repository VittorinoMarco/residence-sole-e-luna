export const site = {
  name: 'Residence Soleluna',
  url: 'https://www.residencesoleluna.it',
  email: 'info@residencesoleluna.it',
  phones: [
    { label: '+39 0985 779029', href: 'tel:+390985779029' },
    { label: '+39 338 8750991', href: 'tel:+393388750991' },
  ],
  address: {
    street: 'Via G. Carducci 38',
    city: 'Praia a Mare (CS)',
    cap: '87028',
    country: 'Italia',
  },
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/residencesoleluna' },
    { label: 'Instagram', href: 'https://www.instagram.com/residencesoleluna' },
  ],
  privacy: 'https://www.iubenda.com/privacy-policy/79015327',
  cookies: 'https://www.iubenda.com/privacy-policy/79015327/cookie-policy',
  map: 'https://www.google.com/maps/search/?api=1&query=Via%20G.%20Carducci%2038%2C%2087028%20Praia%20a%20Mare%20CS',
} as const;

export const nav = [
  { href: '/residence-case-vacanze-praia-a-mare', label: 'Il residence' },
  { href: '/residence-case-vacanze-praia-a-mare/appartamenti-soleluna', label: 'Appartamenti' },
  { href: '/residence-calabria-piscina-animazione-lido', label: 'Servizi' },
  { href: '/praia-a-mare-cosa-fare', label: 'Praia a Mare' },
  { href: '/praia-a-mare-cosa-fare-cosa-vedere', label: 'Attività' },
  { href: '/contatti', label: 'Contatti' },
] as const;

export const paths = {
  residence: '/residence-case-vacanze-praia-a-mare',
  apartments: '/residence-case-vacanze-praia-a-mare/appartamenti-soleluna',
  services: '/residence-calabria-piscina-animazione-lido',
  pool: '/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-piscina',
  beach: '/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-lido-navetta',
  parking:
    '/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-parcheggio-privato-lavanderia',
  town: '/praia-a-mare-cosa-fare',
  activities: '/praia-a-mare-cosa-fare-cosa-vedere',
  contact: '/contatti',
} as const;

export const homeIntro =
  'Il residence di recente costruzione è a Praia a Mare, sulla costa tirrenica calabrese, a circa 1 km dal centro e dalla spiaggia di sabbia e ghiaia. Ha piscina e solarium, in una posizione tranquilla e panoramica sul golfo di Policastro.';

const img = (src: string, alt: string) => ({ src, alt });

export const photos = {
  golfo: img(
    '/images/golfo.jpg',
    'Piscina del Residence Soleluna, con gli appartamenti e il golfo di Policastro',
  ),
  piscina: img('/images/piscina.jpg', 'Piscina del Residence Soleluna con ombrelloni e lettini'),
  lido: img('/images/lido.jpg', 'Lido con ombrelloni gialli e blu, lettini e il mare'),
  animazione: img('/images/animazione.jpg', 'Spettacolo serale in piscina al Residence Soleluna'),
  panorama: img(
    '/images/residence/head.jpg',
    'Piscina e appartamenti del Residence Soleluna visti dall’alto, con i monti sullo sfondo',
  ),
  giorno: img(
    '/images/piscina/promo-1.jpg',
    'Piscina del Residence Soleluna di giorno, con ombrelloni blu e lettini',
  ),
  facciata: img(
    '/images/residence/case-vacanze.jpg',
    'Palazzina degli appartamenti con tende da sole bianche e blu',
  ),
  bilocale: img(
    '/images/residence/apt-1.jpg',
    'Soggiorno-cucina di un appartamento, con cucina arancione e tavolo in legno',
  ),
  trilocale: img(
    '/images/residence/apt-2.jpg',
    'Soggiorno-cucina di un appartamento, con cucina blu e tavolo in legno',
  ),
  quadrilocale: img(
    '/images/residence/apt-3.jpg',
    'Soggiorno-cucina di un appartamento, con cucina verde e tavolo in legno',
  ),
} as const;

export const nightPool = [
  img('/images/piscina/piscina-1.jpg', 'Piscina di sera con le luci accese e i gazebo'),
  img('/images/piscina/piscina-2.jpg', 'Piscina illuminata di sera, con gli ospiti a bordo vasca'),
  img('/images/piscina/piscina-3.jpg', 'Serata in piscina con le luci colorate'),
  img('/images/piscina/piscina-4.jpg', 'Piscina di sera vista dal solarium'),
  img('/images/piscina/piscina-5.jpg', 'Piscina illuminata di notte'),
  img('/images/piscina/piscina-6.jpg', 'Piscina e gazebo di sera'),
] as const;

export const apartmentGallery = [
  img('/images/appartamenti/galleria-1.jpg', 'Soggiorno-cucina con cucina arancione, tavolo e divano'),
  img('/images/appartamenti/galleria-2.jpg', 'Soggiorno-cucina con cucina blu e tavolo con quattro sedie'),
  img('/images/appartamenti/galleria-3.jpg', 'Soggiorno-cucina con cucina viola e divano'),
  img('/images/appartamenti/galleria-4.jpg', 'Camera con letto singolo a righe colorate e armadio arancione'),
  img('/images/appartamenti/galleria-5.jpg', 'Camera matrimoniale con testiera arancione e cassettiera blu'),
  img('/images/appartamenti/galleria-6.jpg', 'Bagno con doccia e lavandino'),
] as const;

/** Capitoli della home: una parola, una foto, una frase vera dal sito attuale. */
export const chapters = [
  {
    id: 'piscina',
    word: 'Piscina',
    text: 'Riservata agli ospiti, con ampio solarium, chiosco bar, lettini, ombrelloni e docce. Un assistente alla balneazione è sempre presente.',
    href: paths.pool,
    link: 'La piscina',
    photo: photos.giorno,
    focus: '50% 60%',
  },
  {
    id: 'sera',
    word: 'Sera',
    text: 'L’animazione c’è tutti i giorni, per adulti e bambini: spettacoli, miniclub, serate giochi, karaoke, aquagym e balli di gruppo.',
    href: `${paths.services}#animazione`,
    link: 'L’animazione',
    photo: nightPool[0],
    focus: '50% 55%',
  },
  {
    id: 'lido',
    word: 'Lido',
    text: 'Servizio spiaggia in convenzione con il lido Point Break, sulla spiaggia di Praia a Mare. La navetta è gratuita.',
    href: paths.beach,
    link: 'Lido e navetta',
    photo: photos.lido,
    focus: '50% 70%',
  },
  {
    id: 'casa',
    word: 'Casa',
    text: '36 appartamenti arredati, con terrazzo attrezzato, per famiglie, coppie e gruppi di amici.',
    href: paths.apartments,
    link: 'Gli appartamenti',
    photo: photos.golfo,
    focus: '50% 45%',
  },
] as const;

export type IconName = 'pool' | 'star' | 'umbrella' | 'bus' | 'car' | 'play' | 'flame' | 'wash';

export const facts: readonly { icon: IconName; title: string; text: string }[] = [
  { icon: 'pool', title: 'Piscina', text: 'Riservata agli ospiti, con solarium e chiosco bar.' },
  { icon: 'star', title: 'Animazione', text: 'Per adulti e bambini, tutti i giorni.' },
  { icon: 'bus', title: 'Navetta', text: 'Gratuita per la spiaggia, ogni 30 minuti.' },
  { icon: 'car', title: 'Parcheggio', text: 'Interno, con telecomando per il cancello.' },
];

export const apartments = [
  {
    title: 'Bilocali',
    beds: '2, 3 o 4 letti',
    summary:
      'Soggiorno-pranzo con cucina componibile e aria condizionata, divano-letto, TV, camera matrimoniale, bagno con doccia, terrazzo attrezzato.',
    photo: photos.bilocale,
  },
  {
    title: 'Trilocali',
    beds: '4, 5 o 6 letti',
    summary:
      'Come i bilocali, con una seconda camera (due letti o matrimoniale) e un divano letto matrimoniale nel soggiorno.',
    photo: photos.trilocale,
  },
  {
    title: 'Quadrilocali',
    beds: '7 o 8 letti',
    summary:
      'Camera matrimoniale con letto singolo, due camere con due letti singoli o matrimoniale, due bagni con doccia, ampio terrazzo.',
    photo: photos.quadrilocale,
  },
] as const;

export const apartmentIntro =
  'Gli appartamenti sono 36. Una parte è al piano rialzato, con terrazzo indipendente e area esterna pavimentata. Una parte è al primo piano, con terrazzo anteriore e posteriore. L’aria condizionata è nella zona soggiorno-cucina. Sono adatti a famiglie, coppie e gruppi di amici.';

export const apartmentDetails = [
  {
    title: 'Bilocali',
    beds: '2, 3 o 4 letti',
    photo: photos.bilocale,
    items: [
      'Soggiorno-pranzo con cucina componibile e aria condizionata',
      'Divano-letto e TV',
      'Camera matrimoniale',
      'Bagno con doccia e lavatoio',
      'Terrazzo attrezzato con tavolo, sedie e tende da sole',
      'Area esterna pavimentata',
    ],
  },
  {
    title: 'Trilocali',
    beds: '4, 5 o 6 letti',
    photo: photos.trilocale,
    items: [
      'Le stesse dotazioni dei bilocali',
      'Una seconda camera, con due letti o un letto matrimoniale',
      'Divano letto matrimoniale nel soggiorno-pranzo',
    ],
  },
  {
    title: 'Quadrilocali',
    beds: '7 o 8 letti',
    photo: photos.quadrilocale,
    items: [
      'Camera matrimoniale con letto singolo',
      'Due camere con due letti singoli o un letto matrimoniale',
      'Due bagni con doccia',
      'Ampio terrazzo attrezzato',
    ],
  },
] as const;

/** Luoghi della pagina Praia a Mare, dal testo del sito attuale. */
export const places = [
  {
    name: 'Isola Dino',
    text: 'Scoglio più grande del Mediterraneo o isola più piccola del Mar Tirreno: rocce calcaree, gite in barca e immersioni. Da visitare le grotte: Grotta Azzurra, Grotta del Leone, Grotta delle Cascate.',
  },
  {
    name: 'Arcomagno',
    text: 'La spiaggia prende il nome dall’arco di pietra che ne delimita l’accesso al mare. Bandiera blu dal 2019: una piccola baia sabbiosa circondata da vegetazione.',
  },
  {
    name: 'Maratea',
    text: 'Circa 32 km di costa sul Tirreno, fatta di insenature, grotte e scogli. La statua del Redentore è sulla vetta del monte San Biagio, sopra il centro storico.',
  },
  {
    name: 'Diamante',
    text: 'La città dei murales: circa 110 dipinti da vedere passeggiando per i vicoli. L’evento più conosciuto è il Festival del Peperoncino.',
  },
  {
    name: 'Aieta',
    text: 'Tra i Borghi più Belli d’Italia. Da visitare il Palazzo Rinascimentale con il museo virtuale MU.VI.D’A., la Chiesa Madre e la Valle dei Mulini.',
  },
  {
    name: 'Tortora',
    text: 'In gran parte nel Parco Nazionale del Pollino. Il Museo Archeologico di Blanda raccoglie i reperti degli scavi della necropoli di San Brancato.',
  },
] as const;

export const activities = [
  {
    title: 'Parapendio',
    text: 'Un volo con il parapendio, per godere il panorama della costa dall’alto.',
  },
  {
    title: 'Quad',
    text: 'Escursioni in quad alla scoperta di paesaggi suggestivi, in mezzo alla natura.',
  },
  {
    title: 'Diving center e scuola sub',
    text: 'Immersioni subacquee tra i fondali più affascinanti della costa calabrese, intorno all’Isola Dino.',
  },
  {
    title: 'Rafting',
    text: 'Il rafting sul fiume Lao, adatto a tutta la famiglia, con percorsi pensati anche per i più piccoli.',
  },
] as const;
