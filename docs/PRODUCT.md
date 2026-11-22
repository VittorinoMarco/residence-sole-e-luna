# PRODUCT

Residence Soleluna, Praia a Mare (CS). Dominio previsto `residencesoleluna.it`. Sito vetrina statico con richiesta di preventivo.

## Scopo

Far arrivare una richiesta di preventivo, una telefonata o un’email. Il sito spiega dove si sta, cosa c’è (appartamenti, piscina, lido, navetta, parcheggio) e come scrivere. Non vende camere in tempo reale e non prende pagamenti.

## Pubblico

Famiglie, coppie e gruppi che cercano una casa vacanza a Praia a Mare, con piscina e un lido raggiungibile. Leggono da telefono, spesso la sera, e confrontano poche strutture.

## Offerta

Soggiorno in appartamento nel residence, con i servizi già scritti sul sito attuale: piscina riservata agli ospiti, animazione, lido convenzionato Point Break, navetta per la spiaggia, parcheggio interno, lavanderia. I prezzi non ci sono: si chiedono con il preventivo. Non inventare tariffe, orari non riconfermati o punteggi.

## Voce

Italiano, concreto, in seconda persona solo se il testo del sito attuale lo fa già. Si tengono i fatti del brief (1 km dal centro e dalla spiaggia, golfo di Policastro, 36 appartamenti, tipologie e dotazioni). Si riscrive la forma, non si tagliano i contenuti che possono portare traffico. Niente promesse di posizione su Google. Niente «esperienza unica» al posto di un fatto.

CTA principale: «Richiedi un preventivo». Secondaria: il telefono `+39 0985 779029`.

## Pagine

Solo questi path, identici al brief:

- `/`
- `/residence-case-vacanze-praia-a-mare`
- `/residence-case-vacanze-praia-a-mare/appartamenti-soleluna`
- `/residence-calabria-piscina-animazione-lido`
- `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-piscina`
- `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-lido-navetta`
- `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-parcheggio-privato-lavanderia`
- `/praia-a-mare-cosa-fare`
- `/praia-a-mare-cosa-fare-cosa-vedere`
- `/contatti` (unica pagina nuova, con il form)

I sei URL legacy del brief vanno in `redirect.csv`, non in pagine nuove. Pagine servizi, Praia e campi del form non sono ancora stati riletti dal vivo: finché non lo sono, segnaposto visibile e riga in `docs/TODO-CLIENTE.md`.

## Prova

Quattro recensioni già nel brief, con nome e fonte, senza voto aggregato e senza markup `Review`. I nomi dei titolari citati nelle recensioni non si usano altrove senza ok.

## Vincoli

Astro + TypeScript, statico, niente CMS e niente database. Form dietro `submitQuote`, in fase 1 solo invio email, predisposto per un salvataggio successivo. Foto: segnaposto con didascalia finché non arrivano gli originali. Nessun generatore di immagini. GSAP solo dove la pagina lo carica. `prefers-reduced-motion` e mobile con meno pin. Non toccare DNS, posta, MX.
