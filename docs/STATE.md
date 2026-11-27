# STATO: Residence Sole e Luna

Aggiornare solo le righe che cambiano. Log in fondo.

## Fase attuale
Branch `claude/redesign-sole-luna` pubblicato su Hostinger, dominio temporaneo `https://subtle-mediumaquamarine-buffalo-48.hostingersite.com/` (noindex). Il dominio del cliente non è collegato: DNS e posta non si toccano.

## Decisioni prese (19-22/11/2026)
- Tipo: vetrina + richiesta preventivo. Obiettivo: raccogliere richieste e contatti.
- Tono: animato e cinematico, minimal e giovanile, tocco elegante. GSAP, scroll narrativo; mobile semplificato; priorità equilibrio.
- Stack: Astro + TypeScript, statico, senza CMS e senza database.
- Contenuti: dal sito attuale (testi e foto), il cliente conferma diritti e aggiornamenti.
- Strumenti esterni: nessuno.
- URL: i 9 del brief, con path identici, più `/offerte-residence-calabria-praia-scalea` (path legacy, non più redirect, richiesta di Marco il 24/11) e `/blog` con 4 articoli (nuovo, richiesto da Marco il 24/11; era fuori scope nel brief). Gli altri 6 URL legacy trovati (offerte, contatti, preventivo, prenota, animazione, giochi-barbecue) vanno in 301 alla pagina più vicina. Destinazioni da validare con Search Console. `/contatti` è l'unica pagina nuova.
- Area admin per vedere e rispondere ai preventivi: fase 2, a parte, fuori dai 700€. Il form va scritto in modo da poterla aggiungere dopo.
- Proposta: 700€ una tantum, forfettario, senza dominio e hosting.

## Bloccato / in attesa
- Direzione «Giorno sul golfo» confermata da Marco il 22/11, rifatta il 22/11 sera: stessi colori del marchio ma carta calda, maschere foto a stadio e ad arco, capitoli Piscina/Sera/Lido/Casa, foto vere degli interni. Mappe in `docs/riferimenti/`. Brief in `docs/PRODUCT.md` e `docs/DESIGN.md`.
- Foto originali, backup del vecchio sito (Joomla), accessi OVH, Search Console, GA4, GTM: dal cliente.
- Hosting finale e dominio preferito (www o no): da decidere.
- Pagine non ancora lette del sito attuale: offerte, campi del form.
- Contatori "1+" e "© {2024}" del sito attuale sono errori: non migrarli.

## Prossimo passo
1. Marco guarda `https://subtle-mediumaquamarine-buffalo-48.hostingersite.com/` e dice cosa cambiare.
2. Quando arrivano i dati del dominio del cliente: `stagingNoindex` a false in `src/data/site.ts`, nuova build, poi collegare il dominio. Non toccare MX, SPF, DKIM, DMARC.
3. Ancora dal cliente: foto originali, testi mancanti, consenso recensioni, endpoint del form, coordinate mappa, URL Facebook di Point Break, ID GTM/GA4, www o apex.
4. Prima del go-live: ricontrollare `redirect.csv` con Search Console.

## Skill caricate
siti-web, risparmio-token, taste-design-dna, studio-grade-website, sito-web-workflow, emil-design-eng, frontend-design, motion-scroll-playbook, reanimate.

## Strumenti esterni usati
nessuno

