//local y session storage
//guarda los datos en el navegador

//agregar
//este se guarda aunque se cierre el navegador
localStorage.setItem('nombre','daniela')//ya se agrega al navegador
localStorage.setItem('apellido','daniela')
//este se borra al cerrar el navegador
sessionStorage.setItem('nombre', 'perla')

//eliminar un elemento
//localStorage.removeItem('nombre')

//obtener elemento
const nombre = localStorage.getItem('nombre')
console.log(nombre)

//borrar toda el local storage
localStorage.clear()