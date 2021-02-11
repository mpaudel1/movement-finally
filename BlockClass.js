class BlockClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.side = 50;
        this.color = "green";
    }
    display() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.x, this.y, this.side, this.side);
        
    }
}