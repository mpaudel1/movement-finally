class Assassin extends BaseClass{
    constructor(x, y) {
        super(x, y);
    } 
    display() {
        stroke("black");
        fill("red");
        super.display();
    }
    restriction() {
        var initialX = this.x;
        var initailY = this.y;
        console.log(initialX);
        console.log(initailY);
    }
}