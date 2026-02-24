# Negozio Online

Questo è un progetto del corso Web.
Dovrai creare una pagina web che mostra prodotti recuperati da un'API (locale), con funzionalità di visualizzazione dettagli e filtri (opzionali).

Le funzionalità principali da implementare sono:
1. **Recuperare i prodotti da API** - Usare `fetch` per ottenere i dati da un'API locale
2. **Mostrare i prodotti in una tabella** - immagine, nome, prezzo, disponibilità
3. **Modale dei dettagli** - Quando clicchi su un prodotto mostra un modale (finestra popup) con tutte le info (immagine grande, nome, descrizione, prezzo, disponibilità) e un pulsante "×" per tornare alla tabella.
4. **Bonus - Filtri** - Aggiungere filtri di ricerca per nome e categoria (opzionale)

## Come Iniziare

Per iniziare il progetto ci sono due strade:
1. **Fork** del repository base. Lo trovate [qui](https://github.com/CerseoWeb/NegozioWeb) e potete fare un fork per avere una copia personale su cui lavorare.
2. **Creare una nuova repository** seguendo i passaggi qui sotto (consigliato per chi vuole fare tutto da zero e imparare il workflow completo di GitHub).
   * **Nuova Repo**: Vai su [github.com](https://github.com) e crea una nuova repository (In alto un pulsante "+" e poi "New Repository"), con Repository Name: `NegozioWeb`, Description: "Progetto Negozio Online per corso Web", Public, Initialize with README (opzionale).
   * **Aggiungi Files**: Dopo aver creato la repo, puoi aggiungere i file `index.html`, `style.css`, `script.js` e `README.md` direttamente da GitHub (usando il tasto "+" (vicino a "Code") → "Upload files". Nella pagina di upload, trascina i file o selezionali dal tuo computer, poi scrolla in basso e fai commit dei file con un messaggio chiaro come "Add initial project files".

A questo punto possiamo iniziare a lavorare localmente con VSCode e GitHub:

**Clona**: Copia l'URL della repo (es: `https://github.com/[tuonome]/NegozioWeb.git`) e clonala localmente usando Git o direttamente dentro VSCode.

**VSCode**: Da dentro vs code, apri la cartella del progetto se non già fatto.\
*NOTA*: Prima di iniziare, assicurati di aver fatto il login a GitHub da VSCode, in modo da poter fare commit e push direttamente dall'editor.

**Inizio Insieme**: Dopo questi passaggi, iniziamo a fare i primi passi assieme per vedere il workflow di Git e come strutturare la pagina:
```
🎯 Colleghiamo i vari files
1. Collega il file CSS in index.html
2. Collega il file JS in index.html
3. Creiamo un div con class "container" che conterrà tutta la pagina
→ commit: "HTML: aggiunta struttura tabella"
```
```
🎯 Creiamo l'HTML della tabella
1. Tabella vuota
2. Header della tabella con: Immagine, Nome, Prezzo, Disponibilità
3. Body con id "tabellaProdotti" (dove inseriremo i prodotti dinamicamente)
→ commit: "HTML: aggiunta struttura tabella"
```
```
🎯 Creiamo il modale
1. Div con class "modal nascosto" e id "modale"
2. Div interno con class "modal-content"
3. Contenuto del modal:
   - H2 con id "prodottoNome"
   - Immagine con id "prodottoImmagine"
   - Paragrafo con id "prodottoDescrizione"
   - Paragrafo con id "prodottoPrezzo"
   - Paragrafo con id "prodottoDisponibilita"
   - span con id "chiudi" e class "close" con dentro il simbolo "×"
→ commit: "HTML: aggiunta struttura modal"
→ push o sincronizzazione per salvare su GitHub
```

## 📝 Esercizio da Implementare

Dopo la sessione iniziale, si dovranno completare le funzionalità 
indicate dentro il file `script.js` seguendo il workflow Git.

Dopo ogni funzionalità completata, si deve fare un commit con un messaggio chiaro e significativo.
Ogni tanto ricordarsi di fare push per evitare di perdere il lavoro!

Gli esercizi da fare si possono dividere in 3 punti principali:

1. Popolare la tabella con i dati dei prodotti
2. Implementare il modal dei dettagli
3. Bonus: Aggiungere filtri di ricerca e categoria

### Struttura dei Dati
L'API locale restituirà un array di oggetti, dove ogni oggetto rappresenta un prodotto.
Ogni prodotto dovrebbe avere questa struttura (esempio):
```json
{
  "id": 1,
  "nome": "Laptop MacBook Pro",
  "descrizione": "Laptop professionale...",
  "categoria": "Elettronica",
  "prezzo": 2499.99,
  "immagine": "https://...",
  "disponibilita": true
}
```

### 💡 Suggerimenti per l'Implementazione

1. **Dividere il lavoro in funzioni piccole:**
   - `function creaRigaProdotto(product)` → crea HTML di una riga
   - `function mostraProdotti(products)` → riempie la tabella
   - `function toggleModal()` → mostra/nascondi modal

2. **Usa gli event listener:**
   - `click` su riga della tabella → mostra modal e riempi i dettagli
   - `click` su bottone "Chiudi" → nascondi modal

3. **Testing:**
   - Apri la console e verifica che il fetch funzioni (print dei dati come prova)
   - Verifica che la tabella si popoli correttamente
   - Clicca su una riga e verifica che appaia il modal
