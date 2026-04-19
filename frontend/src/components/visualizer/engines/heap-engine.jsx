/* ===============================
   FILE: src/engines/heap-engine.jsx
================================ */

import { useState, useRef, useEffect } from 'react';
import HeapVisualizer from '../visualizers/heap-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { createHeap } from '../algorithms/tree/heap';

export default function HeapEngine({ onStepChange }) {
  const [heap, setHeap] = useState([]); // ✅ FIXED (empty)
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [active, setActive] = useState([]);
  const [swapPair, setSwapPair] = useState(null);

  const algoRef = useRef(createHeap());

  // ===============================
  // ✅ INITIALIZE ONLY ONCE
  // ===============================
  useEffect(() => {
    algoRef.current = createHeap();

    [10, 20, 30].forEach((v) => algoRef.current.insert(v));

    setHeap([...algoRef.current.getHeap()]);
  }, []);

  // ===============================
  // INSERT
  // ===============================
  const insert = async () => {
    const value = parseInt(input);

    if (isNaN(value)) {
      setMessage('Invalid input');
      setError(true);
      return;
    }

    const result = algoRef.current.insert(value);

    for (let step of result.steps) {
      setHeap([...step.heap]);
      setActive(step.active || []);

      if (step.active?.length === 2) {
        setSwapPair(step.active);
      } else {
        setSwapPair(null);
      }

      setMessage(step.action || '');
      setError(false);

      onStepChange?.(step.highlightLine ?? null);

      await new Promise((r) => setTimeout(r, 350));
    }

    setHeap([...result.heap]);
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
      setError(true);
      return;
    }

    for (let step of result.steps) {
      setHeap([...step.heap]);
      setActive(step.active || []);

      if (step.active?.length === 2) {
        setSwapPair(step.active);
      } else {
        setSwapPair(null);
      }

      setMessage(step.action || '');
      setError(false);

      onStepChange?.(step.highlightLine ?? null);

      await new Promise((r) => setTimeout(r, 350));
    }

    setHeap([...result.heap]);
    setActive([]);
    setSwapPair(null);

    setMessage(`Removed ${result.value}`);
  };

  // ===============================
  // RESET
  // ===============================
  const reset = () => {
    algoRef.current = createHeap();

    [10, 20, 30].forEach((v) => algoRef.current.insert(v));

    setHeap([...algoRef.current.getHeap()]);
    setMessage('');
    setError(false);
    setActive([]);
    setSwapPair(null);

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
            placeholder="Enter number"
            className="w-56 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
          />
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
                error
                  ? 'bg-red-200 dark:bg-red-800'
                  : 'bg-purple-200 dark:bg-purple-800'
              }`}
          >
            {message}
          </div>
        )}

        {/* VISUAL */}
        <HeapVisualizer heap={heap} active={active} swapPair={swapPair} />
      </div>
    </FullscreenWrapper>
  );
}
