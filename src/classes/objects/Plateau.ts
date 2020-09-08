import { Coordinate } from './Coordinate';

export class Plateau {
  bottomLeftCorner = new Coordinate(0, 0);
  upperRightCorner: Coordinate;

  constructor(xCoordinate: string, yCoordinate: string) {
    this.upperRightCorner = new Coordinate(Number(xCoordinate), Number(yCoordinate));
    console.debug('Plateau Initialized');
  }

  isInsideXAxis = (xPosition: number) => {
    return xPosition >= this.bottomLeftCorner.xCoordinate && xPosition <= this.upperRightCorner.xCoordinate;
  };
  isInsideYAxis = (yPosition: number) => {
    return yPosition >= this.bottomLeftCorner.yCoordinate && yPosition <= this.upperRightCorner.yCoordinate;
  };
  isInsidePlateau = (coordinates: Coordinate) => {
    return this.isInsideXAxis(coordinates.xCoordinate) && this.isInsideYAxis(coordinates.yCoordinate);
  };
}
