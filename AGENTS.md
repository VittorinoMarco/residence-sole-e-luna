# AGENTS.md: Residence Sole e Luna

Istruzioni per qualsiasi agente (Claude Code, Codex, Cursor) e per le persone. Rispondi sempre in italiano.

## Progetto
Nuovo sito vetrina con richiesta di preventivo per il Residence Soleluna (Praia a Mare, CS), dominio `residencesoleluna.it`.
Stack: Astro + TypeScript, statico, nessun database, nessun CMS. Animazioni con GSAP.
Fornitore: Marco S. Vittorino (vittorino.consulting). Il cliente non modifica i contenuti da solo: ogni modifica passa dal codice.

## Da leggere all'inizio di OGNI sessione (in quest'ordine)
1. `docs/STATE.md`: a che punto siamo, decisioni prese, cosa è bloccato.
2. `BRIEF-residence-soleluna.md`: brief completo (scelte, URL, SEO, form, test, piano).
3. Solo se serve: `docs/CONTENUTI-LEGACY.md`, `docs/TODO-CLIENTE.md`, i PDF in `docs/`.
Non rileggere tutto il repo se non serve: parti da questi file e dal file che devi cambiare.

## Regole non negoziabili
- Non inventare testi, prezzi, orari, recensioni, punteggi, ID analytics. Se manca un dato: segnaposto visibile e riga in `docs/TODO-CLIENTE.md`.
- Mantieni identici i 9 URL del brief (sezione 3.1 del brief). Gli altri URL legacy vanno in 301 (`redirect.csv`).
- Non toccare DNS, hosting o posta. Non modificare MX/SPF/DKIM/DMARC.
- Nessuno strumento esterno a pagamento o generatore di immagini/video senza ok esplicito di Marco.
- Non clonare siti di riferimento.
- Nessuna promessa di posizionamento su Google. Nessun markup `Review`/`AggregateRating`.
- Nessun segreto nel codice né nel repo: usa `.env` (ignorato da Git) e variabili d'ambiente. Il modello è `.env.example`.
- Release in produzione solo con approvazione di Marco.

## Come si lavora con Git (più agenti, più dispositivi)
- `main` è sempre in uno stato funzionante e si aggiorna solo con una pull request che Marco ha guardato.
- Un branch per ogni compito: `claude/<tema>`, `codex/<tema>`, `cursor/<tema>`. Un solo agente alla volta su una stessa area di codice.
- Prima di cominciare: `git pull --rebase`. Commit piccoli e frequenti, messaggi chiari in italiano. A fine lavoro: push e, se il compito è finito, apri la pull request.
- Più prove in parallelo sullo stesso computer: usa `git worktree`.
- Le foto pesanti dei clienti non vanno in Git normale: Git LFS oppure cartella condivisa, nel repo solo i file ottimizzati.

## Passaggio di consegne
A fine sessione aggiorna `docs/STATE.md` (solo le righe che cambiano): cosa hai fatto, cosa viene dopo, cosa è bloccato e da chi. Aggiungi una riga datata nel log in fondo. Il prossimo agente (o Marco) riparte da lì.

## Comandi
- `npm install`
- `npm run dev` (sito in locale)
- `npm run build` poi `npm run preview`
- `npm run test:links` dopo la build: link interni, redirect del CSV, title, un solo H1, canonical

## Qualità prima di dire "fatto"
Esegui la build e i test. Per le pagine: controlla titolo, H1 unico, canonical, link interni, mobile a 320 px. Non dichiarare risultati di performance senza averli misurati.
