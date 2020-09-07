import { ICommand } from './ICommand';
import { Rover } from './Rover';

export class RightCommand implements ICommand {
  execute(rover: Rover): void {
    rover.turnRight();
  }
}
