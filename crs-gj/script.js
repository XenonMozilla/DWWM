
class personnage{
    constructor(nom){

        this.hasard = function(min,max){
            return Math.floor(Math.random() * (max - min)) + min;  //random pour avoir des stats aleatoire
        }
//-------------------------Nom
        var _nom = "";

        this.getNom = function (){
            return _nom;
        }

        this.setNom = function(nouvNom){
           _nom = nouvNom ;
        }

        this.setNom(nom)
//-------------------------Vie
        var _vie = this.hasard(20,100);

        while (_vie > 100){
            _vie = this.hasard(20,100);
        }

        this.getVie = function () {
            return _vie;
        }
        this.setVie = function (nouvVie) {
            _vie = nouvVie;
            if(_vie <= 0){
                _existe = false; //Si _vie passe à 0 ou en dessous _existe passe à false et le joueur sort du tableau des combatants
                _vie = 0; //Si _vie passe en dessous de 0, _vie se retrouve à 0 (parce qu'on peut pas être plus mort que mort^^)
                console.log("%c oh non le " + this.getType() + " " + this.getNom() + " est décédé !","color:red;");
            }
        }

//-------------------------Attaque
        var _att = this.hasard(20,100)

        while (_att < 20 && _att > 100){
            _att = this.hasard(20,100);
        }

        this.getAtt = function(){
            return _att;
        }

        this.setAtt = function(nouvAtt){
            _att = nouvAtt;
        }

//-------------------------Defense
        var _def = this.hasard(20,100)

        while(_def < 20 && _def > 100){
            _def = this.hasard(20.100);
        }

        this.getDef = function(){
            return _def;
        }
        this.setDef = function(nouvDef){
            _def = nouvDef;
        }

//-------------------------Existe
        var _existe;
        var nouvExiste;
        this.getExiste = function () {
            return _existe;
        }

        this.setExiste = function (nouvExiste) {
            _existe = nouvExiste;
        }

//-------------------------Type

        var _type = ""

        this.getType = function () {
            return _type
        }

        this.setType = function(nouvType) {
            _type = nouvType;
        }


        if (_vie > 0 ) {
             nouvExiste=true;//class pour les stats des persos
             this.setExiste(nouvExiste)
        }
        this.info = function(){
            console.log("Nom : " + this.getNom() +" / Type : " + this.getType() + " / PV : " + this.getVie() + " / att : " + this.getAtt() + " / def : " + this.getDef())
        }

        this.attaquer = function(defenseur){
                    if (this.getVie() > 0 && defenseur.persoCRS.getVie() > 0){
                    console.log("Nouvelle attaque du " + this.getType() + this.getNom() + " sur " + defenseur.persoCRS.getType() + defenseur.persoCRS.getNom())
                    this.tour =+ 1

                    
                    if(this.getAtt() > defenseur.persoCRS.getDef()){
                        console.log(defenseur.persoCRS.getVie() + " defenseur");
                        defenseur.persoCRS.setVie(defenseur.persoCRS.getVie() - 10);
                        console.log("%c" + defenseur.persoCRS.getVie() + " defenseur" , "color : yellow;");//changement de la couleur du console.log
                    }
                    else if(this.getAtt() == defenseur.persoCRS.getDef()){
                        console.log("%c" + defenseur.persoCRS.getVie() + " defenseur" , "color : yellow;");//changement de la couleur du console.log
                        defenseur.persoCRS.setVie(defenseur.persoCRS.getVie() - 5) ;
                        console.log(defenseur.persoCRS.getVie()+ " defenseur");
                    }
                    else{
                        console.log(this.getVie() + " attaquant");
                        this.setVie(this.getVie() - 5) ;
                        console.log("%c" + this.getVie() + " attaquant" , "color : yellow;");//changement de la couleur du console.log
                    }
                }
             }
    
    }
}

class CRS{
    constructor(crsNom){
        var _crsNom = ""
        this.donnerNom = function(nouvCRSNom){
            _crsNom = nouvCRSNom;
        }

        this.recupNom = function(){
            return _crsNom;
        }

        this.donnerNom(crsNom);

        this.persoCRS = new personnage(this.recupNom());
        this.persoCRS.setAtt(this.persoCRS.getAtt() + 5);
        this.persoCRS.setDef(this.persoCRS.getDef() + 5);
        this.persoCRS.setVie(this.persoCRS.getVie() - 5);

        this.persoCRS.setType("CRS");
    }
}

