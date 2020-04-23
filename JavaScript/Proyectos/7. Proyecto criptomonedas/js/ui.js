class Intefaz {
	constructor() {
		this.selectCrioptoMonedas();
	}
	async selectCrioptoMonedas() {
		let datosCriptoMonedas = await api.criptoMonedasDisponibles();
		//para obtener las claves (que son los nombres de las criptomonedas) se usa Object.keys
		// let listaCriptoMonedas = Object.keys(datosCriptoMonedas)

		//crear select
		const select = document.querySelector("#criptomoneda");
		//con esto podemos recorrer cada entrada del objeto
		//también se podría hacer con innerHTML pero los objetos quedarian en el orden contrario
		for (const [key, moneda] of Object.entries(datosCriptoMonedas)) {
			let opcion = document.createElement("option");
			opcion.value = key;
			opcion.innerText = moneda.CoinName;
			select.appendChild(opcion);
		}
	}
	camposObligatorios(formulario) {
		let mensajeError = document.createElement("div");
		mensajeError.className = "alert alert-danger";
		mensajeError.innerText = "Todos los campos son obligatorios";
		mensajeError.id = "mensaje-error";
		formulario.insertBefore(mensajeError, formulario.firstChild);
		setTimeout(() => {
			document.querySelector("#mensaje-error").remove();
		}, 2000);
    }
    async mostrarCotizacion(formulario,simbolo,monedaCambio){
        const objetoValor= await api.cambioMoneda(simbolo,monedaCambio)
        //crea una lista de objetos pero como es solo 1 primero hay que acceder a la posicion 0 y luego a la 1
        const listaObjeto = Object.entries(objetoValor)
        //creando mensaje
        let mensajeCotizacion = document.createElement("div");
		mensajeCotizacion.className = "alert alert-success";
		mensajeCotizacion.innerText = `La cotización es de ${listaObjeto[0][1]}`;
        mensajeCotizacion.id = "mensaje-cotizacion";
        formulario.appendChild(mensajeCotizacion)

    }
}
