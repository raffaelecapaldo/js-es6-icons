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
        color: randomHex()
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: randomHex()
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: randomHex()
    }
];
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



function generateSelection(options) {
    const selectorBox = document.querySelector(".selector");
    const selector = document.createElement("select");
    selector.classList.add("form-select", "rc-select", "text-uppercase");
    options.forEach(option => {
        const element = document.createElement("option");
        element.value = element.innerText = option;
        selector.appendChild(element);
    });
    selectorBox.appendChild(selector);
}


function init() {
    const values = ["all", "animal", "vegetable", "user"]
    generateSelection(values);//Genera la select
    generateTemplate(icons);//Genera il template con l'array di objects icons
    const selector = document.querySelector("select");
    selector.addEventListener("change", filterTemplate);//Al cambio di value in select, esegui filterTemplate


}

init();