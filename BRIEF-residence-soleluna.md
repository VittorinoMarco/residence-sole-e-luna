# Residence Sole e Luna: brief di progetto per Claude Code / Cursor

Documento operativo, aggiornato al 22/11/2026. Va messo nella root del repo (consigliato anche come `CLAUDE.md` o `.cursor/rules`) insieme a `docs/`.

Committente: Residence Soleluna, Praia a Mare (CS). Dominio `residencesoleluna.it` (anche `www`).
Fornitore: Marco S. Vittorino, vittorino.consulting. Preventivo 700€ una tantum, valido 30 giorni da nov 2026.

File da copiare in `docs/` prima di iniziare:
- `Preventivo_Sito_Web_Residence_Sole_e_Luna.pdf` (cosa è promesso al cliente)
- `Audit_tecnico_SEO_Residence_Soleluna_Brief_Claude_Codex.pdf` (audit SEO e piano di migrazione, 19/11/2026, desk-based)

---

## 0. Regole non negoziabili

1. **Non inventare nulla.** Testi, servizi, prezzi, orari, recensioni, punteggi, ID analytics, nomi: se non sono in questo documento o forniti dal cliente, usa un segnaposto visibile e segnalalo in `docs/TODO-CLIENTE.md`.
2. **Distingui sempre** fatti osservati, ipotesi ed elementi mancanti. L'audit è desk-based: non è un crawl, non è un test Lighthouse. Non attribuire al vecchio sito problemi tecnici senza averli testati.
3. **Non toccare** DNS, hosting o posta in produzione senza approvazione esplicita. I record MX/SPF/DKIM/DMARC restano invariati.
4. **Strumenti esterni: nessuno** (niente generatori di immagini/video, niente Higgsfield, Canva, Lovable). Asset forniti dal cliente, CSS/SVG, librerie di icone, GSAP. Foto stock solo con licenza chiara e solo con ok di Marco.
5. **Non clonare** nessun sito di riferimento: si estraggono principi e scelte, mai layout, testi o asset.
6. **Non promettere ranking su Google.** Si misura prima/dopo: clic, impression, posizioni, pagine indicizzate.
7. **Lavora a cicli piccoli** (struttura, hero, una sezione, responsive, motion, QA). Niente mega-commit. Release solo con approvazione di Marco.

---

## 1. Brief (scelte di Marco, 19-22/11/2026)

| Voce | Decisione |
|---|---|
| Tipo | Sito vetrina + richiesta di preventivo |
| Obiettivo | Raccogliere richieste e contatti (telefono, email, form preventivo) |
| Tono visivo | Animato e cinematico, ma minimal e giovanile, con un leggero tocco elegante |
| Riferimenti | Marco ha degli URL ma NON li ha ancora forniti: vedi sezione 6 |
| Animazioni | Scroll narrativo con GSAP: reveal, hover, sfondi, testo che si rivela, parallax, scroll orizzontale, transizioni di pagina. Tutti gli effetti, purché belli e dosati |
| Priorità | Equilibrio tra effetto e velocità (la SEO dipende dalla velocità) |
| Mobile | Animazioni semplificate (stesso stile, meno pin e parallax) |
| Stack | Astro + TypeScript, statico, nessun database |
| Contenuti | Testi e foto dal sito attuale (il cliente conferma diritti e aggiornamenti) |
| Extra inclusi | SEO locale e migrazione, form preventivo, analytics (GTM/GA4 con consenso) |
| Fuori scope (fase 2, a parte) | Area admin per vedere i preventivi e rispondere dal sito. Richiede backend e database: non è nei 700€ |
| Fuori scope (sviluppi futuri) | Prenotazione online, altre lingue, offerte/blog |

**Vincolo dal brief e dall'audit:** nessun CMS per editing autonomo. I contenuti stanno in file versionati; ogni modifica passa da Marco.
Predisporre il form in modo che la fase 2 possa salvare i preventivi in un database senza riscrivere il front end (vedi sezione 8).

---

## 2. Cosa deve fare il sito (dalla proposta al cliente)

- Grafica su misura, da zero, in linea con l'immagine del residence, senza template.
- Perfetto su smartphone, tablet e computer. Veloce e comodo da navigare.
- Pagina contatti con telefono, email e mappa.
- Impostazioni per Google: title, description, immagini curate.
- Pubblicazione online e controlli finali.
- Passaggio dal vecchio sito senza perdere la SEO.

