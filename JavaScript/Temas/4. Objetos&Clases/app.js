function Cliente(nombre, saldo){//constructor
    this.nombre = nombre
    this.saldo = saldo
    this.tipoCliente = function (){
        return('hola soy la función de prueba')
    }
    
}
//crear un prototipo

Cliente.prototype.nombreCliente = function(){
    return `Nombre ${this.nombre}, tu saldo es ${this.saldo} }`
}


function Empresa(nombre, saldo, telefono, tipo){
    Cliente.call(this, nombre, saldo)//heredar los atributos
    this.telefono = nombre
    this.tipo = saldo
}

//heredar los prototipos

Empresa.prototype = Object.create(Cliente.prototype)
const empresa = new Empresa('udemy', 100000, 24254,'educación')
console.log(empresa.tipoCliente())
console.log(empresa.nombreCliente())