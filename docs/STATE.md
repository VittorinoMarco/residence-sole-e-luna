# STATO: Residence Sole e Luna

Aggiornare solo le righe che cambiano. Log in fondo.

## Fase attuale
Sito sul branch `cursor/giorno-sul-golfo`, non committato. Home: la foto si ritira come su vineyard, poi icone, parole grandi e tre foto. Anteprima su `http://127.0.0.1:4321/`. Nessuna pubblicazione.

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
- Direzione «Giorno sul golfo» confermata da Marco il 22/11. Colori da residencesoleluna.it, motion da vineyard.co.za. Mappe in `docs/riferimenti/`. Brief in `docs/PRODUCT.md` e `docs/DESIGN.md`.
- Foto originali, backup del vecchio sito (Joomla), accessi OVH, Search Console, GA4, GTM: dal cliente.
- Hosting finale e dominio preferito (www o no): da decidere.
- Pagine non ancora lette del sito attuale: servizi (5), Praia a Mare, cosa vedere, offerte, campi del form.
- Contatori "1+" e "© {2024}" del sito attuale sono errori: non migrarli.

## Prossimo passo
1. Marco guarda l’anteprima (`npm run dev`). Commit e pull request solo se li chiede.
2. Dopo l’incontro del 23/11: foto, testi delle pagine non lette, consenso recensioni, endpoint del form, coordinate mappa, URL Facebook di Point Break, conferma del redirect offerte, ID GTM/GA4, www o apex, hosting.
3. Prima del go-live: ricontrollare `redirect.csv` con Search Console.

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
