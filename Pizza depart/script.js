var compteur = 0

var chargement = function (){
    compteur += 1
    if (compteur % 2 != 0){
        fetch ('data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            creerPizza(data);
        })   
    }
    else{
        var remove = document.getElementsByClassName("preview")[0];

        remove.innerHTML = ""
    }
    
}

var creerPizza = function(data) {
    const preview = document.getElementsByClassName("preview")[0];

    const nomPizzeria = document.createElement("div");
    nomPizzeria.innerHTML = data.nom;

    const sloganPizzeria = document.createElement("div");
    sloganPizzeria.innerHTML = data.slogan;

    preview.appendChild(nomPizzeria);
    preview.appendChild(sloganPizzeria);

    const pizzeriaListPizzas=document.createElement("div");
    pizzeriaListPizzas.setAttribute("class","les-pizza")

    var lesPizzas = data.pizzas;
    
    for(var x=0; x < lesPizzas.length; x++){

        var pizza = document.createElement("div");
        pizza.innerHTML += '<h1>' + lesPizzas[x].nomPizza + '</h1> <h2>' + lesPizzas[x].prix + '</h2> <img src ="' + lesPizzas[x].image + '">' 

        for(var y=0; y < lesPizzas[x].garniture.length; y++){
            pizza.innerHTML += '<li>' + lesPizzas[x].garniture[y] + '</li>'
        }
        pizzeriaListPizzas.appendChild(pizza);
    }
    preview.appendChild(pizzeriaListPizzas)
}


