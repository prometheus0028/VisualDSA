/* eslint-disable react-hooks/set-state-in-effect */
/* ===============================
   FILE: src/engines/bst-engine.jsx
================================ */

import { useState, useEffect } from 'react';
import BSTVisualizer from '../visualizers/bst-visualizer';
import FullscreenWrapper from '../components/fullscreen-wrapper';

export default function BSTEngine({ algorithm, onStepChange }) {
  const id = algorithm?.id;

  const isInsert = id === 'bst-insertion';
  const isDelete = id === 'bst-deletion';
  const isSearch = id === 'binary-search-tree';

  const [tree, setTree] = useState(null);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [highlight, setHighlight] = useState([]);
  const [activeNode, setActiveNode] = useState(null);

  // ===============================
  // DEFAULT TREE (REUSABLE)
  // ===============================
  const getDefaultTree = () => ({
    id: 1,
    data: 5,
    left: {
      id: 2,
      data: 3,
      left: { id: 3, data: 2 },
      right: { id: 4, data: 4 },
    },
    right: {
      id: 5,
      data: 8,
      left: { id: 6, data: 7 },
      right: { id: 7, data: 9 },
    },
  });

  // ===============================
  // INITIAL LOAD
  // ===============================
  useEffect(() => {
    setTree(getDefaultTree());
  }, []);

  // ===============================
  // INSERT
  // ===============================
  const insertNode = () => {
    const value = parseInt(input);

    if (isNaN(value)) {
      setMessage('Invalid input');
      setError(true);
      return;
    }

    const insert = (root, x) => {
      if (!root) {
        onStepChange?.(2);
        return {
          id: Math.random(),
          data: x,
          left: null,
          right: null,
        };
      }

      setActiveNode(root.id);
      onStepChange?.(3);

      if (x < root.data) {
        root.left = insert(root.left, x);
      } else {
        root.right = insert(root.right, x);
      }

      return root;
    };

    const newTree = insert(tree, value);

    setTree({ ...newTree });
    setMessage(`Inserted ${value}`);
    setError(false);
    setInput('');
    setHighlight([]);
  };

  // ===============================
  // DELETE
  // ===============================
  const deleteNode = () => {
    const value = parseInt(input);

    if (isNaN(value)) {
      setMessage('Invalid input');
      setError(true);
      return;
    }

    const findMin = (root) => {
      while (root.left) root = root.left;
      return root;
    };

    const del = (root, x) => {
      if (!root) return null;

      setActiveNode(root.id);
      onStepChange?.(2);

      if (x < root.data) {
        root.left = del(root.left, x);
      } else if (x > root.data) {
        root.right = del(root.right, x);
      } else {
        onStepChange?.(4);

        if (!root.left) return root.right;
        if (!root.right) return root.left;

        const temp = findMin(root.right);
        root.data = temp.data;
        root.right = del(root.right, temp.data);
      }

      return root;
    };

    const newTree = del(tree, value);

    setTree({ ...newTree });
    setMessage(`Deleted ${value}`);
    setError(false);
    setInput('');
    setHighlight([]);
  };

  // ===============================
  // SEARCH
  // ===============================
  const searchNode = () => {
    const value = parseInt(input);

    if (isNaN(value)) {
      setMessage('Invalid input');
      setError(true);
      return;
    }

    let temp = tree;
    let path = [];

    while (temp) {
      path.push(temp.id);
      setActiveNode(temp.id);
      onStepChange?.(3);

      if (temp.data === value) {
        setHighlight(path);
        setMessage(`Found ${value}`);
        setError(false);
        setInput('');
        return;
      }

      temp = value < temp.data ? temp.left : temp.right;
    }

    setHighlight(path);
    setMessage('Not Found');
    setError(true);
    setInput('');
  };

  // ===============================
  // RESET (FIXED)
  // ===============================
  const reset = () => {
    setTree(getDefaultTree());
    setMessage('');
    setError(false);
    setHighlight([]);
    setActiveNode(null);
    setInput('');
    onStepChange?.(null);
  };

  return (
    <FullscreenWrapper>
      <div className="space-y-6">
        {/* INPUT */}
        <div className="flex justify-center gap-4 flex-wrap">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            className="w-56 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 border"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 flex-wrap">
          {isInsert && (
            <button
              onClick={insertNode}
              className="px-4 py-2 bg-blue-500 text-white rounded-full"
            >
              Insert
            </button>
          )}

          {isDelete && (
            <button
              onClick={deleteNode}
              className="px-4 py-2 bg-red-500 text-white rounded-full"
            >
              Delete
            </button>
          )}

          {isSearch && (
            <button
              onClick={searchNode}
              className="px-4 py-2 bg-green-600 text-white rounded-full"
            >
              Search
            </button>
          )}

          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-full"
          >
            Reset
          </button>
        </div>

        {/* MESSAGE */}
        {message && (
          <div
            className={`p-3 rounded-xl text-center font-semibold
              ${
                error
                  ? 'bg-red-200 dark:bg-red-800'
                  : 'bg-purple-200 dark:bg-purple-800'
              }`}
          >
            {message}
          </div>
        )}

        {/* VISUALIZER */}
        <BSTVisualizer
          tree={tree}
          highlight={highlight}
          activeNode={activeNode}
        />
      </div>
    </FullscreenWrapper>
  );
}
