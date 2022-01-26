const nomes = [{id:1, name:'Jean'},{id:2, name:'Isa'},{id:3, name:'rato'}];
const idades = [27,19];
idades.push(22)

let juntou = nomes.concat(idades) //concatenação de arrays



//nomes.splice(0,1) remover itens especificos
//nomes.pop() remove o ultimo item da array

let media = (idades[0]+idades[1]+idades[2])/idades.length; //calculo da media


console.log(media)