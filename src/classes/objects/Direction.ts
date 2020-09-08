export enum Direction {
  NORTH = 'N',
  EAST = 'E',
  SOUTH = 'S',
  WEST = 'W',
}
export const directionMap: Map<string, any> = new Map<string, any>([
  ['N', Direction.NORTH],
  ['E', Direction.EAST],
  ['S', Direction.SOUTH],
  ['W', Direction.WEST],
]);
