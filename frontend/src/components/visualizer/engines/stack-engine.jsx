import { useState, useMemo, useRef, useEffect } from 'react';
import StackVisualizer from '../visualizers/stack-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

// ALGORITHMS
import { createArrayStack } from '../algorithms/stack/stack-array';
import { createLinkedStack } from '../algorithms/stack/stack-linked-list';

export default function StackEngine({ algorithm, onStepChange }) {
  const isLinked = algorithm?.id?.includes('linked');

  const [capacity, setCapacity] = useState(6);

  const initialStack = useMemo(() => {
    return isLinked ? ['A', 'B', 'C'] : ['10', '20', '30'];
  }, [isLinked]);

  const [stack, setStack] = useState(initialStack);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // ✅ NEW

  const algoRef = useRef(null);

  // ===============================
  // INIT
  // ===============================
  useEffect(() => {
    const algo = isLinked ? createLinkedStack() : createArrayStack(capacity);

    initialStack.forEach((val) => algo.push(val));

    algoRef.current = algo;
  }, [isLinked, capacity, initialStack]);

  // ===============================
  // PUSH
  // ===============================
  const push = () => {
    if (!input) return;

    if (!isLinked && stack.length >= capacity) {
      setMessage('Overflow');
      setIsError(true);
      onStepChange?.(5);
      return;
    }

    setIsError(false);

    algoRef.current.push(input);

    setStack((prev) => [...prev, input]);
    setMessage(`Pushed ${input}`);
    setInput('');

    onStepChange?.(isLinked ? 9 : 8);
  };

  // ===============================
  // POP
  // ===============================
  const pop = () => {
    if (stack.length === 0) {
      setMessage('Underflow');
      setIsError(true);
      onStepChange?.(isLinked ? 15 : 12);
      return;
    }

    setIsError(false);

    const result = algoRef.current.pop();

    const popped =
      result?.value !== undefined ? result.value : stack[stack.length - 1];

    setStack((prev) => prev.slice(0, -1));
    setMessage(`Popped ${popped}`);

    onStepChange?.(isLinked ? 18 : 15);
  };

  // ===============================
  // PEEK
  // ===============================
  const peek = () => {
    if (stack.length === 0) {
      setMessage('Stack is empty');
      setIsError(true);
      return;
    }

    setIsError(false);

    const value = stack[stack.length - 1];
    setMessage(`Top element is ${value}`);

    onStepChange?.(isLinked ? 21 : 19);
  };

  // ===============================
  // RESET
  // ===============================
  const reset = () => {
    const newStack = initialStack.slice(0, capacity);
    setStack(newStack);
    setMessage('');
    setIsError(false);

    const algo = isLinked ? createLinkedStack() : createArrayStack(capacity);

    newStack.forEach((val) => algo.push(val));
    algoRef.current = algo;

    onStepChange?.(null);
  };

  // ===============================
  // UI
  // ===============================
  const content = (
    <div className="space-y-6">
      {/* INPUT */}
      <div className="flex justify-center gap-4 items-center flex-wrap">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
          className="w-56 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
        />

        {!isLinked && (
          <div className="flex items-center gap-2">
            <span className="text-sm">Size</span>
            <input
              type="number"
              min="1"
              max="30"
              value={capacity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setCapacity(val);
                setStack(initialStack.slice(0, val));
              }}
              className="w-16 px-2 py-1 border rounded text-black"
            />
          </div>
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={push}
          className="px-4 py-2 rounded-full bg-blue-500 text-white"
        >
          Push
        </button>
        <button
          onClick={pop}
          className="px-4 py-2 rounded-full bg-red-500 text-white"
        >
          Pop
        </button>
        <button
          onClick={peek}
          className="px-4 py-2 rounded-full bg-gray-800 text-white"
        >
          Peek
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 rounded-full bg-gray-500 text-white"
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

      {/* STACK */}
      <StackVisualizer
        stack={stack}
        topIndex={stack.length - 1}
        type={isLinked ? 'linked' : 'array'}
        capacity={!isLinked ? capacity : undefined}
      />
    </div>
  );

  return (
    <div className="relative">
      <FullscreenWrapper>{content}</FullscreenWrapper>
    </div>
  );
}
