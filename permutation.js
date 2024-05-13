<<<<<<< HEAD
function permuter(){
    var text1=document.getElementById("text1").value;
    var text2=document.getElementById("text2").value;
    var temp=text1;
    text1=text2;
    text2=temp;
    // Met à jour les valeurs dans les zones de texte
    document.getElementById("text1").value = text1;
    document.getElementById("text2").value = text2;
=======
function permuter(){
    var text1=document.getElementById("text1").value;
    var text2=document.getElementById("text2").value;
    var temp=text1;
    text1=text2;
    text2=temp;
    // Met à jour les valeurs dans les zones de texte
    document.getElementById("text1").value = text1;
    document.getElementById("text2").value = text2;
>>>>>>> a14d1e53e52be88bfe780cd6080c6ab6e1d14682
}