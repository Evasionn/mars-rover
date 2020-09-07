import { ICommand } from './ICommand';
import { LeftCommand } from './LeftCommand';
import { RightCommand } from './RightCommand';
import { MoveCommand } from './MoveCommand';

export class CommandParser {
  commandString: string;
  constructor(commandString: string) {
    this.commandString = commandString;
  }

  CommandMap = new Map<string, ICommand>([
    ['L', new LeftCommand()],
    ['R', new RightCommand()],
    ['M', new MoveCommand()],
  ]);

  buildCommandList = (): Array<ICommand> => {
    const commandList: Array<ICommand> = new Array<ICommand>();

    [...this.commandString].forEach((c) => {
      commandList.push(this.CommandMap.get(c.toUpperCase()) as ICommand);
    });

    return commandList;
  };
}
