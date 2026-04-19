const postorderTraversal = {
  id: 'postorder',
  title: 'Postorder Traversal',
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

Traversal cannot skip nodes.

Time Complexity: O(n)
Space Complexity: O(h)
      `,
    },
    average: {
      description: `
Traversal follows Left → Right → Root order.

Recursive calls depend on tree height.

Time Complexity: O(n)
Space Complexity: O(h)
      `,
    },
    worst: {
      description: `
In skewed trees, height becomes n.

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
    'Postorder Traversal visits nodes in Left → Right → Root order. It is commonly used for deleting trees and evaluating postfix expressions.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'For tree: [1,2,3,4,5], postorder traversal visits left subtree, then right subtree, then root.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Traverse left subtree'],
      },
      {
        pass: 'Step 2',
        steps: ['Traverse right subtree'],
      },
      {
        pass: 'Step 3',
        steps: ['Visit root node'],
      },
      {
        pass: 'Result',
        steps: ['Traversal order: 4 → 5 → 2 → 3 → 1'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start at root',
    'Traverse left subtree',
    'Traverse right subtree',
    'Visit node',
    'Repeat recursively',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'POSTORDER(node):', // 0
    '  if node == NULL:', // 1
    '    return', // 2
    '  POSTORDER(node.left)', // 3
    '  POSTORDER(node.right)', // 4
    '  visit node', // 5
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use postorder traversal when deleting trees, freeing memory, or evaluating postfix expressions.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Useful for deleting trees safely',
    'Used in postfix expression evaluation',
    'Processes children before parent',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Uses recursion stack',
    'Not sorted in BST',
    'Always visits all nodes',
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
        'Left-Right-Root',
        'Level',
      ],
      answer: 2,
    },
    {
      question: 'Postorder ends with?',
      options: ['Left node', 'Right node', 'Root', 'Leaf'],
      answer: 2,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      answer: 0,
    },
    {
      question: 'Used for?',
      options: ['Sorting', 'Tree deletion', 'Searching', 'Hashing'],
      answer: 1,
    },
    {
      question: 'Traversal uses?',
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

void postorder(struct Node* root) {
    if (root == NULL) return;

    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
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

void postorder(Node* root) {
    if (!root) return;

    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}
`,

    java: `
class Node {
    int data;
    Node left, right;
}

void postorder(Node root) {
    if (root == null) return;

    postorder(root.left);
    postorder(root.right);
    System.out.print(root.data + " ");
}
`,

    python: `
def postorder(root):
    if root is None:
        return

    postorder(root.left)
    postorder(root.right)
    print(root.data, end=" ")
`,

    js: `
function postorder(root) {
  if (!root) return;

  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
}
`,
  },
};

export default postorderTraversal;
