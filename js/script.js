//Si ringrazia: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-11.php
function randomHex() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);//Genera un numero casuale tra 0 e 1 con Math.random, moltiplicalo per il max valore esadecimale possibile e a sua volta moltiplicalo per un
    //numero abbastanza grande da permettere di avere un'ampia scelta di colori abbastanza unici nella propria pagina, converti poi il numero in una stringa base 16 (esadecimale)
    return '#' + n.slice(0, 6);//Ritorna # (simbolo per scrivere un hex in css), + la stringa precedente di max lunghezza 6 (quindi taglia la stringa da indice 0 per lunghezza 6)
}
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'window-restore',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'window-minimize',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'window-maximize',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'window-close',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'terminal',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'stream',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'qrcode',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'file-code',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'folder',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'filter',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'file',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'barcode',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'bug',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'keyboard',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'keyboard',
        prefix: 'fa-',
        type: 'code',
        family: 'solid',
    },
    {
        name: 'tired',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'surprise',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'smile',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'kiss',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'laugh',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'frown',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'flushed',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'angry',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'dizzy',
        prefix: 'fa-',
        type: 'emoji',
        family: 'solid',
    },
    {
        name: 'space-shuttle',
        prefix: 'fa-',
        type: 'scifi',
        family: 'solid',
    },


    {
        name: 'jedi',
        prefix: 'fa-',
        type: 'scifi',
        family: 'solid',
    },
    {
        name: 'hand-spock',
        prefix: 'fa-',
        type: 'scifi',
        family: 'solid',
    },
    {
        name: 'atom',
        prefix: 'fa-',
        type: 'scifi',
        family: 'solid',
    },


    {
        name: 'radio',
        prefix: 'fa-',
        type: 'music',
        family: 'solid',
    },
    {
        name: 'music',
        prefix: 'fa-',
        type: 'music',
        family: 'solid',
    },
    {
        name: 'microphone',
        prefix: 'fa-',
        type: 'music',
        family: 'solid',
    },

    {
        name: 'drum',
        prefix: 'fa-',
        type: 'music',
        family: 'solid',
    },
    {
        name: 'train',
        prefix: 'fa-',
        type: 'vehicles',
        family: 'solid',
    },
    {
        name: 'tractor',
        prefix: 'fa-',
        type: 'vehicles',
        family: 'solid',
    },
    {
        name: 'taxi',
        prefix: 'fa-',
        type: 'vehicles',
        family: 'solid',
    },

    {
        name: 'fighter-jet',
        prefix: 'fa-',
        type: 'vehicles',
        family: 'solid',
    },
    {
        name: 'helicopter',
        prefix: 'fa-',
        type: 'vehicles',
        family: 'solid',
    },
    {
        name: 'ship',
        prefix: 'fa-',
        type: 'vehicles',
        family: 'solid',
    },
    {
        name: 'subway',
        prefix: 'fa-',
        type: 'vehicles',
        family: 'solid',
    }
];
function newCategoryColors(icons) {
    const iconColors = {};//Dichiariamo oggetto che conterrà un nuovo colore randomico per ogni categoria trovata dall'array di oggetti principali
    icons.forEach(icon => {
        if (!iconColors[icon.type]) {//Se non è già stato assegnato il colore randomico per quella categoria
            iconColors[icon.type] = randomHex();//Assegnalo
        }
        icon.color = iconColors[icon.type]; //Assegna il colore corrispondente alla categoria nell'array principale
    })
};
function generateTemplate(icons) {
    const maincontent = document.getElementById("maincontent");
    const row = document.createElement("div");
    const col = document.createElement("div");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const iTag = document.createElement("i");
    const iconTitle = document.createElement("p");
    row.classList.add("row", "pt-4", "d-flex")
    col.classList.add("col-5row", "col-lg-3", "col-md-4", "col-sm-6", "col-6");
    card.classList.add("rc-card", "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-2");
    iconTitle.classList.add("text-uppercase", "fs-6", "fw-bold")
    col.appendChild(card);
    card.appendChild(iTag);
    card.appendChild(iconTitle);
    for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        iTag.className = `${icon.prefix}${icon.family} ${icon.prefix}${icon.name} fs-2`
        iTag.style.color = `${icon.color}`;
        iconTitle.innerText = `${icon.name}`
        row.appendChild(col.cloneNode(true));
    }
    maincontent.append(row);
}
/*Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/
function filterTemplate() {
    const maincontent = document.getElementById("maincontent");
    maincontent.innerHTML = "";//Svuota il main
    //Filtriamo gli oggetti icons in base al valore del contenuto della selector
    const filteredArray = icons.filter((icon) => {
        if (this.value === "all") {//Se il valore è all, ritorna tutto
            return true;
        }
        if (icon.type === this.value) {//Se è uno degli altri valori, ritorna gli oggetti che hanno come type quella category
            return true;
        }
        return false;
    })
    generateTemplate(filteredArray)//Rigeneriamo il template col nuovo array
}

function generateSelection() {
    const selectorBox = document.querySelector(".selector");
    const selector = document.createElement("select");
    selector.classList.add("form-select", "rc-select", "text-uppercase");
    const iconCategory = ["all"];//Array con le categorie, dichiarato soltanto all di default
    icons.forEach(icon => {
        if (!iconCategory.includes(icon.type)) {//Per ogni oggetto icona, se trovi una nuova categoria
            iconCategory.push(icon.type)//Aggiungila all'array delle categorie
        }
    })
    iconCategory.forEach(category => {//Per ogni categoria
        const element = document.createElement("option");//Crea un option
        element.value = element.innerText = category;//Con testo il nome della categoria
        selector.appendChild(element);//E inseriscilo nella select
    });
    selectorBox.appendChild(selector)//Aggiungi la select nell'html
}

function init() {
    let assigned = false;
    if (!assigned) {//Controlla se i colori sono stati cambiati, così da generarli e assegnarli
        //solo una volta per refresh della pagina e non quando si cambia categoria
        newCategoryColors(icons);
        assigned = true;
    }
    generateSelection();//Genera la select
    generateTemplate(icons);//Genera il template con l'array di objects icons
    const selector = document.querySelector("select");
    selector.addEventListener("change", filterTemplate);//Al cambio di value in select, esegui filterTemplate


}
init();