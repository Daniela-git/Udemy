//variables
const apiKey =
	"c16dd81191e780d3a37c9ddbf879bdb2973ecc792ccc8b8368801734792988e5";
const api = new CriptoApi(apiKey);
const ui = new Intefaz();
//selector
const formulario = document.getElementById("formulario");

//event listeners
formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	
	if(formulario.children.length === 3){
		document.querySelector("#mensaje-cotizacion").remove();

	}

	//leer moneda seleccionada
	const selectMoneda = document.querySelector("#moneda");
	//selectMoneda.options --> devuelve una lista con las opciones dentro del select en formato html
	//selectMoneda.selectedIndex --> devuelve el indice de la opcion seleccionada
	//ahora con estas dos cosas tenemos el html de la opcion, por tanto con el .value la optenemos
	const monedaSeleccionada =
		selectMoneda.options[selectMoneda.selectedIndex].value;

	//leer crypto moneda
	const selectCriptoMoneda = document.querySelector("#criptomoneda");
	const criptoMonedaSeleccionada =
		selectCriptoMoneda.options[selectCriptoMoneda.selectedIndex].value;

	// comprobar que tengan algo seleccionado
	if (monedaSeleccionada === "" || criptoMonedaSeleccionada === "") {
		ui.camposObligatorios(formulario)
	}else{
		ui.mostrarCotizacion(formulario,criptoMonedaSeleccionada,monedaSeleccionada)
	}
});
