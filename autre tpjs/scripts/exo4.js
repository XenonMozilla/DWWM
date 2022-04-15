var coupMax = prompt("nombre de coup");
var nbMax = prompt("nombre max trouvable");
var nbMin = prompt("nombre min trouvable");
nbMin = parseInt(nbMin);
nbMax = parseInt(nbMax);
var nbATrouver = Math.floor(Math.random() * (nbMax - nbMin + 1) ) + nbMin;
console.log(nbATrouver);
var nbDonner = prompt();
var coup = 1;
console.log("coup = " + coup)

while (nbDonner != nbATrouver && coupMax != coup){

    if (nbDonner > nbATrouver){
        alert("trop grand")
    }
    else{
        alert("trop petit")
    }
    nbDonner = prompt()
    coup += 1

    console.log("coup = " + coup)
}

if (nbDonner != nbATrouver && coupMax == coup){
    alert("perdu le nombre a deviner etait " + nbATrouver)
}
else {
    alert("bravo tu a trouver le nombre " + nbATrouver)
}
