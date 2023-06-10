
// Página de prod-serv.html

const ebook = document.getElementsByClassName("ebook")
const prod = document.getElementsByClassName("producto")

prod[0].addEventListener("mouseover", function() {mOver(0,"images\\book_principal_sinf.png");});
prod[0].addEventListener("mouseout", function() {mOut(0,"images\\book_principal1.png");});


function mOver(posicion,imagen) {
    ebook[posicion].src = imagen
  }

function mOut(posicion,imagen) {
    ebook[posicion].src = imagen
  }

