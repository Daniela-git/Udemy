//event listener de clic

//clic selector


//Sin controlar los eventos default
// document.querySelector('#submit-buscador').addEventListener('click',function() { 
//     alert('buscando cursos')
// })


//controlando los eventos default
// document.querySelector('#submit-buscador').addEventListener('click',function(event) { // la event permite que se le diga al navegador que tiene que hacer despues del evento, ya que al ponerlo permite usarlo dentro de la función
//     event.preventDefault() // previene la accion de default, y que hagalo que dice la funcion
//     alert('buscando cursos')
// })


//Creando la función separada
document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton)
function ejecutarBoton(event) { 
    event.preventDefault() // previene la accion de default, y que hagalo que dice la funcion
    //alert('buscando cursos')
    
    let elemento
    elemento = event
    elemento = event.target
    elemento = event.target.id
    elemento = event.target.className
    
    console.log(elemento)
}
document.querySelector('#encabezado').addEventListener('click',function(e){
    e.target.innerText = 'nuevo encabezado'
})

