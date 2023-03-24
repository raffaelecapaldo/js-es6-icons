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
    row.classList.add("row", "d-flex")
    col.classList.add("col-2");
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
    console.log(filteredArray);

}







function init() {
    generateTemplate(icons);
    const selector = document.querySelector("select");

    selector.addEventListener("change", filterTemplate);


}

init();