var barreSanteCloud = document.getElementById("santeCloud");
var barreSanteSephiroth = document.getElementById("santeSephiroth");

//mise à jour des barres de santé
var barresSante = function(){
        barreSanteSephiroth.textContent = sephiroth.sante + "PV";
        barreSanteCloud.textContent = cloud.sante + "PV";
        var tailleBarreCloud = cloud.sante * 2;
        var tailleBarreSephiroth = sephiroth.sante * 2;
        barreSanteCloud.style.width = tailleBarreCloud + "px";
        barreSanteSephiroth.style.width = tailleBarreSephiroth + "px";
};


//gestion du combat
var combat = function(){
    if (cloud.sante>0 && sephiroth.sante>0 && debutCombat){
        var choixCloud = Number(prompt("Que veut faire Cloud? (Saisir le chiffre de l'action désiré)\n1.Attaquer\n2.Se défendre"));
        var choixSephiroth = Number(prompt("Que veut faire Sephiroth? (Saisir le chiffre de l'action désiré)\n1.Attaquer\n2.Se défendre"));
            if (choixCloud == 1 && choixSephiroth == 1){
                cloud.sante -= sephiroth.attaque;
                sephiroth.sante -= cloud.attaque;
                alert("Ouch !");
            }
            else if (choixCloud == 2 && choixSephiroth == 1){
                cloud.sante -= sephiroth.attaque/2;
                alert("Cloud résiste bien !");
            }
            else if (choixCloud == 1 && choixSephiroth == 2){
                sephiroth.sante -= cloud.attaque/2;
                alert("Sephiroth résiste bien !");
            }
            else if (choixCloud == 2 && choixSephiroth == 1){
                alert("La meilleur défense c'est l'attaque, il faudrait y songer...");
        } else {
            alert("Vous loupez vos attaques... Serait-ce une faute de frappe?");
        };

        //regul vie négative
        if (cloud.sante <= 0){
            cloud.sante = 0;
            alert("Cloud est mort...");
        }
        if (sephiroth.sante <= 0){
            sephiroth.sante = 0;
            alert("Sephiroth est mort...");
        }
        //maj des barres
        barresSante();
        debutCombat = false;
    } 

    //gestion fin du jeu
    else if (cloud.sante == 0 || sephiroth.sante == 0){
        contenu.innerHTML = "<img src=images/fin.jpg />";

    };
};

//pour surveiller "debutCombat"
setInterval(combat, 500);
