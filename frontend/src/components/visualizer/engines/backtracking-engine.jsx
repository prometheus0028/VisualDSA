/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* =========================================
   FILE: src/engines/backtracking-engine.jsx
========================================= */

import { useState, useEffect, useMemo, useRef } from 'react';
import BacktrackingPNCVisualizer from '../visualizers/backtracking-pnc-visualizer';
import MazeVisualizer from '../visualizers/maze-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generatePermutationSteps } from '../algorithms/dp/backtracking/permutations';
import { generateCombinationSteps } from '../algorithms/dp/backtracking/combinations';
import { generateSubsetSteps } from '../algorithms/dp/backtracking/subset-generation';
import { generateMazeSteps } from '../algorithms/dp/backtracking/rat-in-a-maze';

export default function BacktrackingEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('1,2,3');

  const [size, setSize] = useState(3);
  const [start, setStart] = useState([0, 0]);
  const [end, setEnd] = useState([2, 2]);

  const [blocked, setBlocked] = useState([]);

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [state, setState] = useState({});
  const [results, setResults] = useState([]);

  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  const parsed = useMemo(() => {
    return input.split(',').map((x) => x.trim());
  }, [input]);

  useEffect(() => {
    setEnd([size - 1, size - 1]);
  }, [size]);

  const grid = useMemo(() => {
    const g = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => 1),
    );

    blocked.forEach(([x, y]) => {
      if (!(x === 0 && y === 0) && !(x === size - 1 && y === size - 1)) {
        g[x][y] = 0;
      }
    });

    return g;
  }, [size, blocked]);

  useEffect(() => {
    let s = [];

    if (algorithm.id === 'permutations') {
      s = generatePermutationSteps(parsed);
    } else if (algorithm.id === 'combinations') {
      s = generateCombinationSteps(parsed);
    } else if (algorithm.id === 'subset-generation') {
      s = generateSubsetSteps(parsed);
    } else if (algorithm.id === 'rat-in-a-maze') {
      s = generateMazeSteps(grid, start, end);
    }

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
    setResults([]);
  }, [algorithm.id, parsed, grid, size]);

  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setState(step);

    if (step.result) {
      setResults((prev) => {
        const key = JSON.stringify(step.result);
        const exists = prev.some((r) => JSON.stringify(r) === key);
        return exists ? prev : [...prev, step.result];
      });
    }

    if (step.action === 'shortest') {
      setMessage('Shortest Path Found ✅');
    } else {
      setMessage(step.action);
    }

    onStepChange?.(step.highlightLine ?? null);
  }, [currentStep, steps, onStepChange]);

  useEffect(() => {
    if (!playing || !steps.length) return;

    const delay = 400 / speed;

    timerRef.current = setTimeout(() => {
      setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [playing, currentStep, steps, speed]);

  const toggleBlock = (i, j) => {
    if ((i === 0 && j === 0) || (i === size - 1 && j === size - 1)) return;

    setBlocked((prev) => {
      const exists = prev.some(([x, y]) => x === i && y === j);
      return exists
        ? prev.filter(([x, y]) => !(x === i && y === j))
        : [...prev, [i, j]];
    });
  };

  const next = () => setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const reset = () => {
    setCurrentStep(0);
    setPlaying(false);
    setResults([]);
    onStepChange?.(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {algorithm.id !== 'rat-in-a-maze' && (
          <div className="flex justify-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-72 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
            />
          </div>
        )}

        {algorithm.id === 'rat-in-a-maze' && (
          <div className="flex justify-center gap-4">
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="px-3 py-2 bg-white/80 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option className="bg-white/80 text-gray-800 " value={3}>
                3x3
              </option>
              <option className="bg-white/80 text-gray-800" value={4}>
                4x4
              </option>
              <option className="bg-white/80 text-gray-800" value={5}>
                5x5
              </option>
            </select>
          </div>
        )}

        {/* CONTROLS */}
        <div className="flex justify-center gap-3 flex-wrap">
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
            min="0.25"
            max="2"
            step="0.25"
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

        {/* VISUAL SWITCH */}
        {algorithm.id === 'rat-in-a-maze' ? (
          <MazeVisualizer
            state={state}
            grid={grid}
            size={size}
            start={start}
            end={end}
            toggleBlock={toggleBlock}
          />
        ) : (
          <BacktrackingPNCVisualizer state={state} results={results} />
        )}
      </div>
    </FullscreenWrapper>
  );
}
