const stackUsingArray = {
  id: 'stack-using-array',
  title: 'Stack (Array Implementation)',
  difficulty: 'Beginner',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(1)',
  best: 'O(1)',
  average: 'O(1)',
  worst: 'O(1)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
In the best case, push, pop, and peek operations occur in constant time.

No shifting of elements is required.
Operations are performed using a single index (top pointer).

Time Complexity: O(1)
      `,
    },
    average: {
      description: `
On average, stack operations such as push and pop take constant time.

Only the top element is accessed or modified.
No traversal is required.

Time Complexity: O(1)
      `,
    },
    worst: {
      description: `
Even in the worst case, stack operations remain constant time.

However, if the array is full, push may cause overflow.
If dynamic resizing is used, occasional resizing takes O(n),
but amortized complexity remains O(1).

Worst Case: O(1)
      `,
    },
    space: {
      description: `
Stack using array requires space proportional to number of elements stored.

Space Complexity: O(n)

If implemented using fixed-size array:
Memory is allocated upfront.

If dynamic array:
Space grows as elements increase.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    "A Stack is a linear data structure that follows the LIFO (Last In First Out) principle. In array implementation, elements are stored in contiguous memory locations, and a pointer called 'top' keeps track of the most recently inserted element.",

  intuition:
    'Think of a stack like a pile of plates. You can only add a plate to the top and remove the top plate. The last plate placed is the first one removed.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Consider pushing elements 10, 20, 30 into an empty stack.',
    walkthrough: [
      {
        pass: 'Push 10',
        steps: ['Stack: [10]', 'Top → 10'],
      },
      {
        pass: 'Push 20',
        steps: ['Stack: [10, 20]', 'Top → 20'],
      },
      {
        pass: 'Push 30',
        steps: ['Stack: [10, 20, 30]', 'Top → 30'],
      },
      {
        pass: 'Pop',
        steps: ['Removes 30', 'Stack becomes [10, 20]', 'Top → 20'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize an empty array.',
    'Set top = -1.',
    'Push Operation:',
    '  Increment top.',
    '  Insert element at array[top].',
    'Pop Operation:',
    '  Return array[top].',
    '  Decrement top.',
    'Peek Operation:',
    '  Return array[top] without removing it.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'Initialize stack array of size n',
    'top = -1',
    '',
    'PUSH(x):',
    '  if top == n-1:',
    '    Overflow',
    '  else:',
    '    top = top + 1',
    '    stack[top] = x',
    '',
    'POP():',
    '  if top == -1:',
    '    Underflow',
    '  else:',
    '    x = stack[top]',
    '    top = top - 1',
    '    return x',
    '',
    'PEEK():',
    '  return stack[top]',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Stack (Array Implementation) when you need fast LIFO operations with predictable memory usage. It is ideal when maximum size is known beforehand and memory locality is important.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Simple to implement',
    'Fast push and pop operations',
    'Better cache locality',
    'No extra memory for pointers',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Fixed size (in static implementation)',
    'Overflow if capacity exceeded',
    'Resizing can be costly in dynamic arrays',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Stack follows which principle?',
      options: ['FIFO', 'LIFO', 'Random Access', 'Priority Based'],
      answer: 1,
    },
    {
      question: 'Time complexity of push operation?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'What happens if stack is full?',
      options: ['Underflow', 'Overflow', 'Resizing automatically', 'Nothing'],
      answer: 1,
    },
    {
      question: 'Top pointer initially is:',
      options: ['0', '1', '-1', 'n'],
      answer: 2,
    },
    {
      question: 'Peek operation does what?',
      options: [
        'Deletes element',
        'Returns top element',
        'Adds element',
        'Sorts stack',
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
#define MAX 100

int stack[MAX];
int top = -1;

void push(int x) {
    if(top == MAX - 1)
        printf("Overflow\\n");
    else
        stack[++top] = x;
}

int pop() {
    if(top == -1) {
        printf("Underflow\\n");
        return -1;
    }
    return stack[top--];
}
`,

    cpp: `
#include <iostream>
using namespace std;

class Stack {
    int arr[100];
    int top;

public:
    Stack() { top = -1; }

    void push(int x) {
        if(top == 99)
            cout << "Overflow\\n";
        else
            arr[++top] = x;
    }

    int pop() {
        if(top == -1) {
            cout << "Underflow\\n";
            return -1;
        }
        return arr[top--];
    }
};
`,

    java: `
class Stack {
    int arr[] = new int[100];
    int top = -1;

    void push(int x) {
        if(top == arr.length - 1)
            System.out.println("Overflow");
        else
            arr[++top] = x;
    }

    int pop() {
        if(top == -1) {
            System.out.println("Underflow");
            return -1;
        }
        return arr[top--];
    }
}
`,

    python: `
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, x):
        self.stack.append(x)

    def pop(self):
        if not self.stack:
            return "Underflow"
        return self.stack.pop()
`,

    js: `
class Stack {
    constructor() {
        this.stack = [];
    }

    push(x) {
        this.stack.push(x);
    }

    pop() {
        if(this.stack.length === 0)
            return "Underflow";
        return this.stack.pop();
    }
}
`,
  },
};

export default stackUsingArray;
