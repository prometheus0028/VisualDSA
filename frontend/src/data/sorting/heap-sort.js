const heapSort = {
  id: 'heap-sort',
  title: 'Heap Sort',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n log n)',
  best: 'O(n log n)',
  average: 'O(n log n)',
  worst: 'O(n log n)',
  space: 'O(1)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Heap Sort first builds a max heap in O(n) time.
Then it repeatedly extracts the maximum element and heapifies.

Even if the array is already sorted, heap construction and heapify operations still occur.

Time Complexity: O(n log n)

Practical Scenario:
Sorted datasets still require heap restructuring.
      `,
    },
    average: {
      description: `
Heap Sort builds a heap and performs heapify for each extraction.

There are n extractions.
Each heapify takes O(log n).

Total Time Complexity: O(n log n)

Practical Scenario:
General unsorted datasets or large in-memory arrays.
      `,
    },
    worst: {
      description: `
Heap Sort always performs heapify operations for every element.

Unlike Quick Sort, its performance does not degrade.

Time Complexity: O(n log n)

Practical Scenario:
Reverse sorted or adversarial input still guarantees performance.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It first builds a max heap and then repeatedly extracts the largest element to sort the array.',

  intuition:
    'Imagine building a tournament tree where the largest element is always at the top. You repeatedly remove the winner and rebuild the tournament until the array is sorted.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us sort the array: [5, 3, 8, 1, 2] using Heap Sort.',
    walkthrough: [
      {
        pass: 'Build Max Heap',
        steps: [
          'Convert array into max heap → [8, 3, 5, 1, 2]',
          'Largest element 8 is now root',
        ],
      },
      {
        pass: 'Extract Maximum',
        steps: [
          'Swap 8 with last element → [2, 3, 5, 1, 8]',
          'Heapify remaining elements → [5, 3, 2, 1, 8]',
        ],
      },
      {
        pass: 'Repeat Extraction',
        steps: [
          'Swap 5 with last unsorted element → [1, 3, 2, 5, 8]',
          'Heapify → [3, 1, 2, 5, 8]',
        ],
      },
      {
        pass: 'Continue Process',
        steps: [
          'Swap 3 → heapify → [2, 1, 3, 5, 8]',
          'Swap 2 → heapify → [1, 2, 3, 5, 8]',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['[1, 2, 3, 5, 8]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Build a max heap from the array.',
    'Swap the root (largest element) with the last element.',
    'Reduce heap size by one.',
    'Heapify the root to maintain heap property.',
    'Repeat until heap size becomes 1.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'heapSort(arr):',
    '  buildMaxHeap(arr)',
    '  for i = n-1 down to 1:',
    '    swap(arr[0], arr[i])',
    '    heapify(arr, 0, i)',
    '',
    'heapify(arr, i, size):',
    '  largest = i',
    '  left = 2*i + 1',
    '  right = 2*i + 2',
    '  if left < size and arr[left] > arr[largest]:',
    '    largest = left',
    '  if right < size and arr[right] > arr[largest]:',
    '    largest = right',
    '  if largest != i:',
    '    swap(arr[i], arr[largest])',
    '    heapify(arr, largest, size)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Heap Sort is ideal when guaranteed O(n log n) performance is required and extra memory must be minimized. It is often used in priority queue implementations.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Guaranteed O(n log n)',
    'In-place sorting',
    'Does not degrade to O(n²)',
    'Efficient for large datasets',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Not stable',
    'Slower than Quick Sort in practice',
    'Less cache-friendly',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Heap Sort uses which data structure?',
      options: ['Stack', 'Queue', 'Binary Heap', 'Graph'],
      answer: 2,
    },
    {
      question: 'Time complexity of Heap Sort is:',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      answer: 1,
    },
    {
      question: 'Heap Sort is stable?',
      options: ['Yes', 'No'],
      answer: 1,
    },
    {
      question: 'Heap Sort space complexity is:',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 0,
    },
    {
      question: 'Heap Sort guarantees performance regardless of:',
      options: ['Input size', 'Input order', 'Memory', 'Hardware'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;

    if(left < n && arr[left] > arr[largest])
        largest = left;

    if(right < n && arr[right] > arr[largest])
        largest = right;

    if(largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for(int i = n/2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for(int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}
`,

    cpp: `
#include <algorithm>
using namespace std;

void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;

    if(left < n && arr[left] > arr[largest])
        largest = left;

    if(right < n && arr[right] > arr[largest])
        largest = right;

    if(largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}
`,

    java: `
public class HeapSort {
    void heapify(int arr[], int n, int i) {
        int largest = i;
        int left = 2*i + 1;
        int right = 2*i + 2;

        if(left < n && arr[left] > arr[largest])
            largest = left;

        if(right < n && arr[right] > arr[largest])
            largest = right;

        if(largest != i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            heapify(arr, n, largest);
        }
    }
}
`,

    python: `
def heapify(arr, n, i):
    largest = i
    left = 2*i + 1
    right = 2*i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    for i in range(n//2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
`,

    js: `
function heapSort(arr) {
    const n = arr.length;

    function heapify(n, i) {
        let largest = i;
        const left = 2*i + 1;
        const right = 2*i + 2;

        if(left < n && arr[left] > arr[largest])
            largest = left;

        if(right < n && arr[right] > arr[largest])
            largest = right;

        if(largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(n, largest);
        }
    }

    for(let i = Math.floor(n/2) - 1; i >= 0; i--)
        heapify(n, i);

    for(let i = n-1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(i, 0);
    }

    return arr;
}
`,
  },
};

export default heapSort;
