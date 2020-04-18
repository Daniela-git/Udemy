//event bubbling
//cuando algo esta contenido dentro de otra cosa causando que varios eventos ocurran a la vez pero no se quiere 
const card = document.querySelector('.card')
const infoCurso = document.querySelector('.info-card')
const agregarCarrito = document.querySelector('.agregar-carrito')
card.addEventListener('click',function(e){
    console.log('card')
    e.stopPropagation()//para evitar el event bobbling
})
infoCurso.addEventListener('click',function(e){
    console.log('curso')
    e.stopPropagation()
})
agregarCarrito.addEventListener('click',function(e){
    console.log('carrito')
    e.stopPropagation()
})