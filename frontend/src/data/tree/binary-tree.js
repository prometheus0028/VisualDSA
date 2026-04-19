const binaryTree = {
  id: 'binary-tree',
  title: 'Binary Tree',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n)',
  best: 'O(1)',
  average: 'O(n)',
  worst: 'O(n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
In the best case, accessing the root node takes constant time.

No traversal is required.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
On average, operations like traversal require visiting all nodes.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
In the worst case (skewed tree), traversal still visits all nodes.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Binary Tree is a hierarchical data structure where each node has at most two children: left and right.',

  intuition:
    'Think of it like a family tree — each parent can have up to two children. Data flows top-down.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Consider building a binary tree from values:',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Insert 1 as root'],
      },
      {
        pass: 'Step 2',
        steps: ['Insert 2 as left child', 'Insert 3 as right child'],
      },
      {
        pass: 'Step 3',
        steps: ['Insert 4 under 2', 'Insert 5 under 2'],
      },
      {
        pass: 'Final Tree',
        steps: ['Structure formed as hierarchical tree'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create root node',
    'Assign left child',
    'Assign right child',
    'Repeat for all nodes',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'CREATE_TREE(values):',
    '  create nodes array',
    '  for each value:',
    '    assign left child',
    '    assign right child',
    '  return root',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Binary Trees are used in hierarchical data representation, parsing expressions, and building more complex structures like BST and Heap.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Hierarchical structure',
    'Efficient representation of relationships',
    'Basis for advanced trees',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Can become unbalanced',
    'Search can be slow (O(n))',
    'Extra memory for pointers',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Max children in binary tree?',
      options: ['1', '2', '3', 'Unlimited'],
      answer: 1,
    },
    {
      question: 'Root is?',
      options: ['Leaf', 'Top node', 'Bottom node', 'Middle'],
      answer: 1,
    },
    {
      question: 'Traversal complexity?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Binary tree is?',
      options: ['Linear', 'Hierarchical', 'Graph', 'Array'],
      answer: 1,
    },
    {
      question: 'Nodes store?',
      options: ['Only data', 'Only pointer', 'Data + pointers', 'None'],
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
};

struct Node* create(int val) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = val;
    node->left = node->right = NULL;
    return node;
}
`,

    cpp: `
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};
`,

    java: `
class Node {
    int data;
    Node left, right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}
`,

    python: `
class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None
`,

    js: `
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
`,
  },
};

export default binaryTree;
