import { Coordinate } from './Coordinate';

export class Plateau {
  bottomLeftCorner = new Coordinate(0, 0);
  upperRightCorner: Coordinate;

  constructor(xCoordinate: string, yCoordinate: string) {
    this.upperRightCorner = new Coordinate(Number(xCoordinate), Number(yCoordinate));
    console.debug('Plateau Initialized');
  }
}
