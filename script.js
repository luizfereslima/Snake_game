let tela = document.getElementById("cobra");
let context = tela.getContext("2d");
let fundo = 32;
let cobra = [];
cobra[0] = {x: 8 * fundo, y: 8 * fundo}
let direction = "right";
let comida = {x: Math.floor(Math.random() * 15 + 1)  * fundo, y: Math.floor(Math.random()*15+1) * fundo}

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

function colocarComida(){
    context.fillStyle = "red";
    context.fillRect(comida.x, comida.y, fundo, fundo);
}

document.addEventListener("keydown", movimento);

function movimento (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    if(cobra[0].x > 15 * fundo && direction == "right") cobra[0].x = 0;
    if(cobra[0].x < 0 && direction == "left") cobra[0].x = 16 * fundo;
    if(cobra[0].y > 15 * fundo && direction == "down") cobra[0].y = 0;
    if(cobra[0].y < 0 && direction == "up") cobra[0].y = 16 * fundo;

    criarBG();
    criarCobrinha();
    colocarComida();

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

let jogo = setInterval(iniciarJogo, 80);