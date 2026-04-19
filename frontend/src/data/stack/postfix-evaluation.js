const postfixEvaluation = {
  id: 'postfix-evaluation',
  title: 'Postfix Expression Evaluation',
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
Each token in the postfix expression is processed exactly once.

Push and pop operations on stack are constant time.

Best Case Time Complexity: O(n)
      `,
    },
    average: {
      description: `
For an expression of length n, we scan each token once.

Each operator causes two pops and one push.

Average Time Complexity: O(n)
      `,
    },
    worst: {
      description: `
Even in the worst case, every token is processed once.

Worst Case Time Complexity: O(n)
      `,
    },
    space: {
      description: `
In worst case, stack may hold up to n operands.

Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'Postfix evaluation computes the result of an expression written in postfix notation (Reverse Polish Notation). In postfix, operators appear after their operands, eliminating the need for parentheses and precedence rules.',

  intuition:
    'Use a stack. Push operands onto the stack. When an operator appears, pop the top two operands, apply the operator, and push the result back onto the stack.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Evaluate the postfix expression: 3 12 4 2 - 2 ^ * +',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Push 3', 'Push 12', 'Push 4', 'Push 2'],
      },
      {
        pass: 'Step 2',
        steps: ['Encounter "-" → Pop 2 and 4 → 4 - 2 = 2 → Push 2'],
      },
      {
        pass: 'Step 3',
        steps: ['Push 2', 'Encounter "^" → Pop 2 and 2 → 2^2 = 4 → Push 4'],
      },
      {
        pass: 'Step 4',
        steps: ['Encounter "*" → Pop 4 and 12 → 12 * 4 = 48 → Push 48'],
      },
      {
        pass: 'Step 5',
        steps: [
          'Encounter "+" → Pop 48 and 3 → 3 + 48 = 51 → Push 51',
          'Final Result: 51',
        ],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize an empty stack.',
    'Scan expression left to right.',
    'If operand → push onto stack.',
    'If operator → pop top two operands.',
    'Apply operator.',
    'Push result back onto stack.',
    'After scanning → final stack value is answer.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'Initialize empty stack',
    '',
    'For each token in expression:',
    '  If token is operand:',
    '    push token to stack',
    '  Else if token is operator:',
    '    b = pop()',
    '    a = pop()',
    '    result = a operator b',
    '    push result',
    '',
    'Final result = pop()',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Postfix evaluation is used in calculators, compilers, and interpreters. It simplifies evaluation logic because precedence and parentheses are already resolved in postfix notation.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'No need to handle precedence rules',
    'No parentheses required',
    'Simple stack-based evaluation',
    'Used in compilers and calculators',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Less readable for humans',
    'Requires valid postfix format',
    'Error-prone if stack underflows',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Postfix notation is also called:',
      options: [
        'Prefix Notation',
        'Reverse Polish Notation',
        'Infix Notation',
        'Binary Notation',
      ],
      answer: 1,
    },
    {
      question: 'Which data structure is used?',
      options: ['Queue', 'Stack', 'Tree', 'Heap'],
      answer: 1,
    },
    {
      question: 'Time complexity of evaluation?',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
      answer: 0,
    },
    {
      question: 'In postfix, operator comes:',
      options: [
        'Before operands',
        'Between operands',
        'After operands',
        'Randomly',
      ],
      answer: 2,
    },
    {
      question: 'Final result is stored where?',
      options: ['Bottom of stack', 'Top of stack', 'Queue', 'Array index 0'],
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
#include <math.h>

int evaluatePostfix(char* exp[]) {
    int stack[100], top = -1;

    for(int i = 0; exp[i] != NULL; i++) {
        if(isdigit(exp[i][0])) {
            stack[++top] = atoi(exp[i]);
        } else {
            int b = stack[top--];
            int a = stack[top--];
            switch(exp[i][0]) {
                case '+': stack[++top] = a + b; break;
                case '-': stack[++top] = a - b; break;
                case '*': stack[++top] = a * b; break;
                case '/': stack[++top] = a / b; break;
                case '^': stack[++top] = pow(a, b); break;
            }
        }
    }
    return stack[top];
}
`,

    cpp: `
#include <iostream>
#include <stack>
#include <cmath>
using namespace std;

int evaluatePostfix(vector<string> tokens) {
    stack<int> st;

    for(string token : tokens) {
        if(isdigit(token[0])) {
            st.push(stoi(token));
        } else {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();

            if(token == "+") st.push(a + b);
            else if(token == "-") st.push(a - b);
            else if(token == "*") st.push(a * b);
            else if(token == "/") st.push(a / b);
            else if(token == "^") st.push(pow(a, b));
        }
    }

    return st.top();
}
`,

    java: `
import java.util.Stack;

class PostfixEvaluation {
    static int evaluate(String[] tokens) {
        Stack<Integer> stack = new Stack<>();

        for(String token : tokens) {
            if(token.matches("\\\\d+")) {
                stack.push(Integer.parseInt(token));
            } else {
                int b = stack.pop();
                int a = stack.pop();

                switch(token) {
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/": stack.push(a / b); break;
                    case "^": stack.push((int)Math.pow(a, b)); break;
                }
            }
        }
        return stack.pop();
    }
}
`,

    python: `
import math

def evaluate_postfix(tokens):
    stack = []

    for token in tokens:
        if token.isdigit():
            stack.append(int(token))
        else:
            b = stack.pop()
            a = stack.pop()

            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                stack.append(a / b)
            elif token == '^':
                stack.append(math.pow(a, b))

    return stack.pop()
`,

    js: `
function evaluatePostfix(tokens) {
  const stack = [];

  tokens.forEach(token => {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch(token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b); break;
        case '^': stack.push(Math.pow(a, b)); break;
      }
    }
  });

  return stack.pop();
}
`,
  },
};

export default postfixEvaluation;
