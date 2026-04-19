/* eslint-disable react-hooks/set-state-in-effect */
/* ===============================
   FILE: src/engines/tree-traversal-engine.jsx
================================ */

import { useState, useMemo, useEffect, useRef } from 'react';
import TreeVisualizer from '../visualizers/tree-traversal-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

import { buildBinaryTree } from '../algorithms/tree/binary-tree';
import { generateInorderSteps } from '../algorithms/tree/inorder';
import { generatePreorderSteps } from '../algorithms/tree/preorder';
import { generatePostorderSteps } from '../algorithms/tree/postorder';
import { generateLevelOrderSteps } from '../algorithms/tree/level-order';

export default function TreeTraversalEngine({ algorithm, onStepChange }) {
  const [input, setInput] = useState('1,2,3,4,5');
  const [tree, setTree] = useState(null);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [visited, setVisited] = useState([]);
  const [activeNode, setActiveNode] = useState(null);
  const [message, setMessage] = useState('');
  const [playing, setPlaying] = useState(false);

  // ✅ SAME AS ARRAY ENGINE
  const [speed, setSpeed] = useState(1); // 0.25x → 2x

  const timerRef = useRef(null);

  // ===============================
  // PARSE INPUT
  // ===============================
  const parsedInput = useMemo(() => {
    return input
      .split(',')
      .map((v) => {
        const val = v.trim();
        return val === 'null' ? null : Number(val);
      })
      .filter((v) => v === null || !isNaN(v));
  }, [input]);

  // ===============================
  // BUILD TREE
  // ===============================
  useEffect(() => {
    const root = buildBinaryTree(parsedInput);
    setTree(root);
  }, [parsedInput]);

  // ===============================
  // GENERATE STEPS
  // ===============================
  useEffect(() => {
    if (!tree) return;

    let s = [];

    switch (algorithm.id) {
      case 'inorder':
        s = generateInorderSteps(tree);
        break;
      case 'preorder':
        s = generatePreorderSteps(tree);
        break;
      case 'postorder':
        s = generatePostorderSteps(tree);
        break;
      case 'level-order':
        s = generateLevelOrderSteps(tree);
        break;
    }

    setSteps(s);
    setCurrentStep(0);
    setVisited([]);
    setPlaying(false);
  }, [tree, algorithm.id]);

  // ===============================
  // 🔥 RECOMPUTE STATE (FIXED)
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

    // MESSAGE
    if (current.action === 'visit') {
      setMessage(`Visited ${current.node.value}`);
    } else {
      setMessage(`${current.action}`);
    }

    // ✅ PSEUDOCODE SYNC
    onStepChange?.(current.highlightLine ?? null);
  }, [currentStep, onStepChange, steps]);

  // ===============================
  // ✅ AUTO PLAY (FIXED SPEED)
  // ===============================
  useEffect(() => {
    if (!playing || !steps.length) return;

    const delay = 600 / speed; // 🔥 SAME LOGIC AS ARRAY ENGINE

    timerRef.current = setTimeout(() => {
      setCurrentStep((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
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
        <div className="flex justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-72 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
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

        {/* ✅ SPEED LIKE OTHER ENGINES */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm">Speed</span>
          <input
            type="range"
            min="0.25"
            max="2"
            step="0.25"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span className="text-sm">{speed}x</span>
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="p-3 rounded-xl bg-purple-200 dark:bg-purple-800 text-center font-semibold">
            {message}
          </div>
        )}

        {/* TREE */}
        <TreeVisualizer tree={tree} visited={visited} activeNode={activeNode} />
      </div>
    </FullscreenWrapper>
  );
}
