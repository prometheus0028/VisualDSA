const mergeSort = {
  id: 'merge-sort',
  title: 'Merge Sort',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n log n)',
  best: 'O(n log n)',
  average: 'O(n log n)',
  worst: 'O(n log n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Merge Sort divides the array recursively regardless of input arrangement.

Even if the array is already sorted, it still splits and merges.

Time Complexity: O(n log n)

Practical Scenario:
Large sorted datasets still require full recursive splitting.
      `,
    },
    average: {
      description: `
The array is recursively divided into halves until single elements remain.

Merging takes linear time per level.
There are log n levels of recursion.

Total Time Complexity: O(n log n)

Practical Scenario:
Large datasets from databases, APIs, or files.
      `,
    },
    worst: {
      description: `
Even in reverse sorted input, Merge Sort performs the same number of splits and merges.

Unlike Quick Sort, it does not degrade.

Time Complexity: O(n log n)

Practical Scenario:
Adversarial input or worst-case scenarios still guarantee performance.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.',

  intuition:
    'Think of breaking a large problem into smaller problems until they are trivial to solve, then combining the solutions step by step.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us sort the array: [5, 3, 8, 1, 2] using Merge Sort.',
    walkthrough: [
      {
        pass: 'Divide Phase',
        steps: [
          'Split into [5, 3, 8] and [1, 2]',
          'Split further → [5], [3, 8], [1], [2]',
          'Split until single elements',
        ],
      },
      {
        pass: 'Merge Phase',
        steps: [
          'Merge [3] and [8] → [3, 8]',
          'Merge [5] and [3, 8] → [3, 5, 8]',
          'Merge [1] and [2] → [1, 2]',
          'Merge [3, 5, 8] and [1, 2] → [1, 2, 3, 5, 8]',
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
    'Divide the array into two halves.',
    'Recursively sort both halves.',
    'Merge the two sorted halves.',
    'Repeat until the entire array is sorted.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'mergeSort(arr):',
    '  if length <= 1: return arr',
    '  mid = length / 2',
    '  left = mergeSort(left half)',
    '  right = mergeSort(right half)',
    '  return merge(left, right)',
    '',
    'merge(left, right):',
    '  create empty result array',
    '  while both arrays not empty:',
    '    append smaller element to result',
    '  append remaining elements',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Merge Sort is ideal for large datasets, stable sorting requirements, and external sorting (e.g., files on disk). It guarantees O(n log n) performance.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Guaranteed O(n log n) performance',
    'Stable sorting algorithm',
    'Efficient for large datasets',
    'Works well for linked lists',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Requires O(n) extra space',
    'Slower than Quick Sort in practice due to memory usage',
    'Recursive overhead',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is the time complexity of Merge Sort?',
      options: ['O(n)', 'O(n²)', 'O(n log n)', 'O(log n)'],
      answer: 2,
    },
    {
      question: 'Merge Sort follows which paradigm?',
      options: [
        'Greedy',
        'Divide and Conquer',
        'Dynamic Programming',
        'Backtracking',
      ],
      answer: 1,
    },
    {
      question: 'Is Merge Sort stable?',
      options: ['Yes', 'No'],
      answer: 0,
    },
    {
      question: 'Space complexity of Merge Sort is:',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'Merge Sort is preferred for:',
      options: [
        'Small arrays only',
        'Large datasets',
        'Already sorted data',
        'Constant memory usage',
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
#include <stdlib.h>

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for(int i = 0; i < n1; i++) L[i] = arr[l + i];
    for(int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;

    while(i < n1 && j < n2) {
        if(L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }

    while(i < n1) arr[k++] = L[i++];
    while(j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if(l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
`,

    cpp: `
#include <vector>
using namespace std;

vector<int> merge(vector<int> left, vector<int> right) {
    vector<int> result;
    while(!left.empty() && !right.empty()) {
        if(left.front() <= right.front()) {
            result.push_back(left.front());
            left.erase(left.begin());
        } else {
            result.push_back(right.front());
            right.erase(right.begin());
        }
    }
    result.insert(result.end(), left.begin(), left.end());
    result.insert(result.end(), right.begin(), right.end());
    return result;
}
`,

    java: `
public class MergeSort {
    void mergeSort(int arr[], int l, int r) {
        if(l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
}
`,

    python: `
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    result = []
    while left and right:
        if left[0] <= right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))

    result.extend(left or right)
    return result
`,

    js: `
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const result = [];
    while (left.length && right.length) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }

    return [...result, ...left, ...right];
}
`,
  },
};

export default mergeSort;
