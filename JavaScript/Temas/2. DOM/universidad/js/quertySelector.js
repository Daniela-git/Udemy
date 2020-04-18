// LOS MISMO DE PARTE 1

//Query Selector
//para acceder a por el id hay que usar el # y para la clase el .
const encabezado = document.querySelector("#encabezado");
//const encabezado = document.querySelector('.encabezado')

//Aplicar css
encabezado.style.background = "#333";
encabezado.style.color = "#fff";
encabezado.style.padding = "20px";
encabezado.textContent = "Los mejores cursos";
console.log(encabezado);

//Para que seleccione todos los elemento que coincidan y no solo el primero
let enlace;
enlace = document.querySelector(".enlace");
console.log(enlace);

//etiquetas
let h1;
h1 = document.querySelectorAll("img");
h1 = document.querySelector(".card img");
console.log(h1);

//selector
enlace = document.querySelector("#principal a:first-child");
enlace = document.querySelector("#principal a:nth-child(3)");
enlace = document.querySelector("#principal a:last-child");
console.log(enlace);
