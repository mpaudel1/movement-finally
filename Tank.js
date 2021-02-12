class Tank extends BaseClass{
    constructor(x, y) {
        super(x, y);
        this.initialX = this.x;
        this.initialY = this.y;
    }

    display() {
        stroke("black");
        fill("yellow");
        super.display();
    }
    projection(){
        if(this.x >= (mouseX - this.radius) && this.x <= (mouseX + this.radius) 
        && this.y >= (mouseY - this.radius) && this.y <= (mouseY + this.radius)) {
            push()
            fill(rgb(0,0,100));
            rectMode(CENTER)
            rect(this.initialX+50,this.initialY+50,50,50)
            rect(this.initialX-50,this.initialY+50,50,50)
            rect(this.initialX,this.initialY+100,50,50)
            rect(this.initialX, this.initialY-50,50,50)
            pop()
        }
    }

    movement(){
        if(this.x >= (mouseX - this.radius) && this.x <= (mouseX + this.radius) 
        && this.y >= (mouseY - this.radius) && this.y <= (mouseY + this.radius)) {
            this.x = mouseX;
            this.y = mouseY;    
        }
    }

    restriction() {
        if(this.x>=this.initialX && this.y>this.initialY && this.y<this.initialY+75){
            this.x= this.initialX+50
            this.y=this.initialY+50
            console.log(this.x+","+this.y)
        }
        else if(this.x<=this.initialX && this.y>this.initialY && this.y<this.initialY+75){
            this.x= this.initialX-50
            this.y=this.initialY+50
            console.log(this.x+","+this.y)
        }else if(this.y>this.initialY+75){
            this.x=this.initialX
            this.y=this.initialY+100
            console.log("hi")
        }else if(this.y<=this.initialY-25){
            this.x=this.initialX
            this.y=this.initialY-50            

        }else{
            this.x=this.initialX
            this.y=this.initialY
        }
       
        this.initialX=this.x
        this.initialY=this.y
    }
}