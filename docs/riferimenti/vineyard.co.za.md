# Design Map

Pagina unica, https://www.vineyard.co.za/, viewport 1440×900, altezza documento 11182px. Root `font-size` 8.333px. Una pagina sola.

## Spacing

- Unità di root: 8.333px.
- Passo che si ripete: 13.333px (465 volte), poi 66.667px (55), 6.667px (53), 20px (47), 10px (36), 33.333px (12).
- `main` senza `max-width`.

## Gerarchia font

- Display: Optima 400. Parola di capitolo 109.167px, bianca, 12 nodi. H2 49.167px / line-height 54.083px / letter-spacing −0.492px. H3 29.167px / 35px.
- L’H1 misurato è 11.667px, letter-spacing 0.467px: non è il titolo visibile.
- Corpo: Mori 400, 13.333px / 21.333px. Pesi contati: 400 ×623, 500 ×197, 700 ×8, 600 ×6.
- Etichette di sezione in maiuscoletto piccolo (esempio visivo: SLEEP sopra il titolo da 49px).

## Palette

- Inchiostro `rgb(21, 29, 37)` `#151D25`: testo, 444 nodi.
- Carta calda `rgb(255, 249, 243)` `#FFF9F3` e quasi bianco `rgb(255, 254, 253)` `#FFFEFD`: fondi delle sezioni di testo.
- Terracotta `rgb(182, 82, 46)` `#B6522E`: stelle, piccoli segni. Area stimata 11%, non una lastra.
- Grigio caldo `rgb(187, 178, 166)` `#BBB2A6` e salvia `rgb(105, 122, 114)` `#697A72`, `rgb(161, 178, 170)` `#A1B2AA`: testo secondario e una fascia recensioni.
- Footer quasi nero con parole in serif chiaro (Sleep, Eat, Meet, Play).

## Radius, ombre, foto

- Radius di sistema: 40px ×112 (pillole: Sleep, Eat, Meet, Learn More). 50% ×28, spesso cursore o punti piccoli.
- Maschera foto grande misurata: 1392×860, `border-radius: 430px`, `overflow: hidden`, classe `media-wrapper … parallax`.
- Le `img` e il video hero (1440×900) hanno radius 0: il raggio sta sul contenitore.
- Ombra ripetuta: `rgba(21, 29, 37, 0.1) 0px 5px 13.333px` ×16.
- Hero: video a tutta lastra, menu bianco sopra. Poi fascia foto rettangolare, titolo a sinistra, due foto tagliate che escono a destra.

## Motion e accesso

- Transizione dominante: `cubic-bezier(0.19, 1, 0.22, 1)`.
- `transform` 1s ×48. `opacity` 0.8s ×42. `color, opacity, transform` 0.8s ×112.
- `:focus-visible` presente. `prefers-reduced-motion` presente.
- Scroll con Lenis in classe sull’`html`. Pin spacer misurato in hero.

## Struttura della pagina (misurata il 22/11/2026, viewport 1024)

- Altezza 19391px, 12 sezioni. Ordine: hero con foto che si ritira (2220px), fascia salvia con un solo invito (515px, `#D2DFD9`), carosello dei quattro capitoli (999px), camere (2524px), gruppo foto (868px), recensioni su fascia salvia (1466px, `#B6C8C0`), esplora (724px), mappa (1039px), offerte (1535px), blog su carta calda (1343px, `#FFF9F3`), FAQ (812px).
- I fondi alternano carta, carta calda e salvia. Nessun fondo scuro tranne il footer.
- Pulsante principale: terracotta pieno, radius 66px (pillola), padding 0 27px.

# Taste DNA

### La foto tiene il raggio

- Trigger: una sezione deve far vedere un luogo.
- Decision: maschera fotografica con `border-radius: 430px` su un riquadro 1392×860, invece di un rettangolo di colore pieno.
- Reason: il bordo curvo ritaglia il luogo e lascia il testo sulla carta, accanto.
- Evidence: un `media-wrapper` visibile a 1392×860 con radius 430px; le `img` interne restano a radius 0; la sezione Sleep ha il titolo sulla carta e le foto a destra.

### Una parola, un peso

- Trigger: il nome di un capitolo (Sleep, Eat, Meet, Play).
- Decision: Optima 400 a 109px, o un H2 a 49px, invece di un titolo bold a 700.
- Reason: la parola nomina la foto. Il peso 400 non compete con l’immagine.
- Evidence: 109.167px ×12; pesi 400 ×623 contro 700 ×8; H2 49.167px / 400.

### La pillola solo sul comando

- Trigger: un link che prosegue il capitolo.
- Decision: pulsante outline con radius 40px, invece di un rettangolo pieno su ogni blocco.
- Reason: la stessa curva della maschera foto, usata una volta, sul controllo che si preme.
- Evidence: radius 40px ×112; Learn More misurato a radius 40px, padding basso, bordo; le card di testo non hanno un radius proprio.

### Il colore di sezione è la fotografia

- Trigger: serve contrasto tra un capitolo e il successivo.
- Decision: la lastra resta carta o inchiostro, e il colore entra con la foto, invece di dipingere ogni capitolo di un tono diverso.
- Reason: terracotta e salvia restano segni piccoli (stelle, fascia). La foto ha già i suoi colori.
- Evidence: terracotta su 34 nodi e circa 11% di area stimata; carta `#FFF9F3` sulle sezioni di testo; hero e capitoli sono video o foto, non fondi piatti.
