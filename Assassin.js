class Assassin extends BaseClass{
    constructor(x, y) {
        super(x, y);
        this.initialX = this.x;
        this.initialY = this.y;
    } 

    display() {
        stroke("black");
        fill("red");
        super.display();
    }
    projection(){
        if(this.x >= (mouseX - this.radius) && this.x <= (mouseX + this.radius) 
        && this.y >= (mouseY - this.radius) && this.y <= (mouseY + this.radius)) {
            push();
            fill(rgb(0,0,100));
            rectMode(CENTER)

            rect(this.initialX+50,this.initialY+50,50,50)
            rect(this.initialX+100,this.initialY+100,50,50)
            rect(this.initialX+150,this.initialY+150,50,50)
            rect(this.initialX+200,this.initialY+200,50,50)
            rect(this.initialX+250,this.initialY+250,50,50)

            rect(this.initialX-50,this.initialY+50,50,50)
            rect(this.initialX-100,this.initialY+100,50,50)
            rect(this.initialX-150,this.initialY+150,50,50)
            rect(this.initialX-200,this.initialY+200,50,50)
            rect(this.initialX-250,this.initialY+250,50,50)

            rect(this.initialX+50,this.initialY,50,50)
            rect(this.initialX+100,this.initialY,50,50)

            rect(this.initialX-50,this.initialY,50,50)
            rect(this.initialX-100,this.initialY,50,50)

            pop();
        }
    }

    movement(){
        if(this.x >= (mouseX - this.radius) && this.x <= (mouseX + this.radius) 
        && this.y >= (mouseY - this.radius) && this.y <= (mouseY + this.radius)) {
            this.x = mouseX;
            this.y = mouseY;    
        }
    }

    restriction(){
        if(this.x>this.initialX && this.x<this.initialX+75 && this.y<this.initialY+25 && this.y>this.initialY-25){
            this.x= this.initialX+50
            this.y= this.initialY
        } else{
            this.x=this.initialX
            this.y=this.initialY
            console.log("hi")
        }

        this.initialX = this.x;
        this.initialY = this.y;
    }
}