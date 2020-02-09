class Jugador1 extends Jugador {
    constructor(px,py){
        super(px,py);
        this.px=px;
        this.py=py;
    }
    pintarse(){
    fill(255);
    ellipse(px,py,50,50);   
    }
    
    }