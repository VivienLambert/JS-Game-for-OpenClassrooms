var selectionEmplacements = document.getElementsByClassName("case");
var personnages = [];


//init joueurs
var apparitionJoueur = function(joueur, img, identite) {
    var personnage = {
        nom: joueur,
        sante: 100,
        attaque: 10,
        image: img,
        arme: "arme de base"
    };
    //ajout en tableau
    personnages.push(personnage);


    //creation interface joueur
    var fichePerso = document.createElement("div");
    fichePerso.id = "fiche" + identite;
    fichePerso.style.background = "#EEEEEE";
    fichePerso.style.padding = "0px 10px 0px 10px";
    fichePerso.style.marginTop = "10px";
    var nomPerso = document.createElement("h1");
    nomPerso.textContent = identite + " : " + personnage.nom;
    var barreSante = document.createElement("div");
    barreSante.id = "sante" + identite;
    barreSante.style.width = personnage.sante*2 + "px";
    barreSante.style.height = "20px";
    barreSante.style.background = "red";
    barreSante.textContent = personnage.sante + "PV";
    barreSante.style.color = "#CCCCCC";
    barreSante.style.textAlign = "right";
    var texteArme = document.createElement("p");
    texteArme.id = "arme" + identite;
    texteArme.textContent = "Votre " + personnage.arme + " a une attaque de " + personnage.attaque + ".";

    fichePerso.appendChild(nomPerso);
    fichePerso.appendChild(barreSante);
    fichePerso.appendChild(texteArme);
    infos.appendChild(fichePerso);


    //placement aléatoire
    random();
    var depart = selectionEmplacements[hasard];
    while (depart.style.background == "black" || !depart || depart.childNodes[1]){
    random();
    depart = selectionEmplacements[hasard];
    }

    var pion = document.createElement("img");
    pion.src = img;
    pion.id = "pion" + identite;
    depart.appendChild(pion);
}


//personnalisation
var nomJoueur1 = prompt("Entrez le nom du joueur 1");
while (nomJoueur1 == 0 ) {
    nomJoueur1 = prompt("Tu ne sais pas comment tu t'appelles?");
};

var nomJoueur2 = prompt("Et pour le joueur 2 ?");
while (nomJoueur2 == 0) {
    nomJoueur2 = prompt("Marque au moins quelque chose !");
};

//mise en page terrain + interface 
var infos = document.createElement("div");
infos.style.display = "flex";
infos.style.justifyContent = "space-around";

//creation joueurs
apparitionJoueur(nomJoueur1, "images/joueur1.png", "Cloud");
apparitionJoueur(nomJoueur2, "images/joueur2.png", "Sephiroth");

//finalisation interface
infos.style.margin = "auto";
contenu.appendChild(infos);
