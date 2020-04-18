const ciudades = ["londres", "new york", "madrid", "paris", "viena"];
// callback en foreach

//con funcion definida
// function callback(ciudad) {
// 	console.log(ciudad);
// }
// ciudades.forEach(callback)

//Inline callback--->esta es la forma recomendada
ciudades.forEach(function (ciudad) {
	console.log(ciudad);
});

//------------

// los Callback son muy utiles para manejar cosas que no pasan al mismo tiempo pero se sabe que van a pasar o que pueden pasar, por ejemplo en este caso se usa para que cada vez que se agregue un elemento a la lista este se pueda mostrar por pantalla, porque como se agrega despues de mostrar la primera vez la lista, no se mostraría

//se agrega un nuevo pais despues de 2s

function nuevaCiudad(ciudad, callback){
    setTimeout(function(){
        ciudades.push(ciudad)
        callback()//este callback es una funcion que se pasa como atributo para que se ejecute cuando se ejecuta este codigo
    }, 2000)
}


//los paises se muestran despues de 1s
function mostrarPaises(){
    setTimeout(function(){
        let html =''
        ciudades.forEach(function(ciudad){
            html += `<li>${ciudad}</li>`
        })
        document.getElementById('app').innerHTML = html
    }, 1000)
}


//agragar pais
nuevaCiudad('medellin',mostrarPaises)
//mostrar paises
mostrarPaises()