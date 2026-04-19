/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import PriorityQueueVisualizer from '../visualizers/priority-queue-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { createPriorityQueue } from '../algorithms/queue/priority-queue';

export default function PriorityQueueEngine({ algorithm, onStepChange }) {
  const [heap, setHeap] = useState([10, 20, 30]);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // ✅ NEW
  const [capacity, setCapacity] = useState(10);

  const [active, setActive] = useState([]);
  const [swapPair, setSwapPair] = useState(null);

  const algoRef = useRef(null);

  // ===============================
  // INIT
  // ===============================
  useEffect(() => {
    algoRef.current = createPriorityQueue(capacity);

    [10, 20, 30].forEach((v) => {
      algoRef.current.insert(v);
    });

    setHeap([...algoRef.current.getHeap()]);
  }, [capacity]);

  // ===============================
  // INSERT
  // ===============================
  const insert = async () => {
    if (!input) return;

    const value = parseInt(input);

    // ✅ INVALID INPUT
    if (isNaN(value)) {
      setMessage('Invalid input');
      setIsError(true);
      return;
    }

    const result = algoRef.current.insert(value);

    if (result?.error) {
      setMessage(result.error);
      setIsError(true);
      onStepChange?.(4);
      return;
    }

    setIsError(false);

    for (let step of result.steps || []) {
      setHeap([...step.heap]);
      setActive(step.active || []);

      if (step.active?.length === 2) {
        setSwapPair(step.active);
      } else {
        setSwapPair(null);
      }

      onStepChange?.(step.highlightLine ?? null);

      await new Promise((r) => setTimeout(r, 350));
    }

    setHeap([...algoRef.current.getHeap()]);
    setActive([]);
    setSwapPair(null);

    setMessage(`Inserted ${value}`);
    setInput('');
  };

  // ===============================
  // REMOVE MIN
  // ===============================
  const removeMin = async () => {
    const result = algoRef.current.removeMin();

    if (result?.error) {
      setMessage(result.error);
      setIsError(true);
      onStepChange?.(13);
      return;
    }

    setIsError(false);

    for (let step of result.steps || []) {
      setHeap([...step.heap]);
      setActive(step.active || []);

      if (step.active?.length === 2) {
        setSwapPair(step.active);
      } else {
        setSwapPair(null);
      }

      onStepChange?.(step.highlightLine ?? null);

      await new Promise((r) => setTimeout(r, 350));
    }

    setHeap([...algoRef.current.getHeap()]);
    setActive([]);
    setSwapPair(null);

    setMessage(`Removed ${result.value}`);
  };

  // ===============================
  // RESET
  // ===============================
  const reset = () => {
    algoRef.current = createPriorityQueue(capacity);

    [10, 20, 30].forEach((v) => {
      algoRef.current.insert(v);
    });

    setHeap([...algoRef.current.getHeap()]);
    setMessage('');
    setIsError(false);
    setActive([]);
    setSwapPair(null);
    onStepChange?.(0);
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
          placeholder="Enter number"
          className="w-56 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
        />

        <div className="flex items-center gap-2">
          <span className="text-sm">Size</span>
          <input
            type="number"
            min="1"
            max="30"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            className="w-16 px-2 py-1 border rounded text-black"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={insert}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Insert
        </button>

        <button
          onClick={removeMin}
          className="px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Remove Min
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
      <PriorityQueueVisualizer
        heap={heap}
        active={active}
        swapPair={swapPair}
      />
    </div>
  );

  return <FullscreenWrapper>{content}</FullscreenWrapper>;
}
