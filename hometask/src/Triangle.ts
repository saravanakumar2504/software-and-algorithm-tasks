import { Point } from "./Point";
import { Shape } from "./Shape";

let a, b, c;
export class Triangle extends Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(pt1: Point, pt2: Point, pt3: Point);
  constructor(pt1: Point, pt2: Point, pt3: Point, color?: string, filled?: boolean);

  constructor(pt1: Point, pt2: Point, pt3: Point, color?: string, filled?: boolean) {
    super([pt1, pt2, pt3]);
  }

  toString(): string {
    const data = this.points.map((item, i) => `v${i + 1}=(${item.x}, ${item.y})`);
    return `Triangle[${data}]`;
  }

  order() {
    let copy = new Array(3);
    copy[0] = a;
    copy[1] = b;
    copy[2] = c;
    copy.sort(function (a, b) {
      return a - b;
    });
    a = copy[0];
    b = copy[1];
    c = copy[2];
  }

  square(x: number) {
    return x * x;
  }

  euclidDistSquare(p1: Point, p2: Point) {
    return this.square(p1.x - p2.x) + this.square(p1.y - p2.y);
  }

  getSideClassification(a, b, c) {
    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);
    if (a == b && b == c) return "equilateral triangle";
    else if (a == b || b == c) return "isosceles triangle";
    else return "scalene triangle";
  }

  classifyTriangle(p1: Point, p2: Point, p3: Point) {
    a = this.euclidDistSquare(p1, p2);
    b = this.euclidDistSquare(p1, p3);
    c = this.euclidDistSquare(p2, p3);

    this.order();
    return this.getSideClassification(a, b, c)
  }
  getType(): string {
    return this.classifyTriangle(this.points[0], this.points[1], this.points[2]);
  }
}
