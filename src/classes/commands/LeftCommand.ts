import { ICommand } from './ICommand';
import { Rover } from '../objects';

export class LeftCommand implements ICommand {
  execute(rover: Rover): void {
    rover.turnLeft();
  }
}
