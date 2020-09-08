import { Coordinate } from './Coordinate';
import { Direction, directionMap } from './Direction';
import { Orientations } from './Oriention';
import { CommandParser } from '../helpers';

export class Rover {
  currentPosition: Coordinate;
  currentDirection: Direction;

  constructor(xPosition: string, yPosition: string, currentDirection: string) {
    this.currentPosition = new Coordinate(Number(xPosition), Number(yPosition));
    this.currentDirection = directionMap.get(currentDirection);
    console.debug('Rover Initialized');
  }

  getCurrentLocation = () => {
    return `${this.currentPosition.toString()} ${this.currentDirection.valueOf()}`;
  };

  move = () => {
    // TODO ADD COLLISION CONTROLS
    console.debug('Rover is moving forward');
    this.currentPosition = Orientations[this.currentDirection].forward(this.currentPosition);
  };

  turnLeft = () => {
    console.debug('Rover is turning left');
    this.currentDirection = Orientations[this.currentDirection].left();
  };

  turnRight = () => {
    console.debug('Rover is turning right');
    this.currentDirection = Orientations[this.currentDirection].right();
  };

  run = (commandString: string) => {
    const commands = new CommandParser(commandString).buildCommandList();
    commands.forEach((command) => {
      console.debug('Calling ', command.commandName);
      command.execute(this);
    });

    this.getCurrentLocation();
  };
}
