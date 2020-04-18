//es bueno para insertar información sin la necesidad de recargar la pagina. Ahora se usa mucho fetch de javascript

document.getElementById("cargar").addEventListener("click", cargarDatos);

function cargarDatos() {
	//este objeto va a tener todos los metodos para interactuar con ajax
	const xhr = new XMLHttpRequest();

	//abrir conexion
	//que metodo se va a usar, la url del archivo, asincrono
	xhr.open("GET", "datos.txt", true);

    //una vez que carga la pagina
    

    //Forma antigua de hacerlo
    // xhr.onreadystatechange = function (){
    //     //ready status
    //     /*
    //     0: no inicializado
    //     1: conexion establecifa
    //     2: recibido
    //     3: procesando
    //     4: respuesta lista
    //     */
    //     if(this.readyState === 4 && this.status === 200){
    //         document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`
    //     }

    // }

    //Forma nueva
	xhr.onload = function () {
		//esto es el estado
		//200: correcto, 403:prohibido, 404: no encontrado
		if (this.status === 200) {
			document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
		}
	};
	enviar el request
	xhr.send();
}
