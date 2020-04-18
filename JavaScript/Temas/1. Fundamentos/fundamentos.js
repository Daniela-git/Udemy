var nombre = "daniela";
var nombre = "perla";
let apellido = "";
apellido = "higuita";

//Operadores de comparación

const numero = 1,
	numero2 = "2";

console.log(2 == numero2); //Este solo se fija que sean el mismo caracter
console.log(2 === numero2); //Este se fija en el caracter y en el tipo

//Convertir de string a numero
console.log(typeof numero2);
console.log(typeof Number(numero2));
console.log(typeof parseInt(numero2));
console.log(typeof parseFloat(numero2));
//Para quitar los decimal a los numeros
dato = 30890.23423423;
console.log(dato.toFixed(2));

//Convertir de numero a string, tambien se puede usar para boolean
console.log(typeof String(dato));

//OBJETOS
const persona = {
	nombre: "Miguel",
	email: "miguel@gmail.com",
	edad: 20,
	musica: ["rock", "pop", "kpop"],
	hogar: {
		ciudad: "medellin",
		pais: "colombia",
	},
	fechaCumple: function () {
		return new Date().getFullYear() - this.edad;
	},
};
console.log(persona.nombre);
console.log(persona.musica[0]);
console.log(persona.hogar.ciudad);
console.log(persona.fechaCumple());

//ARREGLOS DE OBJETOS
const anime = [
	{ genero: "shounen", nombre: "naruto" },
	{ genero: "shoujo", nombre: "inuxboku ss" },
];

console.log(anime[0].genero);
console.log(anime[1].nombre);

//FUNCIONES
//funcion declaration
function saludar() {
	console.log("hi friend");
}

function saludar2(nombre = "friend") {
	//Cunando no se mande el nombre va a poner friend
	return `hi ${nombre}`;
}
saludar();
console.log(saludar2("daniela"));
//funcion expression
const suma = function (a = 0, b = 0) {
	return a + b;
};
console.log(suma(1, 2));
console.log(suma(5));

//------------------

//metodos de propiedad
const musica = {
	reproducir: function () {
		console.log("reproduciendo");
	},
};
//se pueden crear los metodos desde fuera
musica.pausa = function () {
	console.log("pausa");
};
musica.reproducir();
musica.pausa();

//---------------------------
//try y catch
try {
	algo();
} catch (error) {
	console.error(error);
} finally {
	console.log("Se ejecuta siempre, con o sin error");
}

//FECHAS
const hoy = new Date();
console.log(hoy);

//IF ELSE ELSEIF
// para el or es  || y el and es &&

const log = true;
//para hacer un if el una linea
console.log(log === true ? "si logueado" : "no logueado");

//SWITCH
const condicion = "cheque";
switch (condicion) {
	case "efectivo":
		console.log("efectivo");
		break;

	case "cheque":
		console.log("cheque");
		break;
	default:
		console.log("no soprotado");
}

//For EACH
const lista = [1, 2, 3, 4];
lista.forEach(function (item, index) {
	console.log(`Indice:${index}, item: ${item} `); //es por defecto para indicar la posicion en el arreglo
});


const autos = {
	modelo: "camaro",
	marca: "chevrolet",
};

//for
for (let auto in autos) {
	console.log(`${auto}: ${autos[auto]}`);
}
//SCOPE
var a = "a";
let b = "b"; // ES la más recomendada para usar
const c = "c";
console.log("global: " + a, b, c);
//scope funciones
function funcionScope() {
	var a = "A";
	let b = "B";
	const c = "C";
	console.log("funcion: " + a, b, c);
}
funcionScope();
console.log("global: " + a, b, c);
if (true) {
	var a = "AA";
	let b = "BB";
	const c = "CC";
	console.log("bloque: " + a, b, c);
}

console.log("global: " + a, b, c);
