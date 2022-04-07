class Pokemon {
    id
    name;
    description;
    hires;


    constructor(id, name, description, hires) {
        this.name = name;
        this.description = description;
        this.hires = hires;
    }
}
let pokemons = [];
window.onload = () => {

    fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                pokemons.push(new Pokemon(data[i].id, data[i].name.english, data[i].description, data[i].hires))
            }
            console.log(pokemons[2])
            for (let i = 0; i < data.slice(0,8).length; i++) {
                let card = document.createElement("div")
                card.className = "card m-3 flex-wrap size";

                let img = document.createElement("img")
                img.className = "card-img-top"
                img.src = data[i].hires

                let cardBody = document.createElement("div")
                cardBody.className = "card-body"

                let h5 = document.createElement("h3")
                h5.className = "card-title"
                h5.innerText = pokemons[i].name

                let description = document.createElement("p")
                description.className = "card-text"
                description.innerText = pokemons[i].description
                cardBody.appendChild(h5)
                cardBody.appendChild(description)
                card.appendChild(img)
                card.appendChild(cardBody)
                let cardGroup = document.getElementById("bodys")
                cardGroup.appendChild(card)
            }
        })
}

function search() {
    let value = document.getElementById("searchbar").value

    let bodys = document.getElementById("bodys")
    bodys.innerHTML = ""

    let pokemonsWritten = 0

    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].name.includes(value)) {
            if (pokemonsWritten === 8) {
                return
            }
            pokemonsWritten++
            let card = document.createElement("div")
            card.className = "card m-3 flex-wrap size";

            let img = document.createElement("img")
            img.className = "card-img-top"
            img.src = pokemons[i].hires

            let cardBody = document.createElement("div")
            cardBody.className = "card-body"

            let h5 = document.createElement("h3")
            h5.className = "card-title"
            h5.innerText = pokemons[i].name

            let description = document.createElement("p")
            description.className = "card-text"
            description.innerText = pokemons[i].description
            cardBody.appendChild(h5)
            cardBody.appendChild(description)
            card.appendChild(img)
            card.appendChild(cardBody)
            let cardGroup = document.getElementById("bodys")
            cardGroup.appendChild(card)
        }
    }
}