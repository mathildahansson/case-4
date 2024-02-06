// Metod
var method = "GET";

// API + Endpoints
const apiKey = "11dDRgu72MePeDUUGFadfofpAf6Ccc3p45e1ekdf";
var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=";

// DOM Element
const searchString = document.querySelector("#dateSearch").value;
const displayData = document.querySelector("#display-data");
const form = document.querySelector("#searchForm");

// Formulär-hantering
function handleSearch(event) {
    event.preventDefault(); // Sidan ska inte laddas on
    console.log("Allt är OK.");

    // Fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const apiData = data;
            console.log(apiData);

            // Visa information på sidan
            document.querySelector("#display-data").innerHTML = `
    <h3>${data.title}</h3>
    <img src="${data.hdurl}" alt="APOD" id="apod-img">
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Copyright:</strong> ${data.copyright}</p>
    <details><summary>Explanation</summary>
    <p>${data.explanation}</p></details>`;
        });


    console.log(fetch(url));
}

