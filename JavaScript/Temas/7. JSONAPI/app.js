//ENDPOINTS: rutas

const cargarPosts = document
	.querySelector("#cargar")
	.addEventListener("click", cargarAPI);

function cargarAPI() {
	// crear el objeto
	const xhr = new XMLHttpRequest();
	// abrir la conexion
	xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
	// Carga y leer datos
	xhr.onload = function () {
		if (this.status === 200) {
			const respuesta = JSON.parse(this.responseText);

			let contenido = "";
			respuesta.forEach(function (post) {
				contenido += `
                    <h3 style = color:#78A7FF>${post.title}</h3>
                    <p>${post.body}</p>
               `;
			});
			document.getElementById("listado").innerHTML = contenido;
		}
     };
     //que no se envie el send, sino no se va a mostrar nada
	// enviar la conexion
	xhr.send();
}
