//forma vieja
// function reservacion(completo, opciones) {
// 	opciones = opciones || {};
// 	let medoto = opciones.medoto,
// 		cantidad = opciones.cantidad,
//         dias = opciones.dias;
        
//         console.log(medoto,cantidad,dias)
// }

// reservacion(true, {
// 	metodo: "efectivo",
// 	cantidad: 20000,
// 	dias: 2,
// });

//forma nueva
function reservacion(completo, opciones) {
        let {metodo = 'efectivo', cantidad ='0', dias} = opciones
        console.log(metodo,cantidad,dias)
}

reservacion(true, {
	metodo: "efectivo",
	// cantidad: 20000,
	dias: 2,
});
