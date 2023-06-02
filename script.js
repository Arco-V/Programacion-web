alert("Bienvenido/a a Crianza con Armonía")


let madre = prompt("¿Es usted madre/padre?",)
let info = prompt("¿Desea ver una síntesis de nuestro trabajo?")
function esMadre (madre, info){
    if (madre == "Sí" & info == "Sí"){return "Bienvenido/a a esta página de crianza, esperamos serle muy útil para mejorar su estilo de crianza en su recorrido de ser padre/madre. Nos basamos en divulgar contenido profesional sobre la crianza respetuosa, en Instragram puede ver más de 150 posts sobre el tema"}
    else if (madre == "Sí" & info != "Sí"){return "Bienvenido/a padre/madre, cualquier duda puede realizarla en la página de contacto"}
    else if (madre != "Sí" & info == "Sí"){return "¡Por supuesto! Nos basamos en divulgar contenido profesional sobre la crianza respetuosa, en Instragram puede ver más de 150 posts sobre el tema, cualquier consulta no dude en realizarla en la página de contacto"}
    else {return "Bienvenido/a, cualquier duda puede realizarla en la página de contacto"}
}

alert(esMadre(madre,info))