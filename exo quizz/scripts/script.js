function ChargeInfosJson() {
  fetch("format_quiz.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      start(data);
      
    });
}


function CreateDivs(data) {
  const question = document.getElementById("questionContainer");

  for (let x = 0; x < data.length; x++) {

    let questionListe = document.createElement("div");
    let questionTitre = document.createElement("h1");
    
    questionTitre.setAttribute("class", "titrequestion");
    questionListe.setAttribute("id", "question" + x);
    
    questionTitre.innerHTML += "<strong>Question : </strong>" + data[x].question;

    questionListe.appendChild(questionTitre);
    
    let repList = document.createElement("div");
    let contienChoix = document.createElement("div");
    contienChoix.setAttribute("class","contienChoix");
    repList.setAttribute("id", "reponseExplication" + x);
    for (let y = 0; y < data[x].choices.length; y++) {
      
      let propsListe = document.createElement("h2");

      propsListe.setAttribute("id", "titreprops" + x + "" + y);
      propsListe.setAttribute("class", "choix" + y)
      propsListe.innerHTML += data[x].choices[y];
      contienChoix.appendChild(propsListe);
    }

    repList.innerHTML = `<h3><strong>Réponse :</strong>  ${data[x].correct}</h3><p>${data[x].explanation}</p>`;
    questionListe.appendChild(contienChoix);
    questionListe.appendChild(repList);
    question.appendChild(questionListe);
    
    
  }
  bouton = document.createElement("button");
  bouton.setAttribute("id","bouton");
  bouton.setAttribute("type","button");
  bouton.setAttribute("class","btn btn-secondary");
  bouton.innerHTML += "suivant";
  question.appendChild(bouton);
}

