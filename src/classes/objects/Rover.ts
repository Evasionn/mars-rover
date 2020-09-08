import { Coordinate } from './Coordinate';
import { Direction, directionMap } from './Direction';
import { Orientations } from './Oriention';
import { CommandParser } from '../helpers';
import { Plateau } from './Plateau';

export class Rover {
  currentPosition: Coordinate;
  currentDirection: Direction;

  plateau: Plateau;

  constructor(xPosition: string, yPosition: string, currentDirection: string, plateau: Plateau) {
    this.currentPosition = new Coordinate(Number(xPosition), Number(yPosition));
    this.currentDirection = directionMap.get(currentDirection);
    this.plateau = plateau;
    console.debug('Rover Initialized');
  }

  getCurrentLocation = () => {
    return `${this.currentPosition.toString()} ${this.currentDirection.valueOf()}`;
  };

  move = () => {
    console.debug('Rover is trying to move forward');
    this.currentPosition = Orientations[this.currentDirection].forward(this.currentPosition);
    if (!this.plateau.isInsidePlateau(this.currentPosition)) {
      console.debug("Rover can't move");
      this.currentPosition = Orientations[this.currentDirection].backward(this.currentPosition);
    }
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
