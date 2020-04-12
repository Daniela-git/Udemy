//modificar elementos
//para modificar los elementos primero hay que crear uno
const nuevoEncabezado = document.createElement("h1");

//agregar id
nuevoEncabezado.id = "encabezado";

//nuevo texto
nuevoEncabezado.appendChild(document.createTextNode("Los Mejores Cursos"));

//elemento anterior que sera reemplazado
const anterior = document.querySelector("#encabezado");
//elemento padre
const padre = document.querySelector("#lista-cursos");
//reemplazar
padre.replaceChild(nuevoEncabezado, anterior);
console.log(nuevoEncabezado);
