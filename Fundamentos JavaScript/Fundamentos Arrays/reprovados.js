//***desafio*****
// CALCULAR A MEDIA DOS ALUNOS E DIZER SE FORAO OU NAO APROVADOS

const alunos = ['jean','isa','cleude','eud'];
const notas = [7, 4.8, 10, 5];

const reprovados = alunos.filter((_,indice) => notas[indice] < 5);

console.log(reprovados)

