const heap = {
  id: 'heap',
  title: 'Binary Heap (Min Heap)',
  difficulty: 'Intermediate',

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
Accessing the root element (minimum) takes constant time.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
Insertion and deletion require heapify operations.

These take logarithmic time due to tree height.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Heap operations like insert/delete require full traversal to root/leaf.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Binary Heap is a complete binary tree where each node satisfies the heap property. In a Min Heap, parent nodes are smaller than their children.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Insert values [10, 5, 20, 2]',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Insert 10 → Root'],
      },
      {
        pass: 'Step 2',
        steps: ['Insert 5 → swap with 10 (heapify up)'],
      },
      {
        pass: 'Step 3',
        steps: ['Insert 20 → no swap needed'],
      },
      {
        pass: 'Step 4',
        steps: ['Insert 2 → move up to root'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Insert element at end',
    'Heapify up (compare with parent)',
    'Swap if needed',
    '',
    'For delete:',
    'Replace root with last element',
    'Heapify down',
    'Swap with smaller child',
  ],

  // ===============================
  // PSEUDOCODE (ENGINE IMPORTANT)
  // ===============================
  pseudocode: [
    'INSERT(x):', // 0
    '  add x to end', // 1
    '  i = last index', // 2
    '  while i > 0 and parent > arr[i]:', // 3
    '    swap(parent, arr[i])', // 4
    '    i = parent index', // 5
    '',
    'DELETE_MIN():', // 7
    '  replace root with last element', // 8
    '  remove last element', // 9
    '  i = 0', // 10
    '  while child exists:', // 11
    '    find smaller child', // 12
    '    if arr[i] > child:', // 13
    '      swap', // 14
    '      i = child index', // 15
    '    else break', // 16
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use heaps in priority queues, scheduling systems, Dijkstra’s algorithm, and whenever minimum/maximum element retrieval is required efficiently.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient priority queue implementation',
    'Fast insert and delete (O(log n))',
    'Complete binary tree (compact)',
    'Easy array implementation',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Not sorted structure',
    'Search is O(n)',
    'Less flexible than BST',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Heap is?',
      options: ['BST', 'Complete Binary Tree', 'Graph', 'Stack'],
      answer: 1,
    },
    {
      question: 'Min heap root contains?',
      options: ['Max', 'Min', 'Random', 'Leaf'],
      answer: 1,
    },
    {
      question: 'Insert complexity?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'Heap uses?',
      options: ['Array', 'Linked list', 'Stack', 'Queue'],
      answer: 0,
    },
    {
      question: 'Heap property?',
      options: [
        'Sorted order',
        'Parent smaller than children',
        'Random',
        'Balanced only',
      ],
      answer: 1,
    },
  ],
  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

void heapifyUp(int arr[], int i) {
    while (i > 0 && arr[(i - 1) / 2] > arr[i]) {
        int temp = arr[i];
        arr[i] = arr[(i - 1) / 2];
        arr[(i - 1) / 2] = temp;
        i = (i - 1) / 2;
    }
}

void heapifyDown(int arr[], int n, int i) {
    int smallest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;

    if (left < n && arr[left] < arr[smallest])
        smallest = left;

    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        int temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        heapifyDown(arr, n, smallest);
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;

void heapifyUp(vector<int>& arr, int i) {
    while (i > 0 && arr[(i - 1) / 2] > arr[i]) {
        swap(arr[i], arr[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

void heapifyDown(vector<int>& arr, int i) {
    int smallest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;

    if (left < arr.size() && arr[left] < arr[smallest])
        smallest = left;

    if (right < arr.size() && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        swap(arr[i], arr[smallest]);
        heapifyDown(arr, smallest);
    }
}
`,

    java: `
void heapifyUp(int[] arr, int i) {
    while (i > 0 && arr[(i - 1) / 2] > arr[i]) {
        int temp = arr[i];
        arr[i] = arr[(i - 1) / 2];
        arr[(i - 1) / 2] = temp;
        i = (i - 1) / 2;
    }
}

void heapifyDown(int[] arr, int n, int i) {
    int smallest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;

    if (left < n && arr[left] < arr[smallest])
        smallest = left;

    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        int temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        heapifyDown(arr, n, smallest);
    }
}
`,

    python: `
def heapify_up(arr, i):
    while i > 0 and arr[(i - 1)//2] > arr[i]:
        arr[i], arr[(i - 1)//2] = arr[(i - 1)//2], arr[i]
        i = (i - 1)//2

def heapify_down(arr, i):
    smallest = i
    left = 2*i + 1
    right = 2*i + 2

    if left < len(arr) and arr[left] < arr[smallest]:
        smallest = left

    if right < len(arr) and arr[right] < arr[smallest]:
        smallest = right

    if smallest != i:
        arr[i], arr[smallest] = arr[smallest], arr[i]
        heapify_down(arr, smallest)
`,

    js: `
function heapifyUp(arr, i) {
  while (i > 0 && arr[Math.floor((i - 1) / 2)] > arr[i]) {
    [arr[i], arr[Math.floor((i - 1) / 2)]] =
      [arr[Math.floor((i - 1) / 2)], arr[i]];
    i = Math.floor((i - 1) / 2);
  }
}

function heapifyDown(arr, i) {
  let smallest = i;
  let left = 2*i + 1;
  let right = 2*i + 2;

  if (left < arr.length && arr[left] < arr[smallest])
    smallest = left;

  if (right < arr.length && arr[right] < arr[smallest])
    smallest = right;

  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapifyDown(arr, smallest);
  }
}
`,
  },
};

export default heap;
