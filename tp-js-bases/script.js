const prenom = "Maxandre";
const nom = "PLESSIS";
//nom = PARLA; // Cette valeur n'est pas pris en compte car il ne peut que exister une seul conctente avec le meme nom "nom"
//let age = 17;
//age = 18; // Cette valeur prend le dessus sur la valeur de la ligne 3



let age = 17;
if (age < 13) {
    console.log("Accès interdit aux moins de 13 ans.");
} else if (age < 18) {
    console.log("Vous pouvez accéder à la section ado.");
} else {
    console.log("Bienvenue dans l'espace adulte.");
}


for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}



const saluer = (prenom) => {
    return "Bonjour, " + prenom + " ! Comment vas-tu ?";
};
console.log(saluer("Maxandre"));



console.log(nom);
console.log(prenom);
console.log(age);