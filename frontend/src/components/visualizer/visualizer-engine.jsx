// SEARCHING AND ENGINES
import ArrayEngine from './engines/array-engine';

// STACK ENGINES
import StackEngine from './engines/stack-engine';
import ExpressionEngine from './engines/expression-engine';
import HanoiEngine from './engines/hanoi-engine';

// QUEUE ENGINES
import QueueEngine from './engines/queue-engine';
import DequeEngine from './engines/deque-engine';
import PriorityQueueEngine from './engines/priority-queue-engine';

// LINKED LIST ENGINES
import LinkedListEngine from './engines/linked-list-engine';

// TREE ENGINES
import BinaryTreeEngine from './engines/binary-tree-engine';
import TreeTraversalEngine from './engines/tree-traversal-engine';
import BSTEngine from './engines/bst-engine';
import AVLEngine from './engines/avl-engine';
import HeapEngine from './engines/heap-engine';

// GRAPH ENGINES
import GraphTraversalEngine from './engines/graph-traversal-engine';
import GraphMatrixEngine from './engines/graph-matrix-engine';
import GraphShortestPathEngine from './engines/graph-shortest-path-engine';
import GraphMSTEngine from './engines/graph-mst-engine';

// ===============================
// (DP + RECURSION + BACKTRACKING + GREEDY)
// ===============================
import RecursionStackEngine from './engines/recursion-stack-engine';

import BacktrackingEngine from './engines/backtracking-engine';
import SudokuEngine from './engines/sudoku-engine';

import DPArrayEngine from './engines/dp-array-engine';
import DPMatrixEngine from './engines/dp-matrix-engine';
import DPKnapsackEngine from './engines/dp-knapsack-engine';
import DPSequenceEngine from './engines/dp-sequence-engine';
import DPTreeEngine from './engines/dp-tree-engine';

import GreedyEngine from './engines/greedy-engine';
export default function VisualizerEngine({ algorithm, onStepChange }) {
  const id = algorithm?.id || '';

  // ===============================
  // PRIORITY QUEUE
  // ===============================
  if (id === 'priority-queue') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <PriorityQueueEngine
          algorithm={algorithm}
          onStepChange={onStepChange}
        />
      </div>
    );
  }

  // ===============================
  // LINKED LIST
  // ===============================
  if (
    id === 'singly-linked-list' ||
    id === 'doubly-linked-list' ||
    id === 'circular-linked-list'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <LinkedListEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // STACK
  // ===============================
  if (id.includes('stack')) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <StackEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // QUEUE
  // ===============================
  if (
    id === 'queue-using-array' ||
    id === 'queue-using-linked-list' ||
    id === 'circular-queue'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <QueueEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // HANOI
  // ===============================
  if (id.includes('hanoi')) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <HanoiEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // EXPRESSION
  // ===============================
  if (id === 'infix-to-postfix' || id === 'postfix-evaluation') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <ExpressionEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // DEQUE
  // ===============================
  if (id.includes('deque')) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <DequeEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // BINARY TREE
  // ===============================
  if (id === 'binary-tree') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <BinaryTreeEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // TREE TRAVERSAL
  // ===============================
  if (
    id === 'inorder' ||
    id === 'preorder' ||
    id === 'postorder' ||
    id === 'level-order'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <TreeTraversalEngine
          algorithm={algorithm}
          onStepChange={onStepChange}
        />
      </div>
    );
  }

  // ===============================
  // BST
  // ===============================
  if (
    id === 'binary-search-tree' ||
    id === 'bst-insertion' ||
    id === 'bst-deletion'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <BSTEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // AVL
  // ===============================
  if (id === 'avl-tree') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <AVLEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // HEAP
  // ===============================
  if (id === 'heap') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <HeapEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // GRAPH TRAVERSAL (BFS + DFS)
  // ===============================
  if (id === 'bfs' || id === 'dfs') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <GraphTraversalEngine
          algorithm={algorithm}
          onStepChange={onStepChange}
        />
      </div>
    );
  }

  // ===============================
  // GRAPH SHORTEST PATH
  // ===============================
  if (id === 'dijkstra' || id === 'bellman-ford' || id === 'a-star') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <GraphShortestPathEngine
          algorithm={algorithm}
          onStepChange={onStepChange}
        />
      </div>
    );
  }

  // ===============================
  // GRAPH MST
  // ===============================
  if (id === 'prim' || id === 'kruskal') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <GraphMSTEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // GRAPH MATRIX
  // ===============================
  if (id === 'floyd-warshall') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <GraphMatrixEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // RECURSION
  // ===============================
  if (
    id === 'factorial' ||
    id === 'fibonacci' ||
    id === 'power-function' ||
    id === 'reverse-array'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <RecursionStackEngine
          algorithm={algorithm}
          onStepChange={onStepChange}
        />
      </div>
    );
  }

  // ===============================
  // BACKTRACKING
  // ===============================
  if (
    id === 'rat-in-a-maze' ||
    id === 'permutations' ||
    id === 'combinations' ||
    id === 'subset-generation'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <BacktrackingEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  if (id === 'sudoku-solver') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <SudokuEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // DP
  // ===============================
  if (id === 'climbing-stairs' || id === 'coin-change') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <DPArrayEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  if (
    id === 'edit-distance' ||
    id === 'partition-equal-subset-sum' ||
    id === 'palindrome-partitioning'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <DPMatrixEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  if (id === 'zero-one-knapsack' || id === 'unbounded-knapsack') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <DPKnapsackEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  if (
    id === 'longest-common-subsequence' ||
    id === 'longest-increasing-subsequence' ||
    id === 'matrix-chain-multiplication'
  ) {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <DPSequenceEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  if (id === 'dp-on-trees') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <DPTreeEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // GREEDY
  // ===============================
  if (id === 'fractional-knapsack') {
    return (
      <div className="w-full h-full min-h-0 overflow-hidden">
        <GreedyEngine algorithm={algorithm} onStepChange={onStepChange} />
      </div>
    );
  }

  // ===============================
  // DEFAULT → ARRAY
  // ===============================
  return (
    <div className="w-full h-full min-h-0 overflow-hidden">
      <ArrayEngine algorithm={algorithm} onStepChange={onStepChange} />
    </div>
  );
}
