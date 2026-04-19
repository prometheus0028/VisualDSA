const priorityQueue = {
  id: 'priority-queue',
  title: 'Priority Queue (Min Heap Implementation)',
  difficulty: 'Advanced',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(log n)',
  best: 'O(1)',
  average: 'O(log n)',
  worst: 'O(log n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Best case occurs when inserting an element that does not violate heap order.

Insertion may not require swapping.

Insertion: O(1)
Deletion: O(log n)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
On average, inserting or deleting requires reheapifying.

Heapify operations take O(log n) time due to tree height.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Worst case occurs when element must travel from leaf to root
(or root to leaf) during heapify.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Priority Queue is a special type of queue where each element has a priority. Elements with higher priority are removed before elements with lower priority. It is typically implemented using a Binary Heap for efficiency.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Consider inserting elements with priorities: 5, 3, 8, 1.',
    walkthrough: [
      {
        pass: 'Insert 5',
        steps: ['Heap: [5]'],
      },
      {
        pass: 'Insert 3',
        steps: ['Insert at end → [5, 3]', 'Swap with parent → [3, 5]'],
      },
      {
        pass: 'Insert 8',
        steps: ['Heap: [3, 5, 8]'],
      },
      {
        pass: 'Insert 1',
        steps: [
          'Insert at end → [3, 5, 8, 1]',
          'Swap upward → [3, 1, 8, 5]',
          'Swap again → [1, 3, 8, 5]',
        ],
      },
      {
        pass: 'Remove Min',
        steps: [
          'Replace root with last → [5, 3, 8]',
          'Heapify down → [3, 5, 8]',
        ],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Insert element at end of heap',
    'Heapify upward to maintain heap property',
    'To remove minimum:',
    'Replace root with last element',
    'Heapify downward',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'Initialize empty heap with capacity n', // 0
    '',
    'INSERT(x):', // 2
    '  if heap size == n:', // 3
    '    Overflow', // 4
    '  add x at end', // 5
    '  i = last index', // 6
    '  while i > 0 and heap[parent(i)] > heap[i]:', // 7
    '    swap heap[i] and heap[parent(i)]', // 8
    '    i = parent(i)', // 9
    '',
    'REMOVE_MIN():', // 11
    '  if heap empty:', // 12
    '    Underflow', // 13
    '  root = heap[0]', // 14
    '  heap[0] = last element', // 15
    '  remove last element', // 16
    '  heapifyDown(0)', // 17
    '  return root', // 18
    '',
    'HEAPIFY_DOWN(i):', // 20
    '  smallest = i', // 21
    '  if left child < heap[smallest]:', // 22
    '    smallest = left child', // 23
    '  if right child < heap[smallest]:', // 24
    '    smallest = right child', // 25
    '  if smallest != i:', // 26
    '    swap heap[i] and heap[smallest]', // 27
    '    heapifyDown(smallest)', // 28
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Priority Queue is used in Dijkstra’s Algorithm, Prim’s Algorithm, CPU scheduling, event-driven simulation, and task scheduling systems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient priority-based removal',
    'Used in graph algorithms',
    'Guaranteed O(log n) operations',
    'Well-suited for scheduling systems',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'More complex than simple queue',
    'Requires heap maintenance',
    'Not stable by default',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Priority Queue is commonly implemented using:',
      options: ['Array', 'Stack', 'Binary Heap', 'Linked List'],
      answer: 2,
    },
    {
      question: 'Time complexity of insert?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'Heap height is:',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Priority Queue is used in:',
      options: [
        'Bubble Sort',
        'Dijkstra Algorithm',
        'Binary Search',
        'Selection Sort',
      ],
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
#define SIZE 100

int heap[SIZE];
int size = 0;

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void insert(int x) {
    heap[size] = x;
    int i = size;
    size++;

    while (i > 0 && heap[(i - 1) / 2] > heap[i]) {
        swap(&heap[i], &heap[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}
`,

    cpp: `
#include <queue>
using namespace std;

int main() {
    priority_queue<int, vector<int>, greater<int>> pq;
    pq.push(5);
    pq.push(3);
    pq.push(8);
    pq.pop();
}
`,

    java: `
import java.util.PriorityQueue;

public class PQExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(5);
        pq.add(3);
        pq.add(8);
        pq.poll();
    }
}
`,

    python: `
import heapq

pq = []
heapq.heappush(pq, 5)
heapq.heappush(pq, 3)
heapq.heappush(pq, 8)
heapq.heappop(pq)
`,

    js: `
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[Math.floor((index - 1) / 2)] > this.heap[index]
    ) {
      [this.heap[index], this.heap[Math.floor((index - 1) / 2)]] =
      [this.heap[Math.floor((index - 1) / 2)], this.heap[index]];
      index = Math.floor((index - 1) / 2);
    }
  }
}
`,
  },
};

export default priorityQueue;
