// const { parse } = require("@vue/compiler-dom");

jQuery(document).ready(function ($) {
	const srcImg = "images/"; // emplacement des images de l'appli
	const albumDefaultMini = srcImg + "noComicsMini.jpeg";
	const albumDefault = srcImg + "noComics.jpeg";
	const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
	const srcAlbum = "albums/"; // emplacement des images des albums en grand

	/*
	// Lecture d'un album
	console.log("Lecture d'un album");
	var album = albums.get("5");
	var serie = series.get(album.idSerie);
	var auteur = auteurs.get(album.idAuteur);
	console.log(album.titre+" "+serie.nom+" "+auteur.nom);
	*/

	/*
	console.log("Liste des albums");
	albums.forEach(album => {
	    serie = series.get(album.idSerie);
	    auteur = auteurs.get(album.idAuteur);
	    console.log(album.titre+" N°"+album.numero+" Série:"+serie.nom+" Auteur:"+auteur.nom);
	});
	*/

	/*
	console.log("Liste des albums par série");
	for(var [idSerie, serie] of series.entries()) {
	    // Recherche des albums de la série
	    for (var [idAlbum, album] of albums.entries()) {
	        if (album.idSerie == idSerie) {
	            console.log(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteurs.get(album.idAuteur).nom);
	        }
	    }
	    
	}
	*/

	/*
	console.log("Liste des albums par auteur");
	for(var [idAuteur, auteur] of auteurs.entries()) {
	    // Recherche des albums de l'auteur
	    for (var [idAlbum, album] of albums.entries()) {
	        if (album.idAuteur == idAuteur) {
	            console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom);
	        }
	    }
	    
	}
	*/

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
		getAlbum(this)
	});


	/**
	 * Récupération de l'album par son id et appel de 
	 * la fonction d'affichage
	 * 
	 * @param {number} num 
	 */
	function getAlbum(num) {

		var album = albums.get(num.value);

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

	nbrContenuPanier.innerHTML = count;
	totalPanier.innerHTML = total;
	
	//DEBUT PARTIE AJOU PANIER

	function ajouterPanier (plus){

		

		var panierTitle = txtTitre.value;
		var panierLinkAlbum = srcAlbumMini + txtSerie.value + "-" + txtNumero.value + "-" + txtTitre.value + ".jpg";
		panierLinkAlbum = panierLinkAlbum.replace("'", "");
		console.log(panierLinkAlbum);
		var compar = false;
		var order = 0
		var keep = 0;
		var panierPrix = parseFloat(txtPrix.value);
		var prixOriginal = parseFloat(txtPrix.value);


		

		for(x = 0; x < panier.length; x++){
			if (panierTitle == panier[x].panierTitle){
				compar = true;
				keep = x;
			}
		}

		if (compar == false){//Si item n'est pas dans le panier
			var nbrExemplaire = 1;
			panier.push ({panierTitle, panierLinkAlbum, nbrExemplaire, panierPrix, prixOriginal, order});
			order += 1;
			console.log("livre ajouter")
		}

		else if(plus == undefined){//si item deja dans le panier mais pas ajouter depuis celui ci
			panier[keep].nbrExemplaire += 1;
			panier[keep].panierPrix += panierPrix;
			console.log("+1")
		}

		else{//si item ajouter depuis le panier
			panier[plus].nbrExemplaire += 1;
			panier[plus].panierPrix += panierPrix;
		}

		total += panierPrix;
		count += 1;
		nbrContenuPanier.innerHTML = count;
		totalPanier.innerHTML = total;


		contenuPanier.innerHTML = "";
		
		for (x = 0; x < panier.length; x++){
			var nouvItemPanier = document.createElement('div');
			nouvItemPanier.setAttribute("id", "item" + x);
			nouvItemPanier.setAttribute("class", "item")
			nouvItemPanier.innerHTML += "<h4>" + panier[x].panierTitle + "</h4>";
			nouvItemPanier.innerHTML += "<h6>nombre d'exemplaire : " + panier[x].nbrExemplaire + "</h6>";
			nouvItemPanier.innerHTML += "<h6> prix : " + panier[x].panierPrix + " euro </h6>";
			nouvItemPanier.innerHTML += '<img src="' + panier[x].panierLinkAlbum + '">';
			nouvItemPanier.innerHTML += '<h4 id="ajou' + x + '">+</h4>';
			nouvItemPanier.innerHTML += '<h4 id="suppr' + x + '">-</h4>';
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
		
	

		console.log(compar);
		
		console.log (panier);
	}
	//FIN PARTIE AJOU PANIER

	//DEBUT PARTIE SUPPR PANIER
	function supprimerPanier(itemASupprimer){

		console.log (itemASupprimer)
		console.log(panier[itemASupprimer])

		var prixARetier = panier[itemASupprimer].prixOriginal

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
		totalPanier.innerHTML = total;

		contenuPanier.innerHTML = "";

		for (x = 0; x < panier.length; x++){
			var nouvItemPanier = document.createElement('div');
			nouvItemPanier.setAttribute("id", "item" + x);
			nouvItemPanier.setAttribute("class", "item")
			nouvItemPanier.innerHTML += "<h4>" + panier[x].panierTitle + "</h4>";
			nouvItemPanier.innerHTML += "<h6>nombre d'exemplaire : " + panier[x].nbrExemplaire + "</h6>";
			nouvItemPanier.innerHTML += "<h6> prix : " + panier[x].panierPrix + " euro </h6>";
			nouvItemPanier.innerHTML += '<img src="' + panier[x].panierLinkAlbum + '">';
			nouvItemPanier.innerHTML += '<h4 id="ajou' + x + '">+</h4>';
			nouvItemPanier.innerHTML += '<h4 id="suppr' + x + '">-</h4>';
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
	}

	//FIN PARTIE SUPPR PANIER

	// albums.forEach(album => {
	// 	console.log(album)
    // });
	var truc = new Array;

	// function mapToObject(map) {
	// 	truc = Object.assign(Object.create(null), ...[...map].map(v => ({ [v[0]]: v[1] })));
	// }

	// mapToObject(albums);

	// console.log(truc.indexOf(titre))

	console.log(albums)
});