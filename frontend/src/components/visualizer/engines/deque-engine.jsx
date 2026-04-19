/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useMemo, useRef, useEffect } from 'react';
import DequeVisualizer from '../visualizers/deque-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

// ✅ ALGORITHM
import { createDeque } from '../algorithms/queue/deque';

export default function DequeEngine({ algorithm, onStepChange }) {
  const [capacity, setCapacity] = useState(6);

  const initialDeque = useMemo(() => ['10', '20', '30'], []);

  const [deque, setDeque] = useState(initialDeque);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const algoRef = useRef(null);

  useEffect(() => {
    algoRef.current = createDeque();

    initialDeque.forEach((v) => {
      algoRef.current.pushBack(v);
    });
  }, []);

  // ===============================
  // PUSH FRONT
  // ===============================

  const pushFront = () => {
    if (!input) return;

    if (deque.length >= capacity) {
      setMessage('Overflow');
      setIsError(true);
      onStepChange?.(4);
      return;
    }

    const result = algoRef.current.pushFront(input);

    setDeque((prev) => [input, ...prev]);
    setMessage(`Pushed ${input} to Front`);
    setIsError(false);
    setInput('');

    onStepChange?.(result?.steps?.at(-1)?.highlightLine ?? 5);
  };

  // ===============================
  // PUSH BACK
  // ===============================

  const pushBack = () => {
    if (!input) return;

    if (deque.length >= capacity) {
      setMessage('Overflow');
      setIsError(true);
      onStepChange?.(9);
      return;
    }

    const result = algoRef.current.pushBack(input);

    setDeque((prev) => [...prev, input]);
    setMessage(`Pushed ${input} to Rear`);
    setIsError(false);
    setInput('');

    onStepChange?.(result?.steps?.at(-1)?.highlightLine ?? 10);
  };

  // ===============================
  // POP FRONT
  // ===============================

  const popFront = () => {
    if (deque.length === 0) {
      setMessage('Underflow');
      setIsError(true);
      onStepChange?.(14);
      return;
    }

    const value = deque[0];

    algoRef.current.popFront();

    setDeque((prev) => prev.slice(1));
    setMessage(`Popped ${value} from Front`);
    setIsError(false);

    onStepChange?.(15);
  };

  // ===============================
  // POP BACK
  // ===============================

  const popBack = () => {
    if (deque.length === 0) {
      setMessage('Underflow');
      setIsError(true);
      onStepChange?.(19);
      return;
    }

    const value = deque[deque.length - 1];

    algoRef.current.popBack();

    setDeque((prev) => prev.slice(0, -1));
    setMessage(`Popped ${value} from Rear`);
    setIsError(false);

    onStepChange?.(20);
  };

  // ===============================
  // PEEK
  // ===============================

  const peekFront = () => {
    if (deque.length === 0) {
      setMessage('Deque is empty');
      setIsError(true);
      return;
    }

    setMessage(`Front element is ${deque[0]}`);
    setIsError(false);
    onStepChange?.(23);
  };

  const peekBack = () => {
    if (deque.length === 0) {
      setMessage('Deque is empty');
      setIsError(true);
      return;
    }

    setMessage(`Rear element is ${deque[deque.length - 1]}`);
    setIsError(false);
    onStepChange?.(26);
  };

  // ===============================
  // RESET
  // ===============================

  const reset = () => {
    const newDeque = initialDeque.slice(0, capacity);

    setDeque(newDeque);
    setMessage('');
    setIsError(false);

    algoRef.current = createDeque();
    newDeque.forEach((v) => algoRef.current.pushBack(v));

    onStepChange?.(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT */}
        <div className="flex justify-center gap-4 flex-wrap">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            className="w-48 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border backdrop-blur-xl"
          />

          <div className="flex items-center gap-2">
            <span className="text-sm">Size</span>
            <input
              type="number"
              min="1"
              max="20"
              value={capacity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setCapacity(val);
                setDeque(initialDeque.slice(0, val));
              }}
              className="w-16 px-2 py-1 border rounded text-black"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={pushFront}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Push Front
          </button>
          <button
            onClick={pushBack}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Push Back
          </button>
          <button
            onClick={popFront}
            className="px-4 py-2 bg-red-500 text-white rounded-full"
          >
            Pop Front
          </button>
          <button
            onClick={popBack}
            className="px-4 py-2 bg-red-500 text-white rounded-full"
          >
            Pop Back
          </button>
          <button
            onClick={peekFront}
            className="px-4 py-2 bg-green-600 text-white rounded-full"
          >
            Peek Front
          </button>
          <button
            onClick={peekBack}
            className="px-4 py-2 bg-green-600 text-white rounded-full"
          >
            Peek Back
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
        <DequeVisualizer deque={deque} capacity={capacity} />
      </div>
    </FullscreenWrapper>
  );
}
