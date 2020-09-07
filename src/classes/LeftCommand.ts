import { ICommand } from './ICommand';
import { Rover } from './Rover';

export class LeftCommand implements ICommand {
  execute(rover: Rover): void {
    rover.turnLeft();
  }
}
