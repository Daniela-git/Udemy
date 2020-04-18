//RENOMBRR A app.js PARA PODER QUE SE VEAN LOS CAMBIOS EN EL HTML O CAMBIAR EL src EN EL HTML

let elemento;
elemento = document; //devuelve el document sin formato
elemento = document.all; //devuelve el document en un arreglo
console.log('elemento')
elemento = document.head; // los elementos de la cabeza
elemento = document.body; //los elementos del cuerpo
elemento = document.domain; //dominio
elemento = document.URL; //toda la url
elemento = document.forms; //formularios
elemento = document.forms[0].className; //nombre formulario (cadena de texto)
elemento = document.forms[0].classList; //lista de los nombres formulario
elemento = document.images; //imagenes
elemento = document.images[2]; //imagenes posicion 2
elemento = document.images[2].src; //imagenes posicion 2 link
elemento = document.images[2].getAttribute("src"); //imagenes posicion 2

elemento = document.images;
let imagenes = document.images;
let imagenesArr = Array.from(imagenes); //cambiar de htmlDocument a arreglo
imagenesArr.forEach(function (imagen) {
  console.log(imagen);
});
console.log(imagenesArr);
 