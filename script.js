let canvas = document.getElementById("snake-game");
let context = canvas.getContext("2d");
let box = 32; /*pixel*/

function criarBG(){ /*criar background*/
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); /* x, y alt, larg*/
}

criarBG();
