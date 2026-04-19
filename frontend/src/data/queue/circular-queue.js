const circularQueue = {
  id: 'circular-queue',
  title: 'Circular Queue',
  difficulty: 'Intermediate',

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
Enqueue and Dequeue operations take constant time.

Circular Queue avoids wasted space by wrapping around.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
On average, all operations are constant time
since elements are accessed directly via index.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Worst case for each individual operation remains constant.

Circular nature prevents unused space issues.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Circular Queue is a linear data structure that connects the last position back to the first position to make a circle. It solves the memory wastage problem of linear queues by reusing empty spaces.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Consider a circular queue of size 5.',
    walkthrough: [
      {
        pass: 'Initial State',
        steps: ['front = rear = -1'],
      },
      {
        pass: 'Enqueue 10',
        steps: ['front = rear = 0', 'queue[0] = 10'],
      },
      {
        pass: 'Enqueue 20',
        steps: ['rear = (rear + 1) % n', 'queue[1] = 20'],
      },
      {
        pass: 'Dequeue',
        steps: ['Remove element at front', 'front = (front + 1) % n'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize queue array of size n',
    'Set front = rear = -1',
    'For Enqueue:',
    '  Check if (rear + 1) % n == front (Overflow)',
    '  If empty, set front = rear = 0',
    '  Else rear = (rear + 1) % n',
    '  Insert element',
    'For Dequeue:',
    '  If front == -1 (Underflow)',
    '  If front == rear → reset to -1',
    '  Else front = (front + 1) % n',
  ],

  // ===============================
  // PSEUDOCODE (0-based index)
  // ===============================
  pseudocode: [
    'Initialize queue array of size n', // 0
    'front = -1', // 1
    'rear = -1', // 2
    '',
    'ENQUEUE(x):', // 4
    '  if (rear + 1) % n == front:', // 5
    '    Overflow', // 6
    '  else if front == -1:', // 7
    '    front = rear = 0', // 8
    '  else:', // 9
    '    rear = (rear + 1) % n', // 10
    '  queue[rear] = x', // 11
    '',
    'DEQUEUE():', // 13
    '  if front == -1:', // 14
    '    Underflow', // 15
    '  else if front == rear:', // 16
    '    front = rear = -1', // 17
    '  else:', // 18
    '    front = (front + 1) % n', // 19
    '',
    'PEEK():', // 21
    '  return queue[front]', // 22
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Circular Queue is used in CPU scheduling, buffering systems, streaming data, and real-time systems where memory efficiency is critical.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient memory utilization',
    'Avoids memory wastage',
    'Constant time operations',
    'Ideal for cyclic processes',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Slightly more complex logic',
    'Modulo arithmetic required',
    'Harder to debug than linear queue',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Circular queue solves which issue?',
      options: ['Overflow', 'Underflow', 'Memory wastage', 'Recursion'],
      answer: 2,
    },
    {
      question: 'Full condition is:',
      options: [
        'rear == n-1',
        'front == -1',
        '(rear + 1) % n == front',
        'rear == front',
      ],
      answer: 2,
    },
    {
      question: 'Time complexity of enqueue?',
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'Circular queue uses which operator?',
      options: ['+', '-', '%', '*'],
      answer: 2,
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
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int x) {
    if ((rear + 1) % SIZE == front) {
        printf("Overflow\\n");
    } else {
        if (front == -1)
            front = rear = 0;
        else
            rear = (rear + 1) % SIZE;

        queue[rear] = x;
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;

class CircularQueue {
    int arr[5];
    int front = -1, rear = -1;
public:
    void enqueue(int x) {
        if ((rear + 1) % 5 == front)
            cout << "Overflow";
        else {
            if (front == -1)
                front = rear = 0;
            else
                rear = (rear + 1) % 5;

            arr[rear] = x;
        }
    }
};
`,

    java: `
class CircularQueue {
    int[] arr = new int[5];
    int front = -1, rear = -1;

    void enqueue(int x) {
        if ((rear + 1) % 5 == front)
            System.out.println("Overflow");
        else {
            if (front == -1)
                front = rear = 0;
            else
                rear = (rear + 1) % 5;

            arr[rear] = x;
        }
    }
}
`,

    python: `
class CircularQueue:
    def __init__(self, size):
        self.queue = [None]*size
        self.front = -1
        self.rear = -1
        self.size = size

    def enqueue(self, x):
        if (self.rear + 1) % self.size == self.front:
            print("Overflow")
        else:
            if self.front == -1:
                self.front = self.rear = 0
            else:
                self.rear = (self.rear + 1) % self.size

            self.queue[self.rear] = x
`,

    js: `
class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(x) {
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Overflow");
    } else {
      if (this.front === -1)
        this.front = this.rear = 0;
      else
        this.rear = (this.rear + 1) % this.size;

      this.queue[this.rear] = x;
    }
  }
}
`,
  },
};

export default circularQueue;
