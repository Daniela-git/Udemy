//MISMA NOTA DE PARTE 1

//getElementByid

//let elemento
// elemento = document.getElementById('hero')
// elemento = elemento.id //para ver el id
//console.log(elemento)

let encabezado;
// encabezado = document.getElementById('encabezado').className //para zaber la clase
// encabezado = document.getElementById('encabezado').textContent //para saber el texto que tiene
// encabezado = document.getElementById('encabezado').innerText // texto
encabezado = document.getElementById("encabezado");
encabezado.style.background = "#333"; //cambiar css
encabezado.style.color = "#fff";
encabezado.style.padding = "20px";

encabezado.textContent = "los mejores cursos"; //cambiar el contenido (tambien se puede con innerText)

console.log(encabezado);
