let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; /*pixel*/

let snakeW = [];
snakeW[0] = {
    x: 8 * box, y: 8 * box
}

let direction = "right"; /*direção inicial*/
let foodRandom = {
    x: Math.floor(Math.random() * 15 + 1) * box, /*geracao randomica para localizacao da comida*/
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){ /*criar background*/
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); /* x, y alt, larg*/
}

function snakeWalking(){
    for (i = 0; i < snakeW.length; i++){ 
        context.fillStyle = "green";
        context.fillRect(snakeW[i].x, snakeW[i].y, box, box); 
    }
}

function foodCreat(){
    context.fillStyle = "red";
    context.fillRect(foodRandom.x, foodRandom.y, box, box);
}

document.addEventListener('keydown', update);
function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}

function initGame(){

    criarBG();
    snakeWalking();
    foodCreat();

    for(i = 1; i < snakeW.length; i++){
        if(snakeW[0].x == snakeW[i].x && snakeW[0].y == snakeW[i].y){
            clearInterval(initGame);
            alert('Game Over');
        }
    }

    /*some de um lado reaparece do outro*/
    if(snakeW[0].x > 15 * box && direction == "right") snakeW[0].x = 0;
    if(snakeW[0].x < 0 && direction == "left") snakeW[0].x = 16 * box;
    if(snakeW[0].y > 15 * box && direction == "down") snakeW[0].y = 0;
    if(snakeW[0].y < 0 && direction == "up") snakeW[0].y = 16 * box;


    let snakeX = snakeW[0].x; /*ponto inicial*/
    let snakeY = snakeW[0].y; /*ponto inicial*/

    /*cordenadas de incremento e decremento*/
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    
    if(snakeX != foodRandom.x || snakeY != foodRandom.y){
        snakeW.pop(); /*decrementa o ultimo elemento do array*/
    }else{
        foodRandom.x = Math.floor(Math.random() * 15 + 1) * box; 
        foodRandom.y = Math.floor(Math.random() * 15 + 1) * box; 
    }

    let newHead = { /*incrementa o primerio elemento do array*/
        x: snakeX, y: snakeY
    }

    snakeW.unshift(newHead);
}

let game = setInterval(initGame, 100); /* intervalo de atualização em ms*/








/*
Seta para Esquerda: 37
      Seta para Cima: 38
   Seta para Direita: 39
    Seta para Baixo: 40
             Delete: 46
*/ 