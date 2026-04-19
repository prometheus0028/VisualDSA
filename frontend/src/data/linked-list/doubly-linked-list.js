const doublyLinkedList = {
  id: 'doubly-linked-list',
  title: 'Doubly Linked List',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(n)',
  best: 'O(1)',
  average: 'O(n)',
  worst: 'O(n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
Insertion or deletion at head/tail takes constant time.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
Traversal required for middle operations.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Full traversal needed.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A doubly linked list stores data with two pointers: next and previous, allowing traversal in both directions.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Insertion and deletion update both next and prev pointers.',
    walkthrough: [
      {
        pass: 'Insert',
        steps: [
          'Insert 10 → [10]',
          'Insert 20 → [10 ⇄ 20]',
          'Insert 30 → [10 ⇄ 20 ⇄ 30]',
        ],
      },
      {
        pass: 'Delete',
        steps: ['Delete 20 → [10 ⇄ 30]'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create node',
    'Update prev and next pointers',
    'Handle edge cases (head/tail)',
    '',
    'Traverse for position operations',
    'Update surrounding nodes',
  ],

  // ===============================
  // UPDATED PSEUDOCODE (FULL OPS)
  // ===============================
  pseudocode: [
    'INSERT_BEGIN(x):',
    '  new.prev = NULL',
    '  new.next = head',
    '  if head != NULL:',
    '    head.prev = new',
    '  head = new',
    '',
    'INSERT_END(x):',
    '  traverse to last node',
    '  last.next = new',
    '  new.prev = last',
    '',
    'INSERT_POS(x, pos):',
    '  traverse to pos-1',
    '  new.next = temp.next',
    '  new.prev = temp',
    '  temp.next.prev = new',
    '  temp.next = new',
    '',
    'DELETE_BEGIN():',
    '  if head == NULL → Underflow',
    '  head = head.next',
    '  if head != NULL:',
    '    head.prev = NULL',
    '',
    'DELETE_END():',
    '  traverse to last node',
    '  last.prev.next = NULL',
    '',
    'DELETE_POS(pos):',
    '  traverse to node',
    '  node.prev.next = node.next',
    '  node.next.prev = node.prev',
    '',
    'SEARCH(x):',
    '  traverse list',
    '  if found return position',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse: 'Use when backward traversal or frequent deletions are required.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Bidirectional traversal',
    'Efficient deletion',
    'Flexible operations',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Extra memory for prev pointer',
    'More complex than singly list',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question:
        'How many pointers does each node have in a doubly linked list?',
      options: ['1', '2', '3', '0'],
      answer: 1,
    },
    {
      question: 'Can we traverse a doubly linked list backward?',
      options: ['Yes', 'No'],
      answer: 0,
    },
    {
      question: 'What is the time complexity of insertion at head?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 0,
    },
    {
      question:
        'Which operation becomes easier compared to singly linked list?',
      options: ['Searching', 'Deletion', 'Sorting', 'Traversal'],
      answer: 1,
    },
    {
      question: 'Main disadvantage of doubly linked list?',
      options: [
        'No backward traversal',
        'Extra memory for prev pointer',
        'Slow insertion',
        'Fixed size',
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

struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

void insertBegin(struct Node** head, int x) {
    struct Node* n = malloc(sizeof(struct Node));
    n->data = x;
    n->prev = NULL;
    n->next = *head;

    if (*head != NULL)
        (*head)->prev = n;

    *head = n;
}

void insertEnd(struct Node** head, int x) {
    struct Node* n = malloc(sizeof(struct Node));
    n->data = x;
    n->next = NULL;

    if (*head == NULL) {
        n->prev = NULL;
        *head = n;
        return;
    }

    struct Node* t = *head;
    while (t->next != NULL)
        t = t->next;

    t->next = n;
    n->prev = t;
}

void deleteBegin(struct Node** head) {
    if (*head == NULL) return;

    struct Node* temp = *head;
    *head = (*head)->next;

    if (*head != NULL)
        (*head)->prev = NULL;

    free(temp);
}
`,

    cpp: `
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* prev;
    Node* next;
};

class DLL {
public:
    Node* head = NULL;

    void insertBegin(int x) {
        Node* n = new Node{x, NULL, head};
        if (head) head->prev = n;
        head = n;
    }

    void insertEnd(int x) {
        Node* n = new Node{x, NULL, NULL};
        if (!head) {
            head = n;
            return;
        }
        Node* t = head;
        while (t->next) t = t->next;
        t->next = n;
        n->prev = t;
    }

    void deleteBegin() {
        if (!head) return;
        Node* temp = head;
        head = head->next;
        if (head) head->prev = NULL;
        delete temp;
    }
};
`,

    java: `
class Node {
    int data;
    Node prev, next;

    Node(int d) {
        data = d;
    }
}

class DoublyLinkedList {
    Node head;

    void insertBegin(int x) {
        Node n = new Node(x);
        n.next = head;

        if (head != null)
            head.prev = n;

        head = n;
    }

    void insertEnd(int x) {
        Node n = new Node(x);

        if (head == null) {
            head = n;
            return;
        }

        Node t = head;
        while (t.next != null)
            t = t.next;

        t.next = n;
        n.prev = t;
    }

    void deleteBegin() {
        if (head == null) return;

        head = head.next;

        if (head != null)
            head.prev = null;
    }
}
`,

    python: `
class Node:
    def __init__(self, d):
        self.data = d
        self.prev = None
        self.next = None

class DLL:
    def __init__(self):
        self.head = None

    def insert_begin(self, x):
        n = Node(x)
        n.next = self.head
        if self.head:
            self.head.prev = n
        self.head = n

    def insert_end(self, x):
        n = Node(x)
        if not self.head:
            self.head = n
            return
        t = self.head
        while t.next:
            t = t.next
        t.next = n
        n.prev = t

    def delete_begin(self):
        if not self.head:
            return
        self.head = self.head.next
        if self.head:
            self.head.prev = None
`,

    js: `
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertBegin(x) {
    const n = new Node(x);
    n.next = this.head;

    if (this.head) this.head.prev = n;

    this.head = n;
  }

  insertEnd(x) {
    const n = new Node(x);

    if (!this.head) {
      this.head = n;
      return;
    }

    let t = this.head;
    while (t.next) t = t.next;

    t.next = n;
    n.prev = t;
  }

  insertPos(x, pos) {
    if (pos === 0) return this.insertBegin(x);

    let t = this.head;
    for (let i = 0; i < pos - 1; i++) t = t.next;

    const n = new Node(x);
    n.next = t.next;
    if (t.next) t.next.prev = n;

    t.next = n;
    n.prev = t;
  }

  deleteBegin() {
    if (!this.head) return;

    this.head = this.head.next;

    if (this.head) this.head.prev = null;
  }

  deleteEnd() {
    if (!this.head) return;

    let t = this.head;
    while (t.next) t = t.next;

    if (t.prev) t.prev.next = null;
    else this.head = null;
  }

  deletePos(pos) {
    let t = this.head;
    for (let i = 0; i < pos; i++) t = t.next;

    if (t.prev) t.prev.next = t.next;
    if (t.next) t.next.prev = t.prev;
  }

  search(x) {
    let t = this.head;
    let i = 0;

    while (t) {
      if (t.data === x) return i;
      t = t.next;
      i++;
    }

    return -1;
  }
}
`,
  },
};

export default doublyLinkedList;
