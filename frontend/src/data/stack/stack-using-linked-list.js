const stackUsingLinkedList = {
  id: 'stack-using-linked-list',
  title: 'Stack (Linked List Implementation)',
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
In the best case, push and pop operations occur at the head of the linked list.

No traversal is required because insertion and deletion happen at the beginning.

Time Complexity: O(1)
      `,
    },
    average: {
      description: `
On average, all stack operations (push, pop, peek) remain constant time.

Each operation modifies only the head pointer.

Time Complexity: O(1)
      `,
    },
    worst: {
      description: `
Even in the worst case, stack operations remain O(1) since no shifting or traversal occurs.

However, memory allocation for a new node may take slight overhead.

Worst Case Time Complexity: O(1)
      `,
    },
    space: {
      description: `
Space complexity depends on the number of nodes in the linked list.

Each element requires extra memory for storing the next pointer.

Space Complexity: O(n)

Compared to array implementation, linked list uses extra memory for pointers.
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    "A Stack implemented using a Linked List stores elements as nodes, where each node contains data and a pointer to the next node. The 'top' of the stack is represented by the head of the linked list.",

  intuition:
    'Imagine stacking books where each book knows which book is below it. When you add a new book, it becomes the new top and points to the previous one.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Let us push elements A, B, C into an empty stack implemented using linked list.',
    walkthrough: [
      {
        pass: 'Push A',
        steps: ['Create new node A', 'A.next = NULL', 'Top → A'],
      },
      {
        pass: 'Push B',
        steps: ['Create new node B', 'B.next = A', 'Top → B'],
      },
      {
        pass: 'Push C',
        steps: ['Create new node C', 'C.next = B', 'Top → C'],
      },
      {
        pass: 'Pop',
        steps: ['Remove C', 'Top becomes B'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Initialize top = NULL.',
    'Push Operation:',
    '  Create a new node.',
    '  Set newNode.next = top.',
    '  Update top = newNode.',
    'Pop Operation:',
    '  If top is NULL → Underflow.',
    '  Store top in temp.',
    '  Update top = top.next.',
    '  Delete temp.',
    'Peek Operation:',
    '  Return top.data.',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'Node {',
    '  data',
    '  next',
    '}',
    '',
    'top = NULL',
    '',
    'PUSH(x):',
    '  newNode = create node',
    '  newNode.data = x',
    '  newNode.next = top',
    '  top = newNode',
    '',
    'POP():',
    '  if top == NULL:',
    '    Underflow',
    '  temp = top',
    '  top = top.next',
    '  delete temp',
    '',
    'PEEK():',
    '  return top.data',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use Stack (Linked List Implementation) when stack size is dynamic or unknown beforehand. It is ideal when you want flexible memory usage without worrying about overflow due to fixed capacity.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Dynamic size (no fixed capacity)',
    'No overflow unless memory is exhausted',
    'No resizing needed',
    'Efficient insertion and deletion at head',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Extra memory required for pointers',
    'Slightly slower due to dynamic allocation',
    'Less cache-friendly compared to array',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'In linked list stack, top pointer points to?',
      options: ['Last node', 'Middle node', 'Head node', 'Tail node'],
      answer: 2,
    },
    {
      question: 'Push operation in linked list stack takes:',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'What happens if memory is exhausted?',
      options: ['Overflow', 'Underflow', 'Crash', 'Resize'],
      answer: 0,
    },
    {
      question: 'Linked list stack requires extra memory for:',
      options: ['Sorting', 'Pointers', 'Indexing', 'Searching'],
      answer: 1,
    },
    {
      question: 'Pop operation removes element from:',
      options: ['Bottom', 'Middle', 'Top', 'Random'],
      answer: 2,
    },
  ],

  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* top = NULL;

void push(int x) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = x;
    newNode->next = top;
    top = newNode;
}

int pop() {
    if(top == NULL) {
        printf("Underflow\\n");
        return -1;
    }
    struct Node* temp = top;
    int popped = temp->data;
    top = temp->next;
    free(temp);
    return popped;
}
`,

    cpp: `
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
};

Node* top = NULL;

void push(int x) {
    Node* newNode = new Node();
    newNode->data = x;
    newNode->next = top;
    top = newNode;
}

int pop() {
    if(top == NULL) {
        cout << "Underflow\\n";
        return -1;
    }
    Node* temp = top;
    int popped = temp->data;
    top = temp->next;
    delete temp;
    return popped;
}
`,

    java: `
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

class Stack {
    Node top = null;

    void push(int x) {
        Node newNode = new Node(x);
        newNode.next = top;
        top = newNode;
    }

    int pop() {
        if(top == null) {
            System.out.println("Underflow");
            return -1;
        }
        int popped = top.data;
        top = top.next;
        return popped;
    }
}
`,

    python: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, x):
        new_node = Node(x)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if not self.top:
            return "Underflow"
        popped = self.top.data
        self.top = self.top.next
        return popped
`,

    js: `
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(x) {
        const newNode = new Node(x);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if(!this.top)
            return "Underflow";
        const popped = this.top.data;
        this.top = this.top.next;
        return popped;
    }
}
`,
  },
};

export default stackUsingLinkedList;
