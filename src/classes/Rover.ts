import { Coordinate } from './Coordinate';
import { Direction, directionMap } from './Direction';
import { Orientations } from './Oriention';
import { CommandParser } from './InputParser';

export class Rover {
  currentPosition: Coordinate;
  currentDirection: Direction;

  constructor(xPosition: string, yPosition: string, currentDirection: string) {
    this.currentPosition = new Coordinate(Number(xPosition), Number(yPosition));
    this.currentDirection = directionMap.get(currentDirection);
  }

  printCurrent = () => {
    console.log('Current POSITION', `${this.currentPosition.toString()} ${this.currentDirection.valueOf()}`);
  };

  move = () => {
    // TODO ADD COLLISION CONTROLS
    this.currentPosition = Orientations[this.currentDirection].forward(this.currentPosition);
  };

  turnLeft = () => {
    this.currentDirection = Orientations[this.currentDirection].left();
  };

  turnRight = () => {
    this.currentDirection = Orientations[this.currentDirection].right();
  };

  run = (commandString: string) => {
    const commands = new CommandParser(commandString).buildCommandList();
    commands.forEach((command) => command.execute(this));

    this.printCurrent();
  };
}
