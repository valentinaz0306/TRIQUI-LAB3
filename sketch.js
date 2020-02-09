let matriz = new Array(3);

function setup(){
createCanvas(600,600);
//matriz 
for (i=0;i<3;i++){
    matriz[i] = new Array(3);
    for(j=0;j<3;j++){
        matriz[i][j]= new Casilla(0,j*200,i*200);
    }
}
}

function draw(){
background(0);
// pintar cuadricula 
fill(255);
rectMode(CORNER);
rect(200,0,3,600);
rect(400,0,3,600);
rect(0,200,600,3);
rect(0,400,600,3);
rectMode(CENTER);

for (i=0;i<3;i++){
    for(j=0;j<3;j++){
        matriz[i][j].pintarse();
    }
}
    
}

function mousePressed(){
    // tipo 0 vacio
   //tipo 1 circulo
   //tipo 2 cuadrado

if(mouseX>0&&mouseX<200 && mouseY>0 && mouseY<200){
    matriz[0][0].setTipo(1);
}
if(mouseX>200&&mouseX<400 && mouseY>0&& mouseY<200){
    matriz[0][1].setTipo(2);
}
if(mouseX>400&&mouseX<600 && mouseY>0&& mouseY<200){
    matriz[0][2].setTipo(1);
} // col 1
if(mouseX>0&&mouseX<200 && mouseY> 200&& mouseY<400){
    matriz[1][0].setTipo(1);
}
if(mouseX>200&&mouseX<400 && mouseY> 200&& mouseY<400){
    matriz[1][1].setTipo(1);
}
if(mouseX>400&&mouseX<600 && mouseY> 200&& mouseY<400){
    matriz[1][2].setTipo(1);
}//col2
if(mouseX>0&&mouseX<200 && mouseY>400&& mouseY<600){
    matriz[2][0].setTipo(1);
}
if(mouseX>200 && mouseX<400 && mouseY>400&& mouseY<600){
matriz[2][1].setTipo(1);
}
if(mouseX>400 && mouseX<600 && mouseY>400&& mouseY<600){
    matriz[2][2].setTipo(1);
}

}