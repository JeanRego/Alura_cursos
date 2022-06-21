const sala1 = [10,5,4];
const sala2 = [9,6.8,7];
const sala3 = [10,3,4,8,9,0];

function somaMedia(value){
    let media = value.reduce((primeiroNumero,segundoNumero) => primeiroNumero+segundoNumero,0)
    return media/value.length
}

console.log(`Media sala 1: ${Math.round(somaMedia(sala1))}`)
console.log(`Media sala 2: ${Math.round(somaMedia(sala2))}`)
console.log(`Media sala 3: ${Math.round(somaMedia(sala3))}`)

/*const numeros = [0,1,5,8,5];
const soma = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)*/


   const numeros = [0,1,5,8,5];
   function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0)