//  Getting the current year and passing it to the copyright
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

// Getting information from JSON
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(function (response) {
    return response.json();
    })

    .then(function (jsonObject) {
        const towns = jsonObject ["towns"]

        getInformation(towns, 0);
        getInformation(towns, 2);
        getInformation(towns, 6);
        
    });

function getInformation(list, index) {
    let card = document.createElement("section")
    let h2 = document.createElement("h2")
    let motto = document.createElement("p")
    let year = document.createElement("p")
    let population = document.createElement("p")
    let rain = document.createElement("p")
    let image = document.createElement("img")
    
    h2.textContent = list[index].name;
    motto.textContent = list[index].motto
    year.textContent = `Year Founded: ${list[index].yearFounded}`;
    population.textContent = `Population: ${list[index].currentPopulation}`;
    rain.textContent = `Annual Rain Fall: ${list[index].averageRainfall}`;

    image.setAttribute("src", `../lesson9/images/${list[index].photo}`)
    image.setAttribute("alt", `${list[index].name} with snow`)

    motto.setAttribute("class", "motto")

    card.appendChild(h2)
    card.appendChild(motto)
    card.appendChild(year)
    card.appendChild(population)
    card.appendChild(rain)
    card.appendChild(image)

    document.querySelector('div.townCard').appendChild(card)
}