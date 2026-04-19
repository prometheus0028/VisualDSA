const queueUsingArray = {
  id: 'queue-using-array',
  title: 'Queue Using Array',
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
In the best case, both enqueue and dequeue operations take constant time.

No shifting of elements is required when using front and rear pointers.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
On average, enqueue and dequeue both operate in constant time
because elements are accessed directly using indices.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
In a simple linear queue implementation,
the worst case is still O(1) for individual operations.

However, wasted space may occur if not implemented as circular queue.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Queue is a linear data structure that follows FIFO (First In First Out). The element inserted first is the first one to be removed. When implemented using an array, we use two pointers: front and rear.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Consider a queue of size 5. Initially, front = rear = -1.',
    walkthrough: [
      {
        pass: 'Enqueue 10',
        steps: ['rear becomes 0', 'queue[0] = 10', 'front becomes 0'],
      },
      {
        pass: 'Enqueue 20',
        steps: ['rear becomes 1', 'queue[1] = 20'],
      },
      {
        pass: 'Dequeue',
        steps: ['Remove element at front', 'front becomes 1'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize queue array of size n',
    'Set front = -1 and rear = -1',
    'For Enqueue:',
    '  Check if rear == n-1 (Overflow)',
    '  If empty, set front = 0',
    '  Increment rear and insert element',
    'For Dequeue:',
    '  Check if front == -1 or front > rear (Underflow)',
    '  Return queue[front]',
    '  Increment front',
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
    '  if rear == n-1:', // 5
    '    Overflow', // 6
    '  else:', // 7
    '    if front == -1:', // 8
    '      front = 0', // 9
    '    rear = rear + 1', // 10
    '    queue[rear] = x', // 11
    '',
    'DEQUEUE():', // 13
    '  if front == -1 or front > rear:', // 14
    '    Underflow', // 15
    '  else:', // 16
    '    x = queue[front]', // 17
    '    front = front + 1', // 18
    '    return x', // 19
    '',
    'PEEK():', // 21
    '  return queue[front]', // 22
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Queues are used in scheduling systems, buffering, BFS traversal in graphs, printer task management, and handling asynchronous data streams.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple implementation',
    'Fast O(1) operations',
    'Efficient memory usage',
    'Predictable behavior',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Fixed size (unless dynamic array used)',
    'Wasted memory in linear queue',
    'Needs circular logic for optimal usage',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Queue follows which principle?',
      options: ['LIFO', 'FIFO', 'FILO', 'Random'],
      answer: 1,
    },
    {
      question: 'Overflow occurs when:',
      options: ['front == rear', 'rear == n-1', 'front == -1', 'rear == -1'],
      answer: 1,
    },
    {
      question: 'Time complexity of enqueue?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Queue is used in:',
      options: ['Recursion', 'BFS', 'Sorting', 'Hashing'],
      answer: 1,
    },
    {
      question: 'Space complexity is:',
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
    if (rear == SIZE - 1) {
        printf("Overflow\\n");
    } else {
        if (front == -1) front = 0;
        queue[++rear] = x;
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;

class Queue {
    int arr[5], front = -1, rear = -1;
public:
    void enqueue(int x) {
        if (rear == 4) cout << "Overflow";
        else {
            if (front == -1) front = 0;
            arr[++rear] = x;
        }
    }
};
`,

    java: `
class Queue {
    int[] arr = new int[5];
    int front = -1, rear = -1;

    void enqueue(int x) {
        if (rear == 4) System.out.println("Overflow");
        else {
            if (front == -1) front = 0;
            arr[++rear] = x;
        }
    }
}
`,

    python: `
class Queue:
    def __init__(self, size):
        self.queue = [None]*size
        self.front = -1
        self.rear = -1
        self.size = size

    def enqueue(self, x):
        if self.rear == self.size-1:
            print("Overflow")
        else:
            if self.front == -1:
                self.front = 0
            self.rear += 1
            self.queue[self.rear] = x
`,

    js: `
class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(x) {
    if (this.rear === this.size - 1) {
      console.log("Overflow");
    } else {
      if (this.front === -1) this.front = 0;
      this.queue[++this.rear] = x;
    }
  }
}
`,
  },
};

export default queueUsingArray;
