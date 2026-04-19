const preorderTraversal = {
  id: 'preorder',
  title: 'Preorder Traversal',
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
Each node is visited exactly once.

Traversal always processes every node.

Time Complexity: O(n)
Space Complexity: O(h)
      `,
    },
    average: {
      description: `
Traversal follows Root → Left → Right order.

Recursive calls depend on tree height.

Time Complexity: O(n)
Space Complexity: O(h)
      `,
    },
    worst: {
      description: `
In a skewed tree, height becomes n.

Recursive stack grows linearly.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Preorder Traversal visits nodes in Root → Left → Right order. It is useful for copying trees and prefix expression evaluation.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'For tree: [1,2,3,4,5], preorder traversal visits root first, then left subtree, then right subtree.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Visit root node'],
      },
      {
        pass: 'Step 2',
        steps: ['Traverse left subtree'],
      },
      {
        pass: 'Step 3',
        steps: ['Traverse right subtree'],
      },
      {
        pass: 'Result',
        steps: ['Traversal order: 1 → 2 → 4 → 5 → 3'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start at root',
    'Visit node',
    'Traverse left subtree',
    'Traverse right subtree',
    'Repeat recursively',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'PREORDER(node):', // 0
    '  if node == NULL:', // 1
    '    return', // 2
    '  visit node', // 3
    '  PREORDER(node.left)', // 4
    '  PREORDER(node.right)', // 5
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use preorder traversal when you need to create a copy of the tree, serialize trees, or evaluate prefix expressions.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Useful for copying trees',
    'Efficient for prefix expression evaluation',
    'Simple recursive structure',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Uses recursion stack',
    'Not sorted for BST',
    'Always visits all nodes',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Traversal order?',
      options: [
        'Left-Root-Right',
        'Root-Left-Right',
        'Right-Left-Root',
        'Level',
      ],
      answer: 1,
    },
    {
      question: 'Preorder starts with?',
      options: ['Left node', 'Right node', 'Root', 'Leaf'],
      answer: 2,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      answer: 0,
    },
    {
      question: 'Used in?',
      options: ['Sorting', 'Tree copy', 'Graph traversal', 'Hashing'],
      answer: 1,
    },
    {
      question: 'Uses?',
      options: ['Queue', 'Stack/Recursion', 'Array', 'Heap'],
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

void preorder(struct Node* root) {
    if (root == NULL) return;

    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
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

void preorder(Node* root) {
    if (!root) return;

    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}
`,

    java: `
class Node {
    int data;
    Node left, right;
}

void preorder(Node root) {
    if (root == null) return;

    System.out.print(root.data + " ");
    preorder(root.left);
    preorder(root.right);
}
`,

    python: `
def preorder(root):
    if root is None:
        return

    print(root.data, end=" ")
    preorder(root.left)
    preorder(root.right)
`,

    js: `
function preorder(root) {
  if (!root) return;

  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}
`,
  },
};

export default preorderTraversal;
