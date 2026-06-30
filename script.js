/**
 * Progetto finale JS - Prodotti Negozio Online
 * Crea una pagina che mostra una lista di prodotti recuperati da un'API (es. http://localhost:5000/api/products)
 * Ogni prodotto ha: id, nome, descrizione, categoria, prezzo, immagine, disponibilità
 * 
 * FUNZIONALITÀ:
 * 1. Recupera i prodotti da API (fetch GET)
 * 2. Mostra i prodotti in una tabella con immagine, nome, prezzo e disponibilità
 * 3. Quando l'utente clicca su un prodotto, mostra i dettagli in una sezione a parte (usa le classi "modal" e "nascosto" nella sezione)
 * 4. Nella sezione dei dettagli, mostra TUTTE le info del prodotto e un pulsante "Chiudi" per nascondere la sezione
 * 
 * Suggerimenti per l'implementazione:
 * - Crea una funzione che genera una riga di un singolo prodotto
 * - Crea una funzione che visualizza l'intera tabella dei prodotti (che richiama la funzione precedente per ogni prodotto)
 * - Crea una funzione che fa mostra la sezione dei dettagli con le info del prodotto passato per parametro
 * - Aggiungi un event listener a ogni riga della tabella per mostrare i dettagli del prodotto cliccato (usa la funzione di visualizzazione dei dettagli)
 * - Aggiungi un event listener al pulsante "Chiudi" per nascondere la sezione dei dettagli
 * 
 * Bonus:
 * - Aggiungi una barra di ricerca per filtrare i prodotti per nome (filtro testuale)
 * - Aggiungi un filtro per categoria (dropdown) per mostrare solo i prodotti di una certa categoria
 * Nota: i filtri devono lavorare insieme e sui dati già recuperati, senza fare nuove richieste all'API
 */
const BASE_URL = 'http://localhost:5000/api/products';
const table = document.querySelector('#tabellaProdotti');
const modale = document.querySelector('#modale');

const modalContent = document.querySelector(".modal-content");
const filterCategory = document.querySelector('#category-filter');

const cercaNome = document.querySelector('.search-bar');
let tuttiIProdotti = [];

async function fetchDati() {
    try {
        const answer = await fetch(`${BASE_URL}`);
        if (!answer.ok) {
            throw Error(`${answer.status} : ${answer.statusText}`)
        }
        const products = await answer.json();
        tuttiIProdotti=products;
        showProducts(products)
        category(products)
    

    } catch (Error) {
        // alert(`Si è verificato un errore: ${Error.message}`)
    }
}


function category(listproducts) {
    const listOfCategories = [];
    listproducts.forEach(product => {
        if (!listOfCategories.includes(product.categoria)) {
            listOfCategories.push(product.categoria);
        }
    });

    listOfCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterCategory.appendChild(option);
    });
}

function showProducts(listproducts) {
    table.innerHTML = ""
    if (listproducts.length === 0) {
        alert("No products found")
        return
    }

    let data = ""
    listproducts.forEach(product => {
        data += `
    <tr>
    <td> <img src="${product.immagine}"> </td>
    <td> ${product.nome}</td> 
    <td> ${product.prezzo}€</td>
    <td> ${product.disponibilita ? "🟢 Disponibile" : "🔴 Esaurito"}</td>
    </tr>`
    });
    table.innerHTML = data

    const row = document.querySelectorAll('tr');
    ShowDescription(row, listproducts)
}

function ShowDescription(row, products) {

    row.forEach((singleRow, index) => {

        singleRow.addEventListener('click', () => {

            modale.classList.remove('nascosto');

            modalContent.innerHTML = `
            <h2 id="prodottoNome"> ${products[index].nome} </h2>
            <img id="prodottoImmagine" src="${products[index].immagine}" alt="" style="max-width: 200px;">
            <p id="prodottoDescrizione">${products[index].descrizione}</p>
            <p id="prodottoPrezzo">${products[index].prezzo}€</p>
            <p id="prodottoDisponibilita"> ${products[index].disponibilita ? "🟢 Disponibile" : "🔴 Esaurito"}</p>
            <span id="chiudi" class="close">×</span>`;

            const chiudi = document.querySelector('#chiudi');
            chiudi.addEventListener('click', () => {
                modale.classList.add('nascosto');
            });
        });

    });
}



 function applicaFiltri() {
    
    const testoCercato = cercaNome.value.toLowerCase();
    const categoriaSelezionata = filterCategory.value;

    
    const prodottiFiltrati = tuttiIProdotti.filter(product => {
        const matchNome = product.nome.toLowerCase().includes(testoCercato);
        
       
        const matchCategoria = categoriaSelezionata === "" || product.categoria === categoriaSelezionata;
        
        return matchNome && matchCategoria;
    });

    showProducts(prodottiFiltrati);
}


cercaNome.addEventListener('input', applicaFiltri);
filterCategory.addEventListener('change', applicaFiltri);




fetchDati();