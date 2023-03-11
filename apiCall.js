var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var getDailyIMG = function(url) {

    const h3 = document.querySelector("#imgTitle");
    const p = document.querySelector("#desc");
    const aimghd = document.querySelector("#imgHD");

    fetch(url, requestOptions)
        .then(response => 
            response.json())
        .then(result => {

            console.log(result);

            var title = document.createTextNode(result.title);
            var desc = document.createTextNode(result.explanation);

            const img = "url('" + result.url + "')"; //versión hd: hdurl (tarda más en cargar)
            
            document.body.style.backgroundImage = img;

            h3.appendChild(title);
            p.appendChild(desc);
            aimghd.href = result.hdurl;

        })
            
        .catch(error => 
            console.log('error', error));

}

const json = getDailyIMG("https://api.nasa.gov/planetary/apod?api_key=jhGISIlXsL9Xw2d93pdklkpvOc9TUKjPJGyTaB6M");