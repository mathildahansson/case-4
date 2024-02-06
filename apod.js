// Metod
var method = "GET";

// API + Endpoints
const apiKey = "11dDRgu72MePeDUUGFadfofpAf6Ccc3p45e1ekdf";
let url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

// Endpoint URL
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// DOM Element
// const searchString = document.querySelector("#dateSearch").value;
const searchString = document.querySelector("#dateInput").value;
const displayData = document.querySelector("#display-data");
const form = document.querySelector("#searchForm");

// Formulär-hantering
function handleSearch(event) {
    event.preventDefault(); // Sidan ska inte laddas on
    console.log("Is it working?");

    const dateInput = document.querySelector("#dateInput").value;
    console.log("Valt datum:", dateInput);
    url += `&date=${dateInput}`;

    // Fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const apiData = data;
            console.log(apiData, searchString);

            // Visa information på sidan
            document.querySelector("#display-data").innerHTML = `
    <h3 id="title">${data.title}</h3>
    <img src="${data.hdurl}" alt="APOD" id="apod-img">
    <div id="img-info">
    <p id="info"><strong>Date:</strong> ${data.date}</p>
    <p id="info"><strong>Copyright:</strong> ${data.copyright}</p>
    </div>
    <details><summary>Explanation</summary>
    <p>${data.explanation}</p></details>`;
        })
        .catch(error => console.log(error));
}
