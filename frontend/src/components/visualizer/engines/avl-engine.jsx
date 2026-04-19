/* eslint-disable no-unused-vars */
/* ===============================
   FILE: src/engines/avl-engine.jsx
================================ */

import { useState, useRef } from 'react';
import AVLVisualizer from '../visualizers/avl-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import avlTree from '../algorithms/tree/avl-tree';

export default function AVLEngine({ onStepChange }) {
  const [tree, setTree] = useState(null);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const algoRef = useRef(avlTree()); // ✅ FIXED

  const insertNode = async () => {
    const value = parseInt(input);

    if (isNaN(value)) {
      setMessage('Invalid input');
      setError(true);
      return;
    }

    const result = algoRef.current.insert(value);

    for (let step of result.steps) {
      setTree(structuredClone(result.tree));
      setMessage(step.action || '');
      onStepChange?.(step.highlightLine ?? null);

      await new Promise((r) => setTimeout(r, 400));
    }

    setTree(result.tree);
    setMessage(`Inserted ${value}`);
    setInput('');
  };

  const deleteNode = async () => {
    const value = parseInt(input);

    if (isNaN(value)) {
      setMessage('Invalid input');
      setError(true);
      return;
    }

    const result = algoRef.current.delete(value);

    setTree(result.tree);
    setMessage(`Deleted ${value}`);
    setInput('');
  };

  const reset = () => {
    algoRef.current = avlTree(); // ✅ FIXED
    setTree(null);
    setMessage('');
    setInput('');
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        <div className="flex justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            className="w-56 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
          />
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={insertNode}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Insert
          </button>

          <button
            onClick={deleteNode}
            className="px-4 py-2 bg-red-500 text-white rounded-full"
          >
            Delete
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-full"
          >
            Reset
          </button>
        </div>

        {message && (
          <div className="p-3 rounded-xl bg-purple-200 dark:bg-purple-800 text-center font-semibold">
            {message}
          </div>
        )}

        <AVLVisualizer tree={tree} />
      </div>
    </FullscreenWrapper>
  );
}
