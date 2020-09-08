import { Rover } from '../objects';

export interface ICommand {
  execute: (rover: Rover) => void;
}
