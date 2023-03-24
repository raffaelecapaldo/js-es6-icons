function randomHex() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
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



function generateSelector() {
    const selectorBox = document.querySelector(".selector");
    const selector = document.createElement("select");
    selector.classList.add("form-select", "text-uppercase", "rc-select");
    const all = document.createElement("option");
    all.selected = true;
    all.value = all.innerText = "all";
    selector.appendChild(all);
    const animal = document.createElement("option");
    animal.value = animal.innerText = "animal";
    selector.appendChild(animal);
    const vegetable = document.createElement("option");
    vegetable.value = vegetable.innerText = "vegetable";
    selector.appendChild(vegetable);
    const user = document.createElement("option");
    user.value = user.innerText = "user";
    selector.appendChild(user);
    selectorBox.appendChild(selector);

}




function init() {
    generateSelector();
    generateTemplate(icons);
    const selector = document.querySelector("select");
    selector.addEventListener("change", filterTemplate);


}

init();