const resultCard = document.querySelector("#result-card");

fetch("marsrover.json")
    .then((response) => { return response.json() })
    .then((data) => {

// Hämta information:
const mars = data.results;
const searchString = document.querySelector("#searchInput");

const output = mars
.filter(n => photos.name.toLowerCase().includes(searchString))
.map(n => `<p>${photos.name}</p>`);

document.querySelector("#result-card").innerHTML = output;

    });