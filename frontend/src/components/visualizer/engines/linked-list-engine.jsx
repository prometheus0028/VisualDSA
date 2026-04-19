import { useState } from 'react';
import LinkedListVisualizer from '../visualizers/linked-list-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

export default function LinkedListEngine({ algorithm, onStepChange }) {
  const type = algorithm?.id;

  const [list, setList] = useState(['10', '20', '30']);
  const [input, setInput] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const parsedPos = Number(position);

  // ===============================
  // MESSAGE HANDLER
  // ===============================

  const showMessage = (msg, error = false) => {
    setMessage(msg);
    setIsError(error);
  };

  // ===============================
  // VALIDATION
  // ===============================

  const validatePosition = () => {
    if (position === '') {
      showMessage('Position required', true);
      return false;
    }

    if (isNaN(parsedPos)) {
      showMessage('Invalid position', true);
      return false;
    }

    if (parsedPos < 0 || parsedPos > list.length) {
      showMessage('Position out of bounds', true);
      return false;
    }

    return true;
  };

  // ===============================
  // INSERT BEGIN
  // ===============================

  const insertBegin = () => {
    if (!input) return;

    setList((prev) => [input, ...prev]);
    showMessage(`Inserted ${input} at Beginning`);

    onStepChange?.(0); // sync
    setInput('');
  };

  // ===============================
  // INSERT END
  // ===============================

  const insertEnd = () => {
    if (!input) return;

    setList((prev) => [...prev, input]);
    showMessage(`Inserted ${input} at End`);

    onStepChange?.(5);
    setInput('');
  };

  // ===============================
  // INSERT POSITION
  // ===============================

  const insertPos = () => {
    if (!input) return;
    if (!validatePosition()) return;

    setList((prev) => {
      const arr = [...prev];
      arr.splice(parsedPos, 0, input);
      return arr;
    });

    showMessage(`Inserted ${input} at position ${parsedPos}`);
    onStepChange?.(15);

    setInput('');
    setPosition('');
  };

  // ===============================
  // DELETE BEGIN
  // ===============================

  const deleteBegin = () => {
    if (list.length === 0) {
      showMessage('Underflow', true);
      return;
    }

    const val = list[0];

    setList((prev) => prev.slice(1));
    showMessage(`Deleted ${val} from Beginning`);

    onStepChange?.(24);
  };

  // ===============================
  // DELETE END
  // ===============================

  const deleteEnd = () => {
    if (list.length === 0) {
      showMessage('Underflow', true);
      return;
    }

    const val = list[list.length - 1];

    setList((prev) => prev.slice(0, -1));
    showMessage(`Deleted ${val} from End`);

    onStepChange?.(29);
  };

  // ===============================
  // DELETE POSITION
  // ===============================

  const deletePos = () => {
    if (!validatePosition()) return;

    if (list.length === 0) {
      showMessage('Underflow', true);
      return;
    }

    if (parsedPos >= list.length) {
      showMessage('Position out of bounds', true);
      return;
    }

    const val = list[parsedPos];

    setList((prev) => {
      const arr = [...prev];
      arr.splice(parsedPos, 1);
      return arr;
    });

    showMessage(`Deleted ${val} from position ${parsedPos}`);

    onStepChange?.(37);
    setPosition('');
  };

  // ===============================
  // SEARCH
  // ===============================

  const search = () => {
    if (!input) return;

    const index = list.indexOf(input);

    if (index === -1) {
      showMessage(`${input} not found`, true);
    } else {
      showMessage(`${input} found at position ${index}`);
    }

    onStepChange?.(43);
  };

  // ===============================
  // RESET
  // ===============================

  const reset = () => {
    setList([]);
    setMessage('');
    onStepChange?.(null);
  };

  // ===============================
  // CONTENT
  // ===============================

  const content = (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* INPUTS */}
      <div className="flex gap-4 flex-wrap justify-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Value"
          className="px-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
        />

        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
          className="w-24 px-3 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
        />
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={insertBegin}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Insert Begin
        </button>
        <button
          onClick={insertEnd}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Insert End
        </button>
        <button
          onClick={insertPos}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Insert Pos
        </button>

        <button
          onClick={deleteBegin}
          className="px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Delete Begin
        </button>
        <button
          onClick={deleteEnd}
          className="px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Delete End
        </button>
        <button
          onClick={deletePos}
          className="px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Delete Pos
        </button>

        <button
          onClick={search}
          className="px-4 py-2 bg-green-600 text-white rounded-full"
        >
          Search
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-full"
        >
          Reset
        </button>
      </div>

      {/* MESSAGE */}
      {message && (
        <div
          className={`p-3 rounded-xl text-center font-semibold
          ${
            isError
              ? 'bg-red-200 text-red-700 dark:bg-red-800 dark:text-red-200'
              : 'bg-purple-200 text-purple-700 dark:bg-purple-800 dark:text-purple-200'
          }`}
        >
          {message}
        </div>
      )}

      {/* VISUAL */}
      <LinkedListVisualizer list={list} type={type} />
    </div>
  );

  return <FullscreenWrapper>{content}</FullscreenWrapper>;
}
