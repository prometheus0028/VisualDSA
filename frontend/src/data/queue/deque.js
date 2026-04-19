const deque = {
  id: 'deque',
  title: 'Deque (Double Ended Queue)',
  difficulty: 'Intermediate',

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
In the best case, insertion and deletion at both ends of the deque
take constant time.

All operations (pushFront, pushBack, popFront, popBack) are O(1).

Space Complexity: O(n)
The deque stores up to n elements.
      `,
    },
    average: {
      description: `
On average, operations remain constant time because
they involve direct pointer/index updates.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Even in worst-case scenarios, each operation affects
only one end of the deque.

There are no nested loops or traversals.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A Deque (Double Ended Queue) is a linear data structure that allows insertion and deletion from both the front and rear ends. It combines features of both stacks and queues and provides greater flexibility in data manipulation.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Consider an empty deque. We will perform operations on both ends.',
    walkthrough: [
      {
        pass: 'Initial State',
        steps: ['Deque is empty'],
      },
      {
        pass: 'Push Back 10',
        steps: ['Deque: [10]'],
      },
      {
        pass: 'Push Front 5',
        steps: ['Deque: [5, 10]'],
      },
      {
        pass: 'Push Back 20',
        steps: ['Deque: [5, 10, 20]'],
      },
      {
        pass: 'Pop Front',
        steps: ['Removes 5 → Deque: [10, 20]'],
      },
      {
        pass: 'Pop Back',
        steps: ['Removes 20 → Deque: [10]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize empty deque',
    'For pushFront(x): insert element at front',
    'For pushBack(x): insert element at rear',
    'For popFront(): remove element from front',
    'For popBack(): remove element from rear',
    'Check underflow before removal',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'Initialize empty deque', // 0
    '',
    'PUSH_FRONT(x):', // 2
    '  if deque is full:', // 3
    '    Overflow', // 4
    '  insert x at front', // 5
    '',
    'PUSH_BACK(x):', // 7
    '  if deque is full:', // 8
    '    Overflow', // 9
    '  insert x at rear', // 10
    '',
    'POP_FRONT():', // 12
    '  if deque is empty:', // 13
    '    Underflow', // 14
    '  remove element from front', // 15
    '',
    'POP_BACK():', // 17
    '  if deque is empty:', // 18
    '    Underflow', // 19
    '  remove element from rear', // 20
    '',
    'PEEK_FRONT():', // 22
    '  return front element', // 23
    '',
    'PEEK_BACK():', // 25
    '  return rear element', // 26
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Deque is used in sliding window problems, palindrome checking, task scheduling, undo/redo systems, and implementing both stacks and queues dynamically.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Supports insertion and deletion at both ends',
    'Highly flexible data structure',
    'Constant time operations',
    'Useful in advanced algorithms',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'More complex implementation than stack or queue',
    'Requires careful boundary handling',
    'Memory overhead in linked implementation',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Deque allows insertion at:',
      options: ['Front only', 'Rear only', 'Both ends', 'Middle only'],
      answer: 2,
    },
    {
      question: 'Time complexity of pushFront?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Deque is also known as:',
      options: [
        'Circular List',
        'Double Ended Queue',
        'Priority Queue',
        'Stack Queue',
      ],
      answer: 1,
    },
    {
      question: 'Which problem commonly uses deque?',
      options: [
        'Binary Search',
        'Sliding Window Maximum',
        'Heap Sort',
        'Merge Sort',
      ],
      answer: 1,
    },
    {
      question: 'Space complexity of deque?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 1,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#define SIZE 5

int deque[SIZE];
int front = -1, rear = -1;

void pushFront(int x) {
    if ((front == 0 && rear == SIZE-1) || (front == rear + 1)) {
        printf("Overflow\\n");
        return;
    }

    if (front == -1) {
        front = rear = 0;
    } else if (front == 0) {
        front = SIZE - 1;
    } else {
        front--;
    }

    deque[front] = x;
}
`,

    cpp: `
#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq;
    dq.push_front(10);
    dq.push_back(20);
    dq.pop_front();
    dq.pop_back();
    return 0;
}
`,

    java: `
import java.util.ArrayDeque;

public class DequeExample {
    public static void main(String[] args) {
        ArrayDeque<Integer> dq = new ArrayDeque<>();
        dq.addFirst(10);
        dq.addLast(20);
        dq.removeFirst();
        dq.removeLast();
    }
}
`,

    python: `
from collections import deque

dq = deque()
dq.appendleft(10)
dq.append(20)
dq.popleft()
dq.pop()
`,

    js: `
class Deque {
  constructor() {
    this.items = [];
  }

  pushFront(x) {
    this.items.unshift(x);
  }

  pushBack(x) {
    this.items.push(x);
  }

  popFront() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  popBack() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
}
`,
  },
};

export default deque;
