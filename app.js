// Sélection des éléments du DOM
const choices = document.querySelectorAll(".btn-choice"); // Les boutons de choix
const message = document.getElementById("message"); // Le message d'état du jeu
const scoreJoueur = document.getElementById("score-joueur"); // Score du joueur
const scoreOrdinateur = document.getElementById("score-ordinateur"); // Score de l'ordinateur
const resetBtn = document.getElementById("reset"); // Le bouton pour réinitialiser la partie
const joueurChoiceDisplay = document.getElementById("joueur-choice"); // Zone d'affichage du choix du joueur
const ordiChoiceDisplay = document.getElementById("ordi-choice"); // Zone d'affichage du choix de l'ordinateur

let scoreJ = 0; // Score du joueur
let scoreO = 0; // Score de l'ordinateur
const choixPossibles = ["pierre", "feuille", "ciseaux"]; // Les choix possibles pour l'ordinateur

// Fonction qui génère un choix aléatoire pour l'ordinateur
function choixOrdinateur() {
    return choixPossibles[Math.floor(Math.random() * choixPossibles.length)];
}

// Fonction pour gérer les clics sur les boutons de choix
function jouer(e) {
    let choixJoueur = e.currentTarget.id; // Le choix du joueur
    let choixOrdi = choixOrdinateur(); // Le choix de l'ordinateur

    // Affichage des choix du joueur et de l'ordinateur dans les zones dédiées
    joueurChoiceDisplay.innerHTML = `<img src="assets/${choixJoueur}.png" alt="${choixJoueur}">`;
    ordiChoiceDisplay.innerHTML = `<img src="assets/${choixOrdi}.png" alt="${choixOrdi}">`;

    // Appel à la fonction pour déterminer le gagnant
    let resultat = determinerGagnant(choixJoueur, choixOrdi);
    afficherResultat(resultat); // Affichage du résultat du tour
}

// Fonction pour déterminer le gagnant
function determinerGagnant(joueur, ordinateur) {
    if (joueur === ordinateur) return "Égalité 🤝";
    if ((joueur === "pierre" && ordinateur === "ciseaux") || 
        (joueur === "feuille" && ordinateur === "pierre") || 
        (joueur === "ciseaux" && ordinateur === "feuille")) {
        scoreJ++;
        return "Vous gagnez ! 🎉";
    } else {
        scoreO++;
        return "L'ordinateur gagne ! 🤖";
    }
}

// Fonction pour afficher le résultat final et mettre à jour les scores
function afficherResultat(resultat) {
    scoreJoueur.textContent = scoreJ; // Mise à jour du score du joueur
    scoreOrdinateur.textContent = scoreO; // Mise à jour du score de l'ordinateur
    message.textContent = resultat; // Affichage du message de résultat
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    scoreJ = 0;
    scoreO = 0;
    scoreJoueur.textContent = "0"; // Réinitialisation du score du joueur
    scoreOrdinateur.textContent = "0"; // Réinitialisation du score de l'ordinateur
    message.textContent = "Faites votre choix !"; // Réinitialisation du message
    joueurChoiceDisplay.innerHTML = "❔"; // Réinitialisation du choix du joueur
    ordiChoiceDisplay.innerHTML = "❔"; // Réinitialisation du choix de l'ordinateur
}

// Ajout des événements aux boutons de choix
choices.forEach(choice => choice.addEventListener("click", jouer));

// Ajout de l'événement pour réinitialiser le jeu
resetBtn.addEventListener("click", resetGame);
