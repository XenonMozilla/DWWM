function chargeAPI(url){
    fetch(url)
        .then(data => {
            return data.json();
        })
        .then((data) =>{
            var stockage = url.slice(22,);
            stockage = stockage.split('/');
            var lienActu = window.location.href;
            lienActu = lienActu.split('?');
            lienActu[0] = lienActu[0].split('/')
            console.log(stockage[stockage.length - 2])
            switch (stockage[stockage.length - 2]){
                case 'films':
                    if (lienActu[0][lienActu[0].length - 1] == "lesFilms.html"){
                        startFilms(data);
                    }
                    else{
                        importFilm(data);
                    }
                    break;
                case 'people':
                    if(lienActu[0][lienActu[0].length - 1] == "lesPersonnages.html"){
                        startPersonnages(data);
                    }
                    else{
                        importPerso(data);
                    }
                    
                    break;
                case 'planets':
                    if (lienActu[0][lienActu[0].length - 1] == "lesPlanetes.html"){
                        startPlanetes(data,lienActu[1]);
                    }
                    else{
                        importPlanet(data,lienActu); 
                    }
                    break;
                case 'starships':
                    importVaisseaux(data);
                    break;
                case 'vehicles':
                    importVehicule(data);
                    break;
                case 'species':
                    importRace(data);
                    break;
                default :
                    return data
                    break;
            }
        });
}

function importPerso(data){
    generePerso.innerHTML += "<ul> - " + data.name;
}

function importPlanet(data,lienActu) {

    if(lienActu[lienActu.length - 1] == "lesPersonnages.html"){
        insideArticle.innerHTML += '<a href="lesPlanetes.html?' + data.url + '"> plan??tes de naissance :'  + data.name + '</a><br>'
    }
    else{
        generePlanetes.innerHTML += "<ul> - " + data.name;
    }
    
}

function importVaisseaux(data){
    genereVaisseaux.innerHTML += "<ul> - " + data.name;
}

function importVehicule(data){
    genereVehicule.innerHTML += "<ul> - " + data.name;
}

function importRace(data){
    genereRace.innerHTML += "<ul> - " + data.name;
}

function importFilm(data){
    genereFilm.innerHTML += "<ul> - " + data.title;
}

function startFilms(data , externe){

    var aucunfilm = 0
    var film = document.getElementById("navig");

    for (x = 0; x < data.results.length; x++){
        var newFilm = document.createElement('Div');
        newFilm.setAttribute("class", "card");
        newFilm.setAttribute("id", data.results[x].episode_id);
        var insideNewFilm = document.createElement('Div');
        insideNewFilm.setAttribute ("class", "card-body");
        insideNewFilm.innerHTML = data.results[x].title;
        newFilm.appendChild(insideNewFilm);
        film.appendChild(newFilm);
    }
    document.getElementById("1").addEventListener("click", function(){
        ajoutFilm(3);
    });
    document.getElementById("2").addEventListener("click", function(){
        ajoutFilm(4);
    });
    document.getElementById("3").addEventListener("click", function(){
        ajoutFilm(5);
    });
    document.getElementById("4").addEventListener("click", function(){
        ajoutFilm(0);
    });
    document.getElementById("5").addEventListener("click", function(){
        ajoutFilm(1);
    });
    document.getElementById("6").addEventListener("click", function(){
        ajoutFilm(2);
    });

    function ajoutFilm(nbr){

        if(aucunfilm == 0){
            
            aucunfilm = 1;
        }

        var insideArticle = document.getElementById("insideArticle");
        var generePerso = document.getElementById("generePerso");
        var generePlanetes = document.getElementById("generePlanetes");
        var genereVaisseaux = document.getElementById("genereVaisseaux");
        var genereVehicule = document.getElementById("genereVehicule");
        var genereRace = document.getElementById("genereRace");

        generePerso.innerHTML = "";
        insideArticle.innerHTML = "";
        generePlanetes.innerHTML = "";
        genereVaisseaux.innerHTML = "";
        genereVehicule.innerHTML = "";
        genereRace.innerHTML = "";

        insideArticle.innerHTML +="<h1>" + data.results[nbr].title + "</h1><br>" ;
        insideArticle.innerHTML +="<p>Generique de debut : " + data.results[nbr].opening_crawl + "</p><br>";
        insideArticle.innerHTML += "<p>Realisateur : " +  data.results[nbr].director + "</p><br>";
        insideArticle.innerHTML += "<p>Producteur : " + data.results[nbr].producer + "</p><br>";
        insideArticle.innerHTML += "<p>Date de sortie : " + data.results[nbr].release_date + "</p><br>";
        
        for (x = 0; x < data.results[nbr].characters.length; x++){
            chargeAPI(data.results[nbr].characters[x]);
        }

        for (x = 0; x < data.results[nbr].planets.length; x++){
            chargeAPI(data.results[nbr].planets[x]);
        }

        for (x = 0; x < data.results[nbr].starships.length; x++){
            chargeAPI(data.results[nbr].starships[x])
        }

        for (x = 0; x < data.results[nbr].vehicles.length; x++){
            chargeAPI(data.results[nbr].vehicles[x]);
        }

        for (x = 0; x < data.results[nbr].species.length; x++){
            chargeAPI(data.results[nbr].species[x]);
        }
    }
}

