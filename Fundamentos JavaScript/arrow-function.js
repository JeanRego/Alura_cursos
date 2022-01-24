function meuNome (nome){
    console.log(`meu nome é ${nome}`);
}


const mostraNome = nome => `Meu nome é ${nome}`;



const somaDeNUmerosPequenos = (num1,num2) => {
    if (num1 || num2 >= 10){
        return 'somente numero de 1 a 9'
    } else {
        return num1 + num2;
    }
}

