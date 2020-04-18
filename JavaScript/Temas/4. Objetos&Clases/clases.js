//Clases Ecma 6

//Recomendado que empiece por mayus
class Cliente{
    constructor(nombre, apellido, saldo){
        this.nombre = nombre
        this.apellido =apellido
        this.saldo = saldo

    }
    imprimirSaldos(){
        return ` hola ${this.nombre} tu saldo es ${this.saldo}`

    }
    tipoCliente(){
        let tipo
        //el this es par referirse a los atributos del mismo objeto
        if(this.saldo > 1000){
            tipo = 'gold'
        }else if(this.saldo > 500){
            tipo = 'platino'
        }
        else{
            tipo = 'normal'

        }
        return tipo
    }

    retirarSaldo(retiro){
        return this.saldo -= retiro
    }

    //no es necesario crear un objeto para poder usarlo
    //no lo puede usar el objeto
    static bienvenida(){
        return 'Bienvenido al cajero'
    }
}
const maria = new Cliente('maria','perex',1000000)
maria.retirarSaldo(300)

console.log(maria)
console.log(maria.imprimirSaldos())
console.log(Cliente.bienvenida)