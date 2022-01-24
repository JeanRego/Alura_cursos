function somaNumeros (x,y){
    return x + y;
}

function multiplica (x = 1 ,y = 1){ // o numero 1 foi colocado como teste pois esta multiplicando por 1 o valor apresentado de "x" ou "y" 
    return x * y;                   // podemos colocar o valor que quiser-mos dentro dos parameetros, poid os mesmos só serao executados dentro da própria função
}

function meuNome (nome, idade){
    return `Meu nome é ${nome}, e minha idade é ${idade} anos` 
}

//console.log(multiplica(somaNumeros(4,5),somaNumeros(0,0)))

function cumprimentar (){
    return 'Oi gente.';
}

function cumprimentaPessoa(pessoa){
    console.log(`${cumprimentar()} meu nome é ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena');

   meuNome('jean',27)