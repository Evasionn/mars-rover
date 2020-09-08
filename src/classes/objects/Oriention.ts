import { Coordinate } from './Coordinate';
import { Direction } from './Direction';

export const Orientations = {
  [Direction.NORTH]: {
    forward: (coordinate: Coordinate) => {
      coordinate.yCoordinate++;
      return coordinate;
    },
    right: () => {
      return Direction.EAST;
    },
    left: () => {
      return Direction.WEST;
    },
  },
  [Direction.EAST]: {
    forward: (coordinate: Coordinate) => {
      coordinate.xCoordinate++;
      return coordinate;
    },
    right: () => {
      return Direction.SOUTH;
    },
    left: () => {
      return Direction.NORTH;
    },
  },
  [Direction.SOUTH]: {
    forward: (coordinate: Coordinate) => {
      coordinate.yCoordinate--;
      return coordinate;
    },
    right: () => {
      return Direction.WEST;
    },
    left: () => {
      return Direction.EAST;
    },
  },
  [Direction.WEST]: {
    forward: (coordinate: Coordinate) => {
      coordinate.xCoordinate--;
      return coordinate;
    },
    right: () => {
      return Direction.NORTH;
    },
    left: () => {
      return Direction.SOUTH;
    },
  },
};
