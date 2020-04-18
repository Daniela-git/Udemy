function Cliente(nombre, saldo) {
    //constructor
    this.nombre = nombre;
    this.saldo = saldo;
}
//crear un prototipo
//un prototipo es como el metodo de una clase, solo que en este caso las clases se estan creando por medio de una funcion que funciona como constructor
Cliente.prototype.tipoCliente = function () {
    let tipo;
    //el this es par referirse a los atributos del mismo objeto
    if (this.saldo > 1000) {
        tipo = "gold";
    } else if (this.saldo > 500) {
        tipo = "platino";
    } else {
        tipo = "normal";
    }
    return tipo;
};
Cliente.prototype.nombreCliente = function () {
    return `Nombre ${this.nombre}, tu saldo es ${
        this.saldo
    }, tipo de cuenta ${this.tipoCliente()}`;
};
Cliente.prototype.retirarSaldo = function (retiro) {
    if (retiro <= this.saldo) {
        this.saldo -= retiro;
        return `retiro exitoso, saldo: ${this.saldo}`;
    } else {
        return "no puedes retirar esta cantidad";
    }
};
const cliente = new Cliente("pedro", 100);
console.log(cliente.tipoCliente());
console.log(cliente.nombreCliente());
console.log(cliente.retirarSaldo(50));

//la mayoria de funciones o objetos de js al mostrarlos por consola tienen un atributo _proto_ donde salen todos los metodos que se les puede aplicar