import { Rover } from './Rover';

export interface ICommand {
  execute: (rover: Rover) => void;
}
