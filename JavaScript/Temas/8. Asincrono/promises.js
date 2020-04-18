//promises

//El resolve se ejecuta cuando la promesa se cumple, el reject en el caso contrario
// const esperando = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         resolve('se ejecuto')
//     },5000)
// });

// //el then es el que hace que se pueda ejecutar el resolve
// esperando.then(function(mensaje){
//     console.log(mensaje)
// })

//en este ejemplo se uso el setTimeout para simular la carga pero en realidad lo que esto haria es esperar por datos de algun servidor, y cuando lleguen haria lo que se ponga en el resolve

//-------------

const aplicarDescuento = new Promise(function (resolve, reject) {
	const descuento = false;
	if (descuento) {
		resolve("descuento aplicado");
	} else {
		reject("no se puede aplicar");
	}
});

//then y resolve estan atados y catch y reject tambien
aplicarDescuento.then(function (resultado) {
	console.log(resultado);
}).catch(function(error){
    console.log(error)
})
