var arabe=document.getElementById("arabe");
var français=document.getElementById("français");
var text=document.getElementById("text");
var text1=document.getElementById("text1");
var text2=document.getElementById("text2");
var text3=document.getElementById("text3");
var text4=document.getElementById("text4");



arabe.onclick=()=>{
    langue("arabe");
    localStorage.setItem("lang","arabe");
};

français.onclick=()=>{
    langue("français");
    localStorage.setItem("lang","français");
};

onload=()=>{
    langue(localStorage.getItem("lang"))
}

function langue(chlangue) {
if(chlangue==="arabe"){

text.innerHTML="مصباحي ناصر";
text1.innerHTML="نحن في خدمتكم من اجل أفضل اختيار";
text1.style.textAlign="right";
text2.innerHTML="حول الموقع";
text3.innerHTML="مرحبا بكم لدينا";
text4.innerHTML="اتصل بنا";

}else if(chlangue==="français"){

text.innerHTML="Mosbahi nasser";
text1.innerHTML="Nous avons a votre service pour bon choix";
text1.style.textAlign="left";
text2.innerHTML="About !";
text3.innerHTML="Soyez les bienvenus chez nous.";
text4.innerHTML="Nous contavtez";

}    }
