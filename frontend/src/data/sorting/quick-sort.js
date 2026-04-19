const quickSort = {
  id: 'quick-sort',
  title: 'Quick Sort',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n log n)',
  best: 'O(n log n)',
  average: 'O(n log n)',
  worst: 'O(n²)',
  space: 'O(log n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
The best case occurs when the pivot divides the array into two equal halves.

Each recursive call splits the array evenly.
There are log n levels of recursion, and each level processes n elements.

Time Complexity: O(n log n)

Practical Scenario:
Random pivot selection or well-balanced partitions.
      `,
    },
    average: {
      description: `
On average, the pivot splits the array into reasonably balanced parts.

Although not perfectly equal, the depth remains proportional to log n.

Time Complexity: O(n log n)

Practical Scenario:
Typical unsorted real-world datasets.
      `,
    },
    worst: {
      description: `
The worst case occurs when the pivot always selects the smallest or largest element.

This leads to extremely unbalanced partitions.
Recursion depth becomes n instead of log n.

Time Complexity: O(n²)

Practical Scenario:
Already sorted arrays when using naive pivot selection.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Quick Sort is a divide-and-conquer algorithm that selects a pivot element, partitions the array around the pivot, and recursively sorts the partitions.',

  intuition:
    'Imagine picking one element as a reference (pivot) and rearranging the array so that smaller elements are on the left and larger ones are on the right. Then repeat the process for each side.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us sort the array: [5, 3, 8, 1, 2] using Quick Sort.',
    walkthrough: [
      {
        pass: 'Step 1 (Choose Pivot)',
        steps: [
          'Choose last element as pivot → 2',
          'Partition array around pivot',
        ],
      },
      {
        pass: 'Partition Result',
        steps: [
          'Elements smaller than 2 → [1]',
          'Pivot → [2]',
          'Elements greater than 2 → [5, 3, 8]',
        ],
      },
      {
        pass: 'Recursive Calls',
        steps: [
          'Sort left side → already sorted [1]',
          'Sort right side [5, 3, 8]',
          'Choose 8 as pivot → partition → [3, 5, 8]',
        ],
      },
      {
        pass: 'Final Merge',
        steps: ['[1, 2, 3, 5, 8]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Choose a pivot element.',
    'Partition the array so that elements smaller than pivot go left.',
    'Place pivot in its correct position.',
    'Recursively apply Quick Sort to left subarray.',
    'Recursively apply Quick Sort to right subarray.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'quickSort(arr, low, high):',
    '  if low < high:',
    '    pi = partition(arr, low, high)',
    '    quickSort(arr, low, pi - 1)',
    '    quickSort(arr, pi + 1, high)',
    '',
    'partition(arr, low, high):',
    '  pivot = arr[high]',
    '  i = low - 1',
    '  for j = low to high - 1:',
    '    if arr[j] < pivot:',
    '      i++',
    '      swap(arr[i], arr[j])',
    '  swap(arr[i+1], arr[high])',
    '  return i + 1',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Quick Sort is widely used for in-memory sorting because of its fast average-case performance and cache efficiency. It is preferred when space efficiency is important.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Very fast in practice',
    'In-place sorting (O(log n) recursion space)',
    'Cache friendly',
    'Widely used in standard libraries',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Worst-case O(n²)',
    'Not stable by default',
    'Performance depends on pivot selection',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Quick Sort follows which paradigm?',
      options: [
        'Greedy',
        'Divide and Conquer',
        'Dynamic Programming',
        'Backtracking',
      ],
      answer: 1,
    },
    {
      question: 'Worst-case time complexity of Quick Sort is:',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      answer: 2,
    },
    {
      question: 'Quick Sort is stable by default?',
      options: ['Yes', 'No'],
      answer: 1,
    },
    {
      question: 'Quick Sort space complexity is:',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Quick Sort performance depends on:',
      options: [
        'Array size only',
        'Pivot selection',
        'Memory allocation',
        'Hardware',
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

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for(int j = low; j < high; j++) {
        if(arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if(low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
`,

    cpp: `
#include <algorithm>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for(int j = low; j < high; j++) {
        if(arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return i + 1;
}
`,

    java: `
public class QuickSort {
    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for(int j = low; j < high; j++) {
            if(arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}
`,

    python: `
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x < pivot]
    right = [x for x in arr[:-1] if x >= pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)
`,

    js: `
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.slice(0, -1).filter(x => x < pivot);
    const right = arr.slice(0, -1).filter(x => x >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}
`,
  },
};

export default quickSort;
