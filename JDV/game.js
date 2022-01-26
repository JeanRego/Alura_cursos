const player1 = 'X';
const player2 = 'O';

var playerTime = player1;
var gamerOver = false;

atualizamostrador ();
inicializarEspacos();

function atualizamostrador (){
    if (gamerOver){return;}

    if (playerTime == player1){
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/x.png");
    }else{
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/o.png");
    }

}

function inicializarEspacos (){
   var espacos = document.getElementsByClassName ("espaco")
   for (var i = 0; i < espacos.length; i++){

        espacos[i].addEventListener("click", function(){
           
            if(gamerOver){return;}

            if(this.getElementsByTagName("img").length == 0){ //this. (É SE REFERE A UM ESPAÇO EM BRANCO)

                if(playerTime == player1){
                    this.innerHTML = "<img height= 50px src='imagens/x.png'>";
                    this.setAttribute("jogada", player1);
                    playerTime = player2;

                    }else{
                        this.innerHTML = "<img height= 50px src='imagens/o.png'>";
                        this.setAttribute("jogada", player2);
                        playerTime = player1;
                    }
                 atualizamostrador();       
            }
        })

   }
}