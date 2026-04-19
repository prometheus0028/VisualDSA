const powerFunction = {
  id: 'power-function',
  title: 'Power Function',
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
The recursive power function multiplies the base repeatedly n times.

Each recursive call reduces exponent by 1.

Time Complexity: O(n)
Space Complexity: O(n) due to recursion stack.

Practical Scenario:
Simple exponent calculation where n is small.
      `,
    },
    average: {
      description: `
For any input n, the function performs n recursive multiplications.

There are no optimizations in this basic approach.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Basic exponentiation in educational examples or small inputs.
      `,
    },
    worst: {
      description: `
Worst case occurs when exponent n is large.

The recursion depth grows linearly, leading to high stack usage.

Time Complexity: O(n)
Space Complexity: O(n)

Practical Scenario:
Large exponent values without optimization (inefficient compared to fast exponentiation).
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'The power function computes base^n by multiplying the base recursively. It follows the relation: power(base, n) = base × power(base, n-1), with the base case power(base, 0) = 1.',

  intuition:
    'Think of exponentiation as repeated multiplication. For example, 2^4 = 2 × 2 × 2 × 2. Recursion breaks this into smaller steps until exponent becomes zero.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Let us compute power(2, 4).',
    walkthrough: [
      {
        pass: 'Recursive Calls',
        steps: [
          'power(2,4) = 2 × power(2,3)',
          'power(2,3) = 2 × power(2,2)',
          'power(2,2) = 2 × power(2,1)',
          'power(2,1) = 2 × power(2,0)',
          'power(2,0) = 1 (base case)',
        ],
      },
      {
        pass: 'Backtracking',
        steps: [
          'power(2,1) = 2 × 1 = 2',
          'power(2,2) = 2 × 2 = 4',
          'power(2,3) = 2 × 4 = 8',
          'power(2,4) = 2 × 8 = 16',
        ],
      },
      {
        pass: 'Final Result',
        steps: ['2^4 = 16'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Check if exponent n is 0.',
    'If yes, return 1.',
    'Otherwise, return base × power(base, n-1).',
    'Repeat recursion until exponent reaches 0.',
    'Multiply values during backtracking.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'FUNCTION power(base, n):',
    '  IF n == 0:',
    '    RETURN 1',
    '  RETURN base * power(base, n-1)',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Basic recursive power function is useful for understanding recursion and exponentiation. For large inputs, optimized approaches like fast exponentiation (O(log n)) should be used.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple recursive structure',
    'Easy to understand and implement',
    'Good introduction to recursion',
    'Foundation for optimized exponentiation methods',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Inefficient for large exponents',
    'Linear recursion depth',
    'Consumes stack space O(n)',
    'Slower than iterative or optimized methods',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'What is power(2, 3)?',
      options: ['6', '8', '9', '4'],
      answer: 1,
    },
    {
      question: 'What is power(base, 0)?',
      options: ['0', '1', 'base', 'undefined'],
      answer: 1,
    },
    {
      question: 'Time complexity of basic recursive power?',
      options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'],
      answer: 1,
    },
    {
      question: 'What is space complexity?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Better optimized approach uses:',
      options: [
        'Sorting',
        'Fast exponentiation',
        'Greedy method',
        'Binary search',
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

int power(int base, int n) {
    if (n == 0)
        return 1;
    return base * power(base, n - 1);
}
`,

    cpp: `
#include <iostream>
using namespace std;

int power(int base, int n) {
    if (n == 0)
        return 1;
    return base * power(base, n - 1);
}
`,

    java: `
public class PowerFunction {
    static int power(int base, int n) {
        if (n == 0)
            return 1;
        return base * power(base, n - 1);
    }
}
`,

    python: `
def power(base, n):
    if n == 0:
        return 1
    return base * power(base, n - 1)
`,

    js: `
function power(base, n) {
    if (n === 0) return 1;
    return base * power(base, n - 1);
}
`,
  },
};

export default powerFunction;
