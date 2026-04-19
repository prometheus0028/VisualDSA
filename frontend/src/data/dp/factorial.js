const factorial = {
  id: 'factorial',
  title: 'Factorial',
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
Factorial has no variation in execution path — it always performs n recursive calls.

Each call reduces the problem size by 1 until reaching the base case.

Time Complexity: O(n)
Space Complexity: O(n) due to recursion stack.

Practical Scenario:
Computing factorial for small values such as permutations or probability calculations.
      `,
    },
    average: {
      description: `
The average case is identical to best and worst since recursion depth always depends on n.

Each recursive call multiplies current n with factorial(n-1).

Time Complexity: O(n)
Space Complexity: O(n) due to function call stack.

Practical Scenario:
Used in combinatorics, arrangements, and recursive computations.
      `,
    },
    worst: {
      description: `
Worst case occurs for large values of n where recursion depth becomes large.

Deep recursion can lead to stack overflow if n is too large.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Large factorial computations without optimization or tail recursion.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Factorial of a number n (denoted as n!) is the product of all positive integers less than or equal to n. It is naturally defined using recursion, where factorial(n) = n × factorial(n-1), with a base case factorial(0) = 1.',

  intuition:
    'Think of factorial as repeatedly multiplying numbers going down to 1. For example, 5! = 5 × 4 × 3 × 2 × 1. Recursion simply breaks this into smaller subproblems until reaching the base case.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us compute factorial(4) using recursion.',
    walkthrough: [
      {
        pass: 'Call Stack Build',
        steps: [
          'factorial(4) → 4 × factorial(3)',
          'factorial(3) → 3 × factorial(2)',
          'factorial(2) → 2 × factorial(1)',
          'factorial(1) → 1 × factorial(0)',
          'factorial(0) → 1 (base case)',
        ],
      },
      {
        pass: 'Stack Unwinding',
        steps: [
          'factorial(1) = 1 × 1 = 1',
          'factorial(2) = 2 × 1 = 2',
          'factorial(3) = 3 × 2 = 6',
          'factorial(4) = 4 × 6 = 24',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['factorial(4) = 24'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Check if n is 0 or 1 (base case).',
    'If yes, return 1.',
    'Otherwise, return n × factorial(n-1).',
    'Continue recursive calls until base case is reached.',
    'Multiply values during backtracking phase.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION factorial(n):',
    '  IF n == 0 OR n == 1:',
    '    RETURN 1',
    '  RETURN n * factorial(n - 1)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Factorial is used in combinatorics, probability, permutations, combinations, and mathematical modeling. It is also used to demonstrate recursion concepts in programming.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple and intuitive recursive structure',
    'Good example to understand recursion',
    'Used in many mathematical applications',
    'Can be optimized using iteration or memoization',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Recursive approach uses extra stack space',
    'Can cause stack overflow for large n',
    'Less efficient than iterative approach for large inputs',
    'Redundant calls if not optimized (in some recursive patterns)',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is factorial(0)?',
      options: ['0', '1', 'Undefined', 'Infinity'],
      answer: 1,
    },
    {
      question: 'What is time complexity of recursive factorial?',
      options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'],
      answer: 1,
    },
    {
      question: 'What is factorial(4)?',
      options: ['12', '24', '16', '20'],
      answer: 1,
    },
    {
      question: 'Why is recursion used in factorial?',
      options: [
        'Because it reduces problem size',
        'Because it is faster always',
        'Because loops are not allowed',
        'Because it avoids multiplication',
      ],
      answer: 0,
    },
    {
      question: 'What is the space complexity due to recursion?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>

int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorial(n - 1);
}
`,

    cpp: `
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorial(n - 1);
}
`,

    java: `
public class Factorial {
    static int factorial(int n) {
        if (n == 0 || n == 1)
            return 1;
        return n * factorial(n - 1);
    }
}
`,

    python: `
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)
`,

    js: `
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
`,
  },
};

export default factorial;
