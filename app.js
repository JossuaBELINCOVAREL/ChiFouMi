// Sélection des éléments
const choices = document.querySelectorAll(".choice");
const message = document.getElementById("message");
const scoreJoueur = document.getElementById("score-joueur");
const scoreOrdinateur = document.getElementById("score-ordinateur");
const resetBtn = document.getElementById("reset");

// Variables de jeu
let scoreJ = 0;
let scoreO = 0;
const choixPossibles = ["pierre", "feuille", "ciseaux"];

// Fonction qui génère le choix aléatoire de l'ordinateur
function choixOrdinateur() {
    const index = Math.floor(Math.random() * choixPossibles.length);
    return choixPossibles[index];
}

// Fonction qui gère le jeu
function jouer(e) {
    let choixJoueur = e.currentTarget.id;
    let choixOrdi = choixOrdinateur();

    // Réinitialisation des états
    choices.forEach(choice => choice.classList.remove("active"));
    
    // Activation du choix du joueur
    e.currentTarget.classList.add("active");

    // Détermination du résultat
    let resultat = determinerGagnant(choixJoueur, choixOrdi);
    afficherResultat(choixJoueur, choixOrdi, resultat);
}

// Fonction qui détermine le gagnant
function determinerGagnant(joueur, ordinateur) {
    if (joueur === ordinateur) return "Égalité";
    if (
        (joueur === "pierre" && ordinateur === "ciseaux") ||
        (joueur === "feuille" && ordinateur === "pierre") ||
        (joueur === "ciseaux" && ordinateur === "feuille")
    ) {
        scoreJ++;
        return "Vous gagnez ! 🎉";
    } else {
        scoreO++;
        return "L'ordinateur gagne ! 🤖";
    }
}

// Fonction qui affiche le résultat
function afficherResultat(joueur, ordinateur, resultat) {
    document.getElementById("joueur-choice").innerHTML = `<img src="/assets/${joueur}.png" alt="${joueur}">`;
    document.getElementById("ordi-choice").innerHTML = `<img src="/assets/${ordinateur}.png" alt="${ordinateur}">`;

    // Mettre à jour les scores
    scoreJoueur.textContent = scoreJ;
    scoreOrdinateur.textContent = scoreO;
    
    // Afficher le message de résultat
    message.textContent = resultat;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    scoreJ = 0;
    scoreO = 0;
    scoreJoueur.textContent = scoreJ;
    scoreOrdinateur.textContent = scoreO;
    message.textContent = "Choisissez votre coup !";
    document.getElementById("joueur-choice").innerHTML = "";
    document.getElementById("ordi-choice").innerHTML = "";
    choices.forEach(choice => choice.classList.remove("active"));
}

// Ajout des écouteurs d'événements
choices.forEach(choice => choice.addEventListener("click", jouer));
resetBtn.addEventListener("click", resetGame);
