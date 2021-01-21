class Warrior extends BaseClass {
    constructor(x, y) {
        super(x, y);
    }
    display() {
        stroke("black");
        fill("blue");
        super.display();
    }
}