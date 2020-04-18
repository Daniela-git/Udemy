async function obtenerClientes() {
	//crear un promise
	const clientes = new Promise((resolve, reject) => {
		setTimeout(() => {
            resolve("clientes descargados");
            reject('hubo un error')
		}, 2000);
	});
	//error o no
    const error = true;
    const respuesta = await clientes;
    return respuesta
	// if (!error) {
	// 	//el await lo que hace es esperar a que se termine el promise y luego continua ejecutando el codigo
	// 	return respuesta;
	// } else {
	// 	await Promise.reject("hubo un error");
	// }
}

obtenerClientes()
	.then((res) => console.log(res))
	.catch((error) => console.log(error));