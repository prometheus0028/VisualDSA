/* =========================================
   FILE: src/engines/graph-shortest-path-engine.jsx
========================================= */

import { useState, useMemo, useEffect, useRef } from 'react';
import GraphVisualizer from '../visualizers/graph-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { buildGraph } from '../algorithms/graph/graph-builder';
import { generateDijkstraSteps } from '../algorithms/graph/dijkstra';
import { generateBellmanFordSteps } from '../algorithms/graph/bellman-ford';
import { generateAStarSteps } from '../algorithms/graph/a-star';

export default function GraphShortestPathEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('A-B-4, A-C-2, B-D-5, C-D-1');

  const [startNode, setStartNode] = useState('A');
  const [endNode, setEndNode] = useState('D');

  const [directed, setDirected] = useState(false);

  const [graph, setGraph] = useState(null);
  const [steps, setSteps] = useState([]);

  const [currentStep, setCurrentStep] = useState(0);
  const [activeNode, setActiveNode] = useState(null);
  const [highlightEdges, setHighlightEdges] = useState([]);
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
    if (!graph) return;

    let s = [];

    if (algorithm.id === 'dijkstra') {
      s = generateDijkstraSteps(graph, startNode, endNode);
    } else if (algorithm.id === 'bellman-ford') {
      s = generateBellmanFordSteps(graph, startNode);
    } else {
      s = generateAStarSteps(graph, startNode);
    }

    setSteps(s);
    setCurrentStep(0);
    setPlaying(false);
    setHighlightEdges([]);
  }, [graph, algorithm.id, startNode, endNode]);

  // ===============================
  // STEP APPLY
  // ===============================
  useEffect(() => {
    if (!steps.length) return;

    const step = steps[currentStep];

    setActiveNode(step.node?.id || null);

    // EDGE HIGHLIGHT (transient)
    if (step.edge) {
      setHighlightEdges([step.edge]);
    } else {
      setHighlightEdges([]);
    }

    // FINAL PATH
    if (step.action === 'final path' && step.path) {
      const pathEdges = [];

      for (let i = 0; i < step.path.length - 1; i++) {
        pathEdges.push({
          from: step.path[i],
          to: step.path[i + 1],
        });
      }

      setHighlightEdges(pathEdges);
      setMessage(`Shortest Path: ${step.path.join(' → ')}`);
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
  // DRAG SUPPORT (SAFE)
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
    setActiveNode(null);
    setHighlightEdges([]);
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
              className="w-72 px-4 py-2 bg-white/80 dark:bg-white/10 border rounded-xl"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">Start</label>
            <input
              value={startNode}
              onChange={(e) => setStartNode(e.target.value)}
              className="w-24 px-4 py-2 bg-white/80 dark:bg-white/10 border rounded-xl"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="text-sm mb-1">End</label>
            <input
              value={endNode}
              onChange={(e) => setEndNode(e.target.value)}
              className="w-24 px-4 py-2 bg-white/80 dark:bg-white/10 border rounded-xl"
            />
          </div>

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
        <GraphVisualizer
          graph={graph}
          activeNode={activeNode}
          highlightedEdges={highlightEdges}
          directed={directed}
          onNodeDrag={handleNodeDrag}
        />
      </div>
    </FullscreenWrapper>
  );
}
