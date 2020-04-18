//Crear elementos desde js

//crear enlace
const enlace = document.createElement("a"); //la más rápida

//agregamos la clase
enlace.className = "enlace";

//añadir id
enlace.id = "nuevo-id";

//atributo de href
enlace.setAttribute("href", "#");

//añadir texto
enlace.textContent = "Nuevo enlace";
// enlace.appendChild(document.createTextNode('Nuevo nodo'))//otra forma

//agregarlo al HTML
document.querySelector("#secundaria").appendChild(enlace);
console.log(enlace);
