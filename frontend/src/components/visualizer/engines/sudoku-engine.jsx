/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
/* =========================================
   FILE: src/engines/sudoku-engine.jsx
========================================= */

import { useState, useEffect, useRef } from 'react';
import SudokuVisualizer from '../visualizers/sudoku-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateSudokuSteps } from '../algorithms/dp/backtracking/sudoku-solver';

export default function SudokuEngine({ algorithm, onStepChange }) {
  const [grid] = useState([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],

    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],

    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ]);

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [state, setState] = useState({ grid });
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  // ===============================
  // GENERATE
  // ===============================
  useEffect(() => {
    const s = generateSudokuSteps(grid);
    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
  }, [grid]);

  // ===============================
  // APPLY STEP
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setState(step);

    if (step.action === 'try') {
      setMessage(`Trying ${step.value} at (${step.row}, ${step.col})`);
    } else if (step.action === 'place') {
      setMessage(`Placed ${step.value}`);
    } else if (step.action === 'backtrack') {
      setMessage(`Backtracking`);
    } else if (step.action === 'complete') {
      setMessage('Sudoku Solved 🎉');
    }

    onStepChange?.(step.highlightLine ?? null);
  }, [currentStep, steps, onStepChange]);

  // ===============================
  // AUTO PLAY
  // ===============================
  useEffect(() => {
    if (!playing || !steps.length) return;

    const delay = 80 / speed;

    timerRef.current = setTimeout(() => {
      setCurrentStep((p) => (p >= steps.length - 1 ? p : p + 1));
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [playing, currentStep, steps, speed]);

  const next = () => setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const reset = () => {
    setCurrentStep(0);
    setPlaying(false);
    onStepChange?.(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* CONTROLS */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="px-4 py-2 bg-black text-white rounded-full"
          >
            {playing ? 'Pause' : 'Play'}
          </button>

          <button
            onClick={prev}
            className="px-4 py-2 bg-gray-500 text-white rounded-full"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            Next
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-red-500 text-white rounded-full"
          >
            Reset
          </button>
        </div>

        {/* SPEED */}
        <div className="flex justify-center gap-4">
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span>{speed}x</span>
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="p-3 bg-purple-200 dark:bg-purple-800 text-center rounded-xl">
            {message}
          </div>
        )}

        {/* VISUAL */}
        <SudokuVisualizer state={state} />
      </div>
    </FullscreenWrapper>
  );
}
