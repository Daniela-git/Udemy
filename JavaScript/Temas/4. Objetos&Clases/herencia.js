//Clases Ecma 6

//Recomendado que empiece por mayus
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo

    }
    imprimirSaldos(){
        return ` hola ${this.nombre} tu saldo es ${this.saldo}`

    }
   
    //no es necesario crear un objeto para poder usarlo
    //no lo puede usar el objeto
    static bienvenida(){
        return 'Bienvenido al cajero'
    }
}

class Empresa extends Cliente{
    constructor(nombre,saldo, telefono,tipo){
        //va hacia el constructor padre
        super(nombre, saldo)
        this.telefono = telefono
        this.tipo = tipo
    }
    //sobre escribir metodos
    static bienvenida(){
        return 'Bienvenido al cajero para empresas'
    }


}

const empresa = new Empresa('empresa1',10000,43455345,'educacion')
console.log(empresa)
console.log(empresa.imprimirSaldos())
console.log(Empresa.bienvenida())