function start(){ //fonction qui se lance au chargement de la page
    var parameters =location.search.substring(1).split("&") //attraper les infos dans la barre de recherche et les separer

    if(parameters[3] === "same=1"){  // si on veut envoyer des infos pour une absence de un jour
        parameters.splice(7,3); // supprimer les infos pour une absence de plusieurs jours 
    }
    else if(parameters[3] === "same=2"){ // si on veut envoyer des infos pour une absence de plusieurs jours
        parameters.splice(4,3); // supprimer les infos pour une absence de un jour
    }

    for(x=0; x<parameters.length; x++){
        parameters[x]=parameters[x].split("=");// separer les info et leurs noms
    }


    var donneerecup =  document.getElementById("donnee-recup");
    donneerecup.innerHTML += "<p> nom : " + parameters[0][1] + "</p>";
    donneerecup.innerHTML += "<p> prenom : " + parameters[1][1] + "</p>";
    donneerecup.innerHTML += "<p> Formation suivi : " + parameters[2][1] + "</p>"; //mettre sur la page le nom / prenom / formation suivi


    if(parameters[3][1] == 1){ // si on a les info pour un jour d'absence
        parameters[5][1] = decodeURIComponent(parameters[5][1]);
        parameters[6][1] = decodeURIComponent(parameters[6][1]); //evite que les ":" deviennent des "%3A" (12%3A07 devient 12:07)

        donneerecup.innerHTML += "<p>demande de s'absenter le " + parameters[4][1] + " de " + parameters[5][1] + " à " + parameters[6][1] + "</p>";
        //mettre les info sur la page
    }
    else{//si on a les info pour plusieurs jour d'absence
        donneerecup.innerHTML +="<p> demande de s'absenter Du " + parameters[4][1] + " Au " + parameters[5][1] + " soit " + parameters[6][1] + " Jour complets </p>";
        //mettre les info sur la page
    }

    fetch ('scripts/motif.json')//recuperer les données du Json
    .then(response => {
        return response.json();
    })
    .then(data => {
        for(x = 0 ; x < data.members.length ; x++){
            for(y = 0 ; y < data.members[x].options.length; y++){ //double boucle pour recuperer chaque motif de chaque code d'absence
                if(data.members[x].options[y].op_id == parameters[7][1]){ //si l'id d'option d'un des motif corresponds a celui recuperer
                
                donneerecup.innerHTML += "<p>Motif de l'absence : " + data.members[x].options[y].op_label; + "</p>"; //mettre sur la page le motif d'absence trouvé
                }
            }
            
        }
    })
}

start()


