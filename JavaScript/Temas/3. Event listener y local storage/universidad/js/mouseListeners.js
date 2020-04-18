//otros eventos con el mouse

const encabezado = document.querySelector('#encabezado')
const enlaces = document.querySelectorAll('.enlace')
const boton = document.querySelector('#vaciar-carrito')

//click
//boton.addEventListener('click', obtenerEvento)

//doble click 
//boton.addEventListener('dblclick', obtenerEvento)

//mouse enter(pararse en el boton) 
// boton.addEventListener('mouseenter', obtenerEvento)

//MOSUSE leave (cuando el mouse sale del boton)
// boton.addEventListener('mouseleave', obtenerEvento)
//Mouse over
// boton.addEventListener('mouseover ', obtenerEvento)
//Mouse out
// boton.addEventListener('mouseout ', obtenerEvento)
//mouse down
// boton.addEventListener('mousedown', obtenerEvento)
//mouse up
// boton.addEventListener('mouseup', obtenerEvento)

encabezado.addEventListener('mousemove',obtenerEvento)
function obtenerEvento(e){
    console.log(`Evento: ${e.type}`)//type dice el tipo del evento
}


