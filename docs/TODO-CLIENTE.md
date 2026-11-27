# Da avere dal cliente

Segna `[x]` quando arriva. Incontro: 23/11/2026.

## Accessi
- [ ] OVH: titolarità di dominio, hosting e posta; piano attivo; export della zona DNS (o accesso limitato)
- [ ] Google Search Console (proprietà verificata)
- [ ] GA4 e GTM (ID container e proprietà)
- [ ] Google Business Profile
- [ ] Eventuale CMP / iubenda: decidere se mantenerla

## Materiali
- [ ] Backup del vecchio sito Joomla (file e database)
- [ ] Foto originali ad alta risoluzione + autorizzazione al riutilizzo
- [ ] Logo e colori in vettoriale, se esistono
- [ ] Ok a riusare le recensioni Google e TripAdvisor con attribuzione e link
- [ ] Ok a citare i titolari per nome

## Da confermare
- [ ] Telefoni: +39 0985 779029 e +39 338 8750991
- [ ] Email: info@residencesoleluna.it
- [ ] Indirizzo: Via G. Carducci 38, 87028 Praia a Mare (CS)
- [ ] Orari navetta (9.00-13.00 e 15.30-19.30 ogni 30 min), animazione, apertura stagionale
- [ ] Lido Point Break ancora convenzionato
- [ ] Offerte attive e cosa mostrare (oggi `/offerte-…` non ha una pagina nuova)
- [ ] Form preventivo: campi, destinatario, privacy
- [ ] Quanti preventivi arrivano oggi al mese e da quali canali (per il confronto prima/dopo)

## Emersi costruendo il sito (22/11/2026)
- [x] Testi di servizi, Praia a Mare, attività e residence: copiati dal sito attuale (22/11). Restano da leggere offerte e campi del form
- [ ] Consenso a pubblicare le 4 recensioni e i link alle fonti. Per ora la sezione ospiti non è nel sito: si rimette solo con i testi veri
- [ ] Endpoint che riceve il preventivo (`PUBLIC_QUOTE_ENDPOINT`): oggi il form valida e dice che l’invio non è collegato
- [ ] Coordinate verificate per incorporare la mappa
- [ ] URL della pagina Facebook del Lido Point Break
- [ ] Conferma del redirect provvisorio di `/offerte-residence-calabria-praia-scalea` verso la home

- [ ] Foto originali in alta risoluzione: quelle scaricate dal sito attuale sono da 450-1900 px (le gallerie di interni e piscina sono a ~900 px). Vanno bene per l’anteprima, non per un hero retina
- [ ] Abbinamento foto-tipologia: cucina arancione = bilocale, blu = trilocale, verde = quadrilocale, come sul sito attuale. Il cliente conferma
- [ ] Orari navetta mostrati sulle pagine come nel sito attuale (9-13, 15.30-19.30, ogni 30 min): da riconfermare prima della messa online
- [ ] Foto di Isola Dino, Arcomagno, Aieta e Diamante (ci sono sul sito attuale, non ancora scaricate)

## Decisioni
- [ ] Hosting finale e proprietà degli account (repo, dominio, hosting)
- [ ] Dominio preferito (con o senza www)
- [ ] Chi approva la messa online
- [ ] Pagamento (acconto e saldo) e contratto di cessione dei diritti
- [ ] Fase 2: area admin per i preventivi (preventivo a parte)
- [ ] Altre lingue, prenotazione online, offerte/blog (sviluppi futuri)
- [ ] Piantina: i punti (piscina, solarium, appartamenti, parcheggio, serate) sono posizionati a occhio sulla foto aerea. Confermare le posizioni, e dire cosa sono i gazebo bianchi e azzurri accanto alla piscina (animazione, barbecue, altro). Se esiste una planimetria del residence, mandarla: si sostituisce alla foto.
- [ ] FAQ: le risposte sono prese dal sito attuale; confermare e dire quali altre domande fanno i clienti.
- [ ] Offerte: le tariffe sul sito attuale sono di giugno 2026 (Bilocale 3/4 posti 450 €, Trilocale 4 posti 500 €, Trilocale 5 posti 550 € a settimana, consumi, pulizia, piscina e lido inclusi) e sono scadute. Mandare le tariffe e le date della prossima stagione: si aggiornano in `src/data/offers.ts`. Foto abbinate alle offerte da confermare.
- [ ] Blog: i 4 articoli sono bozze scritte con i soli fatti già presenti sul sito attuale (Isola Dino, Arcomagno e Maratea, Diamante, Aieta e Tortora, una giornata al residence). Rivedere, correggere e dire quali altri temi trattare. Date in `src/data/posts.ts`.
