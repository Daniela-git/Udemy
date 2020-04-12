//VARIABLES
const cursos = document.getElementById('lista-cursos')
const carrito = document.querySelector('#carrito a')
const listaCursos = document.querySelector('#lista-carrito tbody')

//EVENT LISTENERS
eventListeners()

function eventListeners(){
    //agregar
    cursos.addEventListener('click',comprarCurso)

    //borrar
    listaCursos.addEventListener('click',eleminarCarrito)

    //vaciar
    carrito.addEventListener('click',vaciarCarrito)

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', localStorageListo);
}

//FUNCIONES

//para agregar el producto

//primero se selecciona el curso cuando le dan click
function comprarCurso(e){
    e.preventDefault()

    if(e.target.classList.contains('agregar-carrito')){
        //elegimos el padre de la información que queremos
        let card = e.target.parentElement.parentElement
        datosCurso(card)
    }
}

//luego se saca la info del curso
function datosCurso(card){
    //se extrae la informacion de card y la guarmamod en un objeto
    let infoCurso = {
        img: card.querySelector('img').src,
        nombre: card.querySelector('h4').innerText,
        precio: card.querySelector('span').innerText,
        id: card.querySelector('a').getAttribute('data-id')
    }
    
    agregarCarrito(infoCurso)
}
//para que se vea en pantalla
function agregarCarrito(infoCurso){
    // se crea la fila
    const fila = document.createElement('tr')
    //se crean las columnas de la fila
    fila.innerHTML = `<td><img src=${infoCurso.img} width=100></td>
                      <td>${infoCurso.nombre}</td>
                      <td>${infoCurso.precio}</td>
                      <td><a href='#' class="borrar-curso" data-id=${infoCurso.id}>X</a></td>
                      `
    listaCursos.appendChild(fila)
    agregarLocal(infoCurso)
   
}

//eliminar
function eleminarCarrito(e){
    e.preventDefault()

    //Otraforma de hacerlo
    // let curso,
    //     cursoId;
    //  if(e.target.classList.contains('borrar-curso') ) {
    //       e.target.parentElement.parentElement.remove();
    //       curso = e.target.parentElement.parentElement;
    //       cursoId = curso.querySelector('a').getAttribute('data-id');

    //  }

    if(e.target.className === 'borrar-curso'){
        // quitarCurso()
        quitarCurso(e.target.getAttribute('data-id'))
    }
    
}
//ya no se ve
function quitarCurso(idCurso){
    let lista = listaCursos.querySelectorAll('a')
    lista.forEach(function(curso){
        if(curso.getAttribute('data-id')=== idCurso){
            curso.parentElement.parentElement.remove()
        }
    })
    eliminarLocal(idCurso)
}

//vaciar carrito

function vaciarCarrito(){

    //otra forma
//     while(listaCursos.firstChild) {
//         listaCursos.removeChild(listaCursos.firstChild);
//    }

    let lista = listaCursos.querySelectorAll('tr')
    lista.forEach(function(curso){
        curso.parentElement.remove()
    })
    vaciarLocal()
}

//LOCAL STORAGE

//Cargar los datos del local storage
function localStorageListo(){
    //obtenemos los datos del local storage
    let local = infoLocalStorage()
    //pasamos a la vista lo que hay
    local.forEach(function(infoCurso){
        // se crea la fila
        const fila = document.createElement('tr')
        //se crean las columnas de la fila
        fila.innerHTML = `<td><img src=${infoCurso.img} width=100></td>
                          <td>${infoCurso.nombre}</td>
                          <td>${infoCurso.precio}</td>
                          <td><a href='#' class="borrar-curso" data-id=${infoCurso.id}>X</a></td>
                          `
        listaCursos.appendChild(fila)

    })
}

//agregar los cursos que se agregan al carrito al local storage
function agregarLocal(curso){
    //se obtiene la infomque hay en el local
    let local = infoLocalStorage()
    //se agrega el nuevo curso a los existentes
    local.push(curso)
    //se agrega al local
    localStorage.setItem('curso',JSON.stringify(local))
}

//eliminar del local storage
function eliminarLocal(idCurso){
    //info del local storage
    let local = infoLocalStorage()
    //buscamos la que tiene el id correspondiente
    local.forEach(function(curso, index){
        if(curso.id == idCurso){
            local.splice(index, 1)
        }
    })
    //volvemos a agregar la informacion sin el valor que se elimino
    localStorage.setItem('curso',JSON.stringify(local))
}
function vaciarLocal(){
    localStorage.clear()
}

//obtener la info del local storage
function infoLocalStorage(){
    let cursos;
     // Revisamos los valoes de local storage
     if(localStorage.getItem('curso') === null) {
          cursos = []; 
     } else {
          cursos = JSON.parse(localStorage.getItem('curso') );
     }
     return cursos;
}