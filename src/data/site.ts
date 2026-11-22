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
  { href: '/praia-a-mare-cosa-fare-cosa-vedere', label: 'Cosa vedere' },
  { href: '/contatti', label: 'Contatti' },
] as const;

export const homeIntro =
  'Il residence di recente costruzione è a Praia a Mare, sulla costa tirrenica calabrese, a circa 1 km dal centro e dalla spiaggia di sabbia e ghiaia. Ha piscina e solarium, in una posizione tranquilla e panoramica sul golfo di Policastro.';

export const photos = {
  golfo: {
    src: '/images/golfo.jpg',
    alt: 'Piscina del Residence Soleluna, con gli appartamenti e il golfo di Policastro',
  },
  piscina: {
    src: '/images/piscina.jpg',
    alt: 'Piscina del Residence Soleluna con ombrelloni e lettini',
  },
  lido: {
    src: '/images/lido.jpg',
    alt: 'Lido con ombrelloni gialli e blu, lettini e il mare',
  },
  animazione: {
    src: '/images/animazione.jpg',
    alt: 'Spettacolo serale in piscina al Residence Soleluna',
  },
} as const;

export const chapters = [
  {
    id: 'piscina',
    word: 'Piscina',
    text: 'Riservata agli ospiti, con chiosco bar, lettini, ombrelloni e docce.',
    href: '/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-piscina',
    link: 'La piscina',
    photo: photos.piscina,
    icon: '',
    zoom: 'out',
  },
  {
    id: 'lido',
    word: 'Lido',
    text: 'Lido convenzionato Point Break. La navetta per la spiaggia è gratuita: gli orari vanno riconfermati.',
    href: '/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-lido-navetta',
    link: 'Lido e navetta',
    photo: photos.lido,
    icon: '/images/icone/Residence-Praia-Mare-lido-convenzionato.png',
    zoom: 'in',
  },
  {
    id: 'casa',
    word: 'Casa',
    text: '36 appartamenti arredati, per famiglie, coppie e gruppi di amici.',
    href: '/residence-case-vacanze-praia-a-mare/appartamenti-soleluna',
    link: 'Gli appartamenti',
    photo: photos.golfo,
    icon: '',
    zoom: 'out',
  },
] as const;

export const facts = [
  {
    title: 'Animazione',
    text: 'Per adulti e bambini, tutti i giorni.',
    icon: '/images/icone/Residence-Praia-Mare-animazione.png',
  },
  { title: 'Spazio giochi', text: 'Nel residence c’è uno spazio giochi.', icon: '' },
  {
    title: 'Parcheggio',
    text: 'Parcheggio interno con telecomando per il cancello.',
    icon: '/images/icone/Residence-Praia-Mare-parcheggio.png',
  },
  {
    title: 'Navetta',
    text: 'Per la spiaggia, gratuita. Gli orari indicati sul sito precedente (9.00-13.00 e 15.30-19.30, ogni 30 minuti) sono da riconfermare.',
    icon: '/images/icone/Residence-Praia-Mare-Servizio-bus.png',
  },
] as const;

export const apartments = [
  {
    title: 'Bilocali',
    beds: '2, 3 o 4 letti',
    summary:
      'Soggiorno-pranzo con cucina componibile e aria condizionata, divano-letto, TV, camera matrimoniale, bagno con doccia, terrazzo attrezzato.',
  },
  {
    title: 'Trilocali',
    beds: '4, 5 o 6 letti',
    summary:
      'Come i bilocali, con una seconda camera (due letti o matrimoniale) e un divano letto matrimoniale nel soggiorno.',
  },
  {
    title: 'Quadrilocali',
    beds: '7 o 8 letti',
    summary:
      'Camera matrimoniale con letto singolo, due camere con due letti singoli o matrimoniale, due bagni con doccia, ampio terrazzo.',
  },
] as const;

export const apartmentIntro =
  'Gli appartamenti sono 36. Una parte è al piano rialzato, con terrazzo indipendente e area esterna pavimentata. Una parte è al primo piano, con terrazzo anteriore e posteriore. L’aria condizionata è nella zona soggiorno-cucina. Sono adatti a famiglie, coppie e gruppi di amici.';

export const apartmentDetails = [
  {
    title: 'Bilocali, 2, 3 o 4 letti',
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
    title: 'Trilocali, 4, 5 o 6 letti',
    items: [
      'Le stesse dotazioni dei bilocali',
      'Una seconda camera, con due letti o un letto matrimoniale',
      'Divano letto matrimoniale nel soggiorno-pranzo',
    ],
  },
  {
    title: 'Quadrilocali, 7 o 8 letti',
    items: [
      'Camera matrimoniale con letto singolo',
      'Due camere con due letti singoli o un letto matrimoniale',
      'Due bagni con doccia',
      'Ampio terrazzo attrezzato',
    ],
  },
] as const;
