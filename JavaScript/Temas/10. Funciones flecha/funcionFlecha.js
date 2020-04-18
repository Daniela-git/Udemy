//funciones flecha

//esta es la forma normal de hacer las funciones
let aprendiendo;

aprendiendo = function () {
	console.log("aprendiendo js");
};

//esta es la forma con funcion flecha
aprendiendo = () => {
	console.log("aprendiendo js");
};

//una linea no requiere llaves
// aprendiendo = () => console.log('aprendiendo js')

aprendiendo();

//en este caso retorna el valor a la funcion
aprendiendo = () => "aprendiendo js";
console.log(aprendiendo());

//retorna objeto
aprendiendo = () => ({ aprendiendo: "aprendiendo js" });
console.log(aprendiendo());

//pasando parametros, cuando es uno solo el parentesis es opcional
aprendiendo = tecnologia => console.log(tecnologia);
aprendiendo("pasando parametros");
aprendiendo = (p1, p2) => console.log(`${p1}${p2}`);
aprendiendo("pasando", " dos parametros");

//funciones flecha con callback

// const productos = ['disco','camisas','guitarras']
// const letrasProducto = productos.map(function(productos){
//     return productos.length
// })
const productos = ["disco", "camisas", "guitarras"];
const letrasProducto = productos.map((productos) => productos.length);

console.log(letrasProducto);

//forEach con flecha
productos.forEach(producto=> console.log(producto))











