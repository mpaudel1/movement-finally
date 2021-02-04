class BlockClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.side = 50;
        this.color = rgb(255, 150, 143);
    }
    display() {
        rectMode(CENTER);
        rect(this.x, this.y, this.side, this.side);
        fill(this.color);
    }
}