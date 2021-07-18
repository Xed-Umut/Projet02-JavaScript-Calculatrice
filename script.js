let touche = document.getElementsByTagName("button");
let affichage = document.getElementsByClassName("afficheur")[0];
let resultat = document.getElementById("resultat");
let clear = document.getElementById("clear");


for (var i = 0; i < 16; i++) {
  if (i != 12 && i != 14) {               /* On exclue l'affichage de C touche[12] et = touche[14] */
    touche[i].addEventListener("click", afficher);
  }
}

function afficher() {
  affichage.value = affichage.value + this.value;
}

resultat.addEventListener("click", calculer);
clear.addEventListener("click", effacer);

function calculer() {
  affichage.value = eval(affichage.value);
}

function effacer() {
  affichage.value = "";
}