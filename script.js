let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let fundo = 32;
let cobra = [];
cobra[0] = {x: 8 * fundo, y: 8 * fundo}
let direction = "right";


function criarBG(){
    context.fillStyle = "white";
    context.fillRect(0, 0, 16 * fundo, 16 * fundo);
}

function criarCobrinha(){
    for (i=0; i < cobra.length; i++){
        context.fillStyle ="green";
        context.fillRect(cobra[i].x, cobra[i].y, fundo, fundo);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direction == "right") cobraX += fundo;
    if(direction == "left") cobraX -= fundo;
    if(direction == "up") cobraY -= fundo;
    if(direction == "down") cobraY += fundo;

    cobra.pop();

    let novaCabeca = {x: cobraX, y: cobraY}

    cobra.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);