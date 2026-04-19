/* eslint-disable react-hooks/set-state-in-effect */
/* ===============================
   FILE: src/engines/binary-tree-engine.jsx
================================ */

import { useState, useMemo, useEffect } from 'react';
import BinaryTreeVisualizer from '../visualizers/binary-tree-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';
import { buildBinaryTree } from '../algorithms/tree/binary-tree';

export default function BinaryTreeEngine() {
  const [input, setInput] = useState('1,2,3,4,5');
  const [tree, setTree] = useState(null);

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
    if (!parsedInput.length) {
      setTree(null);
      return;
    }

    const root = buildBinaryTree(parsedInput);
    setTree(root);
  }, [parsedInput]);

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT */}
        <div className="flex justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="1,2,3,null,4"
            className="w-72 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border"
          />
        </div>

        {/* VISUAL */}
        <BinaryTreeVisualizer tree={tree} />
      </div>
    </FullscreenWrapper>
  );
}
