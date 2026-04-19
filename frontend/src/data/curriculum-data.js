import linearSearch from './searching/linear-search';
import binarySearch from './searching/binary-search';
import ternarySearch from './searching/ternary-search';

import bubbleSort from './sorting/bubble-sort';
import selectionSort from './sorting/selection-sort';
import insertionSort from './sorting/insertion-sort';
import mergeSort from './sorting/merge-sort';
import quickSort from './sorting/quick-sort';
import heapSort from './sorting/heap-sort';
import countingSort from './sorting/counting-sort';
import radixSort from './sorting/radix-sort';

import stackUsingArray from './stack/stack-using-array';
import stackUsingLinkedList from './stack/stack-using-linked-list';
import towerOfHanoi from './stack/tower-of-hanoi';
import infixToPostfix from './stack/infix-to-postfix';
import postfixEvaluation from './stack/postfix-evaluation';

import queueUsingArray from './queue/queue-using-array';
import queueUsingLinkedList from './queue/queue-using-linked-list';
import circularQueue from './queue/circular-queue';
import deque from './queue/deque';
import priorityQueue from './queue/priority-queue';

import singlyLinkedList from './linked-list/singly-linked-list';
import doublyLinkedList from './linked-list/doubly-linked-list';
import circularLinkedList from './linked-list/circular-linked-list';

import binaryTree from './tree/binary-tree';
import inorderTraversal from './tree/inorder';
import preorderTraversal from './tree/preorder';
import postorderTraversal from './tree/postorder';
import levelOrderTraversal from './tree/level-order';
import binarySearchTree from './tree/bst';
import bstInsert from './tree/bst-insert';
import bstDelete from './tree/bst-delete';
import avlTree from './tree/avl-tree';
import heap from './tree/heap';

import bfs from './graph/bfs-data';
import dfs from './graph/dfs-data';
import dijkstra from './graph/dijkstra-data';
import bellmanFord from './graph/bellman-ford-data';
import floydWarshall from './graph/floyd-warshall-data';
import aStar from './graph/a-star-data';
import prim from './graph/prim-data';
import kruskal from './graph/kruskal-data';

import factorial from './dp/factorial';
import fibonacci from './dp/fibonacci';
import powerFunction from './dp/power-function';
import reverseArray from './dp/reverse-array';

import towerOf_Hanoi from './dp/tower-of-hanoi';
import sudokuSolver from './dp/sudoku-solver';
import ratInAMaze from './dp/rat-in-a-maze';
import permutations from './dp/permutations';
import combinations from './dp/combinations';
import subsetGeneration from './dp/subset-generation';

import climbingStairs from './dp/climbing-stairs';
import coinChange from './dp/coin-change';
import editDistance from './dp/edit-distance';
import partitionEqualSubsetSum from './dp/partition-equal-subset-sum';
import palindromePartitioning from './dp/palindrome-partitioning';

import zeroOneKnapsack from './dp/zero-one-knapsack';
import unboundedKnapsack from './dp/unbounded-knapsack';
import fractionalKnapsack from './dp/fractional-knapsack';

import longestCommonSubsequence from './dp/longest-common-subsequence';
import longestIncreasingSubsequence from './dp/longest-increasing-subsequence';
import matrixChainMultiplication from './dp/matrix-chain-multiplication';

import dpOnTrees from './dp/dp-on-trees';

