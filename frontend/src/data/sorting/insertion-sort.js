const insertionSort = {
  id: 'insertion-sort',
  title: 'Insertion Sort',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n²)',
  best: 'O(n)',
  average: 'O(n²)',
  worst: 'O(n²)',
  space: 'O(1)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
The best case occurs when the array is already sorted.

In this scenario, each element is compared once and no shifting occurs.

Time Complexity: O(n)

Practical Scenario:
Nearly sorted datasets such as live-updating logs or incremental data.
      `,
    },
    average: {
      description: `
The average case assumes elements are randomly distributed.

Each element may need to shift multiple positions before finding its correct place.

Time Complexity: O(n²)

Practical Scenario:
Randomly ordered user input or general unsorted datasets.
      `,
    },
    worst: {
      description: `
The worst case occurs when the array is reverse sorted.

Each new element must be compared and shifted all the way to the beginning.

Time Complexity: O(n²)

Practical Scenario:
Reverse sorted data or adversarial inputs.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Insertion Sort builds the sorted array one element at a time. It picks the next element and inserts it into its correct position among previously sorted elements.',

  intuition:
    'Think of arranging playing cards in your hand. You pick one card at a time and place it in the correct position relative to already arranged cards.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Suppose we want to sort the array: [5, 3, 8, 1, 2] using Insertion Sort.',
    walkthrough: [
      {
        pass: 'Pass 1',
        steps: [
          'Key = 3',
          'Compare 3 with 5 → shift 5 right',
          'Insert 3 at correct position → [3, 5, 8, 1, 2]',
        ],
      },
      {
        pass: 'Pass 2',
        steps: [
          'Key = 8',
          'Compare 8 with 5 → no shift needed',
          'Array remains → [3, 5, 8, 1, 2]',
        ],
      },
      {
        pass: 'Pass 3',
        steps: [
          'Key = 1',
          'Shift 8 → Shift 5 → Shift 3',
          'Insert 1 at beginning → [1, 3, 5, 8, 2]',
        ],
      },
      {
        pass: 'Pass 4',
        steps: [
          'Key = 2',
          'Shift 8 → Shift 5 → Shift 3',
          'Insert 2 after 1 → [1, 2, 3, 5, 8]',
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
    'Start from the second element (index 1).',
    'Select the current element as key.',
    'Compare the key with elements before it.',
    'Shift elements greater than key to the right.',
    'Insert the key into its correct position.',
    'Repeat until the array is sorted.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'for i = 1 to n-1:',
    '  key = arr[i]',
    '  j = i - 1',
    '  while j >= 0 and arr[j] > key:',
    '    arr[j+1] = arr[j]',
    '    j = j - 1',
    '  arr[j+1] = key',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Insertion Sort is ideal for small datasets or nearly sorted arrays. It performs efficiently when the number of inversions is small.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Efficient for small datasets',
    'Adaptive (fast for nearly sorted data)',
    'Stable sorting algorithm',
    'In-place sorting (O(1) extra space)',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Inefficient for large datasets',
    'Worst-case time complexity is O(n²)',
    'Many shifts required in reverse sorted data',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is the best-case time complexity of Insertion Sort?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
      answer: 0,
    },
    {
      question: 'Insertion Sort is stable?',
      options: ['Yes', 'No'],
      answer: 0,
    },
    {
      question: 'Insertion Sort is efficient when:',
      options: [
        'Array is nearly sorted',
        'Array is large',
        'Array is reverse sorted',
        'Array contains duplicates',
      ],
      answer: 0,
    },
    {
      question: 'Insertion Sort works by:',
      options: [
        'Dividing array into halves',
        'Selecting minimum each time',
        'Inserting elements into sorted portion',
        'Using heap structure',
      ],
      answer: 2,
    },
    {
      question: 'Space complexity of Insertion Sort is:',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

void insertionSort(int arr[], int n) {
    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for(int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}
`,

    java: `
public class InsertionSort {
    static void insertionSort(int arr[]) {
        for(int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;

            while(j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }
}
`,

    python: `
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key
`,

    js: `
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
}
`,
  },
};

export default insertionSort;
