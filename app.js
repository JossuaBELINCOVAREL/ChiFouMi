const choices = document.querySelectorAll(".btn-choice");
const message = document.getElementById("message");
const scoreJoueur = document.getElementById("score-joueur");
const scoreOrdinateur = document.getElementById("score-ordinateur");
const resetBtn = document.getElementById("reset");
const joueurChoiceDisplay = document.getElementById("joueur-choice");
const ordiChoiceDisplay = document.getElementById("ordi-choice");

let scoreJ = 0;
let scoreO = 0;
const choixPossibles = ["pierre", "feuille", "ciseaux"];

function choixOrdinateur() {
    return choixPossibles[Math.floor(Math.random() * choixPossibles.length)];
}

function jouer(e) {
    let choixJoueur = e.currentTarget.id;
    let choixOrdi = choixOrdinateur();

    joueurChoiceDisplay.innerHTML = `<img src="assets/${choixJoueur}.png" alt="${choixJoueur}">`;
    ordiChoiceDisplay.innerHTML = `<img src="assets/${choixOrdi}.png" alt="${choixOrdi}">`;

    let resultat = determinerGagnant(choixJoueur, choixOrdi);
    afficherResultat(resultat);
}

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

function afficherResultat(resultat) {
    scoreJoueur.textContent = scoreJ;
    scoreOrdinateur.textContent = scoreO;
    message.textContent = resultat;
}

function resetGame() {
    scoreJ = 0;
    scoreO = 0;
    scoreJoueur.textContent = "0";
    scoreOrdinateur.textContent = "0";
    message.textContent = "Faites votre choix !";
}

choices.forEach(choice => choice.addEventListener("click", jouer));
resetBtn.addEventListener("click", resetGame);
