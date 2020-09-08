import { ICommand } from './ICommand';
import { Rover } from '../objects';

export class MoveCommand implements ICommand {
  execute(rover: Rover): void {
    rover.move();
  }

}