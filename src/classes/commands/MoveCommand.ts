import { ICommand } from './ICommand';
import { Rover } from '../objects';

export class MoveCommand implements ICommand {
  commandName = 'move command';

  execute(rover: Rover): void {
    rover.move();
  }
}
