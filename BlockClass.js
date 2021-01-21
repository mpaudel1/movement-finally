class BlockClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.side = 50;
    }
    display() {
        rectMode(CENTER);
        rect(this.x, this.y, this.side, this.side);
    }
}