class Assassin extends BaseClass{
    constructor(x, y) {
        super(x, y);
    } 
    display() {
        stroke("black");
        fill("red");
        super.display();
    }
}