function permuter(){
    var text1=document.getElementById("text1").value;
    var text2=document.getElementById("text2").value;
    var temp=text1;
    text1=text2;
    text2=temp;
    // Met à jour les valeurs dans les zones de texte
    document.getElementById("text1").value = text1;
    document.getElementById("text2").value = text2;
}