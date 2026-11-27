# DESIGN

Direzione scelta per il via: **Giorno sul golfo**. I colori e il marchio vengono da `residencesoleluna.it`. Il modo di scorrere viene da `vineyard.co.za`, senza copiarne palette, font, testi o foto. Dettaglio misurato in `docs/riferimenti/`.

Concetto: la home è una giornata. Si entra in una foto a tutto schermo, si attraversano tre stanze (piscina, lido, casa) e si esce verso il preventivo su fondo inchiostro. L’oro compare solo sull’azione e sulla parola Sole.

Cosa ho cambiato rispetto al default da hotel: niente foglio crema, niente terracotta, niente griglia di card uguali, niente titolo a peso 900. Il blu elettrico `#1953FF` del template attuale non entra: il blu del logo è `#1D65AC`. Il testo bianco sull’oro del sito attuale non si copia: il contrasto non regge, sull’oro va l’inchiostro.

## Colori

| Nome | Hex | Uso |
| --- | --- | --- |
| Inchiostro | `#00194C` | Titoli, footer, fascia di chiusura, testo sui pulsanti oro |
| Oro | `#F9C043` | Pulsante principale. Mai testo sul chiaro (contrasto 1,6:1) |
| Mare | `#1D65AC` | Pulsante secondario, link, icone, la parola Luna |
| Carta | `#FBF8F2` | Fondo pagina e header. Calda, non più `#F7F8FC` |
| Sabbia | `#F1E9DA` | Fasce alternate: preventivo, pagine appartamenti e Praia |
| Cielo | `#E6F0F4` | Fascia Praia a Mare e hero dei servizi |
| Testo | `#3A4254` | Corpo |

Selezione testo: fondo oro, testo inchiostro. Focus: anello `2px` Mare, solo `:focus-visible`. I fondi alternano carta, sabbia e cielo come vineyard alterna carta e salvia; l'inchiostro è solo footer e fascia di chiusura.

## Font

- Display: Tenor Sans 400, titoli e parole di capitolo. Fa il ruolo della Optima del riferimento.
- Corpo e UI: Be Vietnam Pro 400 (corpo), 500 (etichette, pulsanti).

## Scala

Corpo 17px / 400, line-height 1.65, colonna 38rem. Lede 18-21px. H1 di pagina `clamp(44px, 8vw, 88px)`, H2 `clamp(36px, 4.8vw, 64px)`, H3 `clamp(26px, 2.6vw, 34px)`, tutti Tenor Sans con letter-spacing −0.02em e line-height ~1. Parola di capitolo `clamp(72px, 8.4vw, 120px)`.

## Spazi

Sezioni 72px mobile, 120px da 1024px. Gutter 24px mobile, 40px da 768px. Contenitore 1200px. Header 76px mobile, 88px da 768px.

## Forme

- Pulsanti: pillola radius 40px, minimo 52px. Tre varianti: oro pieno, contorno inchiostro, contorno bianco sulle foto. Mare solo come secondario.
- Foto: tre maschere. **Stadio** (radius 300px) per i blocchi principali; **arco** (`999px 999px 20px 20px`) per le tre tipologie di appartamento; **morbida** (20px) per tutto il resto. Il raggio sta sul contenitore, le `img` restano a 0.
- Schede: fondo bianco, radius 24px, nessun bordo. Form: scheda bianca radius 28px, campi radius 14px.
- Ombra: una sola, `0 8px 24px rgba(0, 25, 76, 0.08)`, sul form.

## Componenti e struttura della home

