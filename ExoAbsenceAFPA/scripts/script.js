
function debut() {
    var chopperRadio = document.getElementById("check-1");
    var chopperRadioBis = document.getElementById("check-2");
    var unJour = document.getElementById("un-jour");
    var plusJour = document.getElementById("plus-jour");

    fetch ('scripts/motif.json') //ramasse les données du Json puis génere les motif
    .then(response => {
        return response.json();
    })
    .then(data => {
        genMotif(data);
    })   
    //verifier au lancement si y'a un des deux radio de cliquer
    if (chopperRadio.checked == true){
        console.log (chopperRadio.checked);
        unJour.style.display = "grid";
    }
    else{

        unJour.style.display = "none";
    }

    if (chopperRadioBis.checked == true){
        plusJour.style.display = "grid";
    }
    else{
        plusJour.style.display = "none";
    }
    var load = function(){
        //verifie a chaque clique sur un des radio lequel est actif
        if (chopperRadio.checked == true){
            unJour.style.display = "grid";
        }
        else{

            unJour.style.display = "none";
        }

        if (chopperRadioBis.checked == true){
            plusJour.style.display = "grid";
        }
        else{
            plusJour.style.display = "none";
        }
    }
 genMotif = function (data){
        const Abs = document.getElementsByClassName("abs")[0]; //variable pour pouvoir mettre du texte dans la table "abs"

        const topTitre = document.createElement("tr");
        topTitre.innerHTML = data.topTitle; //mettre "motif de l'absence" au tout debut le la table"

        Abs.appendChild(topTitre);

        var lesCodes = data.members;
        const stock = document.createElement("tr"); //sert a recup des info des boucles

        for(x = 0; x < lesCodes.length; x++){ //premiere boucle pour mettre chaque code d'absence contenant les motifs
            var code = document.createElement("tr");
            var autrecode = document.createElement("tr");
            code.innerHTML += '<td id ="' + lesCodes[x].id + '">' + lesCodes[x].name + ":" + lesCodes[x].title + "</td>";

            for (y = 0 ; y < lesCodes[x].options.length; y++ ){
                if (lesCodes[x].options[y].op_label != ""){ //deuxieme boucle pour mettre les motifs dans des checkbox pour les ramener a l'autre page
                    autrecode.innerHTML += '<li><input type="radio" name="motif" id="' + lesCodes[x].options[y].op_id +'" value="'+ lesCodes[x].options[y].op_id +'"> <label for="' + lesCodes[x].options[y].op_id +'">'+ lesCodes[x].options[y].op_label +'</li>';
                }
            }
            stock.appendChild(code);
            stock.appendChild(autrecode); //stocker les infos des boucles
        }
        Abs.appendChild(stock); //mettre les infos stocker dans la table
    }

}

debut();




