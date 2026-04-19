const inorderTraversal = {
  id: 'inorder',
  title: 'Inorder Traversal',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n)',
  best: 'O(n)',
  average: 'O(n)',
  worst: 'O(n)',
  space: 'O(h)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Every node must be visited once.

Even in the best case, traversal does not skip nodes.

Time Complexity: O(n)
Space Complexity: O(h) (recursive stack)
      `,
    },
    average: {
      description: `
Traversal visits all nodes in left-root-right order.

Height of tree determines recursion depth.

Time Complexity: O(n)
Space Complexity: O(h)
      `,
    },
    worst: {
      description: `
In skewed tree (like linked list), height = n.

Recursive stack grows to n.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Inorder Traversal visits nodes in Left → Root → Right order. In Binary Search Trees, it produces sorted output.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'For tree: [1,2,3,4,5], inorder traversal visits left subtree, then root, then right subtree.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Go to leftmost node'],
      },
      {
        pass: 'Step 2',
        steps: ['Visit node'],
      },
      {
        pass: 'Step 3',
        steps: ['Move to right subtree'],
      },
      {
        pass: 'Result',
        steps: ['Traversal order: 4 → 2 → 5 → 1 → 3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start at root',
    'Traverse left subtree',
    'Visit node',
    'Traverse right subtree',
    'Repeat recursively',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'INORDER(node):', // 0
    '  if node == NULL:', // 1
    '    return', // 2
    '  INORDER(node.left)', // 3
    '  visit node', // 4
    '  INORDER(node.right)', // 5
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use inorder traversal when you need sorted output from a Binary Search Tree or want to process nodes in left-root-right order.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Produces sorted output in BST',
    'Simple recursive implementation',
    'Useful in expression trees',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Uses recursion (stack space)',
    'Not suitable for very deep trees',
    'Traversal always visits all nodes',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Traversal order?',
      options: [
        'Root-Left-Right',
        'Left-Root-Right',
        'Right-Left-Root',
        'Level',
      ],
      answer: 1,
    },
    {
      question: 'In BST, inorder gives?',
      options: ['Random order', 'Sorted order', 'Reverse', 'Level order'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'],
      answer: 1,
    },
    {
      question: 'Space depends on?',
      options: ['Nodes', 'Height', 'Edges', 'Values'],
      answer: 1,
    },
    {
      question: 'Traversal uses?',
      options: ['Queue', 'Stack/Recursion', 'Array', 'Graph'],
      answer: 1,
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

void inorder(struct Node* root) {
    if (root == NULL) return;

    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}
`,

    cpp: `
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

void inorder(Node* root) {
    if (!root) return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}
`,

    java: `
class Node {
    int data;
    Node left, right;
}

void inorder(Node root) {
    if (root == null) return;

    inorder(root.left);
    System.out.print(root.data + " ");
    inorder(root.right);
}
`,

    python: `
def inorder(root):
    if root is None:
        return

    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)
`,

    js: `
function inorder(root) {
  if (!root) return;

  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}
`,
  },
};

export default inorderTraversal;
