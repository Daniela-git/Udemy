const numeros = [1, 2, 3, 4, 5, 6];

const [primero, segundo] = numeros;
console.log(primero, segundo);
//en caso de que se quiera acceder a un solo valor
const [, , , cuarto] = numeros;
console.log(cuarto);

//ejemplo avanzado

const cliente = {
	tipo: "premiun",
	saldo: 4888888,
	datos: {
		nombre: "pedro",
		residencia: {
			ciudad: "medellin",
		},
	},
	movimientos: ["dia 1", "dia 2", "dia 3"],
};

let {
	movimientos: [uno],
} = cliente;
console.log(uno);
