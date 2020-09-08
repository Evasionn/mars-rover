import { ICommand } from './ICommand';
import { Rover } from '../objects';

export class RightCommand implements ICommand {
  commandName = 'right command';

  execute(rover: Rover): void {
    rover.turnRight();
  }
}
