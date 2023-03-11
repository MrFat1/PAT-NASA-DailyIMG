var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const form = document.querySelector("#submit");

form.addEventListener('submit', function (event) {

    event.preventDefault(); //Cancel event

    const fecha = form.elements['fecha'];
    let date = fecha.value;

    const camera = form.elements['select'];
    let cam = camera.value;

    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&camera=" + cam + "&api_key=jhGISIlXsL9Xw2d93pdklkpvOc9TUKjPJGyTaB6M";

    fetch(url, requestOptions)
        .then(response => 
            response.json())
        .then(result => {

            console.log(result);

            if (result.photos.length == 0) {
                alert("No hay fotos disponibles para esa fecha o esa cámara.");
            } else {

                for (let i = 0; i<result.photos.length; i++) {

                    var div = document.createElement("div")
                    div.classList.add("col-md-4");

                    var div2 = document.createElement("div");
                    div2.classList.add("thumbnail");

                    var divcaption = document.createElement("div");
                    divcaption.classList.add("caption");

                    var br = document.createElement("br");
                    var br2 = document.createElement("br");

                    var p = document.createElement("p");
                    p.appendChild(document.createTextNode("Cámara: " + result.photos[i].camera.full_name));
                    p.appendChild(br);
                    p.appendChild(document.createTextNode("Fecha: " + result.photos[i].earth_date));
                    p.appendChild(br2);
                    p.appendChild(document.createTextNode("ID: " + result.photos[i].id));

                    var a = document.createElement("a");
                    var img = document.createElement("img");

                    divcaption.appendChild(p);

                    a.href = result.photos[i].img_src;
                    img.src = result.photos[i].img_src;

                    a.appendChild(img);
                    a.appendChild(divcaption);
                    div2.appendChild(a);
                    div.appendChild(div2);
                    document.getElementById("galeria").appendChild(div);
                }

            }

        })
            
        .catch(error => 
            console.log('error', error));

});

form.addEventListener("reset", function(event){ //clear

    event.preventDefault();

    var maindiv = document.getElementById("galeria");

    maindiv.innerHTML = "";

});