const fibonacci = {
  id: 'fibonacci',
  title: 'Fibonacci (Recursive)',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(2^n)',
  best: 'O(2^n)',
  average: 'O(2^n)',
  worst: 'O(2^n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Fibonacci recursion always expands into two recursive calls for each non-base case.

Even in the best scenario, the recursion tree grows exponentially.

Time Complexity: O(2^n)
Space Complexity: O(n) due to recursion depth.

Practical Scenario:
Basic recursive Fibonacci is mainly used for teaching recursion concepts rather than efficient computation.
      `,
    },
    average: {
      description: `
The recursive Fibonacci function recomputes the same values multiple times.

For example, fibonacci(3) is computed multiple times when calculating fibonacci(5).

This leads to exponential growth of calls.

Time Complexity: O(2^n)
Space Complexity: O(n)

Practical Scenario:
Demonstrates inefficiency of naive recursion and need for dynamic programming.
      `,
    },
    worst: {
      description: `
Worst case occurs for large n, where recursion tree expands heavily.

The number of function calls grows exponentially due to overlapping subproblems.

Time Complexity: O(2^n)
Space Complexity: O(n)

Practical Scenario:
Large recursive Fibonacci values without memoization lead to extreme inefficiency.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Fibonacci sequence is a series where each number is the sum of the two preceding ones. It is defined recursively as F(n) = F(n-1) + F(n-2), with base cases F(0) = 0 and F(1) = 1.',

  intuition:
    'Think of Fibonacci as building numbers by combining the previous two values. Recursion breaks the problem into smaller overlapping subproblems, which leads to repeated computations in the naive approach.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us compute fibonacci(5) using recursion.',
    walkthrough: [
      {
        pass: 'Recursive Expansion',
        steps: [
          'fib(5) = fib(4) + fib(3)',
          'fib(4) = fib(3) + fib(2)',
          'fib(3) = fib(2) + fib(1)',
          'fib(2) = fib(1) + fib(0)',
        ],
      },
      {
        pass: 'Repeated Computation',
        steps: [
          'fib(3) is calculated multiple times',
          'fib(2) is calculated multiple times',
          'This duplication causes inefficiency',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['fib(5) = 5'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Check if n is 0 or 1 (base case).',
    'If yes, return n.',
    'Otherwise, return fibonacci(n-1) + fibonacci(n-2).',
    'Repeat until base cases are reached.',
    'Combine results during backtracking.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION fib(n):',
    '  IF n == 0:',
    '    RETURN 0',
    '  IF n == 1:',
    '    RETURN 1',
    '  RETURN fib(n-1) + fib(n-2)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Recursive Fibonacci is mainly used for understanding recursion and overlapping subproblems. In real applications, optimized approaches like dynamic programming or iteration are preferred.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple and intuitive recursive definition',
    'Great for learning recursion concepts',
    'Demonstrates overlapping subproblems clearly',
    'Forms basis for dynamic programming understanding',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Highly inefficient due to repeated computations',
    'Exponential time complexity',
    'Not suitable for large inputs',
    'Consumes stack space proportional to recursion depth',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is fibonacci(0)?',
      options: ['0', '1', 'Undefined', '2'],
      answer: 0,
    },
    {
      question: 'What is fibonacci(1)?',
      options: ['0', '1', '2', '3'],
      answer: 1,
    },
    {
      question: 'What is fibonacci(5)?',
      options: ['3', '5', '8', '13'],
      answer: 1,
    },
    {
      question: 'Why is recursive Fibonacci inefficient?',
      options: [
        'Too many loops',
        'Repeated computations',
        'Too much memory allocation',
        'No base case',
      ],
      answer: 1,
    },
    {
      question: 'What is the time complexity?',
      options: ['O(n)', 'O(log n)', 'O(2^n)', 'O(n²)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
`,

    cpp: `
#include <iostream>
using namespace std;

int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
`,

    java: `
public class Fibonacci {
    static int fib(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return fib(n - 1) + fib(n - 2);
    }
}
`,

    python: `
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)
`,

    js: `
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
`,
  },
};

export default fibonacci;
