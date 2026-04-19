const infixToPostfix = {
  id: 'infix-to-postfix',
  title: 'Infix to Postfix Conversion',
  difficulty: 'Intermediate',

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
In the best case, each character is processed exactly once.

Each operator is pushed and popped at most one time.

Time Complexity: O(n)
      `,
    },
    average: {
      description: `
On average, the algorithm scans each token once and performs stack operations.

Push and pop operations are constant time.

Average Time Complexity: O(n)
      `,
    },
    worst: {
      description: `
Even in the worst case (nested parentheses or many operators),
each character is processed once.

Worst Case Time Complexity: O(n)
      `,
    },
    space: {
      description: `
The stack can store up to n operators in worst case
(for deeply nested parentheses).

Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Infix to Postfix conversion transforms a standard arithmetic expression (e.g., A + B) into postfix notation (A B +). Postfix notation eliminates the need for parentheses and operator precedence rules during evaluation.',

  intuition:
    'Use a stack to temporarily hold operators. When encountering operands, add them directly to output. When encountering operators, compare precedence and decide whether to push or pop from the stack.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Convert the infix expression: 3 + 12 * (4 - 2) ^ 2',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Output 3', 'Push + to stack'],
      },
      {
        pass: 'Step 2',
        steps: ['Output 12', 'Push * to stack (higher precedence than +)'],
      },
      {
        pass: 'Step 3',
        steps: [
          'Push ( to stack',
          'Output 4',
          'Push -',
          'Output 2',
          'Encounter ) → pop - to output',
        ],
      },
      {
        pass: 'Step 4',
        steps: ['Push ^ (highest precedence)', 'Output 2'],
      },
      {
        pass: 'Final',
        steps: [
          'Pop remaining operators',
          'Postfix Expression: 3 12 4 2 - 2 ^ * +',
        ],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize empty stack and empty output.',
    'Scan expression left to right.',
    'If operand → add to output.',
    'If ( → push to stack.',
    'If ) → pop until ( is found.',
    'If operator → pop operators with higher or equal precedence.',
    'Push current operator to stack.',
    'After scanning → pop remaining operators to output.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'Initialize empty stack',
    'Initialize empty output',
    '',
    'For each token in expression:',
    '  If operand:',
    '    add to output',
    '  Else if "("',
    '    push to stack',
    '  Else if ")"',
    '    while top != "("',
    '      pop to output',
    '    pop "("',
    '  Else if operator:',
    '    while precedence(top) >= precedence(token):',
    '      pop to output',
    '    push token',
    '',
    'While stack not empty:',
    '  pop to output',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Infix to Postfix conversion is used in compilers and expression evaluators. It simplifies expression evaluation because postfix notation does not require parentheses or precedence handling during evaluation.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Removes need for parentheses',
    'Simplifies expression evaluation',
    'Easy to evaluate using stack',
    'Widely used in compilers',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Less human-readable than infix',
    'Requires stack for conversion',
    'Error-prone if parentheses are mismatched',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'In postfix notation, operator appears:',
      options: [
        'Before operands',
        'Between operands',
        'After operands',
        'Randomly',
      ],
      answer: 2,
    },
    {
      question: 'Which data structure is used in conversion?',
      options: ['Queue', 'Stack', 'Array', 'Tree'],
      answer: 1,
    },
    {
      question: 'Time complexity of conversion?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
      answer: 0,
    },
    {
      question: 'Which operator has highest precedence?',
      options: ['+', '-', '*', '^'],
      answer: 3,
    },
    {
      question: 'Postfix notation removes need for:',
      options: ['Operators', 'Variables', 'Parentheses', 'Numbers'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <ctype.h>
#include <string.h>

int precedence(char op) {
    if(op == '^') return 3;
    if(op == '*' || op == '/') return 2;
    if(op == '+' || op == '-') return 1;
    return 0;
}
`,

    cpp: `
#include <iostream>
#include <stack>
using namespace std;

int precedence(char op) {
    if(op == '^') return 3;
    if(op == '*' || op == '/') return 2;
    if(op == '+' || op == '-') return 1;
    return 0;
}
`,

    java: `
import java.util.Stack;

class InfixToPostfix {
    static int precedence(char op) {
        if(op == '^') return 3;
        if(op == '*' || op == '/') return 2;
        if(op == '+' || op == '-') return 1;
        return 0;
    }
}
`,

    python: `
def precedence(op):
    if op == '^':
        return 3
    if op in ('*', '/'):
        return 2
    if op in ('+', '-'):
        return 1
    return 0
`,

    js: `
function precedence(op) {
  if (op === '^') return 3;
  if (op === '*' || op === '/') return 2;
  if (op === '+' || op === '-') return 1;
  return 0;
}
`,
  },
};

export default infixToPostfix;
