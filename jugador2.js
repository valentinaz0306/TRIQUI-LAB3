class Jugador2 extends Jugador {
    constructor(px,py){
        super(px,py);
        this.px=px;
        this.py=py;
    }
    pintarse(){
    fill(255,0,0);
    rect(px,py,50,50);   
    }
    
    }