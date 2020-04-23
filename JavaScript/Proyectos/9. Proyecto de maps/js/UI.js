class UI {
	constructor() {
        // Instanciar la API
        this.api = new API();
        //crear los marker con layergroup
        this.markets = new L.LayerGroup()

		// Iniciar el mapa
		this.mapa = this.inicializarMapa();
	}
	inicializarMapa() {
		// Inicializar y obtener la propiedad del mapa

		const map = L.map("mapa").setView([19.390519, -99.3739778], 6);

		const enlaceMapa =
			'<a href="http://openstreetmap.org">OpenStreetMap</a>';

		L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: "&copy; " + enlaceMapa + " Contributors",
			maxZoom: 18,
		}).addTo(map);

		return map;
    }
    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos =>{
                const resultado = datos.respuestaJson.results
                //mostrar los pines
                this.mostrarPines(resultado)
            })
    }
    mostrarPines(datos){
        //limpiar los markets funcion de la api de mapas
        this.markets.clearLayers()

        //recorrer establecimientos
        datos.forEach(dato=>{
            const {latitude, longitude, calle, regular, premium} = dato
             //crear popUP
             const opcionesPopup = L.popup()
             .setContent(`<p><b>Calle:</b> ${calle}</p>
                          <p><b>Regular:</b> $${regular}</p>
                          <p><b>Premium:</b> $${premium}</p>  `)
            //agregar al pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopup)

            this.markets.addLayer(marker)

        })
        this.markets.addTo(this.mapa)
    }
    //buscador
    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJson.results
                this.filtrarSugerencias(resultado, busqueda)

            })
    }

    filtrarSugerencias(resultados, busqueda){
        //filtrar los resultados .filter
        const filtro = resultados.filter(filtro => filtro.calle.indexOf(busqueda) !== -1)
        this.mostrarPines(filtro)

    }
}
