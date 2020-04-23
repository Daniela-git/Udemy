class CriptoApi{
    constructor(clave){
        this.clave = clave
    }
    async criptoMonedasDisponibles(){
        const url =  `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        //conectamos a la api
        const respuesta = await fetch(url)
        //la respuesta es los datos que trae la api y con el await no es necesario el then
        const listaCriptoMonedas = await respuesta.json()
        //devolvemos los datos que trae la api en formato json
        return listaCriptoMonedas.Data
    }
    async cambioMoneda(simbolo,monedaCambio){
        const url = `https://min-api.cryptocompare.com/data/price?fsym=${simbolo}&tsyms=${monedaCambio}`
        const respuesta = await fetch(url)
        //la respuesta es los datos que trae la api y con el await no es necesario el then
        const objetoValor = await respuesta.json()
        //devolvemos los datos que trae la api en formato json
        return objetoValor
    }

}

