
// Página de preguntas.html --> preguntas frecuentes

let preg = document.getElementsByClassName("pregunta")
let resp = document.getElementsByClassName("respuesta")

function displayResponse(posicionResp) {
    if (resp[posicionResp].style.display == "none") 
    {resp[posicionResp].style.display = ""}
    else
    {resp[posicionResp].style.display = "none"}
}


resp[0].style.display="none"
resp[1].style.display="none"
resp[2].style.display="none"
resp[3].style.display="none"

preg[0].addEventListener("click", function() {displayResponse(0);});
preg[1].addEventListener("click", function() {displayResponse(1);});
preg[2].addEventListener("click", function() {displayResponse(2);});
preg[3].addEventListener("click", function() {displayResponse(3);});


function changeColor(posicionPreg) {
    preg[posicionPreg].style.color="#ff341a"};

function changeColor2(posicionPreg) {
    preg[posicionPreg].style.color="#635f65"};

preg[0].addEventListener("mouseover", function() {changeColor(0);});
preg[1].addEventListener("mouseover", function() {changeColor(1);});
preg[2].addEventListener("mouseover", function() {changeColor(2);});
preg[3].addEventListener("mouseover", function() {changeColor(3);});

preg[0].addEventListener("mouseout", function() {changeColor2(0);})
preg[1].addEventListener("mouseout", function() {changeColor2(1);});
preg[2].addEventListener("mouseout", function() {changeColor2(2);});
preg[3].addEventListener("mouseout", function() {changeColor2(3);});