class GJ{
    constructor(gjNom){
        var _gjNom = "";
        this.donnerNomGJ = function(nouvGJNom){
             _gjNom = nouvGJNom;
        }
        this.recupNom = function(){
            return _gjNom;
        }

        this.donnerNomGJ(gjNom);

        this.persoGJ = new personnage(this.recupNom());
        this.persoGJ.setAtt(this.persoGJ.getAtt() - 5);
        this.persoGJ.setDef(this.persoGJ.getDef() - 5);
        this.persoGJ.setVie(this.persoGJ.getVie() + 5);
    
        this.persoGJ.setType("GJ");
    }

}

class match{
    constructor(){
        this.depart = function (){
            var nomPerso = ""; 

            const nbrJoueur = 5;

            let player = []; //tableau contenant tous les personnages



            while (player.length != nbrJoueur){ // TANT QUE il n'y a pas le nombre de personnage demandé

            

                
                while(nomPerso == ""){ //TANT QUE le perso n'est pas nommé

                // alert("votre personnage n'est pas nommé, donnez lui un nom");
                nomPerso = prompt("donnez moi un nom"); // nomme le perso
                    var i 
                    var verifNom = false
                    for(i = 0; i< player.length; i++){
                        
                        if(nomPerso == player[i].persoCRS.getNom()){
                            verifNom = true
                        }
                    }

                    if (nomPerso != "" && verifNom !=true ){ 
                        let perso = new CRS(nomPerso); // crée un nouveau perso
                        player.push(perso)
                        console.log (perso)
                    }
                    else{
                        alert("Ce nom est déjà pris, choisis en un nouveau")
                    }
                                    
                }
                nomPerso = ""
            }

            // for (let i = 0; i < nbrJoueur; i++){ //boucle qui affiche les persos et leurs stats
            //     console.log(player[i])
            // }

            function GenRandomPerso(length) { // fonction pour avoir un perso au hasard
                return Math.floor(Math.random() * length);
            }
            let round = 0;
            let run = function(){ //le combat
                let j = GenRandomPerso(player.length)
                let fighter1 = player[j]

                let k = GenRandomPerso(player.length)
                let fighter2 = player[k] //mettre les persos en combattants

                    if (fighter1 != fighter2){ // condition pour eviter qu'un joueur se frappe lui meme ^^
                        round += 1;
                        console.log("%c round :" + round , "color:cyan;")
                    fighter1.persoCRS.attaquer(fighter2) //les resultat des attaques selon les degats de l'attaquant et la defense du defenseur
                    
                    if (fighter1.persoCRS.getExiste() == false){
                        player.splice(j, 1);
                    }

                    if(fighter2.persoCRS.getExiste() == false){
                        player.splice(k, 1)
                    }
                    // console.log(fighter1.getNom() + fighter1.getVie())
                    // console.log(fighter2)//afficher les stats apres l'attaque
                } 
                

            }


          
            while(player.length > 1){ //TANT QUE plus d'un joueur est vivant
                


                run() //combat
                
                console.log(player.length + " : personnage restant")
            }

            console.log ("%c fin de boucle", "color : #ff00f3;")

            

            let win = function(){
                var winner = player[0];
                console.log ("%c" + winner.persoCRS.getNom() + " a gagné", "color : lime;") // montre quel combattant est encore vivant
                player[0].persoCRS.info();
            }

            win()
        }
    }
}

let start = new match();
start.depart();




    // if (fighter1.getVie() <= 0){
    //     fighter1.setExiste(false)  ;
    //     console.log("%coh non, " + fighter1.getNom() + " est décédé", "color:red;" )
    //     // console.log(fighter1)
    //     player.splice(j, 1);
        
    // }
    // if (fighter2.getVie() <= 0){
    //     fighter2.setExiste(false);
    //     console.log("%coh non, " + fighter2.getNom() + " est décédé", "color:red;" )
    //     // console.log(fighter2)
    //     player.splice(k, 1)
    // }//cas si un des deux combattants meurt   