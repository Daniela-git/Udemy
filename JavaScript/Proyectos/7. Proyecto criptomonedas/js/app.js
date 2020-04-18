//obtener fomulario

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	//leer moneda seleccionada
	const selectMoneda = document.querySelector("#moneda");
	//selectMoneda.options --> devuelve una lista con las opciones dentro del select en formato html
	//selectMoneda.selectedIndex --> devuelve el indice de la opcion seleccionada
	//ahora con estas dos cosas tenemos el html de la opcion, por tanto con el .value la optenemos
	const monedaSeleccionada =
    selectMoneda.options[selectMoneda.selectedIndex].value;

    //leer crypto moneda
	const selectCryptoMoneda = document.querySelector("#cryptomoneda");
	const cryptoMonedaSeleccionada =
    selectCryptoMoneda.options[selectCryptoMoneda.selectedIndex].value;

    //comprobar que tengan algo seleccionado
    if

});

