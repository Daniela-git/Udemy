//delegation
document.body.addEventListener('click',eleminarElemento)

// function eleminarElemento(e){
//     e.preventDefault()
//     console.log('Click')
//     if(e.target.classList.contains('borrar-curso')){
//         console.log('si')
//     }else{
//         console.log('no')
//     }
// }
//de esta forma no es necesario crear un evento para cada boton de manera independiente
function eleminarElemento(e){
    e.preventDefault()
    console.log('Click')
    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove())
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('curso agregado')
    }
}