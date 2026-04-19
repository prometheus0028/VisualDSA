const queueUsingLinkedList = {
  id: 'queue-using-linked-list',
  title: 'Queue Using Linked List',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(1)',
  best: 'O(1)',
  average: 'O(1)',
  worst: 'O(1)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Both enqueue and dequeue operations take constant time
because we maintain front and rear pointers.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
On average, insertion and deletion are constant time
since no shifting of elements is required.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Worst case still remains constant time for each operation
because we only modify pointers.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Queue implemented using a Linked List dynamically allocates memory for each element. It avoids the fixed-size limitation of arrays and allows efficient O(1) insertion and deletion using front and rear pointers.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Initially front = rear = NULL.',
    walkthrough: [
      {
        pass: 'Enqueue 10',
        steps: ['Create new node', 'front = rear = newNode'],
      },
      {
        pass: 'Enqueue 20',
        steps: ['Create new node', 'rear.next = newNode', 'rear = newNode'],
      },
      {
        pass: 'Dequeue',
        steps: ['temp = front', 'front = front.next', 'delete temp'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create node structure (data, next)',
    'Initialize front = rear = NULL',
    'For Enqueue:',
    '  Create new node',
    '  If queue empty → front = rear = newNode',
    '  Else → rear.next = newNode, rear = newNode',
    'For Dequeue:',
    '  If front == NULL → Underflow',
    '  Else → remove node from front',
  ],

  // ===============================
  // PSEUDOCODE (0-based index)
  // ===============================
  pseudocode: [
    'Node {', // 0
    '  data', // 1
    '  next', // 2
    '}', // 3
    '',
    'front = NULL', // 5
    'rear = NULL', // 6
    '',
    'ENQUEUE(x):', // 8
    '  newNode = create node', // 9
    '  if newNode == NULL:', // 10
    '    Overflow', // 11
    '  newNode.data = x', // 12
    '  newNode.next = NULL', // 13
    '  if rear == NULL:', // 14
    '    front = rear = newNode', // 15
    '  else:', // 16
    '    rear.next = newNode', // 17
    '    rear = newNode', // 18
    '',
    'DEQUEUE():', // 20
    '  if front == NULL:', // 21
    '    Underflow', // 22
    '  else:', // 23
    '    temp = front', // 24
    '    front = front.next', // 25
    '    if front == NULL:', // 26
    '      rear = NULL', // 27
    '    delete temp', // 28
    '',
    'PEEK():', // 30
    '  return front.data', // 31
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Linked List implementation when dynamic memory allocation is required and queue size is unknown or frequently changing.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Dynamic size',
    'No overflow (until memory full)',
    'Efficient O(1) operations',
    'Better memory utilization',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Extra memory for pointers',
    'More complex than array implementation',
    'Cache performance slightly slower',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Linked list queue avoids which problem?',
      options: [
        'Overflow due to fixed size',
        'Underflow',
        'Sorting',
        'Recursion',
      ],
      answer: 0,
    },
    {
      question: 'Time complexity of enqueue?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Rear pointer is used for:',
      options: ['Deletion', 'Insertion', 'Sorting', 'Traversal'],
      answer: 1,
    },
    {
      question: 'Underflow occurs when:',
      options: ['rear == NULL', 'front == NULL', 'front > rear', 'size == 0'],
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
    struct Node* next;
};

struct Node *front = NULL, *rear = NULL;

void enqueue(int x) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = x;
    newNode->next = NULL;

    if (rear == NULL) {
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

Node* front = NULL;
Node* rear = NULL;

void enqueue(int x) {
    Node* newNode = new Node();
    newNode->data = x;
    newNode->next = NULL;

    if (rear == NULL) {
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
}
`,

    java: `
class Node {
    int data;
    Node next;
    Node(int d) { data = d; }
}

class Queue {
    Node front = null, rear = null;

    void enqueue(int x) {
        Node newNode = new Node(x);
        if (rear == null) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
    }
}
`,

    python: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.front = self.rear = None

    def enqueue(self, x):
        newNode = Node(x)
        if self.rear is None:
            self.front = self.rear = newNode
        else:
            self.rear.next = newNode
            self.rear = newNode
`,

    js: `
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(x) {
    const newNode = new Node(x);
    if (this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
}
`,
  },
};

export default queueUsingLinkedList;
