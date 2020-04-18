//OBJECT LITERAL

// const cliente = {
//     nombre: 'Juan',
//     saldo: 600,
//     tipoCliente: function(){
//         let tipo
//         //el this es par referirse a los atributos del mismo objeto
//         if(this.saldo > 1000){
//             tipo = 'gold'
//         }else if(this.saldo > 500){
//             tipo = 'platino'
//         }
//         else{
//             tipo = 'normal'

//         }
//         return tipo
//     }
// }

// console.log(cliente.saldo)

//METODO ALTERNATIVO

function Cliente(nombre, saldo){//constructor
    this.nombre = nombre
    this.saldo = saldo
    this.tipoCliente= function(){
            let tipo
            //el this es par referirse a los atributos del mismo objeto
            if(this.saldo > 1000){
                tipo = 'gold'
            }else if(this.saldo > 500){
                tipo = 'platino'
            }
            else{
                tipo = 'normal'
    
            }
            return tipo
        }
}
const persona= new Cliente('pedro',20000)
const persona2= new Cliente('ana',2000)

console.log(persona2.tipoCliente())