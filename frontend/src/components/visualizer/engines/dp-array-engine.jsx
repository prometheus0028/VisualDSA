/* eslint-disable react-hooks/exhaustive-deps */
/* =========================================
   FILE: src/engines/dp-array-engine.jsx
========================================= */

import { useState, useEffect, useMemo, useRef } from 'react';
import DPArrayVisualizer from '../visualizers/dp-array-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateClimbingStairsSteps } from '../algorithms/dp/dp/climbing-stairs';
import { generateCoinChangeSteps } from '../algorithms/dp/dp/coin-change';

export default function DPArrayEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('5');
  const [coins, setCoins] = useState('1,2,5');

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [dp, setDP] = useState([]);
  const [lastDP, setLastDP] = useState([]); // 🔥 FIX
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  const parsedCoins = useMemo(() => coins.split(',').map(Number), [coins]);

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    let s = [];

    if (algorithm.id === 'climbing-stairs') {
      s = generateClimbingStairsSteps(Number(input));
    } else {
      s = generateCoinChangeSteps(parsedCoins, Number(input));
    }

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
    setDP([]);
    setLastDP([]);
  }, [algorithm.id, input, parsedCoins]);

  // ===============================
  // APPLY STEP
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    if (step.dp) {
      setDP(step.dp);
      setLastDP(step.dp); // 🔥 SAVE LAST GOOD STATE
    } else {
      setDP(lastDP); // 🔥 RESTORE
    }

    setHighlightIndex(step.index ?? null);

    // 🔥 FINAL RESULT MESSAGE
    if (currentStep === steps.length - 1) {
      if (algorithm.id === 'climbing-stairs') {
        const result = (step.dp || lastDP)?.slice(-1)[0];
        setMessage(`Total ways = ${result}`);
      } else {
        const result = (step.dp || lastDP)?.slice(-1)[0];
        setMessage(`Minimum coins = ${result}`);
      }
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

  const next = () => setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const reset = () => {
    setCurrentStep(0);
    setPlaying(false);
    setDP([]);
    setLastDP([]);
    onStepChange?.(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT */}
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">
              {algorithm.id === 'climbing-stairs'
                ? 'Number of Steps'
                : 'Target Amount'}
            </label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-28 px-4 py-2 rounded-xl border bg-white/80 dark:bg-white/10"
            />
          </div>

          {algorithm.id === 'coin-change' && (
            <div className="flex flex-col items-center">
              <label className="text-sm mb-1">Coins (comma separated)</label>
              <input
                value={coins}
                onChange={(e) => setCoins(e.target.value)}
                className="w-40 px-4 py-2 rounded-xl border bg-white/80 dark:bg-white/10"
              />
            </div>
          )}
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
          <div className="p-3 rounded-xl bg-purple-200 dark:bg-purple-800 text-center font-semibold">
            {message}
          </div>
        )}

        {/* VISUAL */}
        <DPArrayVisualizer
          dp={dp.length ? dp : lastDP}
          highlightIndex={highlightIndex}
        />
      </div>
    </FullscreenWrapper>
  );
}
