/* eslint-disable react-hooks/set-state-in-effect */
/* =========================================
   FILE: src/engines/dp-matrix-engine.jsx
========================================= */

import { useState, useEffect, useRef } from 'react';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import EditDistanceVisualizer from '../visualizers/edit-distance-visualizer';
import PartitionPalindromeVisualizer from '../visualizers/partition-palindrome-visualizer';

import { generateEditDistanceSteps } from '../algorithms/dp/dp/edit-distance';
import { generatePartitionSteps } from '../algorithms/dp/dp/partition-equal-subset-sum';
import { generatePalindromePartitionSteps } from '../algorithms/dp/dp/palindrome-partitioning';

export default function DPMatrixEngine({ algorithm, onStepChange }) {
  const [input1, setInput1] = useState('kitten');
  const [input2, setInput2] = useState('sitting');

  const [arrayInput, setArrayInput] = useState('1,5,11,5');

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [matrix, setMatrix] = useState([]);
  const [activeCell, setActiveCell] = useState(null);
  const [message, setMessage] = useState('');
  const [extra, setExtra] = useState(null);

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    let s = [];

    if (algorithm.id === 'edit-distance') {
      s = generateEditDistanceSteps(input1, input2);
    } else if (algorithm.id === 'partition-equal-subset-sum') {
      const nums = arrayInput.split(',').map(Number);
      s = generatePartitionSteps(nums);
    } else {
      s = generatePalindromePartitionSteps(input1);
    }

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
    setExtra(null);
  }, [algorithm.id, input1, input2, arrayInput]);

  // ===============================
  // APPLY STEP (FIXED SYNC)
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setMatrix(Array.isArray(step.dp) ? step.dp : []);
    setActiveCell(
      step.i !== undefined && step.j !== undefined ? [step.i, step.j] : null,
    );

    // ===============================
    // EDIT DISTANCE (UNCHANGED)
    // ===============================
    if (algorithm.id === 'edit-distance') {
      if (currentStep === steps.length - 1) {
        const result = step.dp?.[step.dp.length - 1]?.[step.dp[0].length - 1];

        setMessage(`Minimum operations = ${result}`);
      } else {
        setMessage(step.action);
      }
    }

    // ===============================
    // PARTITION (FIXED)
    // ===============================
    else if (algorithm.id === 'partition-equal-subset-sum') {
      const target = step.target ?? 0;

      if (step.action === 'init') {
        setMessage('Initializing DP table');
      } else if (step.action === 'include') {
        setMessage(`Including element → checking subset sum`);
      } else if (step.action === 'exclude') {
        setMessage(`Excluding element → carry previous result`);
      } else if (step.action === 'update') {
        setMessage(`Updating DP[i][j]`);
      } else if (currentStep === steps.length - 1) {
        const res = step.dp?.slice(-1)[0]?.slice(-1)[0];

        setMessage(
          res
            ? `✅ Can partition into equal subset (target = ${target})`
            : `❌ Cannot partition into equal subset (target = ${target})`,
        );
      } else {
        setMessage(`Processing DP table...`);
      }
    }

    // ===============================
    // PALINDROME (FIXED)
    // ===============================
    else if (algorithm.id === 'palindrome-partitioning') {
      if (step.action === 'check') {
        setMessage(`Checking substring [${step.i}, ${step.j}]`);
      } else if (step.action === 'palindrome') {
        setMessage(`Palindrome found ✅`);
      } else if (step.palindromes) {
        setExtra(step.palindromes);
        setMessage(`Total palindromes: ${step.palindromes.length}`);
      } else {
        setMessage('Processing substrings...');
      }
    }

    onStepChange?.(step.highlightLine ?? null);
  }, [currentStep, steps, algorithm.id, onStepChange]);

  // ===============================
  // AUTO PLAY
  // ===============================
  useEffect(() => {
    if (!playing || !steps.length) return;

    const delay = 500 / speed;

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
    setExtra(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT (UNCHANGED) */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            {algorithm.id === 'edit-distance' && (
              <div className="flex flex-col items-center gap-2">
                <div className="text-sm font-semibold">Enter two strings</div>

                <div className="flex gap-4">
                  <input
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    className="w-40 px-4 py-2 bg-white/80 dark:bg-white/5 border rounded-xl"
                  />
                  <input
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    className="w-40 px-4 py-2 bg-white/80 dark:bg-white/5 border rounded-xl"
                  />
                </div>
              </div>
            )}

            {algorithm.id === 'partition-equal-subset-sum' && (
              <div className="flex flex-col items-center gap-2">
                <div className="text-sm font-semibold">
                  Enter numbers (comma separated)
                </div>

                <input
                  value={arrayInput}
                  onChange={(e) => setArrayInput(e.target.value)}
                  className="w-56 px-4 py-2 bg-white/80 dark:bg-white/5 border rounded-xl"
                />
              </div>
            )}

            {algorithm.id === 'palindrome-partitioning' && (
              <div className="flex flex-col items-center gap-2">
                <div className="text-sm font-semibold">Enter a string</div>

                <input
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className="w-56 px-4 py-2 bg-white/80 dark:bg-white/5border rounded-xl"
                />
              </div>
            )}
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

        {/* VISUALIZER */}
        {algorithm.id === 'edit-distance' ? (
          <EditDistanceVisualizer
            matrix={matrix}
            activeCell={activeCell}
            word1={input1}
            word2={input2}
          />
        ) : (
          <PartitionPalindromeVisualizer
            algorithm={algorithm.id}
            matrix={matrix}
            activeCell={activeCell}
            extra={extra}
          />
        )}
      </div>
    </FullscreenWrapper>
  );
}
