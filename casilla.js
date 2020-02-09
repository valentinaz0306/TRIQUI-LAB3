class Casilla {
constructor(tipo,px,py){
this.tipo= tipo;
this.px= px;
this.py= py;
}
pintarse(){
  if(this.tipo==1){
    fill(255);
    ellipse(this.px +100,this.py+100,50,50);
  } else if(this.tipo==2){
    fill(255,0,0);
    rect(this.px+100,this.py+100,50,50); 
  } 
}
setTipo(tipo){
this.tipo= tipo;
}
getTipo(){
    return this.tipo;
    }
}