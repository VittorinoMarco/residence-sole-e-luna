# STATO: Residence Sole e Luna

Aggiornare solo le righe che cambiano. Log in fondo.

## Fase attuale
Pre-sviluppo. Incontro col cliente il 23/11/2026 per raccogliere accessi e materiali. Nessun codice scritto.

## Decisioni prese (19-22/11/2026)
- Tipo: vetrina + richiesta preventivo. Obiettivo: raccogliere richieste e contatti.
- Tono: animato e cinematico, minimal e giovanile, tocco elegante. GSAP, scroll narrativo; mobile semplificato; priorità equilibrio.
- Stack: Astro + TypeScript, statico, senza CMS e senza database.
- Contenuti: dal sito attuale (testi e foto), il cliente conferma diritti e aggiornamenti.
- Strumenti esterni: nessuno.
- URL: si costruiscono solo i 9 del brief, con path identici. Gli altri 6 URL legacy trovati (offerte, contatti, preventivo, prenota, animazione, giochi-barbecue) vanno in 301 alla pagina più vicina. Destinazioni da validare con Search Console. `/contatti` è l'unica pagina nuova.
- Area admin per vedere e rispondere ai preventivi: fase 2, a parte, fuori dai 700€. Il form va scritto in modo da poterla aggiungere dopo.
- Proposta: 700€ una tantum, forfettario, senza dominio e hosting.

## Bloccato / in attesa
- Riferimenti di design: Marco deve fornire gli URL.
- Foto originali, backup del vecchio sito (Joomla), accessi OVH, Search Console, GA4, GTM: dal cliente.
- Hosting finale e dominio preferito (www o no): da decidere.
- Pagine non ancora lette del sito attuale: servizi (5), Praia a Mare, cosa vedere, offerte, campi del form.
- Contatori "1+" e "© {2024}" del sito attuale sono errori: non migrarli.

## Prossimo passo
1. Dopo l'incontro: aggiornare `docs/TODO-CLIENTE.md` con ciò che è arrivato.
2. Inventario (crawl del sito live, matrice URL, `redirect.csv`).
3. Direzione di design: 2-3 direzioni, scelta di Marco, `PRODUCT.md` e `DESIGN.md`.
4. Scaffold Astro.

## Skill caricate
(nessuna ancora)

## Strumenti esterni usati
nessuno

## Log
- 2026-11-22: brief, contenuti legacy e file di progetto creati.
