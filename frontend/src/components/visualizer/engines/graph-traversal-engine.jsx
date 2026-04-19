/* =========================================
   FILE: src/engines/graph-traversal-engine.jsx
========================================= */

import { useState, useMemo, useEffect, useRef } from 'react';
import GraphVisualizer from '../visualizers/graph-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { buildGraph } from '../algorithms/graph/graph-builder';
import { generateBFSSteps } from '../algorithms/graph/bfs';
import { generateDFSSteps } from '../algorithms/graph/dfs';

export default function GraphTraversalEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('A-B, A-C, B-D, C-E');
  const [startNode, setStartNode] = useState('A');
  const [directed, setDirected] = useState(false);

  const [graph, setGraph] = useState(null);
  const [steps, setSteps] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [visited, setVisited] = useState([]);
  const [activeNode, setActiveNode] = useState(null);
  const [message, setMessage] = useState('');

  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const timerRef = useRef(null);

  // ===============================
  // BUILD GRAPH
  // ===============================
  const parsedGraph = useMemo(
    () => buildGraph(input, directed),
    [input, directed],
  );

  useEffect(() => {
    setGraph(parsedGraph);
  }, [parsedGraph]);

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    if (!graph || !startNode) return;

    let s = [];

    if (algorithm.id === 'bfs') {
      s = generateBFSSteps(graph, startNode);
    } else {
      s = generateDFSSteps(graph, startNode);
    }

    setSteps(s);
    setCurrentStep(0);
    setVisited([]);
    setPlaying(false);
  }, [graph, algorithm.id, startNode]);

  // ===============================
  // APPLY STEP
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const visitedNodes = [];
    const current = steps[currentStep];

    for (let i = 0; i <= currentStep; i++) {
      if (steps[i].action === 'visit') {
        visitedNodes.push(steps[i].node.id);
      }
    }

    setVisited(visitedNodes);
    setActiveNode(current.node?.id || null);

    setMessage(
      current.action === 'visit'
        ? `Visited ${current.node.id}`
        : current.action,
    );

    onStepChange?.(current.highlightLine ?? null);
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
  // DRAG HANDLER (IMPROVED)
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
  // CONTROLS
  // ===============================
  const next = () => setCurrentStep((p) => Math.min(p + 1, steps.length - 1));

  const prev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  const reset = () => {
    setCurrentStep(0);
    setVisited([]);
    setActiveNode(null);
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
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">Graph Input</label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-72 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">Start</label>
            <input
              value={startNode}
              onChange={(e) => setStartNode(e.target.value)}
              className="w-24 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
            />
          </div>

          {/* DIRECTED */}
          <div className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              checked={directed}
              onChange={() => setDirected((p) => !p)}
            />
            <label className="text-sm">Directed</label>
          </div>
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

        {/* GRAPH */}
        <GraphVisualizer
          graph={graph}
          visited={visited}
          activeNode={activeNode}
          directed={directed}
          onNodeDrag={handleNodeDrag}
        />
      </div>
    </FullscreenWrapper>
  );
}
