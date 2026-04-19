const avlTree = {
  id: 'avl-tree',
  title: 'AVL Tree',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(log n)',
  best: 'O(log n)',
  average: 'O(log n)',
  worst: 'O(log n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
AVL tree is always balanced.

Height remains logarithmic.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
AVL maintains strict balancing using rotations.

All operations remain O(log n).

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Even in worst case AVL guarantees balance.

Height never exceeds log n.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'AVL Tree is a self-balancing Binary Search Tree where the difference between heights of left and right subtrees (balance factor) is at most 1.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Insert 10, 20, 30',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Insert 10 → Root'],
      },
      {
        pass: 'Step 2',
        steps: ['Insert 20 → Right of 10'],
      },
      {
        pass: 'Step 3',
        steps: ['Insert 30 → imbalance (RR case)'],
      },
      {
        pass: 'Step 4',
        steps: ['Left rotation → balanced tree'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Insert node like BST',
    'Update height of nodes',
    'Calculate balance factor',
    'If imbalance occurs:',
    '  Apply rotations (LL, RR, LR, RL)',
    'Return balanced tree',
  ],

  // ===============================
  // PSEUDOCODE (ENGINE CRITICAL)
  // ===============================
  pseudocode: [
    'INSERT(root, x):', // 0
    '  if root == NULL:', // 1
    '    return new node(x)', // 2
    '',
    '  if x < root.data:', // 4
    '    root.left = INSERT(root.left, x)', // 5
    '  else:', // 6
    '    root.right = INSERT(root.right, x)', // 7
    '',
    '  update height(root)', // 9
    '  balance = getBalance(root)', // 10
    '',
    '  // LL Case', // 12
    '  if balance > 1 and x < root.left.data:', // 13
    '    return rightRotate(root)', // 14
    '',
    '  // RR Case', // 16
    '  if balance < -1 and x > root.right.data:', // 17
    '    return leftRotate(root)', // 18
    '',
    '  // LR Case', // 20
    '  if balance > 1 and x > root.left.data:', // 21
    '    root.left = leftRotate(root.left)', // 22
    '    return rightRotate(root)', // 23
    '',
    '  // RL Case', // 25
    '  if balance < -1 and x < root.right.data:', // 26
    '    root.right = rightRotate(root.right)', // 27
    '    return leftRotate(root)', // 28
    '',
    '  return root', // 30
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use AVL trees when guaranteed fast operations are needed, such as databases, indexing, and search-heavy applications.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Always balanced',
    'Guaranteed O(log n)',
    'Fast search, insert, delete',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Complex rotations',
    'Higher overhead than BST',
    'More memory for height storage',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Balance factor range?',
      options: ['0 only', '-1 to 1', '-2 to 2', 'Any'],
      answer: 1,
    },
    {
      question: 'AVL ensures?',
      options: ['Sorting', 'Balancing', 'Hashing', 'Stack'],
      answer: 1,
    },
    {
      question: 'LL case uses?',
      options: ['Left rotate', 'Right rotate', 'Swap', 'Delete'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'AVL is?',
      options: ['Heap', 'Graph', 'Balanced BST', 'Queue'],
      answer: 2,
    },
  ],
  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
    int height;
};

int height(struct Node* n) {
    return n ? n->height : 0;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

struct Node* rightRotate(struct Node* y) {
    struct Node* x = y->left;
    y->left = x->right;
    x->right = y;

    y->height = max(height(y->left), height(y->right)) + 1;
    x->height = max(height(x->left), height(x->right)) + 1;

    return x;
}

struct Node* leftRotate(struct Node* x) {
    struct Node* y = x->right;
    x->right = y->left;
    y->left = x;

    x->height = max(height(x->left), height(x->right)) + 1;
    y->height = max(height(y->left), height(y->right)) + 1;

    return y;
}
`,

    cpp: `
#include <iostream>
using namespace std;

struct Node {
    int data, height;
    Node* left;
    Node* right;
};

int height(Node* n) {
    return n ? n->height : 0;
}

Node* rightRotate(Node* y) {
    Node* x = y->left;
    y->left = x->right;
    x->right = y;
    return x;
}

Node* leftRotate(Node* x) {
    Node* y = x->right;
    x->right = y->left;
    y->left = x;
    return y;
}
`,

    java: `
class Node {
    int data, height;
    Node left, right;
}

int height(Node n) {
    return n == null ? 0 : n.height;
}

Node rightRotate(Node y) {
    Node x = y.left;
    y.left = x.right;
    x.right = y;
    return x;
}

Node leftRotate(Node x) {
    Node y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
}
`,

    python: `
def height(node):
    return node.height if node else 0

def right_rotate(y):
    x = y.left
    y.left = x.right
    x.right = y
    return x

def left_rotate(x):
    y = x.right
    x.right = y.left
    y.left = x
    return y
`,

    js: `
function rightRotate(y) {
  const x = y.left;
  y.left = x.right;
  x.right = y;
  return x;
}

function leftRotate(x) {
  const y = x.right;
  x.right = y.left;
  y.left = x;
  return y;
}
`,
  },
};

export default avlTree;
