function chargeAPIFilms(){
    fetch('https://swapi.dev/api/films/')
        .then(data => {
            return data.json();
        })
        .then((data) =>{
            console.log(data);
            startFilms(data);
        });
}

function startFilms(data){


    var film = document.getElementById("navig");

    for (x = 0; x < data.results.length; x++){
        var newFilm = document.createElement('Div');
        newFilm.setAttribute("class", "card");
        newFilm.setAttribute("id", data.results[x].episode_id)
        var insideNewFilm = document.createElement('Div');
        insideNewFilm.setAttribute ("class", "card-body");
        insideNewFilm.innerHTML = data.results[x].title;
        newFilm.appendChild(insideNewFilm);
        film.appendChild(newFilm);
    }
    document.getElementById("1").addEventListener("click", function(){
        ajoutFilm(3)
    });
    document.getElementById("2").addEventListener("click", function(){
        ajoutFilm(4)
    });
    document.getElementById("3").addEventListener("click", function(){
        ajoutFilm(5)
    });
    document.getElementById("4").addEventListener("click", function(){
        ajoutFilm(0)
    });
    document.getElementById("5").addEventListener("click", function(){
        ajoutFilm(1)
    });
    document.getElementById("6").addEventListener("click", function(){
        ajoutFilm(2)
    });

    function ajoutFilm(nbr){
        var insideArticle = document.getElementById("insideArticle");
        insideArticle.innerHTML = "";
        insideArticle.innerHTML +="<h1>" + data.results[nbr].title + "</h1><br>" ;
        insideArticle.innerHTML +="<p>Generique de debut : " + data.results[nbr].opening_crawl + "</p><br>";
        insideArticle.innerHTML += "<p>Realisateur : " +  data.results[nbr].director + "</p><br>";
        insideArticle.innerHTML += "<p>Producteur : " + data.results[nbr].producer + "</p><br>";
        insideArticle.innerHTML += "<p>Date de sortie :" + data.results[nbr].release_date + "</p><br>";
    }
}       
