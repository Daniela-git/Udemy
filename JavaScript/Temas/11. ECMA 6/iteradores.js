//iterador manual
//agregar



//iterador con generador
// se indican co un * desoues del function

function* crearGenerador() {
	//yiel: valor que se quiere en el generador, puede ser numero string bool sumas, cualquier primitivo de js
	yield 1;
	yield "nombre";
	yield 3 + 3;
	yield true;
}

const iterador = crearGenerador();
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function* nuevoGenerador(carrito){
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i]
        
    }
} 

const carrito = ['camisa','camisa1','camisa2','camisa3']
let iterador2 = nuevoGenerador(carrito)
console.log(iterador2.next())
console.log(iterador2.next().value)
console.log(iterador2.next().value)
console.log(iterador2.next().done)
console.log(iterador2.next().value)