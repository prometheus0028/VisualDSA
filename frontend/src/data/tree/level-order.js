const levelOrderTraversal = {
  id: 'level-order',
  title: 'Level Order Traversal',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n)',
  best: 'O(n)',
  average: 'O(n)',
  worst: 'O(n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Each node is visited exactly once.

Traversal uses a queue to process nodes level by level.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
All nodes are processed using a queue.

Queue size depends on tree width.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
In worst case (complete binary tree),
queue stores maximum nodes at last level.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Level Order Traversal (Breadth First Search) visits nodes level by level from left to right using a queue.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'For tree: [1,2,3,4,5], nodes are visited level by level.',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Start with root (1)'],
      },
      {
        pass: 'Step 2',
        steps: ['Visit children (2, 3)'],
      },
      {
        pass: 'Step 3',
        steps: ['Visit next level (4, 5)'],
      },
      {
        pass: 'Result',
        steps: ['Traversal order: 1 → 2 → 3 → 4 → 5'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create a queue',
    'Insert root node into queue',
    'While queue is not empty:',
    '  Remove front node',
    '  Visit node',
    '  Add left child if exists',
    '  Add right child if exists',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'LEVEL_ORDER(root):', // 0
    '  if root == NULL:', // 1
    '    return', // 2
    '  create empty queue', // 3
    '  enqueue(root)', // 4
    '  while queue not empty:', // 5
    '    node = dequeue()', // 6
    '    visit node', // 7
    '    if node.left:', // 8
    '      enqueue(node.left)', // 9
    '    if node.right:', // 10
    '      enqueue(node.right)', // 11
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use level order traversal for shortest path in trees, BFS problems, printing tree level-wise, and serialization of trees.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Processes nodes level by level',
    'Useful for BFS problems',
    'Finds shortest path in unweighted trees',
    'Easy to implement using queue',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires extra space for queue',
    'May consume more memory for wide trees',
    'Not recursive like DFS',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Level order uses?',
      options: ['Stack', 'Queue', 'Array', 'Recursion'],
      answer: 1,
    },
    {
      question: 'Traversal type?',
      options: ['DFS', 'BFS', 'Greedy', 'DP'],
      answer: 1,
    },
    {
      question: 'Time complexity?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      answer: 0,
    },
    {
      question: 'First node visited?',
      options: ['Leaf', 'Root', 'Middle', 'Last'],
      answer: 1,
    },
    {
      question: 'Space complexity?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
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

struct Queue {
    struct Node* arr[100];
    int front, rear;
};

void enqueue(struct Queue* q, struct Node* node) {
    q->arr[++q->rear] = node;
}

struct Node* dequeue(struct Queue* q) {
    return q->arr[++q->front];
}

int isEmpty(struct Queue* q) {
    return q->front == q->rear;
}

void levelOrder(struct Node* root) {
    if (root == NULL) return;

    struct Queue q;
    q.front = q.rear = -1;

    enqueue(&q, root);

    while (!isEmpty(&q)) {
        struct Node* node = dequeue(&q);
        printf("%d ", node->data);

        if (node->left)
            enqueue(&q, node->left);

        if (node->right)
            enqueue(&q, node->right);
    }
}
`,

    cpp: `
#include <iostream>
#include <queue>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

void levelOrder(Node* root) {
    if (!root) return;

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* node = q.front();
        q.pop();

        cout << node->data << " ";

        if (node->left) q.push(node->left);
        if (node->right) q.push(node->right);
    }
}
`,

    java: `
import java.util.*;

class Node {
    int data;
    Node left, right;
}

void levelOrder(Node root) {
    if (root == null) return;

    Queue<Node> q = new LinkedList<>();
    q.add(root);

    while (!q.isEmpty()) {
        Node node = q.poll();
        System.out.print(node.data + " ");

        if (node.left != null) q.add(node.left);
        if (node.right != null) q.add(node.right);
    }
}
`,

    python: `
from collections import deque

def level_order(root):
    if not root:
        return

    q = deque([root])

    while q:
        node = q.popleft()
        print(node.data, end=" ")

        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
`,

    js: `
function levelOrder(root) {
  if (!root) return;

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    console.log(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
`,
  },
};

export default levelOrderTraversal;
