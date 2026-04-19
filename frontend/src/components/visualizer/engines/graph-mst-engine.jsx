/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useMemo, useEffect, useRef } from 'react';
import GraphMSTVisualizer from '../visualizers/graph-mst-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { buildGraph } from '../algorithms/graph/graph-builder';
import { generatePrimSteps } from '../algorithms/graph/prim';
import { generateKruskalSteps } from '../algorithms/graph/kruskal';

export default function GraphMSTEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('A-B-4, A-C-2, B-C-1, B-D-5, C-D-3');
  const [startNode, setStartNode] = useState('A');

  const [graph, setGraph] = useState(null);
  const [steps, setSteps] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [activeEdge, setActiveEdge] = useState(null);
  const [mstEdges, setMstEdges] = useState([]);
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  const parsedGraph = useMemo(() => buildGraph(input), [input]);

  useEffect(() => setGraph(parsedGraph), [parsedGraph]);

  // ===============================
  // DRAG SUPPORT
  // ===============================
  const handleNodeDrag = (id, x, y) => {
    setGraph((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        nodes: prev.nodes.map((n) => (n.id === id ? { ...n, x, y } : n)),
      };
    });
  };

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    if (!graph) return;

    let s = [];

    if (algorithm.id === 'prim') {
      s = generatePrimSteps(graph, startNode);
    } else {
      s = generateKruskalSteps(graph);
    }

    setSteps(s);
    setCurrentStep(0);
    setMstEdges([]);
    setPlaying(false);
  }, [graph, algorithm.id, startNode]);

  // ===============================
  // STEP APPLY
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const current = steps[currentStep];

    setActiveEdge(current.edge || null);

    const selected = [];

    for (let i = 0; i <= currentStep; i++) {
      if (steps[i].action === 'select edge') {
        selected.push(steps[i].edge);
      }
    }

    setMstEdges(selected);
    setMessage(current.action);

    onStepChange?.(current.highlightLine ?? null);
  }, [currentStep, onStepChange, steps]);

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

  const next = () => setCurrentStep((p) => Math.min(p + 1, steps.length - 1));

  const prev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const reset = () => {
    setCurrentStep(0);
    setActiveEdge(null);
    setMstEdges([]);
    setPlaying(false);
    onStepChange?.(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT */}
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">Graph Input</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-72 px-4 py-2 bg-white/80 dark:bg-white/10 border rounded-xl"
            />
          </div>

          {algorithm.id === 'prim' && (
            <div className="flex flex-col items-center">
              <label className="text-sm mb-1">Start Node</label>
              <input
                value={startNode}
                onChange={(e) => setStartNode(e.target.value)}
                className="w-24 px-4 py-2  bg-white/80 dark:bg-white/10 border rounded-xl"
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
          <div className="p-3 bg-purple-200 dark:bg-purple-800 text-center rounded-xl">
            {message}
          </div>
        )}

        {/* GRAPH */}
        <GraphMSTVisualizer
          graph={graph}
          activeEdge={activeEdge}
          mstEdges={mstEdges}
          onNodeDrag={handleNodeDrag}
        />
      </div>
    </FullscreenWrapper>
  );
}
