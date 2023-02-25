export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {  
            this.x =  x || 0;
            this.y =  y || 0;
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }

    public distance(): number;
    public distance(instance: Point): number;
    public distance(x: number, y: number): number;

    public distance(arg1?: number | Point, arg2?: number) {
        let x1 = this.x;
        let y1 = this.y;
        let x2: number;
        let y2: number;

        if( arg1 instanceof Point) {
            x2 = arg1.x;
            y2 = arg1.y;
        } else {
            x2 = arg1 || 0;
            y2 = arg2 || 0;
        }

        var xDiff = x1 - x2; 
	    var yDiff = y1 - y2; 

	    return Math.sqrt(xDiff * xDiff + yDiff * yDiff)
    }
}