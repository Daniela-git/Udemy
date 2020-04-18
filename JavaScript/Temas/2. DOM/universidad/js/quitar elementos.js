//quitar elementos

//los elementos se pueden borrar sobre si mismos o desde el padre

const enlaces = document.querySelectorAll(".enlace");
const navegacion = document.querySelector("#principal");
//si mismo
// enlaces[0].remove()

//desde padre
navegacion.removeChild(enlaces[0]);
console.log(navegacion);

const primerLi = document.querySelector(".enlace");

let elemento;
// obtener una clase de css
elemento = primerLi.className;
elemento = primerLi.classList.add("nueva-clase");
elemento = primerLi.classList;

console.log(elemento);

//leer atributos
elemento = primerLi.getAttribute("href"); //para obtener
console.log(elemento);
primerLi.setAttribute("href", "http://facebook.com");
primerLi.setAttribute("data-id", 20); //para agregar
elemento = primerLi;
console.log(elemento);
elemento = primerLi.hasAttribute("data-id"); //para ver si tiene un atributo
console.log(elemento);
primerLi.removeAttribute("data-id");
elemento = primerLi;
console.log(elemento);
