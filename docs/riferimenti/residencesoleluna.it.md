# Design Map

Una pagina: `https://www.residencesoleluna.it/`. Viewport 1440×900. Altezza documento circa 4934–5092 px. Questa mappa serve ai colori e al marchio. La composizione del template (Roboto, card, blu elettrico) non va riportata nel sito nuovo.

## Spacing

- Valori ricorrenti: 5, 10, 15, 20, 40, 50, 100 px
- Header: altezza 90px, fondo `#F7F8FC`
- Hero `.qx-section`: altezza 1061px, da y=90, immagine `images/SoleLuna/sfondo-rsd-soleluna.jpg`
- Fascia servizi chiara: altezza 1326px, fondo `#F2FBFF`
- Fascia finale con immagine `sfondo-giallo.jpg`: altezza 408px, fallback `rgb(25, 83, 255)`
- Footer: altezza 468px, fondo `#00194C`

## Gerarchia font

- Corpo: Roboto, 16px il più frequente; il primo paragrafo misurato è 20px / 500, line-height 32px, colore `#4C5364`
- Nome in hero: Roboto Slab 65px / 900, line-height 71.5px, colore `#00194C`
- Sopracciglio: Rajdhani 20px / 700, letter-spacing 1px, colore `#1953FF`
- Logo, testo nel SVG: RESIDENCE `rgb(29, 101, 172)`, SOLELUNA `rgb(249, 192, 67)`, Arial Narrow
- Pesi contati: 400 ×36, 700 ×27, 900 ×19, 500 ×7

## Palette

- Oro, marchio e pulsante primario: `#F9C043`
- Blu del marchio e pulsante secondario: `#1D65AC`
- Inchiostro titoli e footer: `#00194C`
- Testo: `#3F4654` sul body, `#4C5364` sui paragrafi
- Carta header: `#F7F8FC`
- Cielo sezione: `#F2FBFF`
- Bianco superfici: `#FFFFFF`
- Blu elettrico del template, sopracciglio e voce attiva: `#1953FF` (non è il blu del logo)

## Proporzioni

- Pulsante oro «Il Residence»: 149×54 px, padding 14px 30px, radius 0, testo bianco Roboto 16px / 500
- Pulsante blu «I servizi»: 117×54 px, stessi padding e radius, fondo `#1D65AC`
- Radius altrove: 5px ×6, 20px ×4, 50% ×4. I due pulsanti del hero sono rettangoli

## Token dei componenti

- Coppia di pulsanti rettangolari, oro poi blu, testo bianco
- Header chiaro con logo a sinistra e voci a destra
- Foto di hero molto chiara, quasi un campo azzurro con una diagonale
- `:focus-visible` e motion del template non sono il riferimento da tenere

## Motion

- Transizioni del template: color/background 0.4s ease, `all` 0.3–0.35s ease
- Nessun pin, nessuno scroll orizzontale, nessun Lottie osservato su questa pagina

# Taste DNA

### Due rettangoli, oro e blu

- Trigger: due azioni affiancate nel hero
- Decision: rettangolo `#F9C043` e rettangolo `#1D65AC`, radius 0, testo bianco, al posto di un solo link sottolineato
- Reason: il sole e il blu del marchio diventano i due pulsanti, con lo stesso disegno
- Evidence: 149×54 `#F9C043` e 117×54 `#1D65AC`, padding 14px 30px, radius 0, peso 500

### Il nome è un blocco pesante

- Trigger: il nome del residence nel primo schermo
- Decision: Roboto Slab 65px peso 900 colore `#00194C`, con sopra Rajdhani 20px `#1953FF`, al posto di un titolo a peso regolare
- Reason: il nome occupa due righe e resta l’oggetto più scuro sul campo chiaro
- Evidence: H2 65px / 900 / line-height 71.5px; H3 20px / 700 / letter-spacing 1px

### Campo chiaro, poi fasce piatte

- Trigger: passare dal racconto ai servizi e al contatto
- Decision: hero su foto chiarissima, poi bianco, poi `#F2FBFF`, poi una fascia con `sfondo-giallo.jpg`, poi footer `#00194C`
- Reason: il colore di marca sta in blocchi pieni, non dentro le fotografie
- Evidence: hero 1061px con `sfondo-rsd-soleluna.jpg`; sezione 1326px `#F2FBFF`; footer 468px `#00194C`

### L’oro sta nel segno, non nello sfondo

- Trigger: colorare un’azione o la parola SOLELUNA
- Decision: `#F9C043` sul wordmark e sul pulsante primario; i fondi grandi restano chiari o navy
- Reason: l’oro si vede perché è poco
- Evidence: fill SVG SOLELUNA `rgb(249, 192, 67)`; un solo pulsante misurato con quello sfondo; header `#F7F8FC`
