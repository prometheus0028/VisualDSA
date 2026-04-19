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
      <PriorityQueueEngine algorithm={algorithm} onStepChange={onStepChange} />
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
      <LinkedListEngine algorithm={algorithm} onStepChange={onStepChange} />
    );
  }

  // ===============================
  // STACK
  // ===============================
  if (id.includes('stack')) {
    return <StackEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // QUEUE
  // ===============================
  if (
    id === 'queue-using-array' ||
    id === 'queue-using-linked-list' ||
    id === 'circular-queue'
  ) {
    return <QueueEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // HANOI
  // ===============================
  if (id.includes('hanoi')) {
    return <HanoiEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // EXPRESSION
  // ===============================
  if (id === 'infix-to-postfix' || id === 'postfix-evaluation') {
    return (
      <ExpressionEngine algorithm={algorithm} onStepChange={onStepChange} />
    );
  }

  // ===============================
  // DEQUE
  // ===============================
  if (id.includes('deque')) {
    return <DequeEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // BINARY TREE
  // ===============================
  if (id === 'binary-tree') {
    return (
      <BinaryTreeEngine algorithm={algorithm} onStepChange={onStepChange} />
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
      <TreeTraversalEngine algorithm={algorithm} onStepChange={onStepChange} />
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
    return <BSTEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // AVL
  // ===============================
  if (id === 'avl-tree') {
    return <AVLEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // HEAP
  // ===============================
  if (id === 'heap') {
    return <HeapEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // GRAPH TRAVERSAL (BFS + DFS)
  // ===============================
  if (id === 'bfs' || id === 'dfs') {
    return (
      <GraphTraversalEngine algorithm={algorithm} onStepChange={onStepChange} />
    );
  }

  // ===============================
  // GRAPH SHORTEST PATH
  // ===============================
  if (id === 'dijkstra' || id === 'bellman-ford' || id === 'a-star') {
    return (
      <GraphShortestPathEngine
        algorithm={algorithm}
        onStepChange={onStepChange}
      />
    );
  }

  // ===============================
  // GRAPH MST
  // ===============================
  if (id === 'prim' || id === 'kruskal') {
    return <GraphMSTEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // GRAPH MATRIX
  // ===============================
  if (id === 'floyd-warshall') {
    return (
      <GraphMatrixEngine algorithm={algorithm} onStepChange={onStepChange} />
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
      <RecursionStackEngine algorithm={algorithm} onStepChange={onStepChange} />
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
      <BacktrackingEngine algorithm={algorithm} onStepChange={onStepChange} />
    );
  }

  if (id === 'sudoku-solver') {
    return <SudokuEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // DP
  // ===============================
  if (id === 'climbing-stairs' || id === 'coin-change') {
    return <DPArrayEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  if (
    id === 'edit-distance' ||
    id === 'partition-equal-subset-sum' ||
    id === 'palindrome-partitioning'
  ) {
    return <DPMatrixEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  if (id === 'zero-one-knapsack' || id === 'unbounded-knapsack') {
    return (
      <DPKnapsackEngine algorithm={algorithm} onStepChange={onStepChange} />
    );
  }

  if (
    id === 'longest-common-subsequence' ||
    id === 'longest-increasing-subsequence' ||
    id === 'matrix-chain-multiplication'
  ) {
    return (
      <DPSequenceEngine algorithm={algorithm} onStepChange={onStepChange} />
    );
  }

  if (id === 'dp-on-trees') {
    return <DPTreeEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // GREEDY
  // ===============================
  if (id === 'fractional-knapsack') {
    return <GreedyEngine algorithm={algorithm} onStepChange={onStepChange} />;
  }

  // ===============================
  // DEFAULT → ARRAY
  // ===============================
  return <ArrayEngine algorithm={algorithm} onStepChange={onStepChange} />;
}