function startPlanetes(data,externe){

    var planet = document.getElementById("navig");
    var recup = 0;

    
    for (x = 0; x < 10; x++){
        var newPlanet = document.createElement('Div');
        newPlanet.setAttribute("class", "card");
        newPlanet.setAttribute("id", data.results[x].name);
        var insideNewPlanet = document.createElement('Div');
        insideNewPlanet.setAttribute ("class", "card-body");
        insideNewPlanet.innerHTML = data.results[x].name;
        newPlanet.appendChild(insideNewPlanet);
        planet.appendChild(newPlanet);
    }

    for (let x = 0; x < 10; x++){
        (function () {
            document.getElementById(data.results[x].name).addEventListener("click", function(){
                ajoutPlanet(data.results[x].name);
            },false);
        })();
         
    }

    if (externe != undefined){
        console.log(externe)
        document.getElementById("show").style.display = "block";
        recup = 1;

        chargeAPI(externe);
        console.log(data)


    }

    function ajoutPlanet(laPlanet){
        if(recup == 0){
            document.getElementById('show').style.display = "block";
            recup = 1;
        }

        
        var comparer = 0;
        while (laPlanet != data.results[comparer].name){
            comparer += 1;
        } 

        var insideArticle = document.getElementById("insideArticle");
        var generePerso = document.getElementById("generePerso");
        var genereFilm = document.getElementById("genereFilm");

        insideArticle.innerHTML = "";
        generePerso.innerHTML = "";
        genereFilm.innerHTML = "";
            
        insideArticle.innerHTML += "<h1>" + data.results[comparer].name;
        insideArticle.innerHTML += "<p> p??riode de rotation de la plan??te : " + data.results[comparer].rotation_period + "h</p> <br>";
        insideArticle.innerHTML += "<p> p??riode de r??volution de la plan??te : " + data.results[comparer].orbital_period + "j</p> <br>";
        insideArticle.innerHTML += "<p> Diametre de la plan??te : " + data.results[comparer].diameter + "km</p><br>";
        insideArticle.innerHTML += "<p> climat de la plan??te : " + data.results[comparer].climate + "</p><br>";
        insideArticle.innerHTML += "<p> gravit?? de la plan??te : " + data.results[comparer].gravity + "</p><br>";
        insideArticle.innerHTML += "<p> pourcentage de la plan??te recouverte d'eau : " + data.results[comparer].surface_water + "%</p><br>";
        insideArticle.innerHTML += "<p> Population de la plan??tes : " + data.results[comparer].population + " habitant</p><br>";

    
        if (data.results[comparer].residents.length == 0){
            generePerso.innerHTML += "<ul>aucun personnage ne viens de cette plan??te</ul>";
        }

        else{
            for (x = 0; x < data.results[comparer].residents.length; x++){
                chargeAPI(data.results[comparer].residents[x]);
            }
        }

        for (x = 0; x < data.results[comparer].films.length; x++){
            chargeAPI(data.results[comparer].films[x]);
        }
    }   
}

