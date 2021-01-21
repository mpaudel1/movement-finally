class BaseClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
    }
    display() {
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.radius, this.radius);
    }
}