//object create
//ESta es otra manera de crear prototipos
const Cliente = {
    imprimirSaldo: function(){
        return ` hola ${this.nombre} tu saldo es ${this.saldo}`

    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro
    }
}

//crear el objeto
const mary = Object.create(Cliente)
mary.nombre = 'mary'
mary.saldo = 1000

mary.retirarSaldo(300)
console.log(mary)
console.log(mary.imprimirSaldo())