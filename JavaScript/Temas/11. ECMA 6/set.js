//es como una lista pero no permite duplicados, si se va a agregar un elemento que ya esta no lo agrega

let carrito = new Set();
console.log(carrito);

carrito.add("camisa"); //para agregar elementos
carrito.add("camisa 2"); //para agregar elementos
carrito.add("camisa 3"); //para agregar elementos
console.log(carrito.size); //para mirar le tamaño

//inicializar un set
let numeros = new Set([1,2,3,4,5,6,6,5,6,5,5,6,5,])

console.log(numeros)

//comprobar que algo existe
console.log(numeros.has(2))
console.log(numeros.has(7))

//borrar
numeros.delete(3)
console.log(numeros)
//recorrer el set con forEach
//el indixe y el item son la misma
carrito.forEach((producto,index)=>{
    console.log(`${index}, ${producto} `)
})

//convertir a arreglo
const arregloCarrito = [...carrito]
console.log(arregloCarrito)

//VACIAR
numeros.clear()