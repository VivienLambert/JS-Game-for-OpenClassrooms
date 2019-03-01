var cloud = personnages[0];
var sephiroth = personnages[1];
var tokenCloud = document.getElementById("pionCloud");
var tokenSephiroth = document.getElementById("pionSephiroth");
var tokenFeu = document.getElementById("pionFeu");
var tokenFoudre = document.getElementById("pionFoudre");
var tokenTerre = document.getElementById("pionTerre");
var tokenGlace = document.getElementById("pionGlace");
var tokenPersos = [tokenCloud, tokenSephiroth];
var tokenMaterias = [tokenTerre, tokenGlace, tokenFoudre, tokenFeu];
var situationCloud = Number(tokenCloud.parentNode.id) - 1;
var situationSephiroth = Number(tokenSephiroth.parentNode.id) - 1;
var cases = document.getElementsByClassName("case");
var tour = 0;
var isPlayed = false;
var debutCombat = false;

//gestion deplacement
var deplacer = function(token, tokenAdversaire){
    var situationJoueur = Number(token.parentNode.id) - 1;
    var situationAdversaire = Number(tokenAdversaire.parentNode.id) - 1;

    isPlayed = true;
    
    //deplacements possibles y compris sauter son tour
    var deplacements = [cases[situationJoueur]];

    var deplacementsGauche = [
    cases[situationJoueur - 1], 
    cases[situationJoueur - 2], 
    cases[situationJoueur - 3]
    ];

    var deplacementsDroite = [
    cases[situationJoueur + 1],
    cases[situationJoueur + 2],
    cases[situationJoueur + 3]
    ];

    var deplacementsBas = [
    cases[situationJoueur - 10], 
    cases[situationJoueur - 20], 
    cases[situationJoueur - 30]
    ];

    var deplacementsHaut = [
    cases[situationJoueur + 10],
    cases[situationJoueur + 20],
    cases[situationJoueur + 30]
    ];

    //selection des déplacements et actions possibles
    for (i = 0; i < 3 && deplacementsGauche[i] && deplacementsGauche[i].style.background != "black" && Number(deplacementsGauche[i].id)%10 != 0 && deplacementsGauche[i] != cases[situationAdversaire]; i++) {
        deplacements.push(deplacementsGauche[i]);
    };

    for (i = 0; i < 3 && deplacementsDroite[i] && deplacementsDroite[i].style.background != "black" && Number(deplacementsDroite[i].id)%10 != 1 && deplacementsDroite[i] != cases[situationAdversaire]; i++) {
        deplacements.push(deplacementsDroite[i]);
    };

    for (i = 0; i < 3 && deplacementsBas[i] && deplacementsBas[i].style.background != "black" && deplacementsBas[i] != cases[situationAdversaire]; i++) {
        deplacements.push(deplacementsBas[i]);
    };

    for (i = 0; i < 3 && deplacementsHaut[i] && deplacementsHaut[i].style.background != "black" && deplacementsHaut[i] != cases[situationAdversaire]; i++) {
        deplacements.push(deplacementsHaut[i]);
    };

    //passage en phase combat
    if(deplacementsHaut[0] == tokenAdversaire.parentNode || deplacementsBas[0] == tokenAdversaire.parentNode || deplacementsDroite[0] == tokenAdversaire.parentNode || deplacementsGauche[0] == tokenAdversaire.parentNode){
        debutCombat = true
    };

        //gestion du mouvement sur l'interface
    var marcher = function(){
        deplacements.forEach(function(e){
            e.style.background = "white";
        })
        this.appendChild(token);
        isPlayed = false;
        return isPlayed;
    };

        //interface mouvement
    deplacements.forEach(function(element){
        element.style.background = "green";
        element.addEventListener("click", marcher);
        element.addEventListener("click", function(){
            deplacements.forEach(function(e){
                e.removeEventListener("click", marcher);
            });
        });
    });    
};


//creation d'un systeme reactif de tour par tour
var tourParTour = function(){
    if (tour%2 == 0 && tokenCloud.background != "green" && !isPlayed){
        deplacer(tokenCloud, tokenSephiroth);
        tour += 1;
        return tour;
    }
    else if (tour%2 == 1 && tokenSephiroth.background != "green" && !isPlayed){
        deplacer(tokenSephiroth, tokenCloud);
        tour += 1;
        return tour;
    }

    //gestion equippement des armes
    for (var i = 0; i < tokenMaterias.length; i++) {
        if(document.body.contains(tokenMaterias[i]) && (tokenMaterias[i].parentNode == tokenCloud.parentNode || tokenMaterias[i].parentNode == tokenSephiroth.parentNode)){
            
            if(tokenMaterias[i].parentNode == tokenCloud.parentNode){
                tokenMaterias[i].parentNode.removeChild(tokenMaterias[i]);
                var imagePersoArme = "images/joueur1" + armes[i].materias + ".png";
                tokenCloud.src = imagePersoArme;
                cloud.attaque = armes[i].attaque;
                document.getElementById("armeCloud").textContent = "Votre " + armes[i].arme + " a une attaque de " + cloud.attaque + ".";
                return cloud.attaque;
            }
            if(tokenMaterias[i].parentNode == tokenSephiroth.parentNode){
                tokenMaterias[i].parentNode.removeChild(tokenMaterias[i]);
                var imagePersoArme = "images/joueur2" + armes[i].materias + ".png";
                tokenSephiroth.src = imagePersoArme;
                sephiroth.attaque = armes[i].attaque;
                document.getElementById("armeSephiroth").textContent = "Votre " + armes[i].arme + " a une attaque de " + sephiroth.attaque + ".";
                return sephiroth.attaque;
            }
        }
    }
}

//surveillance du tour/tour
var boucle = setInterval(tourParTour, 50);

