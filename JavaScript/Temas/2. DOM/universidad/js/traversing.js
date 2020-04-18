//traversing (poder recorrerjle sitio web con funciones)

//de padre a hijo
const navegacion = document.querySelector("#principal");

console.log(navegacion.childNodes); //muestra lod espacios en blanco del html
console.log(navegacion.children);
console.log(navegacion.children[0].nodeName); //retorna el tipo de objeto en html
console.log(navegacion.children[0].nodeType);
//los nodos son elementos html y el dom
/*tipos de nodos:
1 = elementos html
2 = atributos
3 = texto
8 = comentario
9 = documentos
10 = doctype
*/
console.log((navegacion.children[0].textContent = "nuevo enlace"));

const barra = document.querySelector(".barra");
console.log(barra.children);
console.log(barra.children[0].children);
console.log(barra.children[0].children[0].children);
console.log((navegacion.children[0].textContent = "nuevo enlace"));

const cursos = document.querySelectorAll(".card");
console.log('-----')
console.log(cursos);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].FirstElementChild);

console.log(cursos[0].childElementCount);

//de hijo a padre
const enlaces = document.querySelectorAll(".enlace");
//para poder hacer esto es necesario elegir un hijo
console.log(enlaces[0]);
console.log(enlaces[0].parentNode);
console.log(enlaces[0].parentElement); //recomendado
console.log(enlaces[0].parentElement.parentElement);

console.log(
  (cursos[0].parentElement.parentElement.parentElement.children[0].textContent =
    "hola desde traversing")
);

console.log(enlaces[4].previousElementSibling); //los sibling son los que estan al mismo nivel
console.log(enlaces[0].nextElementSibling);
