/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* =========================================
   FILE: src/engines/dp-tree-engine.jsx
========================================= */

import { useState, useEffect, useRef } from 'react';
import DPTreeVisualizer from '../visualizers/dp-tree-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { generateTreeDPSteps } from '../algorithms/dp/tree/dp-on-trees';

export default function DPTreeEngine({ algorithm, onStepChange }) {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const [activeNode, setActiveNode] = useState(null);
  const [values, setValues] = useState({});
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  // sample tree
  const tree = {
    value: 5,
    left: {
      value: 3,
      left: { value: 2 },
      right: { value: 4 },
    },
    right: {
      value: 8,
      left: { value: 7 },
      right: { value: 9 },
    },
  };

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    const s = generateTreeDPSteps(tree);

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
  }, []);

  // ===============================
  // APPLY STEP
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setActiveNode(step.node);

    setValues((prev) => ({
      ...prev,
      [step.node]: {
        include: step.include,
        exclude: step.exclude,
      },
    }));

    setMessage(`Node ${step.node}`);

    onStepChange?.(step.highlightLine ?? null);
  }, [currentStep, steps, onStepChange]);

  // ===============================
  // AUTO PLAY
  // ===============================
  useEffect(() => {
    if (!playing || !steps.length) return;

    const delay = 700 / speed;

    timerRef.current = setTimeout(() => {
      setCurrentStep((p) => (p >= steps.length - 1 ? p : p + 1));
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [playing, currentStep, steps, speed]);

  const next = () => setCurrentStep((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const reset = () => {
    setCurrentStep(0);
    setValues({});
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

        {/* VISUAL */}
        <DPTreeVisualizer tree={tree} activeNode={activeNode} values={values} />
      </div>
    </FullscreenWrapper>
  );
}
