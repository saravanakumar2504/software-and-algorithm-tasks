import { Point } from "./Point";
export abstract class Shape {
  protected readonly defaultColor = "green";
  protected readonly defaultFilled = true;

  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  abstract getType(): string;

  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean);

  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error();
    }
    this.points = points;
    this.color = color || this.defaultColor;
    this.filled = filled === undefined ? this.defaultFilled : filled;
  }

  toString() {
    const pointMsg = this.points.map((item) => ` ${item}`);
    return `A Shape with color of ${this.color} and ${this.filled ? "filled" : "not filled"}. Points:${pointMsg}.`;
  }

  getPerimeter() {
    return (
      new Point(this.points[0].x, this.points[0].y).distance(this.points[1].x, this.points[1].y) +
      new Point(this.points[1].x, this.points[1].y).distance(this.points[2].x, this.points[2].y) +
      new Point(this.points[2].x, this.points[2].y).distance(this.points[0].x, this.points[0].y)
    );
  }
}