---

## 3. Architettura URL

### 3.1 URL da preservare identici (200, stesso path, nessun redirect)

Sono i 9 documentati nel brief/audit. Verificare lo slash finale sul sito live e mantenere la stessa policy.

| Pagina | Path |
|---|---|
| Home | `/` |
| Il residence | `/residence-case-vacanze-praia-a-mare` |
| Gli appartamenti | `/residence-case-vacanze-praia-a-mare/appartamenti-soleluna` |
| Servizi (hub) | `/residence-calabria-piscina-animazione-lido` |
| Piscina | `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-piscina` |
| Lido e navetta | `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-lido-navetta` |
| Parcheggio e lavanderia | `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-parcheggio-privato-lavanderia` |
| Praia a Mare, cosa fare | `/praia-a-mare-cosa-fare` |
| Cosa vedere | `/praia-a-mare-cosa-fare-cosa-vedere` |

### 3.2 URL legacy scoperti il 19/11 (non nel brief): PROPOSTA DI REDIRECT

Letti nel menu e nei link del sito live. Marco ha deciso di costruire solo le pagine del brief: questi non diventano pagine nuove, vengono collegati con 301 alla pagina più vicina. **Da validare con Search Console** (verificare quali sono davvero indicizzati) prima del go-live.

| Legacy | Azione proposta | Destinazione |
|---|---|---|
| `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-animazione` | 301 | `/residence-calabria-piscina-animazione-lido` (con sezione Animazione) |
| `/residence-calabria-piscina-animazione-lido/residence-calabria-praia-a-mare-giochi-barbecue` | 301 | `/residence-calabria-piscina-animazione-lido` (con sezione Giochi e barbecue) |
| `/residence-calabria-praia-scalea` (contatti) | 301 | `/contatti` |
| `/residence-calabria-praia-scalea/richiedi-preventivo` | 301 | `/contatti#preventivo` |
| `/residence-calabria-praia-scalea/prenota` | 301 | `/contatti#preventivo` |
| `/offerte-residence-calabria-praia-scalea` | 301 (provvisorio) | `/` oppure `/contatti`: decidere con Marco. Non esiste ancora una pagina offerte |

Nota: `/contatti` è l'unica pagina nuova (è nella proposta: "Pagina contatti con telefono, email e mappa" e ospita il form). La galleria foto è una sezione delle pagine, non un URL nuovo, salvo diversa decisione di Marco.

Scoprire altri URL legacy prima del go-live (sitemap vecchia, Search Console, crawl) e aggiungerli alla matrice. Produrre `redirect.csv` con colonne `source,target,status,reason` e un test automatico per ogni riga. Nessuna catena di redirect, nessun 404 interno.

---

## 4. Contenuti da migrare (sito attuale, letto il 19/11/2026)

