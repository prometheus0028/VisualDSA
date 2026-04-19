const bubbleSort = {
  id: 'bubble-sort',
  title: 'Bubble Sort',
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

Bubble Sort with optimization detects that no swaps were made in the first pass.
This allows it to terminate early.

Time Complexity: O(n)

Practical Scenario:
When data is already sorted or nearly sorted.
    `,
    },
    average: {
      description: `
The average case assumes elements are randomly distributed.

Bubble Sort performs comparisons for each pair in every pass.

Time Complexity: O(n²)

Practical Scenario:
Unordered datasets such as raw user inputs.
    `,
    },
    worst: {
      description: `
The worst case occurs when the array is completely reverse sorted.

Every comparison leads to a swap.
Maximum number of comparisons and swaps are performed.

Time Complexity: O(n²)

Practical Scenario:
Reverse ordered lists or adversarial input.
    `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    "Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. After each pass, the largest unsorted element 'bubbles up' to its correct position at the end of the array.",

  intuition:
    'Imagine pushing the largest number to the end step by step. After the first pass, the biggest element is guaranteed to be at the last index. After the second pass, the second-largest is placed correctly. This continues until the array becomes sorted.',
  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Imagine you have the list: [5, 3, 8, 1, 2] and you want to sort it in ascending order using Bubble Sort.',
    walkthrough: [
      {
        pass: 'Pass 1',
        steps: [
          'Compare 5 and 3 → swap → [3, 5, 8, 1, 2]',
          'Compare 5 and 8 → no swap → [3, 5, 8, 1, 2]',
          'Compare 8 and 1 → swap → [3, 5, 1, 8, 2]',
          'Compare 8 and 2 → swap → [3, 5, 1, 2, 8] (Largest element 8 is now in correct position)',
        ],
      },
      {
        pass: 'Pass 2',
        steps: [
          'Compare 3 and 5 → no swap',
          'Compare 5 and 1 → swap → [3, 1, 5, 2, 8]',
          'Compare 5 and 2 → swap → [3, 1, 2, 5, 8] (Second largest 5 placed correctly)',
        ],
      },
      {
        pass: 'Pass 3',
        steps: [
          'Compare 3 and 1 → swap → [1, 3, 2, 5, 8]',
          'Compare 3 and 2 → swap → [1, 2, 3, 5, 8]',
        ],
      },
      {
        pass: 'Pass 4',
        steps: ['No swaps occur → array is fully sorted.'],
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
    'Compare the current element with the next element.',
    'If current > next, swap them.',
    'Continue until the end of the array.',
    'After each pass, ignore the last sorted elements.',
    'Repeat until no swaps occur in a full pass.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'for i = 0 to n-1:',
    '  swapped = false',
    '  for j = 0 to n-i-1:',
    '    if arr[j] > arr[j+1]:',
    '      swap(arr[j], arr[j+1])',
    '      swapped = true',
    '  if swapped == false:',
    '    break',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Bubble Sort is suitable for small datasets or for educational purposes when learning sorting fundamentals. It is also useful when the array is nearly sorted, as it can terminate early in the best case.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Very simple to understand and implement',
    'Requires no extra memory (in-place sorting)',
    'Stable sorting algorithm',
    'Can detect already sorted arrays (optimized version)',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Very slow for large datasets',
    'Inefficient compared to O(n log n) algorithms',
    'High number of swaps',
    'Not used in real-world large-scale systems',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is the worst-case time complexity of Bubble Sort?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
      answer: 1,
    },
    {
      question: 'Bubble Sort is considered:',
      options: ['Stable', 'Unstable', 'Divide and Conquer', 'Greedy'],
      answer: 0,
    },
    {
      question: 'What happens after the first full pass?',
      options: [
        'Smallest element is placed first',
        'Largest element is placed last',
        'Array becomes sorted',
        'Nothing changes',
      ],
      answer: 1,
    },
    {
      question: 'Best case occurs when:',
      options: [
        'Array is reversed',
        'Array is random',
        'Array is already sorted',
        'Array has duplicates',
      ],
      answer: 2,
    },
    {
      question: 'Bubble Sort uses how much extra space?',
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

void bubbleSort(int arr[], int n) {
    int swapped;
    for(int i = 0; i < n - 1; i++) {
        swapped = 0;
        for(int j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if(swapped == 0)
            break;
    }
}
`,

    cpp: `
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    bool swapped;
    for(int i = 0; i < n - 1; i++) {
        swapped = false;
        for(int j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if(!swapped)
            break;
    }
}
`,

    java: `
public class BubbleSort {
    static void bubbleSort(int arr[]) {
        boolean swapped;
        for(int i = 0; i < arr.length - 1; i++) {
            swapped = false;
            for(int j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if(!swapped)
                break;
        }
    }
}
`,

    python: `
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
`,

    js: `
function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        let swapped = false;
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}
`,
  },
};

export default bubbleSort;