export const curriculumData = [
  /* ================= SEARCHING ================= */

  {
    id: 'searching',
    title: 'Searching',
    description:
      'Searching algorithms help locate elements efficiently within data structures. They form the foundation of indexing, databases, and optimization systems.',
    algorithms: [linearSearch, binarySearch, ternarySearch],
  },

  /* ================= SORTING ================= */

  {
    id: 'sorting',
    title: 'Sorting',
    description:
      'Sorting algorithms arrange elements into a defined order. Understanding sorting builds intuition for divide-and-conquer, recursion, and optimization tradeoffs.',
    algorithms: [
      bubbleSort,
      selectionSort,
      insertionSort,
      mergeSort,
      quickSort,
      heapSort,
      countingSort,
      radixSort,
    ],
  },

  /* ================= STACK ================= */

  {
    id: 'stack',
    title: 'Stack',
    description:
      'Stacks follow LIFO (Last-In-First-Out) principles and are essential for recursion, expression evaluation, and memory management.',
    algorithms: [
      stackUsingArray,
      stackUsingLinkedList,
      towerOfHanoi,
      infixToPostfix,
      postfixEvaluation,
    ],
  },

  /* ================= QUEUE ================= */

  {
    id: 'queue',
    title: 'Queues',
    description:
      'Queues follow FIFO (First-In-First-Out) logic and are widely used in scheduling, buffering, and graph traversal algorithms.',
    algorithms: [
      queueUsingArray,
      queueUsingLinkedList,
      circularQueue,
      deque,
      priorityQueue,
    ],
  },

  /* ================= LINKED LIST ================= */

  {
    id: 'linked-list',
    title: 'Linked List',
    description:
      'Linked Lists store elements in non-contiguous memory locations and are fundamental to dynamic memory allocation.',
    algorithms: [singlyLinkedList, doublyLinkedList, circularLinkedList],
  },

  /* ================= TREE ================= */

  {
    id: 'tree',
    title: 'Tree',
    description:
      'Tree data structures organize hierarchical data efficiently and are heavily used in search systems and indexing.',
    subsections: [
      {
        id: 'basic-tree',
        title: 'Basic Trees and Traversals',
        algorithms: [
          binaryTree,
          inorderTraversal,
          preorderTraversal,
          postorderTraversal,
          levelOrderTraversal,
        ],
      },
      {
        id: 'bst',
        title: 'Binary Search Tree',
        algorithms: [binarySearchTree, bstInsert, bstDelete],
      },
      {
        id: 'adv',
        title: 'Advanced Tree',
        algorithms: [avlTree, heap],
      },
    ],
  },

  /* ================= GRAPHS ================= */

  {
    id: 'graphs',
    title: 'Graphs',
    description:
      'Graph algorithms model networks, maps, dependencies, and complex relational systems.',
    subsections: [
      {
        id: 'traversal',
        title: 'Traversal',
        algorithms: [bfs, dfs],
      },
      {
        id: 'shortest-path',
        title: 'Shortest Path',
        algorithms: [dijkstra, bellmanFord, floydWarshall, aStar],
      },
      {
        id: 'mst',
        title: 'Minimum Spanning Tree',
        algorithms: [prim, kruskal],
      },
    ],
  },

  /* ================= DYNAMIC PROGRAMMING ================= */

  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming & Recursion',
    description:
      'Dynamic Programming optimizes recursive solutions by storing intermediate results to avoid recomputation. It transforms exponential solutions into polynomial time using memoization or tabulation.',
    subsections: [
      /* ================= BASIC RECURSION ================= */

      {
        id: 'basic-recursion',
        title: 'Basic Recursion',
        algorithms: [factorial, fibonacci, powerFunction, reverseArray],
      },

      /* ================= BACKTRACKING ================= */

      {
        id: 'backtracking',
        title: 'Backtracking',
        algorithms: [
          towerOf_Hanoi,
          sudokuSolver,
          ratInAMaze,
          permutations,
          combinations,
          subsetGeneration,
        ],
      },

      /* ================= CLASSIC DP PROBLEMS ================= */

      {
        id: 'classic-dp',
        title: 'Classic DP Problems',
        algorithms: [
          climbingStairs,
          coinChange,
          editDistance,
          partitionEqualSubsetSum,
          palindromePartitioning,
        ],
      },

      /* ================= KNAPSACK FAMILY ================= */

      {
        id: 'knapsack-problems',
        title: 'Knapsack Problems',
        algorithms: [zeroOneKnapsack, unboundedKnapsack, fractionalKnapsack],
      },

      /* ================= SEQUENCE DP ================= */

      {
        id: 'sequence-dp',
        title: 'Sequence DP',
        algorithms: [
          longestCommonSubsequence,
          longestIncreasingSubsequence,
          matrixChainMultiplication,
        ],
      },

      /* ================= DP ON TREES ================= */

      {
        id: 'dp-on-trees',
        title: 'DP on Trees',
        algorithms: [dpOnTrees],
      },
    ],
  },
];
