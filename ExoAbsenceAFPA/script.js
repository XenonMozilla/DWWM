var chopperRadio = document.getElementById("check-1")
var chopperRadioBis = document.getElementById("check-2")
var unJour = document.getElementById("un-jour")
var plusJour = document.getElementById("plus-jour")

fetch ('motif.json')
.then(response => {
    return response.json();
})
.then(data => {
    genMotif(data);
})   

if (chopperRadio.checked == true){
    console.log (chopperRadio.checked)
    unJour.style.display = "block";
}
else{

    unJour.style.display = "none";
}

if (chopperRadioBis.checked == true){
    plusJour.style.display = "block";
}
else{
    plusJour.style.display = "none";
}

var load = function(){
    if (chopperRadio.checked == true){
        unJour.style.display = "block";
    }
    else{

        unJour.style.display = "none";
    }

    if (chopperRadioBis.checked == true){
        plusJour.style.display = "block";
    }
    else{
        plusJour.style.display = "none";
    }
}
genMotif = function (data){
    const Abs = document.getElementsByClassName("abs")[0];

    const topTitre = document.createElement("tr");
    topTitre.innerHTML = data.topTitle

    console.log(topTitre)
    Abs.appendChild(topTitre);

    var lesCodes = data.members;
    const stock = document.createElement("tr");

    for(x = 0; x < lesCodes.length; x++){
        console.log("hear")
        var code = document.createElement("tr")
        var autrecode = document.createElement("tr")
        code.innerHTML += '<td id ="' + lesCodes[x].id + '">' + lesCodes[x].name + ":" + lesCodes[x].title + "</td>"

        for (y = 0 ; y < lesCodes[x].options.length; y++ ){
            if (lesCodes[x].options[y].op_label != ""){
                console.log("there")
                autrecode.innerHTML += '<li><input type="checkbox" id="' + lesCodes[x].options[y].op_id +'" name="'+ lesCodes[x].options[y].op_id +'"> <label for="' + lesCodes[x].options[y].op_id +'">'+ lesCodes[x].options[y].op_label +'</li>'
            }
        }
        stock.appendChild(code)
        stock.appendChild(autrecode)
    }
    Abs.appendChild(stock)
}