var start = function (data) {
  CreateDivs(data);

  var round = 0;
  var score = 0;

  for (x = 0; x < data.length; x++){
    document.getElementById("question" + x).style.display = "none";
  }
  fondNormal()
  document.getElementById("question" + round).style.display = "block";
  document.getElementById("reponseExplication" + round).style.display = "none";
  
  document.getElementById("bouton").style.display = "none";

  document.getElementById("titreprops" + round + "0").addEventListener("click",resultat0);
  document.getElementById("titreprops" + round + "1").addEventListener("click",resultat1);
  document.getElementById("titreprops" + round + "2").addEventListener("click",resultat2);
  document.getElementById("titreprops" + round + "3").addEventListener("click",resultat3);

  
  function resultat0() {
    var stock = document.getElementById("titreprops" + round + "0");
    document.getElementById("titreprops" + round + "0").removeEventListener("click",resultat0);
    document.getElementById("titreprops" + round + "1").removeEventListener("click",resultat1);
    if(data[round].choices.length > 2){
      document.getElementById("titreprops" + round + "2").removeEventListener("click",resultat2);
    }
    if(data[round].choices.length == 4){
      document.getElementById("titreprops" + round + "3").removeEventListener("click",resultat3);
    }
    
    if (stock.innerHTML == data[round].correct){
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      document.getElementById("titreprops" + round + "0").style.backgroundColor = "green";
      fondCorrect();
      score += 1;
    }
    else{
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      document.getElementById("titreprops" + round + "0").style.backgroundColor = "red"
      fondFaux();
    }
    
  }
  function resultat1() {
    document.getElementById("titreprops" + round + "0").removeEventListener("click",resultat0);
    document.getElementById("titreprops" + round + "1").removeEventListener("click",resultat1);
    if(data[round].choices.length > 2){
      document.getElementById("titreprops" + round + "2").removeEventListener("click",resultat2);
    }
    if(data[round].choices.length == 4){
      document.getElementById("titreprops" + round + "3").removeEventListener("click",resultat3);
    }
    var stock = document.getElementById("titreprops" + round + "1");
    if (stock.innerHTML == data[round].correct){
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      document.getElementById("titreprops" + round + "1").style.backgroundColor = "green"
      fondCorrect();
      score += 1;
      
    }
    else{
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      document.getElementById("titreprops" + round + "1").style.backgroundColor = "red";
      fondFaux();
    }
    
  }
  function resultat2() {
    document.getElementById("titreprops" + round + "0").removeEventListener("click",resultat0);
    document.getElementById("titreprops" + round + "1").removeEventListener("click",resultat1);
    if(data[round].choices.length > 2){
      document.getElementById("titreprops" + round + "2").removeEventListener("click",resultat2);
    }
    if(data[round].choices.length == 4){
      document.getElementById("titreprops" + round + "3").removeEventListener("click",resultat3);
    }
    var stock = document.getElementById("titreprops" + round + "2");
    if (stock.innerHTML == data[round].correct){
      document.getElementById("titreprops" + round + "2").style.backgroundColor = "green";
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      fondCorrect();
      score += 1;
    }
    else{
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      document.getElementById("titreprops" + round + "2").style.backgroundColor = "red";
      fondFaux();
    }
    
  }
  function resultat3() {
    document.getElementById("titreprops" + round + "0").removeEventListener("click",resultat0);
    document.getElementById("titreprops" + round + "1").removeEventListener("click",resultat1);
    if(data[round].choices.length > 2){
      document.getElementById("titreprops" + round + "2").removeEventListener("click",resultat2);
    }
    if(data[round].choices.length == 4){
      document.getElementById("titreprops" + round + "3").removeEventListener("click",resultat3);
    }
    var stock = document.getElementById("titreprops" + round + "3");
    if (stock.innerHTML == data[round].correct){
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      document.getElementById("titreprops" + round + "3").style.backgroundColor = "green";
      fondCorrect();
      score += 1;
    }
    else{
      document.getElementById("reponseExplication" + round).style.display = "block";
      document.getElementById("bouton").style.display = "block";
      document.getElementById("titreprops" + round + "3").style.backgroundColor = "red";
      fondFaux();
    }
    
  }

  document.getElementById("bouton").addEventListener("click",questSuivant);
  function questSuivant(){
    document.getElementById("question" + round).style.display = "none";
    round += 1;
    document.getElementById("bouton").style.display = "none";
    fondNormal();
    if (round < data.length){
    document.getElementById("question" + round).style.display = "block";
    document.getElementById("reponseExplication" + round).style.display = "none";
    document.getElementById("titreprops" + round + "0").addEventListener("click",resultat0);
    document.getElementById("titreprops" + round + "1").addEventListener("click",resultat1);
    document.getElementById("titreprops" + round + "2").addEventListener("click",resultat2);
    document.getElementById("titreprops" + round + "3").addEventListener("click",resultat3);
    }
    else{
      document.getElementById("questionContainer").innerHTML += "<h1>Felicitation !<br> vous avez eu un total de " + score + " points !</h1>"
    }
  }

  function fondCorrect(){
    document.getElementById("body").style.background ="linear-gradient(0deg,hsl(0deg 0% 0%) 0%,hsl(106deg 100% 5%) 8%,hsl(108deg 96% 10%) 15%,hsl(108deg 97% 15%) 21%,hsl(108deg 98% 21%) 27%,hsl(108deg 97% 26%) 34%,hsl(108deg 97% 31%) 42%,hsl(108deg 98% 36%) 53%,hsl(108deg 97% 42%) 67%,hsl(108deg 97% 47%) 100%)";
  }
  function fondFaux(){
    document.getElementById("body").style.background = "linear-gradient(0deg,hsl(0deg 0% 0%) 0%,hsl(0deg 100% 5%) 8%,hsl(0deg 96% 10%) 15%,hsl(0deg 97% 15%) 21%,hsl(0deg 98% 21%) 27%,hsl(0deg 97% 26%) 34%,hsl(0deg 97% 31%) 42%,hsl(0deg 98% 36%) 53%,hsl(0deg 97% 42%) 67%,hsl(0deg 97% 47%) 100%)";
  }
  function fondNormal(){
    document.getElementById("body").style.background = "linear-gradient(0deg,hsl(192deg 100% 50%) 0%,hsl(197deg 100% 48%)45%,hsl(204deg 100% 47%) 61%,hsl(213deg 100% 45%) 76%,hsl(240deg 100% 43%) 100%";

  }
};

