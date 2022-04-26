fetch ('motif.json')
.then(response => {
    return response.json();
})
.then(data => {
    // genMotif(data);
})   

var parameters =location.search.substring(1).split("&")

console.log(parameters)

if(parameters[3] === "same=1"){
    parameters.splice(7,3)
}
else if(parameters[3] === "same=2"){
    parameters.splice(4,3)
}

for(x=0; x<parameters.length; x++){
    parameters[x]=parameters[x].split("=")
    console.log(parameters[x])
}


var donneerecup =  document.getElementById("donnee-recup")
donneerecup.innerHTML += "<p> nom : " + parameters[0][1] + "</p>"
donneerecup.innerHTML += "<p> prenom : " + parameters[1][1] + "</p>"
donneerecup.innerHTML += "<p> Formation suivi : " + parameters[2][1] + "</p>"


if(parameters[3][1] == 1){
    parameters[5][1] = decodeURIComponent(parameters[5][1])
    parameters[6][1] = decodeURIComponent(parameters[6][1])

    donneerecup.innerHTML += "<p>demande de s'absenter le " + parameters[4][1] + " de " + parameters[5][1] + " à " + parameters[6][1] + "</p>"
}
else{
    
}