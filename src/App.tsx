import React, { useRef, useState } from 'react';
import { Plateau, Rover } from './classes';

class Mars {
  plateau: Plateau | undefined;
  rover: Rover | undefined;
}
const mars = new Mars();

export const App: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [output] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRunButton = () => {
    if (!mars.plateau) {
      const coordinates = inputVal?.trim().split(' ');
      mars.plateau = new Plateau(coordinates[0], coordinates[1]);
    } else if (!mars.rover) {
      const coordinates = inputVal?.trim().split(' ');
      mars.rover = new Rover(coordinates[0], coordinates[1], coordinates[2]);
    } else {
      mars.rover.run(inputVal);
      output.push(mars.rover.getCurrentLocation());
      mars.rover = undefined;
    }

    setInputVal('');
    inputRef.current?.focus();
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        <button type="submit" onClick={handleRunButton}>
          Run
        </button>
      </form>

      <div id="output">
        {output.map((s, index) => (
          <div key={index}>
            {s}
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
