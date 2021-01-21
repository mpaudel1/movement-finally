class Tank extends BaseClass{
    constructor(x, y) {
        super(x, y);
    }

    display() {
        stroke("black");
        fill("yellow");
        super.display();
    }
}