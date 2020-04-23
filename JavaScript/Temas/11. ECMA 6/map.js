//es como un diccionario de python

let cliente = new Map();

//agregar datos (clave, valor)
cliente.set("nombre", "daniela");
cliente.set("tipo", "premium");
cliente.set("saldo", 30000);

console.log(cliente);

//metodos para los map

//tamaño
console.log(cliente.size);

//si hay un valor
console.log(cliente.has("nombre"));

//acceder a los valores
console.log(cliente.get("nombre"));

//borrar
cliente.delete("tipo");
console.log(cliente);

//vaciar
cliente.clear();

//valores por defecto
const paciente = new Map([
	["nombre", "paciente"],
	["cuarto", "no definido"],
]);

console.log(paciente)
//evita duplicados de clave, pero reercribe el ultimo que se le pase
paciente.set('cuarto', 300)
paciente.set('cuarto', 400)
console.log(paciente)
//el indice es la clave
paciente.forEach((dato,index)=>{
    console.log(`${index},${dato}`)
})