// JS PARA PAGINA DE CARRITO

let ebook1 = {"nombre":"Ebook 1: Criando a tus hijos desde el amor", 
"cantidad":0}

let ebook2 = {"nombre":"Ebook 2: Guía práctica para aprender a dominar tus emociones y ser un ejemplo para ellos", 
"cantidad":0}

let ebook3 = {"nombre":"Ebook 3: ¿Tus hijos preguntan todo? Guía práctica para aprender a responder con eficacia y tranquilidad", 
"cantidad":0}

function existe (){for (let i = 1; i <=3; i++){
    nombre = "Cantidad libro " + i;
    if (localStorage.getItem(nombre)!=1){localStorage.setItem(nombre, "0")}}}

existe()

ebook1.cantidad = localStorage.getItem("Cantidad libro 1")
ebook2.cantidad = localStorage.getItem("Cantidad libro 2")
ebook3.cantidad = localStorage.getItem("Cantidad libro 3")

const cantEb1 = document.getElementById("eb1")
const cantEb2 = document.getElementById("eb2")
const cantEb3 = document.getElementById("eb3")
let cantTot = document.getElementById("total")

cantEb1.innerHTML = ebook1.cantidad
cantEb2.innerHTML = ebook2.cantidad
cantEb3.innerHTML = ebook3.cantidad
cantTot.innerHTML = parseInt(ebook1.cantidad) + parseInt(ebook2.cantidad) + parseInt(ebook3.cantidad)

let input1 = document.getElementById("ebInput1")
input1.value = localStorage.getItem("Cantidad libro 1")

let input2 = document.getElementById("ebInput2")
input2.value = localStorage.getItem("Cantidad libro 2")

let input3 = document.getElementById("ebInput3")
input3.value = localStorage.getItem("Cantidad libro 3")


function borrarItem(i)        
    {nombre = "Cantidad libro " + i; localStorage.setItem(nombre,"0");
    let eb = "eb" + i;
    item = document.getElementById(eb);
    item.innerHTML = "0";
    let ebInput = "ebInput" + i;
    input1 = document.getElementById(ebInput);
    input1.value = "0";
    if(i==1){ebook1.cantidad= "0"}
    else if(i==2){ebook2.cantidad= "0"}
    else{ebook3.cantidad= "0"};
    cantTot.innerHTML -= 1;
    }

function sumarItem(i)        
    {nombre = "Cantidad libro " + i; localStorage.setItem(nombre,"1");
    let eb = "eb" + i;
    item = document.getElementById(eb);
    item.innerHTML = "1";
    let ebInput = "ebInput" + i;
    input1 = document.getElementById(ebInput);
    input1.value = "1";
    if(i==1){ebook1.cantidad= "1"}
    else if(i==2){ebook2.cantidad= "1"}
    else{ebook3.cantidad= "1"};
    let cantEb1 = localStorage.getItem("Cantidad libro 1");
    let cantEb2 = localStorage.getItem("Cantidad libro 2");
    let cantEb3 = localStorage.getItem("Cantidad libro 3");
    let cantTotal = document.getElementById("total");
    cantTotal.innerHTML = parseInt(cantEb1) + parseInt(cantEb2) + parseInt(cantEb3);
    }        



