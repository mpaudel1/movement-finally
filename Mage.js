class Mage extends BaseClass{
    constructor(x, y){
        super(x, y);
    }
    display() {
        stroke("black");
        fill("green");
        super.display();
    }
}