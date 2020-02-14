let matriz = new Array(3);
let turno = 0;
let ganador = 0;
// pantallas de inicio, juego, ganador y perdedor.
let pantalla = 0;
// las imagenes
let menu;
let menu2;
let winStage;
// para saber que jugador va
let turnoSuma;

//Ojala funcione con los booleanos
let falsoo;

//Musica 
let m_bg

function preload() {
    //Se carga la imagen de carga.
    menu = loadImage('Imagenes/Menu.jpg');
    menu2 = loadImage('Imagenes/Menu2.jpg');
    winStage = loadImage('Imagenes/Ganador.jpg');
    m_bg= loadSound("Musica/m_bg.mp3");
}
function setup() {
    createCanvas(600, 700);
    //matriz 
    for (i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
        for (j = 0; j < 3; j++) {
            matriz[i][j] = new Casilla(0, j * 200, i * 200);
        }
    }
    falsoo = true;

    //Musica
    m_bg.play();
    m_bg.setVolume(0.2);


}

function draw() {
    switch (pantalla) {
        case 0:


        //Cancion del menu
       

            background(0);
            //la imagen del menu
            image(menu, 0, 0);
             //Interaccion del mouse al pasar por el boton de start
             if (mouseX > 258 && mouseX <= 348 && mouseY > 530 && mouseY <= 575) {
                image(menu2, 0,0);
            }
    
            break;

        case 1:
            background(0);
            // pintar cuadricula 
            fill(255);
            rectMode(CORNER);
            rect(200, 0, 3, 600);
            rect(400, 0, 3, 600);
            rect(0, 200, 600, 3);
            rect(0, 400, 600, 3);
            rectMode(CENTER);

            if(falsoo == true){
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    matriz[i][j].pintarse();
                }
            }
        }

            ganador = winner();
            if (ganador != 0) {
                pantalla = 2;
                falsoo = false;
            }
           
            //Esto es para saber que personaje le toca.
            textSize(50);
            fill(255);
            turnoSuma = turno + 1;
            text("Turno:",50, 650);
            text("Jugador" + turnoSuma, 260, 650);


            break;
           
        case 2:
            image(winStage, 0, 0);
            textSize(72);
            fill(255, 0, 255);
            text("JUGADOR" + ganador, 110, 360);
            break;
    }

}
function mousePressed() {
    // tipo 0 vacio
    //tipo 1 circulo
    //tipo 2 cuadrado

    // Para definir que hace los click en cada pantalla.
    switch (pantalla) {
        case 0:
            if (mouseX > 258 && mouseX <= 348 && mouseY > 530 && mouseY <= 575) {
                pantalla = 1;
                ganador = 0;
            }
            break;
        case 1:

                if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 200 && matriz[0][0].getTipo() == 0) {
                    matriz[0][0].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }
                if (mouseX > 200 && mouseX < 400 && mouseY > 0 && mouseY < 200 && matriz[0][1].getTipo() == 0) {
                    matriz[0][1].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }
                if (mouseX > 400 && mouseX < 600 && mouseY > 0 && mouseY < 200 && matriz[0][2].getTipo() == 0) {
                    matriz[0][2].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                } // col 1
                if (mouseX > 0 && mouseX < 200 && mouseY > 200 && mouseY < 400 && matriz[1][0].getTipo() == 0) {
                    matriz[1][0].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }
                if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400 && matriz[1][1].getTipo() == 0) {
                    matriz[1][1].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }
                if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400 && matriz[1][2].getTipo() == 0) {
                    matriz[1][2].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }//col2
                if (mouseX > 0 && mouseX < 200 && mouseY > 400 && mouseY < 600 && matriz[2][0].getTipo() == 0) {
                    matriz[2][0].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }
                if (mouseX > 200 && mouseX < 400 && mouseY > 400 && mouseY < 600 && matriz[2][1].getTipo() == 0) {
                    matriz[2][1].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }
                if (mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 600 && matriz[2][2].getTipo() == 0) {
                    matriz[2][2].setTipo(turno + 1);
                    turno = (turno + 1) % 2;
                }
            break;
        case 2:
            break;

    }


}

function winner() {
    let win = 0;
    // ganar filas
    if (matriz[0][0].getTipo() == matriz[0][1].getTipo() && matriz[0][1].getTipo() == matriz[0][2].getTipo()) {
        win = matriz[0][0].getTipo();
    }
    if (matriz[1][0].getTipo() == matriz[1][1].getTipo() && matriz[1][1].getTipo() == matriz[1][2].getTipo()) {
        win = matriz[1][0].getTipo();
    }
    if (matriz[2][0].getTipo() == matriz[2][1].getTipo() && matriz[2][1].getTipo() == matriz[2][2].getTipo() ) {
        win = matriz[2][0].getTipo();
    }
    // ganar col
    if (matriz[0][0].getTipo() == matriz[1][0].getTipo() && matriz[1][0].getTipo() == matriz[2][0].getTipo()) {
        win = matriz[0][0].getTipo();
    }
    if (matriz[0][1].getTipo() == matriz[1][1].getTipo() && matriz[1][1].getTipo() == matriz[2][1].getTipo()) {
        win = matriz[0][1].getTipo();
    }
    if (matriz[0][2].getTipo() == matriz[1][2].getTipo() && matriz[1][2].getTipo() == matriz[2][2].getTipo()) {
        win = matriz[0][2].getTipo();
    }
    //ganar diagonal 
    if (matriz[0][2].getTipo() == matriz[1][1].getTipo() && matriz[1][1].getTipo() == matriz[2][0].getTipo()) {
        win = matriz[0][2].getTipo();
    }
    if (matriz[0][0].getTipo() == matriz[1][1].getTipo() && matriz[1][1].getTipo() == matriz[2][2].getTipo()) {
        win = matriz[0][0].getTipo();
    }
    return win;
}

