jQuery(document).ready(function ($) {
	const srcImg = "images/"; // emplacement des images de l'appli
	const albumDefaultMini = srcImg + "noComicsMini.jpeg";
	const albumDefault = srcImg + "noComics.jpeg";
	const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
	const srcAlbum = "albums/"; // emplacement des images des albums en grand

	//api meteo
	function AppelApi() {
		var callBackGetSuccess = function (data) {
		  var element = document.getElementById("api-meteo-p");
		  element.innerHTML ="La temperature en Californie est de " + Math.round(data.main.temp)  + "°C avec comme temps : " + data.weather[0].description;
		};
		var url = "https://api.openweathermap.org/data/2.5/weather?q=California,USA&appid=c21a75b667d6f7abb81f118dcf8d4611&lang=fr&units=metric";
	  
		$.get(url, callBackGetSuccess);
	}
	AppelApi();

	// Affichage des BD
	var txtSerie = document.getElementById("serie");
	var txtNumero = document.getElementById("numero");
	var txtTitre = document.getElementById("titre");
	var txtAuteur = document.getElementById("auteur");
	var txtPrix = document.getElementById("prix");
	var imgAlbum = document.getElementById("album");
	var imgAlbumMini = document.getElementById("albumMini");
	var toPanier = document.getElementById("toPanier");
	

	toPanier.addEventListener("click", function () {
		ajouterPanier()
	});

	toPanier.style.display = "none";

	imgAlbum.addEventListener("error", function () {
		prbImg(this)
	});

	imgAlbumMini.addEventListener("error", function () {
		prbImg(this)
	});

	var id = document.getElementById("id");
	id.addEventListener("change", function () {
		getAlbum(this.value)
	});

	/**
	 * Récupération de l'album par son id et appel de 
	 * la fonction d'affichage
	 * 
	 * @param {number} num 
	 */
	function getAlbum(num) {

		var album = albums.get(num);

		if (album === undefined) {
			txtSerie.value = "";
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;
			toPanier.style.display = "none";

			afficheAlbums($("#albumMini"), $("#album"), albumDefaultMini, albumDefault);

		} else {

			var serie = series.get(album.idSerie);
			var auteur = auteurs.get(album.idAuteur);

			id.value = num;
			txtSerie.value = serie.nom;
			txtNumero.value = album.numero;
			txtTitre.value = album.titre;
			txtAuteur.value = auteur.nom;
			txtPrix.value = album.prix;
			toPanier.style.display = "block";

			var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

			afficheAlbums(
				$("#albumMini"),
				$("#album"),
				srcAlbumMini + nomFic + ".jpg",
				srcAlbum + nomFic + ".jpg"
			);
		}
	}

	/**
	 * Affichage des images, les effets sont chainés et traités
	 * en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	 * pour éviter l'accumulation d'effets si défilement rapide des albums.
	 * 
	 * @param {object jQuery} $albumMini 
	 * @param {object jQuery} $album 
	 * @param {string} nomFic 
	 * @param {string} nomFicBig 
	 */
	function afficheAlbums($albumMini, $album, nomFicMini, nomFic) {
		$album.stop(true, true).clearQueue().fadeOut(100, function () {
			$album.attr('src', nomFic);
			$albumMini.stop(true, true).clearQueue().fadeOut(150, function () {
				$albumMini.attr('src', nomFicMini);
				$albumMini.slideDown(200, function () {
					$album.slideDown(200);
				});
			})
		});
	}

	/**
	 * Affichage de l'image par défaut si le chargement de l'image de l'album
	 * ne s'est pas bien passé
	 * 
	 * @param {object HTML} element 
	 */
	function prbImg(element) {
		// console.log(element);
		if (element.id === "albumMini")
			element.src = albumDefaultMini;
		else element.src = albumDefault;
	}

	//affichage panier
	var panier = new Array;
	var count = 0;
	var total = 0;
	var nbrContenuPanier = document.getElementById('nbrContenuPanier');
	var contenuPanier = document.getElementById("contenuPanier");
	var totalPanier = document.getElementById("totalPanier");
	var panierVide = document.getElementById("panierVide");
	document.getElementById('commander').style.display = 'none'

	nbrContenuPanier.innerHTML = count;
	totalPanier.innerHTML = total;
	
	//DEBUT PARTIE AJOU PANIER

	function ajouterPanier (plus){

		var panierTitle = txtTitre.value;
		var panierLinkAlbum = srcAlbumMini + txtSerie.value + "-" + txtNumero.value + "-" + txtTitre.value + ".jpg";
		panierLinkAlbum = panierLinkAlbum.replace("'", "");
		var compar = false;
		var order = 0;
		// var hello = "hello ";
		// var world = "world";
		// console.log (hello + world);
		var keep = 0;
		var panierPrix = parseFloat(txtPrix.value);
		var prixOriginal = parseFloat(txtPrix.value);	

		for(x = 0; x < panier.length; x++){
			if (panierTitle == panier[x].panierTitle){
				compar = true;
				keep = x;
			}
		}

		if (compar == false && plus == undefined){//Si item n'est pas dans le panier
			var nbrExemplaire = 1;
			panier.push ({panierTitle, panierLinkAlbum, nbrExemplaire, panierPrix, prixOriginal, order});
			order += 1;
			total += panierPrix;
		}

		else if(plus == undefined){//si item deja dans le panier mais pas ajouter depuis celui ci
			panier[keep].nbrExemplaire += 1;
			panier[keep].panierPrix += panierPrix;
			total += panierPrix;
		}

		else{//si item ajouter depuis le panier
			panier[plus].nbrExemplaire += 1;
			panier[plus].panierPrix += panier[plus].prixOriginal;
			total += panier[plus].prixOriginal;
		}

		count += 1;
		nbrContenuPanier.innerHTML = count;
		totalPanier.innerHTML = Math.round(total*100)/100;

		contenuPanier.innerHTML = "";

		for (x = 0; x < panier.length; x++){
			var nouvItemPanier = document.createElement('div');
			var plusEtMoins = document.createElement('div');
			plusEtMoins.setAttribute("id","plusEtMoins");
			nouvItemPanier.setAttribute("id", "item" + x);
			nouvItemPanier.setAttribute("class", "item");
			nouvItemPanier.innerHTML += "<h4>" + panier[x].panierTitle + "</h4>";
			nouvItemPanier.innerHTML += "<h6>nombre d'exemplaire : " + panier[x].nbrExemplaire + "</h6>";
			nouvItemPanier.innerHTML += "<h6> prix : " + (Math.round(panier[x].panierPrix*100)/100) + " euro </h6>";
			nouvItemPanier.innerHTML += '<img src="' + panier[x].panierLinkAlbum + '">';
			plusEtMoins.innerHTML += '<h4 class="click" id="ajou' + x + '">+</h4>';
			plusEtMoins.innerHTML += '<h4 class="click" id="suppr' + x + '">-</h4>';
			nouvItemPanier.appendChild(plusEtMoins);
			contenuPanier.appendChild(nouvItemPanier);

			let posiSuppr = x;
			(function () {
				document.getElementById("suppr" + x).addEventListener("click", function(){
					supprimerPanier(posiSuppr);
				});
			})();

			let posiAjou = x;
			(function () {
				document.getElementById("ajou" + x).addEventListener("click", function(){
					ajouterPanier(posiAjou);
				});
			})();
		}

		if(contenuPanier.innerHTML != ""){
			panierVide.style.display = "none";
			document.getElementById('commander').style.display = 'block'
		}

	}
	//FIN PARTIE AJOU PANIER

	//DEBUT PARTIE SUPPR PANIER
	function supprimerPanier(itemASupprimer){

		var prixARetier = panier[itemASupprimer].prixOriginal;

		if (panier[itemASupprimer].nbrExemplaire > 1){
			panier[itemASupprimer].nbrExemplaire -= 1;
			panier[itemASupprimer].panierPrix -= panier[itemASupprimer].prixOriginal;

		}
		else{
			panier.splice(itemASupprimer,1);
		}

		total -= prixARetier;
		count -= 1;
		nbrContenuPanier.innerHTML = count;
		totalPanier.innerHTML = Math.round(total*100)/100;

		contenuPanier.innerHTML = "";

		for (x = 0; x < panier.length; x++){
			var nouvItemPanier = document.createElement('div');
			var plusEtMoins = document.createElement('div');
			plusEtMoins.setAttribute("id","plusEtMoins");
			nouvItemPanier.setAttribute("id", "item" + x);
			nouvItemPanier.setAttribute("class", "item");
			nouvItemPanier.innerHTML += "<h4>" + panier[x].panierTitle + "</h4>";
			nouvItemPanier.innerHTML += "<h6>nombre d'exemplaire : " + panier[x].nbrExemplaire + "</h6>";
			nouvItemPanier.innerHTML += "<h6> prix : " + (Math.round(panier[x].panierPrix*100)/100) + " euro </h6>";
			nouvItemPanier.innerHTML += '<img src="' + panier[x].panierLinkAlbum + '">';
			plusEtMoins.innerHTML += '<h4 class="click" id="ajou' + x + '">+</h4>';
			plusEtMoins.innerHTML += '<h4 class="click" id="suppr' + x + '">-</h4>';
			nouvItemPanier.appendChild(plusEtMoins);
			contenuPanier.appendChild(nouvItemPanier);
		}

		for (x = 0; x< panier.length; x++){
			let posiSuppr = x;

			(function () {
				document.getElementById("suppr" + x).addEventListener("click", function(){
					supprimerPanier(posiSuppr);
				});
			})();

			let posiAjou = x;
			(function () {
				document.getElementById("ajou" + x ).addEventListener("click", function(){
					ajouterPanier(posiAjou);
				});
			})();
		}

		if(contenuPanier.innerHTML == ""){
			panierVide.style.display = "block";
			document.getElementById('commander').style.display = 'none'
		}
	}

	//FIN PARTI SUPPR PANIER

	var lesBD = new Array;

	//GENERER TOUT LES BD EN BAS
	var listeBD = document.getElementById('listeBD');

	var aucunResult = document.getElementById('aucunResult');
	
	function genereTousBd(){

		aucunResult.style.display = "none";
		
		var w = 0;
		for (const element of albums) {
			lesBD[w] = [element[1].titre, element[1].idSerie, element[1].numero, element[0], element[1].idAuteur];
			w += 1;
		}

		for (x = 0; x < lesBD.length; x++){
			var nouvelleBD = document.createElement('div');
			nouvelleBD.setAttribute("id", lesBD[x][3]);
			nouvelleBD.setAttribute("class", "bd");

			var nouvSerie = series.get(lesBD[x][1]);

			var creerImageBD = nouvSerie.nom + "-" + lesBD[x][2] + "-" + lesBD[x][0];
			creerImageBD = creerImageBD.replace(/'|!|\?|\.|"|:|\$/g, "");

			link = srcAlbumMini + creerImageBD + '.jpg';
			nouvelleBD.innerHTML = '<img src="' + link + '">';

			listeBD.appendChild(nouvelleBD);

			let recupID = lesBD[x][3];

			(function () {
				document.getElementById(lesBD[x][3]).addEventListener("click", function(){
					getAlbum(recupID);
					$("html, body").animate({ scrollTop: 0 }, "slow");
				});
			})();
		}
	}
	genereTousBd();
	//FIN GENERER

	//DEBUT FILTRE
	var listeAFiltrer = listeBD.getElementsByTagName("div");
	var recherche = document.getElementById("champRecherche");
	var unTitre = document.getElementById("unTitre");
	var unAuteur = document.getElementById("unAuteur");
	var uneSerie = document.getElementById("uneSerie");
	var erreur0Choix = document.getElementById("erreur0Choix");
	var nouvRecherche = document.getElementById("champRecherche");
		
	recherche.addEventListener("keyup", function(){
		if (unTitre.checked == false && unAuteur.checked == false && uneSerie.checked == false){
			erreur0Choix.style.display = "block";
		}
		
		else if(unTitre.checked == true){
			document.getElementById("reset").style.display = "block";
			erreur0Choix.style.display = "none";
			filtrer("titre",nouvRecherche.value);
		}
		else if(unAuteur.checked == true){
			document.getElementById("reset").style.display = "block";
			erreur0Choix.style.display = "none";
			filtrer("auteur",nouvRecherche.value);
		}
		else if(uneSerie.checked == true){
			document.getElementById("reset").style.display = "block";
			erreur0Choix.style.display = "none";
			filtrer("serie",nouvRecherche.value);
		}
		if(nouvRecherche.value == ""){
			document.getElementById("reset").style.display = "none";
			erreur0Choix.style.display = "none";
		}		
	});

	unTitre.addEventListener("click",function(){
		if(nouvRecherche.value != ""){
			document.getElementById("reset").style.display = "block";
			erreur0Choix.style.display = "none";
			filtrer("titre",nouvRecherche.value);
		}
	});

	unAuteur.addEventListener("click",function(){
		if(nouvRecherche.value != ""){
			document.getElementById("reset").style.display = "block";
			erreur0Choix.style.display = "none";
			filtrer("auteur",nouvRecherche.value);
		}
	});

	uneSerie.addEventListener("click",function(){
		if(nouvRecherche.value != ""){
			document.getElementById("reset").style.display = "block";
			erreur0Choix.style.display = "none";
			filtrer("serie",nouvRecherche.value);
		}
	});

	document.getElementById("reset").addEventListener("click", function(){
		for (x = 0; x < listeAFiltrer.length; x++){
			listeAFiltrer[x].style.display = 'block';		
		}

		document.getElementById("reset").style.display = "none";
		aucunResult.style.display = "none";
		document.getElementById("champRecherche").value = "";
		unTitre.checked = false;
		unAuteur.checked = false;
		uneSerie.checked = false;
	});

	function filtrer(status,results){
		var trouver = new Boolean;

		for(x = 0; x < listeAFiltrer.length; x++){//cacher tout les album pour afficher ceux du filtre
				listeAFiltrer[x].style.display = "none";
		}

		setTimeout(function(){
			if (status == "titre"){ //filtrer par titre
				var allTitre = new Array;
				var w = 0;
				for(y = 0; y < lesBD.length; y++){//chercher le titre de l'album pour avoir l'id album
					if(lesBD[y][0].toLowerCase().includes(results.toLowerCase())){
						allTitre[w] = lesBD[y][3];
						w += 1;
					}
				}
	
				for(x = 0; x < listeAFiltrer.length; x++) {//afficher tout les album correspondant au filtre
					var idfiltre = listeAFiltrer[x].getAttribute("id");
					for(y = 0; y < allTitre.length; y++){
						if(idfiltre == allTitre[y]){
							document.getElementById(idfiltre).style.display = "block";
							trouver = true;
						}
					}
				}
			}
					
			if (status == "auteur"){//trier par auteur
				var cetteAuteur = new Array;
				var w = 0;
				for (const element of auteurs) {//chercher l'auteur pour avoir l'id auteur
					if (element[1].nom.toLowerCase().includes(results.toLowerCase())){
						cetteAuteur[w] = element[0];
						w+=1;
					}
				}
	
				var allAuteur = new Array;
				w = 0;
	
				for (x = 0; x < cetteAuteur.length; x++){
					for (y = 0; y < lesBD.length; y++){//chercher l'id auteur pour avoir l'id album
						if(lesBD[y][4] == cetteAuteur[x]){
							allAuteur[w] = lesBD[y][3];
							w += 1;
						}
					}
				}
	
				for (x = 0; x < listeAFiltrer.length; x++){//afficher tout les album correspondant au filtre
					var idfiltre = listeAFiltrer[x].getAttribute("id");
					for(y = 0; y < allAuteur.length; y++){
						if(idfiltre == allAuteur[y]){
							document.getElementById(idfiltre).style.display = "block";
							trouver = true;
						}
					}
				}
			}
	
			if (status == "serie"){//trier par serie
				var cetteSerie = new Array;
				var w = 0;
				for (const element of series) {
					if (element[1].nom.toLowerCase().includes(results.toLowerCase())){//chercher la serie pour avoir l'id serie
						cetteSerie[w] = element[0];
						w += 1;
					}
				}
	
				var allSerie = new Array;
				w = 0;
				
				for (y = 0; y < lesBD.length; y++){//chercher l'id serie pour avoir l'id album
					for (x = 0; x < cetteSerie.length; x++){
						if(lesBD[y][1] == cetteSerie[x]){
							allSerie[w] = lesBD[y][3];
							w += 1;
						}
					}
				}
	
				for (x = 0; x < listeAFiltrer.length; x++){//afficher tout les album correspondant au filtre
					var idfiltre = listeAFiltrer[x].getAttribute("id");
					for(y = 0; y < allSerie.length; y++){
						if(idfiltre == allSerie[y]){
							document.getElementById(idfiltre).style.display = "block";
							
							trouver = true;
						}
					}
				}
			}
			
			if (trouver == false){
				aucunResult.style.display = "block";
			}
			else{
				aucunResult.style.display = "none";
			}

		},0);
	}
	//FIN FILTRE
});