/* eslint-disable react-hooks/set-state-in-effect */
/* =========================================
   FILE: src/engines/dp-sequence-engine.jsx
========================================= */

import { useState, useEffect, useRef } from 'react';
import DPSequenceVisualizer from '../visualizers/dp-sequence-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateLCSSteps } from '../algorithms/dp/sequence/longest-common-subsequence';
import { generateLISSteps } from '../algorithms/dp/sequence/longest-increasing-subsequence';
import { generateMCMSteps } from '../algorithms/dp/sequence/matrix-chain-multiplication';

export default function DPSequenceEngine({ algorithm, onStepChange }) {
  const [input1, setInput1] = useState('ABCBDAB');
  const [input2, setInput2] = useState('BDCAB');

  const [arrayInput, setArrayInput] = useState('10,9,2,5,3,7,101,18');
  const [mcmInput, setMCMInput] = useState('1,2,3,4');

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [state, setState] = useState({});
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    let s = [];

    if (algorithm.id === 'longest-common-subsequence') {
      s = generateLCSSteps(input1, input2);
    } else if (algorithm.id === 'longest-increasing-subsequence') {
      const nums = arrayInput.split(',').map(Number);
      s = generateLISSteps(nums);
    } else {
      const arr = mcmInput.split(',').map(Number);
      s = generateMCMSteps(arr);
    }

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
  }, [algorithm.id, input1, input2, arrayInput, mcmInput]);

  // ===============================
  // APPLY STEP (PSEUDOCODE SYNC)
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];
    setState(step);

    // 🔥 Better explanation for LCS
    if (algorithm.id === 'longest-common-subsequence') {
      if (step.match) {
        setMessage(`Match found → add 1 (diagonal move)`);
      } else if (step.decision === 'max') {
        setMessage(`No match → take max(top, left)`);
      } else {
        setMessage('Building DP table...');
      }

      // Final answer
      if (currentStep === steps.length - 1) {
        const result = step.dp?.[step.dp.length - 1]?.[step.dp[0].length - 1];
        setMessage(`LCS Length = ${result}`);
      }
    } else {
      setMessage(step.action);
    }

    onStepChange?.(step.highlightLine ?? null);
  }, [currentStep, steps, algorithm.id, onStepChange]);

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
        {/* 🔥 INPUT HEADING */}
        <div className="text-center font-semibold text-gray-700 dark:text-gray-300">
          Input Configuration
        </div>

        {/* INPUT */}
        <div className="flex justify-center gap-6 flex-wrap items-end">
          {algorithm.id === 'longest-common-subsequence' && (
            <>
              <div className="flex flex-col items-center">
                <span className="text-xs mb-1 text-gray-600 dark:text-gray-400">
                  String 1
                </span>
                <input
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className="w-40 px-4 py-2 border rounded-xl bg-white/80 dark:bg-white/10 text-black dark:text-white"
                />
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs mb-1 text-gray-600 dark:text-gray-400">
                  String 2
                </span>
                <input
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  className="w-40 px-4 py-2 border rounded-xl bg-white/80 dark:bg-white/10 text-black dark:text-white"
                />
              </div>
            </>
          )}

          {algorithm.id === 'longest-increasing-subsequence' && (
            <div className="flex flex-col items-center">
              <span className="text-xs mb-1 text-gray-600 dark:text-gray-400">
                Array Input
              </span>
              <input
                value={arrayInput}
                onChange={(e) => setArrayInput(e.target.value)}
                className="w-72 px-4 py-2 border rounded-xl bg-white/80 dark:bg-white/10 text-black dark:text-white"
              />
            </div>
          )}

          {algorithm.id === 'matrix-chain-multiplication' && (
            <div className="flex flex-col items-center">
              <span className="text-xs mb-1 text-gray-600 dark:text-gray-400">
                Dimensions Array
              </span>
              <input
                value={mcmInput}
                onChange={(e) => setMCMInput(e.target.value)}
                className="w-72 px-4 py-2 border rounded-xl bg-white/80 dark:bg-white/10 text-black dark:text-white"
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
          <div className="p-3 bg-purple-200 dark:bg-purple-800 text-center rounded-xl text-black dark:text-white">
            {message}
          </div>
        )}

        {/* 🔥 VISUAL ENGINE LABEL */}
        <div className="text-center font-semibold text-gray-700 dark:text-gray-300">
          DP Visualization
        </div>

        {/* VISUAL */}
        <DPSequenceVisualizer algorithm={algorithm.id} state={state} />
      </div>
    </FullscreenWrapper>
  );
}
