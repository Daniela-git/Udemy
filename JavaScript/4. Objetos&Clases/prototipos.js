function Cliente(nombre, saldo){//constructor
    this.nombre = nombre
    this.saldo = saldo
    
}
//crear un prototipo
Cliente.prototype.tipoCliente = function(){
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
Cliente.prototype.nombreCliente = function(){
    return `Nombre ${this.nombre}, tu saldo es ${this.saldo}, tipo de cuenta ${this.tipoCliente()}`
}
Cliente.prototype.retirarSaldo = function(retiro){
    if(retiro <= this.saldo){
        this.saldo-=retiro
        return `retiro exitoso, saldo: ${this.saldo}`
    }else{
        return 'no puedes retirar esta cantidad'
    }
}
const cliente = new Cliente('pedro', 100)
console.log(cliente.tipoCliente())
console.log(cliente.nombreCliente())
console.log(cliente.retirarSaldo(50))