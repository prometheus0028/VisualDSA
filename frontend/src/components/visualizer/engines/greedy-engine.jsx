/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
/* =========================================
   FILE: src/engines/greedy-engine.jsx
========================================= */

import { useState, useEffect, useMemo, useRef } from 'react';
import GreedyVisualizer from '../visualizers/greedy-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateFractionalKnapsackSteps } from '../algorithms/dp/knapsack/fractional-knapsack';

export default function GreedyEngine({ algorithm, onStepChange }) {
  const [weightsInput, setWeightsInput] = useState('10,20,30');
  const [valuesInput, setValuesInput] = useState('60,100,120');
  const [capacity, setCapacity] = useState('50');

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [state, setState] = useState({});
  const [staticItems, setStaticItems] = useState([]); // 🔥 FIX

  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  const weights = useMemo(
    () => weightsInput.split(',').map(Number),
    [weightsInput],
  );

  const values = useMemo(
    () => valuesInput.split(',').map(Number),
    [valuesInput],
  );

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    const s = generateFractionalKnapsackSteps(
      weights,
      values,
      Number(capacity),
    );

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);

    // 🔥 STORE INITIAL ITEMS (never lose them)
    if (s.length && s[0].items) {
      setStaticItems(s[0].items);
    }
  }, [weights, values, capacity]);

  // ===============================
  // APPLY STEP (PSEUDOCODE SYNCED)
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setState(step);

    // 🔥 EXACT PSEUDOCODE MAPPING
    if (step.action === 'sort items') {
      setMessage('Sort items by value/weight ratio (descending)');
    } else if (step.action === 'take full') {
      setMessage('Take full item → W -= weight, total += value');
    } else if (step.action === 'take fraction') {
      setMessage('Take fraction → total += ratio × remaining capacity');
    } else if (step.action === 'done') {
      setMessage('Return total value');
    } else {
      setMessage(step.action);
    }

    onStepChange?.(step.highlightLine ?? null);
  }, [currentStep, steps, onStepChange]);

  // ===============================
  // AUTO PLAY
  // ===============================
  useEffect(() => {
    if (!playing || !steps.length) return;

    const delay = 600 / speed;

    timerRef.current = setTimeout(() => {
      setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [playing, currentStep, steps, speed]);

  // ===============================
  // CONTROLS
  // ===============================
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
        {/* 🔥 INPUT LABEL */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Fractional Knapsack Inputs
          </div>

          <div className="flex justify-center gap-6 flex-wrap items-end">
            {/* WEIGHTS */}
            <div className="flex flex-col items-center">
              <span className="text-xs mb-1 text-gray-600 dark:text-gray-300">
                Weights
              </span>
              <input
                value={weightsInput}
                onChange={(e) => setWeightsInput(e.target.value)}
                placeholder="e.g. 10,20,30"
                className="w-40 px-4 py-2 rounded-xl border bg-white/80 dark:bg-white/10"
              />
            </div>

            {/* VALUES */}
            <div className="flex flex-col items-center">
              <span className="text-xs mb-1 text-gray-600 dark:text-gray-300">
                Values
              </span>
              <input
                value={valuesInput}
                onChange={(e) => setValuesInput(e.target.value)}
                placeholder="e.g. 60,100,120"
                className="w-40 px-4 py-2 rounded-xl border bg-white/80 dark:bg-white/10"
              />
            </div>

            {/* CAPACITY */}
            <div className="flex flex-col items-center">
              <span className="text-xs mb-1 text-gray-600 dark:text-gray-300">
                Capacity
              </span>
              <input
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="e.g. 50"
                className="w-28 px-4 py-2 rounded-xl border bg-white/80 dark:bg-white/10"
              />
            </div>
          </div>
        </div>

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

        {/* 🔥 VISUAL */}
        <GreedyVisualizer state={state} staticItems={staticItems} />
      </div>
    </FullscreenWrapper>
  );
}
