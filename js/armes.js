var selectionEmplacements = document.getElementsByClassName("case");
var armes = [];

//prototype arme
var apparitionArme = function(nom, dommages, img, materia) {
//initialisation arme    
    var arme = {
        arme: nom,
        attaque: dommages,
        image: img,
        materias: materia
    };

//ajout en tableau
    armes.push(arme);

//placement des armes au hazard
    random();
    var depart = selectionEmplacements[hasard];
    while (depart.style.background == "black" || !depart || depart.childNodes[1]){
    random();
    depart = selectionEmplacements[hasard];
    }

//creation du token
    var pion = document.createElement("img");
    pion.src = img;
    pion.id = "pion" + materia;
    pion.className = "materia";
    depart.appendChild(pion);
}

//creation des armes
apparitionArme("materia terre", 15, "images/terre.png", "Terre");
apparitionArme("materia glace", 20, "images/glace.png", "Glace");
apparitionArme("materia foudre", 25, "images/foudre.png", "Foudre");
apparitionArme("materia feu", 30, "images/feu.png", "Feu");



