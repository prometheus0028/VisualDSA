/* eslint-disable react-hooks/set-state-in-effect */
/* =========================================
   FILE: src/engines/recursion-stack-engine.jsx
========================================= */

import { useState, useEffect, useRef } from 'react';
import RecursionStackVisualizer from '../visualizers/recursion-stack-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateFactorialSteps } from '../algorithms/dp/recursion/factorial';
import { generateFibonacciSteps } from '../algorithms/dp/recursion/fibonacci';
import { generatePowerSteps } from '../algorithms/dp/recursion/power-function';
import { generateReverseArraySteps } from '../algorithms/dp/recursion/reverse-array';

export default function RecursionStackEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('5');

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [stack, setStack] = useState([]);
  const [sequence, setSequence] = useState([]); // 🔥 NEW
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    let s = [];

    if (algorithm.id === 'factorial') {
      s = generateFactorialSteps(Number(input));
    } else if (algorithm.id === 'fibonacci') {
      const n = Number(input);
      if (!n || n <= 0) s = [];
      else s = generateFibonacciSteps(n);
    } else if (algorithm.id === 'power-function') {
      const [b, e] = input.split(',').map(Number);
      s = generatePowerSteps(b || 2, e || 3);
    } else if (algorithm.id === 'reverse-array') {
      const arr = input.split(',').map(Number);
      s = generateReverseArraySteps(arr);
    }

    setSteps(s);
    setCurrentStep(0);
    setStack([]);
    setSequence([]); // 🔥 reset
    setPlaying(false);
  }, [algorithm.id, input]);

  // ===============================
  // APPLY STEP
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const current = steps[currentStep];

    // 🔥 SPECIAL CASE → FIBONACCI
    if (algorithm.id === 'fibonacci') {
      setSequence(current.sequence || []);

      if (current.action === 'final') {
        setMessage(
          `Fibonacci series with ${input} terms is: ${(current.sequence || []).join(' ')}`,
        );
      } else {
        setMessage(current.action);
      }

      onStepChange?.(current.highlightLine ?? null);
      return;
    }

    // 🔥 DEFAULT STACK LOGIC
    let newStack = [];

    for (let i = 0; i <= currentStep; i++) {
      const step = steps[i];

      if (step.action === 'call') {
        newStack.push({
          value: step.value,
          depth: step.depth,
        });
      }

      if (step.action === 'return') {
        newStack.pop();
      }
    }

    setStack(newStack);

    setMessage(
      current.action === 'call'
        ? `Calling ${current.value}`
        : current.action === 'return'
          ? `Returning ${current.value}`
          : current.action,
    );

    onStepChange?.(current.highlightLine ?? null);
  }, [currentStep, steps, onStepChange, algorithm.id, input]);

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
    setStack([]);
    setSequence([]);
    setPlaying(false);
    onStepChange?.(null);
  };

  // ===============================
  // UI
  // ===============================
  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT */}
        <div className="flex justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              algorithm.id === 'power-function' ? 'base,exp' : 'Enter input'
            }
            className="w-72 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
          />
        </div>

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
          <div className="p-3 rounded-xl bg-purple-200 dark:bg-purple-800 text-center font-semibold">
            {message}
          </div>
        )}

        {/* VISUAL */}
        <RecursionStackVisualizer
          stack={stack}
          sequence={sequence} // 🔥 NEW
          algorithm={algorithm.id}
        />
      </div>
    </FullscreenWrapper>
  );
}
