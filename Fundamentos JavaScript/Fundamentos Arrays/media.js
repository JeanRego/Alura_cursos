const notas = [10,7,8.6,9,8];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

let mediaNotas = somaDasNotas/notas.length

console.log(mediaNotas)