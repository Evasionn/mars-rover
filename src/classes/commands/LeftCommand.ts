import { ICommand } from './ICommand';
import { Rover } from '../objects';

export class LeftCommand implements ICommand {
  commandName = 'left command';

  execute(rover: Rover): void {
    rover.turnLeft();
  }
}
