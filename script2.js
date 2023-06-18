
// Página de prod-serv.html

const ebook = document.getElementsByClassName("ebook")
const prod = document.getElementsByClassName("producto")
const compra1 = document.getElementById("botonCompra1")
const compra2 = document.getElementById("botonCompra2")
const compra3 = document.getElementById("botonCompra3")


prod[0].addEventListener("mouseover", function() {mOver(0,"images\\book_principal_sinf.png");});
prod[0].addEventListener("mouseout", function() {mOut(0,"images\\book_principal.png");});


function mOver(posicion,imagen) {
    ebook[posicion].src = imagen
  }
function mOut(posicion,imagen) {
    ebook[posicion].src = imagen
  }


compra1.addEventListener("click", function() {addCarrito(1)})
compra2.addEventListener("click", function() {addCarrito(2)})
compra3.addEventListener("click", function() {addCarrito(3)})

function addCarrito (compra){
    nombre = "Cantidad libro " + compra;
    if (localStorage.getItem(nombre)==1){alert("Ya lo ha agregado al carrito")}
    else{localStorage.setItem(nombre, "1")}
}




// let cantidad = 0
// ebook[0].addEventListener("click")


// let item = 0
// item = document.getElementById("item").value

// localStorage.setItem("cantidadCompra",cantidad)
// localStorage.getItem("item")
// localStorage.removeItem("item")


// localStorage.clear()

// function guardar (){}

// function cargarDatos ()

// function setVariable (varName){
//     let varName = prompt("Cuánto quiere comprar")
// }