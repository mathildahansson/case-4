fetch("marsrover.json")
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
        
        <div id="box-img"><img src="${obj.img_src}" id="rover-photos"></div>

        <div id="box-info">
        <p><strong>Camera:</strong> ${obj.camera.full_name}</p>
        <p><strong>Earth date:</strong> ${obj.earth_date}</p>
        <p><strong>Sol:</strong> ${obj.sol}</p>
        </div>

        </div>`).join("");

        document.querySelector("#container").innerHTML = output;

    });