## Log
- 2026-11-22: brief, contenuti legacy e file di progetto creati.
- 2026-11-22: DNA di vineyard.co.za e residencesoleluna.it; PRODUCT.md e DESIGN.md; in attesa del via prima del codice.
- 2026-11-22: sito Astro completo (11 pagine, 6 redirect, form, motion GSAP solo desktop). Build e `npm run test:links` ok. Verifica in browser: form senza endpoint, contatti, appartamenti, menu a 390 px. Non committato.
- 2026-11-22: DNA vineyard aggiornato (maschera foto 430px, pillola 40px). Foto del sito attuale al posto dei dischi: golfo, piscina, lido, animazione, icone. Interni e foto ospiti non usati.
- 2026-11-22: tolte le foto a capsula. Sotto la home: tre schede appartamento, quattro schede ospiti. Pagine interne con foto a radius 16px. Non committato.
- 2026-11-22 (sera): redesign. Scaricate 23 foto dal sito attuale con ok di Marco (interni, piscina di sera, residence), in `public/images/{residence,appartamenti,piscina}`. Nuovo `global.css`, componenti Icon/PageHero/CloseBand/Footer, home con 8 sezioni, `reveal.ts`. Testi di servizi, Praia, attività e residence presi dal sito attuale; tolte le note interne visibili in pagina e la sezione ospiti vuota. Build e `test:links` ok. Verifica in browser a 1440 e 320 px.
- 2026-11-24: guardato vineyard.co.za nel browser (sezioni, mappa, carosello, FAQ, titoli, parallax). Aggiunti: piantina con punti cliccabili (`ResidenceMap`, foto aerea del residence e vista del golfo), fascia a schermo pieno che si apre, carosello dei dintorni, FAQ, titoli parola per parola, parallax sulle foto, parole grandi nel footer, indice dei servizi, blocco «Continua» in fondo alle pagine interne. Build e `test:links` ok; 9 pagine controllate a 320 px senza overflow. Non fatta la cattura frame per frame con reanimate (serve scaricare Playwright e ffmpeg, circa 250 MB).
- 2026-11-24 (sera): servizi della home a schede sfalsate con drift allo scroll (layout del sito attuale, piaciuto a Marco); pagina Offerte sul path legacy (redirect tolto da `redirect.csv` e `astro.config.mjs`), dati in `src/data/offers.ts`, stagione giugno 2026 mostrata come terminata; blog con indice filtrabile e 4 articoli in `src/data/posts.ts` (bozze con soli fatti già sul sito attuale); sezione «Dal blog» in home; voce Offerte nel menu, Blog nel footer. Guardate nel browser le pagine offerte, blog e articolo di vineyard. Build e `test:links` ok (22 pagine).
- 2026-11-24 (notte): Marco ha bocciato l'hero interna con foto a cerchio e senza animazione. Guardate le interne di vineyard (Sleep, Meet): foto a tutta larghezza, titolo bianco Optima 83px centrato, immagine al 130% con parallax. Nuova `PageHero`: foto a tutta larghezza (70svh), entrata dal nero 1500ms + zoom 1,14→1 in 2600ms, titolo parola per parola, parallax 0,15, contenuto che sfuma allo scroll, menu trasparente (Header). Tutte le pagine interne, offerte, blog, contatti e 404 passano dalla stessa hero; foto assegnate per pagina con `focus`. Build e `test:links` ok, 320 px senza overflow. Non rifatta la cattura reanimate frame per frame.
- 2026-11-27: push del redesign su `claude/redesign-sole-luna`. Sito Node su Hostinger, dominio temporaneo `subtle-mediumaquamarine-buffalo-48.hostingersite.com`. Dominio del cliente e posta non toccati. Noindex scritto nel codice (`stagingNoindex`): la build Hostinger non legge la variabile `NOINDEX`.
- 2026-11-24 (notte, 2): reanimate eseguito davvero (Playwright e ffmpeg in cartella temporanea, poi cancellati). Catturati frame e curve di vineyard: pulsante (testo che scorre 700ms, curva expo `cubic-bezier(0.16,1,0.3,1)`, scala 0,9 e opacità), entrata hero (tendina dall'alto con sfocato, sfondo nero). Replicati: tendina della hero, pulsanti con testo che scorre (`src/scripts/buttons.ts`), gruppo di tre foto sfalsate (`MediaGroup`), schede senza riquadri trasformate in righe di icone al tratto, intestazioni di sezione centrate, «Il residence» centrato con gruppo foto. Confronto hero a fotogrammi: stessa tendina; resta il ritardo di 0,6s con schermo bianco di vineyard, che non copio. Build e `test:links` ok, 320 px senza overflow.
