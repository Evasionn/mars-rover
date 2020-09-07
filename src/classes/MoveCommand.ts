import { ICommand } from './ICommand';
import { Rover } from './Rover';

export class MoveCommand implements ICommand {
  execute(rover: Rover): void {
    rover.move();
  }

}