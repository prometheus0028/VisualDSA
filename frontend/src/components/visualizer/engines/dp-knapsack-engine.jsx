/* eslint-disable react-hooks/set-state-in-effect */
/* =========================================
   FILE: src/engines/dp-knapsack-engine.jsx
   (WITHOUT FRACTIONAL KNAPSACK)
========================================= */

import { useState, useEffect, useMemo, useRef } from 'react';
import DPKnapsackVisualizer from '../visualizers/dp-knapsack-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateZeroOneKnapsackSteps } from '../algorithms/dp/knapsack/zero-one-knapsack';
import { generateUnboundedKnapsackSteps } from '../algorithms/dp/knapsack/unbounded-knapsack';

export default function DPKnapsackEngine({ algorithm, onStepChange }) {
  const [weightsInput, setWeightsInput] = useState('2,3,4,5');
  const [valuesInput, setValuesInput] = useState('3,4,5,6');
  const [capacity, setCapacity] = useState('5');

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [state, setState] = useState({});
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
    let s = [];

    if (algorithm.id === 'zero-one-knapsack') {
      s = generateZeroOneKnapsackSteps(weights, values, Number(capacity));
    } else {
      s = generateUnboundedKnapsackSteps(weights, values, Number(capacity));
    }

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
  }, [algorithm.id, weights, values, capacity]);

  // ===============================
  // APPLY STEP (PSEUDOCODE SYNC IMPROVED)
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setState(step);

    // 🔥 SYNCHRONIZED WITH PSEUDOCODE
    if (step.action === 'init') {
      setMessage('Initialize dp[0...W] = 0');
    } else if (step.action === 'choose max') {
      setMessage('dp[w] = max(dp[w], value + dp[w - weight])');
    } else if (step.action === 'skip item') {
      setMessage('Skipping item (weight > capacity)');
    } else if (step.action === 'update') {
      setMessage('Updating DP table');
    } else if (step.action === 'result') {
      setMessage(`Final Answer dp[W] = ${step.value}`);
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
      setCurrentStep((p) => (p >= steps.length - 1 ? p : p + 1));
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
        {/* 🔥 INPUT SECTION LABEL */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Knapsack Inputs
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex flex-col items-center">
              <span className="text-xs mb-1">Weights (w₁, w₂...)</span>
              <input
                value={weightsInput}
                onChange={(e) => setWeightsInput(e.target.value)}
                className="w-40 px-4 py-2 rounded-xl border bg-white/80 dark:bg-white/10"
              />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs mb-1">Values (v₁, v₂...)</span>
              <input
                value={valuesInput}
                onChange={(e) => setValuesInput(e.target.value)}
                className="w-40 px-4 py-2 rounded-xl border bg-white/80 dark:bg-white/10"
              />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs mb-1">Capacity (W)</span>
              <input
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
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

        {/* 🔥 VISUALIZER LABEL */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            DP Visualization
          </div>

          <DPKnapsackVisualizer algorithm={algorithm.id} state={state} />
        </div>
      </div>
    </FullscreenWrapper>
  );
}
