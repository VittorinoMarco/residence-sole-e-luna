# DESIGN

Direzione scelta per il via: **Giorno sul golfo**. I colori e il marchio vengono da `residencesoleluna.it`. Il modo di scorrere viene da `vineyard.co.za`, senza copiarne palette, font, testi o foto. Dettaglio misurato in `docs/riferimenti/`.

Concetto: la home è una giornata. Si entra in una foto a tutto schermo, si attraversano tre stanze (piscina, lido, casa) e si esce verso il preventivo su fondo inchiostro. L’oro compare solo sull’azione e sulla parola Sole.

Cosa ho cambiato rispetto al default da hotel: niente foglio crema, niente terracotta, niente griglia di card uguali, niente titolo a peso 900. Il blu elettrico `#1953FF` del template attuale non entra: il blu del logo è `#1D65AC`. Il testo bianco sull’oro del sito attuale non si copia: il contrasto non regge, sull’oro va l’inchiostro.

## Colori

| Nome | Hex | Uso |
| --- | --- | --- |
| Inchiostro | `#00194C` | Titoli, fascia preventivo, footer, testo sui pulsanti oro |
| Oro | `#F9C043` | Pulsante principale, la parola Sole |
| Mare | `#1D65AC` | Pulsante secondario, la parola Luna, link |
| Carta | `#F7F8FC` | Fondo pagina e header |
| Cielo | `#F2FBFF` | Una fascia alternata, non tutte |
| Testo | `#3F4654` | Corpo |

Selezione testo: fondo `#F9C043`, testo `#00194C`. Focus: anello `2px` `#1D65AC` con offset `3px`, solo `:focus-visible`.

## Font

- Display: [Tenor Sans](https://fonts.google.com/specimen/Tenor+Sans), peso 400. Fa il ruolo della Optima del riferimento (svasato, un solo peso) senza usare Optima.
- Corpo e UI: [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro), 400 e 500. I pulsanti 600.

Non Roboto, non Inter, non il slab nero del template.

## Scala

Corpo 18px / 500, line-height 1.6, misura massima 65ch. Sopracciglio solo nel hero: 13px, letter-spacing 0.08em, maiuscolo, colore Mare. Titolo di pagina: Tenor Sans 40px mobile, 64px da 768px, peso 400, line-height 1.05, letter-spacing non sotto −0.03em. Parola di capitolo: Tenor Sans, `clamp(64px, 12vw, 120px)`, peso 400, colore carta o inchiostro a seconda della foto. Non sopra i 6rem se il viewport è sotto i 768px: lì il clamp resta intorno ai 64px.

## Spazi

Base 8px. Scala: 8, 16, 24, 40, 64, 96. Padding di sezione 64px mobile, 96px da 1024px. Più spazio sopra un titolo che sotto. Colonna di testo 38rem. Capitolo fotografico: altezza 100svh, padding 0. Header 72px.

## Componenti

- Pulsante principale: fondo Oro, testo Inchiostro, radius 40px, padding 14px 28px, altezza minima 48px. `:active` con `transform: scale(0.97)`.
- Capitolo in home: foto a tutta lastra che, allo scroll, si ritira fino a un riquadro 208×208 centrato (angoli netti). Sotto resta il titolo. Poi una riga di icone, poi la foto a tutta lastra con una parola grande (109px, vicine a opacità 0,5) e una fila di tre foto rettangolari, radius 16px.
- Pulsante: radius 40px. Il link sul capitolo, quando il motion è spento, è una pillola vuota.
- Header: Carta, logo a sinistra, voci, poi il pulsante oro.
- Pagine interne: foto in una maschera con radius ampio, accanto al testo.
- Appartamenti in home: tre schede affiancate, foto rettangolare sopra e testo sotto. Gli interni non ci sono: si usa l’esterno, con la nota. Ospiti: quattro schede con nome e fonte, senza testo della recensione.
- Recensioni: due colonne di testo reale, fonte sotto, niente stelle aggregate.
- Foto: quelle del sito attuale (piscina, golfo, lido, animazione) e le icone PNG già pubblicate. Niente foto di ospiti. Dove manca il file resta la didascalia.
- Ombra: una sola, `0 8px 24px rgba(0, 25, 76, 0.08)`, su menu e pannello aperto. Le foto non hanno ombra.

## Motion

Un momento per pagina. In home la foto del golfo segue la curva misurata su vineyard (larghezza da 1440 a 208 in 1467px di scroll, easing a tratti lineari sui campioni). Da 768px in su. Sotto, e con reduced-motion, la foto resta a tutta altezza e i capitoli scorrono uno sotto l’altro.

- UI (hover, pressione, menu): `cubic-bezier(0.23, 1, 0.32, 1)`, sotto i 300ms. Pressione 140ms. Mai `ease-in`. Mai `transition: all`.
- Reveal di sezione, una volta: `cubic-bezier(0.19, 1, 0.22, 1)`, 800ms, solo `opacity` e `transform`.
- Zoom e scroll orizzontale: legati alla posizione di scroll, non a un timer.
- GSAP e ScrollTrigger importati solo nelle pagine che li usano.
- Niente Lenis in questa fase: lo smooth scroll si aggiunge solo se una misura dice che l’INP regge.
- Niente Lottie. Il riferimento non ne ha, e un loop continuo è un accessorio. Sole e luna sono il logo SVG, fermo.
- `prefers-reduced-motion`: niente pin, niente scrub, niente zoom. Resta il cambio di pagina.
- Mobile: stesso disegno, pin e parallax spenti sotto i 768px.

## Home, wireframe

```
header carta: logo | pagine | [Richiedi un preventivo]
HERO 100svh  foto o segnaposto
  riga piccola: Residence a Praia a Mare
  Sole
  Luna
  [Richiedi un preventivo]  [Chiama]
CAPITOLO piscina     parola a sinistra, foto che si ingrandisce
CAPITOLO lido
CAPITOLO casa
APPARTAMENTI         tre lastre, scroll orizzontale
OSPITI               due testi, fonte, niente punteggio
PRAIA                fascia cielo, un titolo, un link
PREVENTIVO           fondo inchiostro, telefono e form breve
footer inchiostro
```

Le altre pagine ripetono header, un hero più basso, il testo migrato e una sola chiusura verso il preventivo. Non ripetono i tre capitoli.

## Coerenza

Ovunque: Tenor Sans solo per i titoli, Be Vietnam Pro per il resto, oro solo sul pulsante e sulla parola Sole, radius 0 sui pulsanti, un’ombra sola, un easing di interfaccia e uno di reveal.

## Pattern vietati

Card uguali con icona, eyebrow su ogni titolo, numeri 01 02 03, gradienti, vetro, blur decorativo, testo tutto centrato, frecce su ogni link, contatori, markup recensioni, foto stock, blu `#1953FF`.

## Due direzioni non scelte

- **Notte in piscina.** Quasi tutto inchiostro, oro solo nel titolo. Scartata: il sito attuale e le foto vivono di luce, un sito notte nasconde il golfo.
- **Tutta la home in orizzontale.** Scartata: il testo da indicizzare e il telefono diventano difficili da raggiungere. L’orizzontale resta solo sugli appartamenti, che sono tre pari.
