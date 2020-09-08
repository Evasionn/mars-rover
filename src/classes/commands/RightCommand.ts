import { ICommand } from './ICommand';
import { Rover } from '../objects';

export class RightCommand implements ICommand {
  execute(rover: Rover): void {
    rover.turnRight();
  }
}
