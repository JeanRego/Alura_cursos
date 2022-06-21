const notas1 = [10,8];
const notas2 = [10];
const notas3 = [10];
const notas4 = [10];

var teste = notas1.indexOf() //indexOf revela se ha um itens escolhido e sua posicao

console.log(teste)


let totalNotas = [notas1, notas2, notas3,notas4];
let somadasNotas = 0;

for (let i = 0; i < totalNotas.length; i++){
    for (let j = 0; j < totalNotas[i].length; j++){
        somadasNotas += totalNotas[i][j]
    }
}

somadasNotas = somadasNotas/totalNotas.length

console.log(somadasNotas)
console.log(notas4.includes(1)) // INCLUDES BUSCA UM DETERMINADO ELEMENTO E RETORNA TRUE OU FALSE
