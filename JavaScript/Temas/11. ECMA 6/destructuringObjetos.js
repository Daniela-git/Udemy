const cliente = {
	nombre: "alejandra",
	tipo: "premiun",
};

//antes se tenia que hacer así
// const nombre = cliente.nombre;
// const tipo = cliente.tipo;
// console.log(nombre,tipo)


//forma moderna
//se iguala al objeto de donde se quieren sacar los datos
let { nombre, tipo } = cliente;
console.log(nombre,tipo)

//en caso de que sea un objeto mas grande
const cliente2 = {
	nombre: "alejandra",
    tipo: "premiun",
    datos: {
        ubicacion:{
            ciudad:'medellin'
        },
        cuenta: {
            saldo: '100000'
        }

    }
};

//el nombre de datos es obligatorio porque tiene que ser el nombre del padre 
let{datos: {ubicacion}} = cliente2

console.log(cliente2)//da todo lo de cliente
console.log(ubicacion)// solo lo de ubicacion 

//tambien se puden poner valores por defecto en caso de que no este esa informacion
// en este caso si por alguna razon el cliente no tiene tipo le pondra normal por defecto 
let{nombre, tipo='normal',datos} = cliente2

