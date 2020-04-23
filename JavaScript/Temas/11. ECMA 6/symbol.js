//nuevo tipo de dato de js

const simbol = Symbol()
const simbol2 = Symbol('Descripcion')

//cada symbol es diferente al otro
console.log(Symbol() === Symbol()) // false

//agregando symbol a objetos

let persona = {}
persona.simbol = 'juan'
persona[simbol] = 'Juan'
console.log(persona)
console.log(persona.simbol)//accede al atributo
console.log(persona[simbol])//accede al symbol



