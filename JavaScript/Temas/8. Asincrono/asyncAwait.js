//async await
async function obtenerClientes() {
	//crear un promise
	const clientes = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("clientes descargados");
		}, 2000);
	});
	//error o no
	const error = true;
	if (!error) {
		//el await lo que hace es esperar a que se termine el promise y luego continua ejecutando el codigo
		const respuesta = await clientes;
		return respuesta;
	} else {
		await Promise.reject("hubo un error");
	}
}

obtenerClientes()
	.then((res) => console.log(res))
	.catch((error) => console.log(error));

	///-------------------
async function leerTodos() {
	//esperar respuesta
	const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");

	//procesar la repuesta
	const datos = await respuesta.json();
	return datos;
}

leerTodos().then((usuarios) => console.log(usuarios));