function startPersonnages(data){
    var recup = 0;
    var personnage = document.getElementById("navig");

    for (x = 0; x < 10; x++){
        var newPersonnage = document.createElement('Div');
        newPersonnage.setAttribute("class", "card");
        newPersonnage.setAttribute("id", data.results[x].name);
        var insideNewPersonnage = document.createElement('Div');
        insideNewPersonnage.setAttribute ("class", "card-body");
        insideNewPersonnage.innerHTML = data.results[x].name;
        newPersonnage.appendChild(insideNewPersonnage);
        personnage.appendChild(newPersonnage);
    }

    for (let x = 0; x < 10; x++){
        (function () {
            document.getElementById(data.results[x].name).addEventListener("click", function(){
                ajoutPersonnage(data.results[x].name);
            },false);
        })();
    }

    function ajoutPersonnage(perso){
        if(recup == 0){
            document.getElementById('show').style.display = "block";
            recup = 1;
        }

        var comparer = 0;

        while (perso != data.results[comparer].name){
            comparer += 1;
        } 

        var insideArticle = document.getElementById("insideArticle");
        var genereFilm = document.getElementById("genereFilm");
        var genereRace = document.getElementById("genereRace");
        var genereVaisseaux = document.getElementById("genereVaisseaux");
        var genereVehicule = document.getElementById("genereVehicule");

        insideArticle.innerHTML = "";
        genereFilm.innerHTML = "";
        genereRace.innerHTML = "";
        genereVehicule.innerHTML = "";
        genereVaisseaux.innerHTML = "";

        insideArticle.innerHTML += "<h1>" + data.results[comparer].name;
        insideArticle.innerHTML += "<p> taille : " + data.results[comparer].height + "cm</p><br>"
        insideArticle.innerHTML += "<p> poids : " + data.results[comparer].mass + "kg </p><br>"
        insideArticle.innerHTML += "<p> couleur de cheveux : " + data.results[comparer].hair_color + "</p><br>"
        insideArticle.innerHTML += "<p> couleur de peau : " + data.results[comparer].skin_color + "</p><br>"
        insideArticle.innerHTML += "<p> couleur des yeux : " + data.results[comparer].eye_color + "</p><br>"
        insideArticle.innerHTML += "<p> ann??e de naissance : " + data.results[comparer].birth_year + "</p><br>"
        insideArticle.innerHTML += "<p> genre : " + data.results[comparer].gender + "</p><br>"
        chargeAPI(data.results[comparer].homeworld)

        for (x = 0; x < data.results[comparer].films.length; x++){
            chargeAPI(data.results[comparer].films[x]);
        }

        if (data.results[comparer].species.length == 0){
            genereRace.innerHTML += "<ul>L'espece de ce personnage n'est pas sp??cifier</ul>";
        }

        else{
            for (x = 0; x < data.results[comparer].species.length; x++){
                chargeAPI(data.results[comparer].species[x]);
            }
        }

        if (data.results[comparer].vehicles.length == 0){
            genereVehicule.innerHTML += "<ul>Le personnage ne conduit aucun vehicule</ul>";
        }

        else{
            for (x = 0; x < data.results[comparer].vehicles.length; x++){
                chargeAPI(data.results[comparer].vehicles[x]);
            }
        }

        if (data.results[comparer].starships.length == 0){
            genereVaisseaux.innerHTML += "<ul>Le personnage ne pilote aucun vaisseau</ul>";
        }

        else{
            for (x = 0; x < data.results[comparer].starships.length; x++){
                chargeAPI(data.results[comparer].starships[x]);
            }
        }

    }
}