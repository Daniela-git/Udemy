//app.js

//getElementsByClassName
let enlaces = document.getElementsByClassName("enlace"); //se pasa la clase
console.log(enlaces);
let enlace = enlaces[0];
enlace.textContent = "Nuevo enlace";
enlace.style.background = "black";
console.log(enlace);

//se puede mezclar con query selector
const listaEnlaces = document
  .querySelector("#principal")
  .getElementsByClassName("enlace");
console.log(listaEnlaces);

//getElementsByTagName
let links = document.getElementsByTagName("a"); //etiqueta de html
links[18].style.color = "red";
//console.log(links)
links = Array.from(links);
links.forEach(function (link, index) {
  console.log(index, link.textContent);
});