Il sito attuale è un Joomla con tema Helix Ultimate. Copiare i testi esatti dalle pagine live (o dall'export del cliente) e rivederli per qualità **senza eliminare contenuto che porta traffico**, prima di consultare Search Console.

### 4.1 Home
- H1/H2 attuali: "Residence a Praia a Mare" / "Residence Soleluna".
- Posizione: residence di recente costruzione, costa tirrenica calabrese, circa 1 km dal centro e dalla spiaggia di sabbia e ghiaia. Piscina e solarium, posizione tranquilla e panoramica con vista sul golfo di Policastro.
- Servizi in evidenza: piscina riservata agli ospiti (chiosco bar, lettini, ombrelloni, docce), animazione per adulti e bambini tutti i giorni, lido convenzionato Point Break, appartamenti arredati, parcheggio interno con telecomando per il cancello, spazio giochi, navetta gratuita per la spiaggia (9.00-13.00 e 15.30-19.30, ogni 30 minuti: **da riconfermare**).
- Blocco recensioni: 4 recensioni (Google: Adele Vanacore, Rosaria De Luca; TripAdvisor: Stella A., Pasquale e Enza). Usare solo il testo reale, con fonte e link, previa conferma del cliente. Non creare punteggi aggregati né markup `Review`/`AggregateRating`.
- CTA: "Per info e prenotazioni": telefono e "Richiedi un preventivo".
- **Non migrare** i contatori "1+ anni di esperienza / 1+ clienti soddisfatti": sono rotti.

### 4.2 Appartamenti
36 appartamenti: parte al piano rialzato con ampio terrazzo indipendente e area esterna pavimentata, parte al 1° piano con ampio terrazzo anteriore e posteriore. Aria condizionata nella zona soggiorno-cucina. Adatti a famiglie, coppie e gruppi di amici.
- **Bilocali 2/3/4 letti**: soggiorno-pranzo con cucina componibile e A/C, divano-letto, TV, camera matrimoniale, bagno con doccia, lavatoio, terrazzo attrezzato con tavolo e sedie, tende da sole, area esterna pavimentata.
- **Trilocali 4/5/6 letti**: come sopra più una seconda camera (due letti o matrimoniale); divano letto matrimoniale nel soggiorno-pranzo.
- **Quadrilocali 7/8 letti**: camera matrimoniale con letto singolo, 2 camere con due letti singoli o matrimoniale, 2 bagni con doccia, ampio terrazzo attrezzato.
Conservare dettagli di capienze, dotazioni e foto con consenso/diritti.

### 4.3 Servizi (da leggere dal live, non ancora letti)
Piscina, animazione, lido e navetta, area giochi e barbecue, lavanderia self e parcheggio. Pagina Praia a Mare e "cosa vedere": non ancora letti. Offerte: non letta.

### 4.4 Contatti e dati (da verificare col cliente prima di pubblicare)
- Email: `info@residencesoleluna.it`
- Telefoni: +39 0985 779029, +39 338 8750991
- Indirizzo: Via G. Carducci 38, 87028 Praia a Mare (CS)
- Social: Facebook `residencesoleluna`, Instagram `residencesoleluna`
- Lido convenzionato: Lido Point Break (pagina Facebook)
- Privacy e cookie policy: oggi gestite con iubenda. Decidere con il cliente se mantenerle.
- Nel footer attuale compare "© {2024}" (placeholder rotto): nel nuovo sito anno corretto.
I nomi dei titolari compaiono solo nelle recensioni: non usarli senza ok del cliente.

### 4.5 Foto
Il sito attuale ha foto (gallerie per servizi, appartamenti, residence). Non sono disponibili nel workspace: servono originali ad alta risoluzione dal cliente con autorizzazione al riutilizzo. Fino ad allora segnaposto onesti (riquadro neutro con didascalia del soggetto atteso), con una struttura `public/images/` e un file `images.manifest.json` (file, soggetto, pagina, alt, diritti: sì/no/da verificare).

---

## 5. Architettura tecnica

- **Astro + TypeScript**, pagine statiche, componenti riutilizzabili. CSS modulare o Tailwind, se utile. Evitare SSR salvo necessità reale. Alternativa (Next.js static export) solo se giustificata.
- **Contenuti** in file versionati (JSON/Markdown/TS), non in un database. Una cartella `src/content/` con un file per pagina.
- **Immagini** locali ottimizzate (AVIF/WebP con fallback), `srcset` e dimensioni esplicite per evitare CLS. Hero e immagini sopra la piega con priorità di caricamento; il resto lazy.
- **Animazioni**: GSAP e ScrollTrigger caricati solo dove servono (import dinamico per pagina), smooth scroll solo se non peggiora INP. Rispettare `prefers-reduced-motion` (versione statica con reveal minimi). Su mobile: pin, scrub e parallax ridotti o disattivati.
- **Accessibilità** WCAG: navigazione da tastiera, focus visibile, contrasti, label, alt pertinenti, menu mobile accessibile.
- **Sicurezza**: HTTPS, header appropriati, dipendenze aggiornate, nessun segreto lato client.
- **Hosting finale non deciso** (statico separato tipo Cloudflare Pages/Vercel, oppure OVH compatibile). Decisione dopo verifica di costi, DNS, deploy e limiti. Il codice non deve dipendere dall'hosting: il gestore del form è isolato (sezione 8).

### Budget di prestazioni (obiettivo, da misurare su staging con PageSpeed/Lighthouse)
LCP mobile sotto 2,5 s, CLS sotto 0,1, INP sotto 200 ms. Non inventare punteggi: riportare solo misure reali.

---

## 6. Direzione di design (da definire: prima fase)

Tono: animato e cinematico, minimal e giovanile, con un leggero tocco elegante. Equilibrio tra effetto e velocità.

**Riferimenti: Marco deve ancora fornire gli URL.** Finché non arrivano:
1. Non scegliere palette e font "di default". Non partire dal template di una libreria.
2. Se sono disponibili, caricare le skill di design (una alla volta): `taste-design-dna` sugli URL di riferimento, poi `studio-grade-website` per `PRODUCT.md` e `DESIGN.md`, poi `sito-web-workflow`, `emil-design-eng`, `motion-scroll-playbook`.
3. Proporre 2-3 direzioni visive (con scelta di font, palette, uso delle foto, un solo "momento forte" per pagina) e farne scegliere una a Marco **prima** di costruire.
4. Regole anti-"look da AI": niente gradienti viola generici, niente griglie di card tutte uguali, niente emoji come icone, spaziature e gerarchia tipografica curate, immagini protagoniste.

Idee di motion consentite (da dosare, non tutte insieme in ogni pagina): hero con reveal del titolo, parallax leggero sulle foto, sezione appartamenti con scroll orizzontale, galleria con transizioni, transizioni di pagina, contatori solo se i numeri sono veri, hover curati su CTA e card.

---

## 7. SEO tecnica (dall'audit)

- Matrice URL legacy -> nuovo -> azione (200 invariato / 301 pertinente / 410 solo se la rimozione è giustificata). Preservare esattamente path e policy dello slash.
- Preservare intento di ricerca, title, H1, testi informativi, link interni e sezioni importanti. Riscrivere per qualità senza eliminare contenuto che porta traffico.
- Per ogni pagina: `title` univoco, `description`, un solo H1, `canonical` assoluto sul dominio preferito, metadati Open Graph/Twitter, immagini ottimizzate con alt pertinenti.
- `sitemap.xml` con soli URL canonici 200. `robots.txt` che non blocca la produzione. `noindex` solo su staging, mai in produzione.
- Dati strutturati Organization/LodgingBusiness **solo con dati reali** (nome, indirizzo, telefono, email). Niente markup `Review`.
- Redirect `www`/non-www e HTTP/HTTPS in un solo salto. Dominio preferito da decidere (il sito attuale usa `www`).
- Testare 404 veri, link interni, breadcrumb, compatibilità mobile.

---

## 8. Form preventivo (nessun database in fase 1)

- Campi da confermare col cliente (proposta: nome, email, telefono, date di arrivo e partenza, numero di ospiti, tipologia di alloggio, messaggio, consenso privacy).
- Validazione lato client e lato server, antispam (honeypot, limite di frequenza, eventualmente Turnstile), messaggi di successo e di errore chiari, log minimi, nessun segreto nel browser.
- Invio affidabile verso la **casella OVH** del cliente come destinatario, senza migrare le caselle. Se serve un provider di email transazionale, la casella OVH resta la destinataria.
- Il gestore va dietro un'interfaccia unica (`submitQuote(payload)`) con un adattatore per l'hosting scelto. In fase 2 lo stesso punto salverà anche i preventivi in un database per l'area admin (vedere e rispondere), senza toccare il front end.
- Test di consegna end-to-end con email reali prima del go-live. Privacy e consenso: verifica legale con un professionista.

---

## 9. Analytics, consenso, Search Console

- Reinstallare il container GTM nel nuovo sito, con ID da variabili d'ambiente (placeholder, **mai inventare ID**). Lo storico GA4 resta nella stessa proprietà.
- Eventi da verificare senza doppio conteggio: `page_view`, click telefono, click email, apertura e invio preventivo, eventuale conversione. Nessun dato personale in Analytics.
- CMP e Consent Mode se applicabile, con blocco dei tag non necessari prima del consenso. Decidere se tenere iubenda.
- Search Console: mantenere la verifica di proprietà, esportare le prestazioni per pagina e query (12-16 mesi), copertura, sitemap e Core Web Vitals prima del cambio; inviare la nuova sitemap dopo il go-live.

---

## 10. DNS, hosting, email (OVH)

- Prima del cambio: verificare chi possiede account OVH, dominio, zona DNS, hosting web e prodotto email (MX Plan/Email Pro/Exchange o altro). Esportare screenshot e valori DNS esistenti.
- Non cambiare i nameserver se basta aggiornare A/AAAA/CNAME per apex e `www`. Se si cambiano, replicare TUTTI i record necessari prima della delega.
- Preservare MX, SPF, DKIM, DMARC e i record mail/autodiscover. Attenzione a TXT multipli e SPF duplicati. Non cancellare hosting o mail precedenti prima di verificare l'indipendenza dei servizi.
- Pianificare TTL, certificato HTTPS, propagazione, test di invio e ricezione interni ed esterni, webmail. Prevedere il rollback con i valori DNS originali e il vecchio hosting ancora disponibile.

---

## 11. Piano di lavoro e rollback

1. **Inventario e piano**: crawl del sito live (sitemap, menu, Search Console), matrice URL, inventario DNS, contenuti e asset. Congelare la mappa URL.
2. **Direzione di design**: riferimenti, 2-3 direzioni, scelta di Marco, `PRODUCT.md` e `DESIGN.md`.
3. **Scaffold** Astro + TS, layout, componenti, routing con i 9 path identici.
4. **Pagine e componenti**, una alla volta, mobile first. Motion a livello scelto.
5. **SEO, form, tracking**: metadati, canonical, sitemap, robots, JSON-LD, form, GTM/GA4, consenso.
6. **Test** (sezione 12) su staging non indicizzato.
7. **Release** solo con approvazione di Marco e del cliente. Cambio solo dei record web; smoke test su più reti e browser; verifica anche di posta e richieste.
8. **T+1 / T+30**: monitorare 404, errori server, copertura Search Console, sitemap, traffico organico e conversioni. Non eliminare il vecchio hosting fino a verifica completa.
- **Rollback**: ripristinare i record web originali, mantenere la configurazione mail invariata, verificare TTL e disponibilità del vecchio ambiente, documentare chi può autorizzare.

---

## 12. Test prima del rilascio

- **Crawler**: esportare URL legacy da sitemap, menu, link interni e Search Console; confrontare status, title, canonical e redirect su staging.
- **Performance**: Lighthouse/PageSpeed su home, appartamenti, servizi e pagina territoriale; mobile LCP, INP, CLS (dati reali quando disponibili).
- **Funzionale**: menu, gallerie, CTA, form, email, antispam, privacy, telefono (`tel:`), mappe, link esterni, viewport 320 px e desktop, tastiera e screen reader di base.
- **SEO**: nessun link rotto, sitemap valida, `noindex` solo su staging, robots corretto in produzione, 301 senza catene, 404 reali, canonical e OG validi.
- **Infrastruttura**: HTTPS, www/apex, backup, monitoraggio, accessi, deploy e rollback provati.

### Criteri di accettazione
- 100% degli URL prioritari risponde 200 o redirect pertinente. Nessun 404 interno.
- Form verificato e mail funzionante. Tracking verificato. Staging non indicizzato, produzione indicizzabile. HTTPS e mobile OK.
- Nessun testo, numero o recensione inventati.

---

## 13. Consegna richiesta a Claude Code / Cursor

Repo con: `README`, architettura, struttura delle directory, file dei contenuti, script QA, test di link e redirect, `redirect.csv`, checklist di release, piano DNS OVH (che preserva MX/SPF/DKIM/DMARC), rollback, e `docs/TODO-CLIENTE.md` con tutte le attività bloccate da accessi o materiali mancanti.

## 14. Ancora da avere dal cliente (incontro del 23/11)

Accesso o export OVH e titolarità di dominio, hosting e posta. Accesso a Search Console, GA4, GTM, eventuale CMP, Google Business Profile. Backup del vecchio sito (file e database) e foto originali con autorizzazione. Logo e colori in vettoriale. Conferma di servizi, orari, offerte, testi legali, destinatari del form. Decisione su hosting finale, repository, proprietà degli account e chi approva la messa online. Se desiderano la fase 2 (admin preventivi) e le lingue.

---

## 15. Primo prompt da incollare in Claude Code / Cursor

> Leggi `BRIEF-residence-soleluna.md` e i due PDF in `docs/`. Agisci da senior full-stack engineer, technical SEO lead e release engineer. Ricostruisci da zero `residencesoleluna.it` con Astro + TypeScript, statico, senza CMS. Non modificare DNS, hosting o posta. Non inventare contenuti. Fai solo la **fase 1 e 2 del piano (sezione 11)**: inventario (con i dati del brief; se hai connettività verifica gli URL live) e direzione di design. Per la direzione, usa le skill di design disponibili e proponi 2-3 direzioni; i riferimenti di Marco arriveranno dopo, quindi chiedili prima di costruire. Poi fermati e aspetta la mia scelta. Crea `docs/TODO-CLIENTE.md` con ciò che manca.
