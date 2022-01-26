function acheOsNumeros (value){
    return value >= 11;
}

const itens = [0,1,2,10,22,50,5].filter(acheOsNumeros);

console.log(itens)
