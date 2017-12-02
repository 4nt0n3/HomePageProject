//////////////////////////////////////////////////////////////////////
// Exercice Ballon rebondisssant
//////////////////////////////////////////////////////////////////////

/*
Créez une variable valant 1 ou -1 pour savoir dans quelle direction déplacer le ballon. Utilisez cette variable pour calculer sa nouvelle position.
*/


///////////////////////////////////////////////////////
// Animation du ballon
///////////////////////////////////////////////////////


//Eléments pour l'animation du ballon
var cadreElt = document.getElementById("cadre");
var ballonElt = document.getElementById("ballon");
var largeurCadre = parseFloat(getComputedStyle(cadreElt).width);
var vitesseBallon = 8;
var directionBallon = 1;
var animationID = null;

// Fonction d'animation du ballon
function animerBallon() {
    var positionBallon = parseFloat(getComputedStyle(ballonElt).left);
    var largeurBallon = parseFloat(getComputedStyle(ballonElt).width);
    var positionMax = largeurCadre - largeurBallon;
    
    // Si le ballon est à un bord, on change sa direction
    if (positionBallon < 0 || positionBallon > positionMax) {
        directionBallon *= -1;
    }
    // Déplacement du ballon
    ballonElt.style.left = (positionBallon + vitesseBallon * directionBallon) + "px";
    animationID = requestAnimationFrame(animerBallon);
}


///////////////////////////////////////////////////////
// Boutons de pilotage du ballon
///////////////////////////////////////////////////////


// Eléments pour la gestion de l'animation par l'utilisateur
var startElt = document.getElementById("demarrer");
var stopElt = document.getElementById("arreter");


// Bouton Démarrer
startElt.addEventListener("click", function (e) {
    // Lance l'animation
    animationID = requestAnimationFrame(animerBallon);
    // Inverse le bloquage des boutons
    e.target.disabled = true;
    stopElt.disabled = false;
});

// Bouton Arrêter
stopElt.addEventListener("click", function (e) {
    // Stoppe l'animation
    cancelAnimationFrame(animationID);
    // Inverse le bloquage des boutons
    e.target.disabled = true;
    startElt.disabled = false;
});
