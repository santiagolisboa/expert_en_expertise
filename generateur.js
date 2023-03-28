// Définir une liste de mots pour chaque catégorie
var adjectifs = ["géant", "magnifique", "farfelu", "impitoyable", "fantastique", "épique", "merveilleux", "unique", "divin", "extraordinaire"];
var noms = ["licorne", "vampire", "dragon"];
var domaines = ["des arts", "de la science", "du sport", "de la cuisine", "de la mode", "du cinéma", "de la musique", "de la technologie", "de la littérature", "de l'environnement"];

// Fonction pour générer un entier aléatoire dans une plage donnée
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour générer un intitulé de Master aléatoire
function generateTitle() {
  // Choisir un mot aléatoire de chaque catégorie
  var adjectif = adjectifs[getRandomInt(0, adjectifs.length - 1)];
  var nom = noms[getRandomInt(0, noms.length - 1)];
  var domaine = domaines[getRandomInt(0, domaines.length - 1)];
  
  // Concaténer les mots pour former l'intitulé
  var titre = "Master " + adjectif + " en " + nom + " " + domaine;
  
  // Retourner l'intitulé généré
  return titre;
}

// Sélectionner le bouton de génération et l'élément d'affichage du titre
var button = document.getElementById("generate");
var title = document.getElementById("title");

// Ajouter un écouteur d'événement pour le clic du bouton
button.addEventListener("click", function() {
  // Générer un intitulé de Master aléatoire
  var titre = generateTitle();
  
  // Afficher l'intitulé dans l'élément d'affichage du titre
  title.innerHTML = titre;
});
