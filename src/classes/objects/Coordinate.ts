export class Coordinate {
  xCoordinate: number;
  yCoordinate: number;

  constructor(xCoordinate: number, yCoordinate: number) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  toString = (): string => `${this.xCoordinate} ${this.yCoordinate}`;
}
