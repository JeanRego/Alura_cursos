const alunos = ['jean','isabelli','titi','amora'];
const notas = [10,4,10,10];

let listaDeNotasEAlunos = [alunos, notas]

/*const exibeNomeNota = (nomeAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeAluno)){
        return `Aluno achado: ${nomeAluno}`
    }else{
        return 'nao achei'                      //MINHA VERSAO MAIS SIMPLES
    }
}
*/


const exibeNomeNota = (nomeAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeAluno)){ //.INCLUDES RETORNA VERDADEIRO OU FALSO (BOOLEANO)
        index = listaDeNotasEAlunos[0].indexOf(nomeAluno); // .INDEXOF RETORNA NUMERO DO INDICE
        return listaDeNotasEAlunos[0][index] + ' sua media é ' + listaDeNotasEAlunos[1][index]
    }else{
        return 'Aluno não cadastrado'
    }
}

console.log(exibeNomeNota('amora')) // 8:40 ALURA

