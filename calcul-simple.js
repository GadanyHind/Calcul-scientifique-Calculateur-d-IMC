function somme(){
    let val1=parseFloat(document.getElementById("val1").value);
    let val2=parseFloat(document.getElementById("val2").value);
    let sum=val1+val2;
    document.getElementById("resultat").value=sum;
}
function soustraction(){
    let val1=parseFloat(document.getElementById("val1").value);
    let val2=parseFloat(document.getElementById("val2").value);
    let sub=val1-val2;
    document.getElementById("resultat").value=sub;
}
function multiplication(){
    let val1=parseFloat(document.getElementById("val1").value);
    let val2=parseFloat(document.getElementById("val2").value);
    let mul=val1*val2;
    document.getElementById("resultat").value=mul;
}
function division(){
    let val1=parseFloat(document.getElementById("val1").value);
    let val2=parseFloat(document.getElementById("val2").value);
    let div=val1/val2;
    document.getElementById("resultat").value=div;
}