function calculerIMC() {
    // Récupérer les valeurs de poids et taille
    let poids = parseFloat(document.getElementById("poids").value);
    let taille = parseFloat(document.getElementById("taille").value);

    // Calculer l'IMC
    let imc = poids / (taille * taille);
    let msg = "";

    // Afficher le résultat
    if (imc < 18.5) {
        msg = "insuffisante ponderale (maigreur)";
    } else if (imc >= 18.5 && imc < 25) {
        msg = " Corpulance normal";
    } else if (imc >= 25 && imc < 30) {
        msg = "surpoids";
    } else if (imc >= 30 && imc < 35) {
        msg = "Obésité modérée";
    } else if (imc >= 35 && imc < 40) {
        msg = "Obésité sévère";
    } else if (imc >= 40) {
        msg = "Obésité morbide ou massive";
    }

    let resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = "Votre IMC est : " + imc.toFixed(2) + ". Vous êtes en catégorie " + msg + ".";
}
