/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react';
import ArrayVisualizer from '../visualizers/array-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

// SORTING
import { generateBubbleSortSteps } from '../algorithms/sorting/bubble-sort';
import { generateSelectionSortSteps } from '../algorithms/sorting/selection-sort';
import { generateInsertionSortSteps } from '../algorithms/sorting/insertion-sort';
import { generateMergeSortSteps } from '../algorithms/sorting/merge-sort';
import { generateQuickSortSteps } from '../algorithms/sorting/quick-sort';
import { generateHeapSortSteps } from '../algorithms/sorting/heap-sort';
import { generateCountingSortSteps } from '../algorithms/sorting/counting-sort';
import { generateRadixSortSteps } from '../algorithms/sorting/radix-sort';

// SEARCHING
import { generateLinearSearchSteps } from '../algorithms/searching/linear-search';
import { generateBinarySearchSteps } from '../algorithms/searching/binary-search';
import { generateTernarySearchSteps } from '../algorithms/searching/ternary-search';

export default function ArrayEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('5,3,8,1,2');
  const [target, setTarget] = useState('8');
  const [currentStep, setCurrentStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const BASE_DELAY = 700;

  const isSearching = [
    'linear-search',
    'binary-search',
    'ternary-search',
  ].includes(algorithm.id);

  const parsedInput = useMemo(() => {
    return input
      .split(',')
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));
  }, [input]);

  const parsedTarget = useMemo(() => parseInt(target), [target]);

  const steps = useMemo(() => {
    switch (algorithm.id) {
      case 'bubble-sort':
        return generateBubbleSortSteps(parsedInput);
      case 'selection-sort':
        return generateSelectionSortSteps(parsedInput);
      case 'insertion-sort':
        return generateInsertionSortSteps(parsedInput);
      case 'merge-sort':
        return generateMergeSortSteps(parsedInput);
      case 'quick-sort':
        return generateQuickSortSteps(parsedInput);
      case 'heap-sort':
        return generateHeapSortSteps(parsedInput);
      case 'counting-sort':
        return generateCountingSortSteps(parsedInput);
      case 'radix-sort':
        return generateRadixSortSteps(parsedInput);
      case 'linear-search':
        return generateLinearSearchSteps(parsedInput, parsedTarget);
      case 'binary-search':
        return generateBinarySearchSteps(parsedInput, parsedTarget);
      case 'ternary-search':
        return generateTernarySearchSteps(parsedInput, parsedTarget);
      default:
        return [];
    }
  }, [algorithm.id, parsedInput, parsedTarget]);

  const safeStep = Math.min(currentStep, steps.length - 1);

  const current = steps[safeStep] || {
    array: parsedInput,
    active: [],
    highlightLine: null,
    comparisons: 0,
    swaps: 0,
    found: null,
  };

  // ===============================
  // PLAY LOOP
  // ===============================

  useEffect(() => {
    if (!playing || steps.length === 0) return;

    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
    }, BASE_DELAY / speed);

    return () => clearTimeout(timer);
  }, [playing, currentStep, speed, steps.length]);

  // ===============================
  // PSEUDOCODE SYNC
  // ===============================

  useEffect(() => {
    onStepChange?.(current.highlightLine ?? null);
  }, [current.highlightLine, onStepChange]);

  // ===============================
  // SEARCH RESULT MESSAGE
  // ===============================

  useEffect(() => {
    if (!isSearching) return;
    if (currentStep !== steps.length - 1) return;

    if (current.found !== null && current.found !== false) {
      setMessage(`Element found `);
      setIsError(false);
    } else {
      setMessage('Element not found');
      setIsError(true);
    }
  }, [currentStep, steps.length, current, isSearching]);

  // ===============================
  // OPERATIONS
  // ===============================

  const comparisons = current.comparisons ?? 0;
  const swaps = isSearching ? 0 : (current.swaps ?? 0);
  const stepCount = comparisons + swaps;

  const maxStep =
    steps.length > 0
      ? (steps[steps.length - 1].comparisons ?? 0) +
        (isSearching ? 0 : (steps[steps.length - 1].swaps ?? 0))
      : 1;

  const progress = maxStep === 0 ? 0 : (stepCount / maxStep) * 100;

  const reset = () => {
    setCurrentStep(0);
    setPlaying(false);
    setMessage('');
  };

  return (
    <FullscreenWrapper>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* INPUT */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">
              Array Input
            </label>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                reset();
              }}
              className="w-150 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
            />
          </div>

          {isSearching && (
            <div className="w-40">
              <label className="text-sm font-medium block mb-1">Target</label>
              <input
                value={target}
                onChange={(e) => {
                  setTarget(e.target.value);
                  reset();
                }}
                className="w-full px-3 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
              />
            </div>
          )}
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

        {/* STATS */}
        <div className="flex justify-between text-sm font-bold">
          <span>Steps: {stepCount}</span>
          <span>
            Comparison: {comparisons}
            {!isSearching && ` | Swap = ${swaps}`}
          </span>
        </div>

        {/* PROGRESS */}
        <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* VISUAL */}
        <ArrayVisualizer array={current.array} activeIndices={current.active} />

        {/* CONTROLS */}
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="px-4 py-2 bg-black text-white rounded-full"
          >
            {playing ? 'Pause' : 'Play'}
          </button>

          <button
            onClick={() => setCurrentStep((p) => Math.max(p - 1, 0))}
            className="px-4 py-2 bg-gray-500 text-white rounded-full"
          >
            Prev
          </button>

          <button
            onClick={() =>
              setCurrentStep((p) => Math.min(p + 1, steps.length - 1))
            }
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
        <div className="flex items-center gap-4">
          <span>Speed</span>
          <input
            type="range"
            min="0.25"
            max="4"
            step="0.25"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="flex-1"
          />
          <span>{speed}x</span>
        </div>
      </div>
    </FullscreenWrapper>
  );
}