1. Apertura: foto del golfo a tutta lastra che si ritira in un riquadro 208×208, poi titolo, testo e due pulsanti (invariata).
2. Servizi a schede bianche sfalsate (titolo a sinistra, tre colonne con scarti verticali e drift diverso allo scroll), icone al tratto: piscina, animazione, lido, navetta, parcheggio.
3. Blocco «Case vacanze con piscina»: foto a stadio + testo + due pulsanti.
3b. Fascia «Il residence» a schermo pieno: la foto si apre da uno stadio a tutta lastra con lo scroll (clip-path), il testo compare a metà.
4. Capitoli a schermo pieno, bloccati allo scroll: Piscina, Sera, Lido, Casa. La parola grande scorre al centro, in basso una frase vera e un pulsante.
5. Appartamenti: tre archi con le foto degli interni.
6. Piantina (fascia sabbia): foto aerea con punti numerati cliccabili e scheda con ritaglio ingrandito; tab «Il residence» / «Il golfo». Poi Praia a Mare e dintorni (fascia cielo): carosello orizzontale dei sei luoghi. Poi FAQ (details nativo).
7. Preventivo (fascia sabbia): telefoni grandi e form in scheda bianca.
8. Footer inchiostro con il nome grande.

Titoli h2 e h1 salgono parola per parola (`reveal.ts`); le foto nelle maschere hanno parallax lento (`parallax.ts`, da 768px). Footer con le quattro parole grandi.

Pagine interne: hero a tutta larghezza come vineyard (foto alta 70svh che sale dal nero, titolo bianco centrato che sale parola per parola, parallax 0,15 della distanza di scroll, menu trasparente sopra, breadcrumb in basso a sinistra), poi fascia su carta con etichetta e testo centrato; poi blocchi a due colonne alternati, schede, galleria; FAQ della pagina, blocco «Continua» verso la pagina successiva, chiusura con fascia inchiostro e telefono. La pagina dei servizi ha un indice a pillole fisso sotto l’header; Il residence e Praia a Mare hanno la piantina.

## Motion

Un momento per pagina. In home la foto del golfo segue la curva misurata su vineyard (larghezza da 1440 a 208 in 1467px di scroll, easing a tratti lineari sui campioni). Da 768px in su. Sotto, e con reduced-motion, la foto resta a tutta altezza e i capitoli scorrono uno sotto l’altro.

- UI (hover, pressione, menu): `cubic-bezier(0.23, 1, 0.32, 1)`, sotto i 300ms. Pressione 140ms. Mai `ease-in`. Mai `transition: all`.
- Reveal allo scroll, una volta: `cubic-bezier(0.19, 1, 0.22, 1)`, 800ms, solo `opacity` e `transform`, con IntersectionObserver (`src/scripts/reveal.ts`). Gli elementi già in vista non si nascondono mai.
- Capitoli: pin per `0,9 × altezza finestra` di scroll a capitolo, dissolvenza della foto e scorrimento della parola.
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

Ovunque: Tenor Sans solo per i titoli, Be Vietnam Pro per il resto, oro solo sul pulsante, pillola 40px su tutti i pulsanti, tre maschere foto, un’ombra sola, un easing di interfaccia e uno di reveal.

## Pattern vietati

Card uguali con icona, eyebrow su ogni titolo, numeri 01 02 03, gradienti decorativi (resta solo il velo scuro sotto il testo sulle foto), vetro, blur decorativo, testo tutto centrato, frecce su ogni link, contatori, markup recensioni, foto stock, blu `#1953FF`.

## Due direzioni non scelte

- **Notte in piscina.** Quasi tutto inchiostro, oro solo nel titolo. Scartata: il sito attuale e le foto vivono di luce, un sito notte nasconde il golfo.
- **Tutta la home in orizzontale.** Scartata: il testo da indicizzare e il telefono diventano difficili da raggiungere. L’orizzontale resta solo sugli appartamenti, che sono tre pari.

## Offerte e blog

Offerte: hero a foto, schede ad arco sfalsate (0, 72, 144px) con prezzo in Tenor Sans grande, pillole «Sono inclusi». Un’offerta con data passata si mostra come «Terminata», mai come attuale (`src/data/offers.ts`).

Blog: hero a foto, filtro a pillole, griglia a due colonne con la seconda sfalsata di 72px, foto alte con zoom lento al passaggio. Articolo: fascia cielo con «Tutti gli articoli», categoria, titolo, data e minuti di lettura, foto larga, indice fisso a sinistra, testo a 40rem, altri due articoli su sabbia.
