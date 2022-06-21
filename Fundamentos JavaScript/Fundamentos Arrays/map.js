const numbers = [1,2,3,4,5];

function multiplica (num){
    return num * 10;
   
}

const multiplicacao = numbers.map(multiplica)

console.log(multiplicacao)