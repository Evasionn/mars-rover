import React, { useRef, useState } from 'react';
import { Plateau } from './classes/Plateau';
import { Rover } from './classes/Rover';

class Mars {
  plateau: Plateau | undefined;
  rover: Rover | undefined;
}
const mars = new Mars();

export const App: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRunButton = (inputVal: string) => {
    if (!mars.plateau) {
      const coordinates = inputVal?.trim().split(' ');
      mars.plateau = new Plateau(coordinates[0], coordinates[1]);
    } else if (!mars.rover) {
      const coordinates = inputVal?.trim().split(' ');
      mars.rover = new Rover(coordinates[0], coordinates[1], coordinates[2]);
    } else {
      mars.rover.run(inputVal);
    }

    // TODO after first calculation create new rover and continue calculations

    setInputVal('');
    inputRef.current?.focus();
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button type="submit" onClick={() => handleRunButton(inputVal)}>
        Run
      </button>
    </form>
  );
};

export default App;
