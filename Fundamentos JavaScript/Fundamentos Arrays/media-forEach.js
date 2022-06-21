const notas = [10,10]

let somaDasNotas = 0;

notas.forEach(function(nota){
    somaDasNotas += nota/notas.length
})

console.log(somaDasNotas)

