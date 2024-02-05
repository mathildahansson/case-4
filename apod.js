const api = "https://api.nasa.gov/planetary/apod?api_key=11dDRgu72MePeDUUGFadfofpAf6Ccc3p45e1ekdf";
const displayData = document.querySelector("#display-data");

fetch(api)
.then(response => response.json())
.then(data => {

    const apodContent = data;
    console.log(apodContent);


    document.querySelector("#display-data").innerHTML = `
    <h3>${data.title}</h3>
    <img src="${data.hdurl}" alt="APOD" id="apod-img">
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Copyright:</strong> ${data.copyright}</p>
    <details><summary>Explanation</summary>
    <p>${data.explanation}</p></details>`;

});

