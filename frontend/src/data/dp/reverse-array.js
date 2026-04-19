const reverseArray = {
  id: 'reverse-array',
  title: 'Reverse Array',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n)',
  best: 'O(n)',
  average: 'O(n)',
  worst: 'O(n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Reversing an array always requires visiting half of the elements.

Each recursive call swaps two elements and moves inward.

Time Complexity: O(n)
Space Complexity: O(n) due to recursion stack.

Practical Scenario:
Reversing small arrays or learning recursion fundamentals.
      `,
    },
    average: {
      description: `
The recursion proceeds by swapping elements from both ends toward the center.

Each element is touched once.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Used in string reversal, array manipulation, and basic recursion exercises.
      `,
    },
    worst: {
      description: `
Worst case is same as average since all elements must be processed.

The recursion depth is n/2, but still linear.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Large arrays where recursion depth may impact stack usage.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Reverse array using recursion swaps elements from the beginning and end, then recursively processes the remaining subarray until the pointers meet or cross.',

  intuition:
    'Think of reversing like folding the array from both ends inward. Swap first and last, then move inward and repeat until the center is reached.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us reverse the array [1, 2, 3, 4, 5].',
    walkthrough: [
      {
        pass: 'Initial Array',
        steps: ['[1, 2, 3, 4, 5]'],
      },
      {
        pass: 'Step 1',
        steps: ['Swap index 0 and 4 → [5, 2, 3, 4, 1]'],
      },
      {
        pass: 'Step 2',
        steps: ['Swap index 1 and 3 → [5, 4, 3, 2, 1]'],
      },
      {
        pass: 'Base Case',
        steps: ['Middle element reached → stop recursion'],
      },
      {
        pass: 'Final Result',
        steps: ['[5, 4, 3, 2, 1]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize two pointers: start = 0, end = n-1.',
    'Swap elements at start and end.',
    'Move start forward and end backward.',
    'Repeat recursively until start >= end.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION reverse(arr, start, end):',
    '  IF start >= end:',
    '    RETURN',
    '  swap(arr[start], arr[end])',
    '  reverse(arr, start+1, end-1)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used for reversing arrays, strings, and demonstrating two-pointer recursion techniques. Useful in problems involving symmetry or reversing data structures.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple and intuitive approach',
    'In-place reversal (no extra array needed)',
    'Good demonstration of recursion with two pointers',
    'Efficient with linear time complexity',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Uses recursion stack space',
    'Less efficient than iterative approach for large inputs',
    'Risk of stack overflow for very large arrays',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is the stopping condition?',
      options: ['start == end', 'start >= end', 'end == 0', 'start == 0'],
      answer: 1,
    },
    {
      question: 'Time complexity of reversing an array?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      answer: 0,
    },
    {
      question: 'Space complexity in recursion?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'How many swaps are needed?',
      options: ['n', 'n/2', 'log n', 'n²'],
      answer: 1,
    },
    {
      question: 'Which technique is used?',
      options: [
        'Divide and conquer',
        'Two pointers',
        'Greedy',
        'Dynamic programming',
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

void reverse(int arr[], int start, int end) {
    if (start >= end) return;

    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    reverse(arr, start + 1, end - 1);
}
`,

    cpp: `
#include <iostream>
using namespace std;

void reverseArray(int arr[], int start, int end) {
    if (start >= end) return;

    swap(arr[start], arr[end]);
    reverseArray(arr, start + 1, end - 1);
}
`,

    java: `
public class ReverseArray {
    static void reverse(int[] arr, int start, int end) {
        if (start >= end) return;

        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        reverse(arr, start + 1, end - 1);
    }
}
`,

    python: `
def reverse(arr, start, end):
    if start >= end:
        return
    arr[start], arr[end] = arr[end], arr[start]
    reverse(arr, start + 1, end - 1)
`,

    js: `
function reverse(arr, start, end) {
    if (start >= end) return;

    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverse(arr, start + 1, end - 1);
}
`,
  },
};

export default reverseArray;
