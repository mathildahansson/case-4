const apiKey = "11dDRgu72MePeDUUGFadfofpAf6Ccc3p45e1ekdf";
const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=11dDRgu72MePeDUUGFadfofpAf6Ccc3p45e1ekdf";

let displayData = document.querySelector("#display-data");


let button = document.querySelector("#searchButton");

// button.addEventListener("click", => () {})




 
    


    fetch(apiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const marsRover = data.photos;
        console.log(marsRover);



        const output = marsRover.map(obj => `
        <div id="box">

        <div id="box-header">
        <h2 id="rover-name">${obj.rover.name}</h2>
        <p id="id"><strong>ID:</strong> ${obj.id}</p>
        </div>
        
       <img src="${obj.img_src}" id="rover-photos">

        <div id="box-info">
        <p><strong>Camera:</strong> ${obj.camera.full_name}</p>
        <p><strong>Earth date:</strong> ${obj.earth_date}</p>
        <p><strong>Sol:</strong> ${obj.sol}</p>
        </div>

        </div>`).join("");

        document.querySelector("#display-data").innerHTML = output;

    });






