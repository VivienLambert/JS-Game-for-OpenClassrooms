var contenu = document.getElementById("contenu");
var terrain = document.getElementById("terrain");
var hasard = 0;
var random = function(){
    hasard = Math.floor(Math.random()*100);
    return hasard;
}
alert("Les règles sont simples : \nCourez trouver la meilleur arme \nEt rejoignez vous pour le combat final !")

contenu.style.margin = "auto";


for(i=1; i<=100; i++){
    //création et style des cases
    var emplacement = document.createElement("td");
    emplacement.className = "case";
    emplacement.id = i;
    emplacement.style.height = "55px";
    emplacement.style.width = "55px";
    emplacement.style.borderStyle = "solid";
    emplacement.style.borderWidth = "1px";
    emplacement.style.borderColor = "#888888";

    //gestion des cases inaccessibles
    random()
    if(hasard > 85){
        emplacement.style.background = "black";
    };

    //création des lignes
    if (i == 1 || i%10 == 1){
        var ligne = document.createElement("tr");
        ligne.className = "ligne";
        terrain.appendChild(ligne);
    };
    var selectionLigne = terrain.getElementsByClassName("ligne");
    var numeroLigne = selectionLigne.length - 1;
    selectionLigne[numeroLigne].appendChild(emplacement);
};

var cases = document.getElementsByClassName("case");


//reduction des "innaccessibles"
for (i=0; i<100; i++){
    var dessus = cases[i-10];
    var dessous = cases[i+10];
    var gauche = cases[i-1];
    var droite = cases[i+1];
    var possibilites = [dessus, dessous, gauche, droite];
    var adjacent = 0;
    var noirAdjacent = 0;
    for (h=0; h<4; h++){
        if (possibilites[h]){
            adjacent++;
        };
        if (possibilites[h] && possibilites[h].style.background == "black"){
            noirAdjacent++;
        };
    };
    if (adjacent == noirAdjacent){
        cases[i].style.background = "black";
    };
}