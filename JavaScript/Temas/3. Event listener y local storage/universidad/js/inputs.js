const busqueda = document.querySelector('#buscador')

//activa el evento cada vez que escribe
//busqueda.addEventListener('keydown', obtenerEvento)//cuando la presiona
// busqueda.addEventListener('keyup', obtenerEvento)//cuando la suelta
// busqueda.addEventListener('keypress', obtenerEvento)
//cada vez que entra al buscador se activa (si sale y vuelve a entrar)
// busqueda.addEventListener('focus', obtenerEvento)
//Blur (cuando das click fuera del buscador, pero antes lo habias seleccionado) MUY USADO EN LA VALIDACIÓN DE FORMULARIOS
// busqueda.addEventListener('blur', obtenerEvento)
//CORTAR
// busqueda.addEventListener('cut', obtenerEvento)
//copiar
// busqueda.addEventListener('copy', obtenerEvento)
//pegar
// busqueda.addEventListener('paste', obtenerEvento)
//lee todo lo que se haga en el buscador
// busqueda.addEventListener('input', obtenerEvento)

// busqueda.addEventListener('change', obtenerEvento)


function obtenerEvento(e){
    //console.log(busqueda.value)//para mostrar la letra que se ingresa
    //document.querySelector('#encabezado').innerHTML = busqueda.value// va escribiendo en el encabezado lo que se escribe en el buscador
    console.log(`Evento: ${e.type}`)//type dice el tipo del evento
} 