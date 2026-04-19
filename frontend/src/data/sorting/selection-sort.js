const selectionSort = {
  id: 'selection-sort',
  title: 'Selection Sort',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n²)',
  best: 'O(n²)',
  average: 'O(n²)',
  worst: 'O(n²)',
  space: 'O(1)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
The best case occurs even if the array is already sorted.

Unlike Bubble Sort, Selection Sort still scans the entire unsorted portion 
to find the minimum element for each pass.

No early termination happens.

Time Complexity: O(n²)

Practical Scenario:
Even if data is sorted, Selection Sort will still perform all comparisons.
    `,
    },

    average: {
      description: `
The average case assumes elements are randomly distributed.

Selection Sort always performs the same number of comparisons 
regardless of input arrangement.

Number of comparisons ≈ n(n-1)/2.

Time Complexity: O(n²)

Practical Scenario:
Random user input, unsorted datasets, or arbitrary ordering.
    `,
    },

    worst: {
      description: `
The worst case occurs when the array is reverse sorted.

However, the number of comparisons remains the same as best and average case.
Only the number of swaps may differ.

Time Complexity: O(n²)

Practical Scenario:
Reverse sorted data or adversarial input.
    `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Selection Sort is a simple comparison-based sorting algorithm that repeatedly selects the smallest element from the unsorted portion of the array and places it at the beginning. It divides the array into a sorted and an unsorted region.',

  intuition:
    'Imagine arranging cards in your hand. You repeatedly pick the smallest card from the remaining pile and place it at the front. After each pass, one more element is correctly positioned.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Suppose we have the list: [5, 3, 8, 1, 2] and we want to sort it in ascending order using Selection Sort.',
    walkthrough: [
      {
        pass: 'Pass 1',
        steps: [
          'Find smallest element in entire array → 1',
          'Swap 5 and 1 → [1, 3, 8, 5, 2]',
        ],
      },
      {
        pass: 'Pass 2',
        steps: [
          'Find smallest element from index 1 onwards → 2',
          'Swap 3 and 2 → [1, 2, 8, 5, 3]',
        ],
      },
      {
        pass: 'Pass 3',
        steps: [
          'Find smallest element from index 2 onwards → 3',
          'Swap 8 and 3 → [1, 2, 3, 5, 8]',
        ],
      },
      {
        pass: 'Pass 4',
        steps: [
          'Find smallest element from index 3 onwards → 5',
          'Already in correct position → No swap needed',
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
    'Start from index 0.',
    'Assume the first element is the minimum.',
    'Compare it with the remaining elements.',
    'Update the minimum index if a smaller element is found.',
    'Swap the minimum element with the first unsorted element.',
    'Repeat for the rest of the array.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'for i = 0 to n-1:',
    '  minIndex = i',
    '  for j = i+1 to n:',
    '    if arr[j] < arr[minIndex]:',
    '      minIndex = j',
    '  if minIndex != i:',
    '    swap(arr[i], arr[minIndex])',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Selection Sort is useful when memory writes are costly because it performs at most n swaps. It is suitable for small datasets and educational purposes.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple and easy to implement',
    'Performs fewer swaps compared to Bubble Sort',
    'In-place sorting (O(1) extra space)',
    'Works well for small datasets',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Inefficient for large datasets',
    'Always O(n²), even in best case',
    'Not stable (by default)',
    'Slower than O(n log n) algorithms',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is the best-case time complexity of Selection Sort?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
      answer: 1,
    },
    {
      question: 'How many swaps does Selection Sort perform at most?',
      options: ['n', 'n²', 'log n', '1'],
      answer: 0,
    },
    {
      question: 'Selection Sort is stable by default?',
      options: ['Yes', 'No'],
      answer: 1,
    },
    {
      question: 'Selection Sort divides the array into:',
      options: [
        'Sorted and Unsorted regions',
        'Left and Right halves',
        'Buckets',
        'Tree nodes',
      ],
      answer: 0,
    },
    {
      question: 'Selection Sort is most efficient when:',
      options: [
        'Dataset is large',
        'Dataset is small',
        'Dataset is random',
        'Dataset is sorted',
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

void selectionSort(int arr[], int n) {
    for(int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for(int j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex != i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for(int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for(int j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex != i) {
            swap(arr[i], arr[minIndex]);
        }
    }
}
`,

    java: `
public class SelectionSort {
    static void selectionSort(int arr[]) {
        for(int i = 0; i < arr.length - 1; i++) {
            int minIndex = i;
            for(int j = i + 1; j < arr.length; j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if(minIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
}
`,

    python: `
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
`,

    js: `
function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
`,
  },
};

export default selectionSort;
