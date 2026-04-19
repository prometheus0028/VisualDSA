/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
/* =========================================
   FILE: src/engines/graph-matrix-engine.jsx
========================================= */

import { useState, useMemo, useEffect, useRef } from 'react';
import FullscreenWrapper from '../components/fullscreen-wrapper';
import GraphMatrixVisualizer from '../visualizers/graph-matrix-visualizer';

import { buildGraph } from '../algorithms/graph/graph-builder';
import { generateFloydWarshallSteps } from '../algorithms/graph/floyd-warshall';

export default function GraphMatrixEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('A-B-3, A-C-8, B-C-2, C-D-1');
  const [graph, setGraph] = useState(null);

  const [steps, setSteps] = useState([]);
  const [nodes, setNodes] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [matrix, setMatrix] = useState(null);
  const [active, setActive] = useState({});
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  const parsedGraph = useMemo(() => buildGraph(input), [input]);

  useEffect(() => setGraph(parsedGraph), [parsedGraph]);

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    if (!graph) return;

    const result = generateFloydWarshallSteps(graph);

    setSteps(result.steps);
    setNodes(result.nodes);
    setCurrentStep(0);
    setPlaying(false);
  }, [graph]);

  // ===============================
  // APPLY STEP
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setMatrix(step.matrix);
    setActive({ i: step.i, j: step.j, k: step.k });

    setMessage(step.action);

    onStepChange?.(step.highlightLine ?? null);
  }, [currentStep, onStepChange, steps]);

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
    setPlaying(false);
    onStepChange?.(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT */}
        <div className="flex flex-col items-center">
          <label className="text-sm mb-1">Graph Input</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-72 px-4 py-2  bg-white/80 dark:bg-white/10 border rounded-xl"
          />
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

        {/* MATRIX */}
        <GraphMatrixVisualizer matrix={matrix} nodes={nodes} active={active} />
      </div>
    </FullscreenWrapper>
  );
}
