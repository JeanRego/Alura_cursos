const notas = [10,1,5,4,6];

//import {idades} from '';

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
} 

let totalMedia = somaDasNotas/notas.length;

console.log(totalMedia)
//console.log(`Notas ${notas}`)