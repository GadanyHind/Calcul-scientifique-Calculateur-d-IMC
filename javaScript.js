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
function calculerIMC() {
    // Récupérer les valeurs de poids et taille
    let poids = parseFloat(document.getElementById("poids").value);
    let taille = parseFloat(document.getElementById("taille").value);

    // Calculer l'IMC
    let imc = poids / (taille * taille);
    let msg="";
    // Afficher le résultat
    if (imc< 18,5) {
       msg="insuffisante "  
    } else if (imc>18,5 & imc<25) {
        msg="normal"
    } else if(imc>25 & imc<30) {
        msg="surpoids"
    }else if(imc>30 & imc>35){
        msg="Obesite moderee"
    }else if (imc>35 & imc<40)
    { msg="obesite severe"
    }else if (imc>45)
    {msg="obesite morbide ou massive"}
   // console.log("votre IMC est de ",imc);
    let resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = "Votre IMC est : " + imc.toFixed(2) +"."+msg;
}
var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;

        if(btntext =='×')
        {
            btntext= '*';
        }

        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}

function sin()
{
    screen.value=Math.sin(screen.value);
}

function cos()
{
    screen.value=Math.cos(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value);
}

function pow()
{
    screen.value=Math.pow(screen.value,2);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function log()
{
    screen.value=Math.log(screen.value);
}

function pi()
{
    screen.value= 3.14159265359;
}

function e()
{
    screen.value=2.71828182846;
}

function fact()
{
    var i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }

    i=i-1;

    screen.value=f;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}