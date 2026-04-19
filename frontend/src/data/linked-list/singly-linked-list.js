const singlyLinkedList = {
  id: 'singly-linked-list',
  title: 'Singly Linked List',
  difficulty: 'Beginner',

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
Insertion at head takes constant time.

No traversal is needed.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
For most operations like search or insertion at end,
we need to traverse the list.

Average traversal length is n/2.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
In worst case, we traverse entire list
(e.g., searching last element or deleting last node).

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A singly linked list is a linear data structure where each element (node) contains data and a reference (pointer) to the next node in the sequence.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description:
      'Consider inserting elements into a singly linked list and then deleting one.',
    walkthrough: [
      { pass: 'Step 1', steps: ['Start with empty list'] },
      { pass: 'Step 2', steps: ['Insert 10 → List: 10'] },
      { pass: 'Step 3', steps: ['Insert 20 → List: 10 → 20'] },
      { pass: 'Step 4', steps: ['Insert 30 → List: 10 → 20 → 30'] },
      { pass: 'Step 5', steps: ['Delete last → List: 10 → 20'] },
    ],
  },

  // ===============================
  // UPDATED ALGORITHM STEPS
  // ===============================
  steps: [
    'Insert at beginning',
    'Insert at end',
    'Insert at position',
    'Delete from beginning',
    'Delete from end',
    'Delete from position',
    'Search element',
  ],

  // ===============================
  // UPDATED PSEUDOCODE (SYNCED)
  // ===============================
  pseudocode: [
    // INSERT BEGINNING
    'INSERT_BEGIN(x):', // 0
    '  newNode = create node', // 1
    '  newNode.next = head', // 2
    '  head = newNode', // 3
    '',

    // INSERT END
    'INSERT_END(x):', // 5
    '  newNode = create node', // 6
    '  if head == NULL:', // 7
    '    head = newNode', // 8
    '  else:', // 9
    '    temp = head', // 10
    '    while temp.next != NULL:', // 11
    '      temp = temp.next', // 12
    '    temp.next = newNode', // 13
    '',

    // INSERT POSITION
    'INSERT_POS(x, pos):', // 15
    '  if pos == 0:', // 16
    '    INSERT_BEGIN(x)', // 17
    '  temp = head', // 18
    '  for i in range(pos-1):', // 19
    '    temp = temp.next', // 20
    '  newNode.next = temp.next', // 21
    '  temp.next = newNode', // 22
    '',

    // DELETE BEGINNING
    'DELETE_BEGIN():', // 24
    '  if head == NULL:', // 25
    '    Underflow', // 26
    '  head = head.next', // 27
    '',

    // DELETE END
    'DELETE_END():', // 29
    '  if head == NULL:', // 30
    '    Underflow', // 31
    '  temp = head', // 32
    '  while temp.next.next != NULL:', // 33
    '    temp = temp.next', // 34
    '  temp.next = NULL', // 35
    '',

    // DELETE POSITION
    'DELETE_POS(pos):', // 37
    '  temp = head', // 38
    '  for i in range(pos-1):', // 39
    '    temp = temp.next', // 40
    '  temp.next = temp.next.next', // 41
    '',

    // SEARCH
    'SEARCH(x):', // 43
    '  temp = head', // 44
    '  while temp != NULL:', // 45
    '    if temp.data == x:', // 46
    '      return found', // 47
    '    temp = temp.next', // 48
    '  return not found', // 49
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use singly linked lists when frequent insertions and deletions are required, especially when size is dynamic and memory reallocation is expensive.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Dynamic size',
    'Efficient insertions/deletions',
    'No contiguous memory needed',
    'Less memory than doubly linked list',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'No backward traversal',
    'Extra pointer memory',
    'Slower access',
    'Traversal needed often',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Access nth element complexity?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Pointer used?',
      options: ['prev', 'next', 'both', 'none'],
      answer: 1,
    },
    {
      question: 'Insert at head?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      answer: 0,
    },
    {
      question: 'Memory type?',
      options: ['Contiguous', 'Random', 'Stack', 'Queue'],
      answer: 1,
    },
    {
      question: 'Disadvantage?',
      options: [
        'Dynamic size',
        'Fast insert',
        'No backward traversal',
        'No memory usage',
      ],
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

struct Node* head = NULL;

// INSERT BEGINNING
void insertBegin(int x) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = x;
    newNode->next = head;
    head = newNode;
}

// INSERT END
void insertEnd(int x) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = x;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
        return;
    }

    struct Node* temp = head;
    while (temp->next != NULL)
        temp = temp->next;

    temp->next = newNode;
}

// INSERT POSITION
void insertPos(int x, int pos) {
    if (pos == 0) {
        insertBegin(x);
        return;
    }

    struct Node* temp = head;
    for (int i = 0; i < pos - 1; i++)
        temp = temp->next;

    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = x;
    newNode->next = temp->next;
    temp->next = newNode;
}

// DELETE BEGINNING
void deleteBegin() {
    if (head == NULL) return;
    head = head->next;
}

// DELETE END
void deleteEnd() {
    if (head == NULL) return;

    struct Node* temp = head;
    while (temp->next->next != NULL)
        temp = temp->next;

    temp->next = NULL;
}

// DELETE POSITION
void deletePos(int pos) {
    struct Node* temp = head;
    for (int i = 0; i < pos - 1; i++)
        temp = temp->next;

    temp->next = temp->next->next;
}

// SEARCH
int search(int x) {
    struct Node* temp = head;
    while (temp != NULL) {
        if (temp->data == x) return 1;
        temp = temp->next;
    }
    return 0;
}
`,

    cpp: `
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int d) {
        data = d;
        next = NULL;
    }
};

Node* head = NULL;

// INSERT BEGINNING
void insertBegin(int x) {
    Node* newNode = new Node(x);
    newNode->next = head;
    head = newNode;
}

// INSERT END
void insertEnd(int x) {
    Node* newNode = new Node(x);

    if (!head) {
        head = newNode;
        return;
    }

    Node* temp = head;
    while (temp->next)
        temp = temp->next;

    temp->next = newNode;
}

// INSERT POSITION
void insertPos(int x, int pos) {
    if (pos == 0) {
        insertBegin(x);
        return;
    }

    Node* temp = head;
    for (int i = 0; i < pos - 1; i++)
        temp = temp->next;

    Node* newNode = new Node(x);
    newNode->next = temp->next;
    temp->next = newNode;
}

// DELETE BEGINNING
void deleteBegin() {
    if (!head) return;
    head = head->next;
}

// DELETE END
void deleteEnd() {
    if (!head) return;

    Node* temp = head;
    while (temp->next->next)
        temp = temp->next;

    temp->next = NULL;
}

// DELETE POSITION
void deletePos(int pos) {
    Node* temp = head;
    for (int i = 0; i < pos - 1; i++)
        temp = temp->next;

    temp->next = temp->next->next;
}

// SEARCH
bool search(int x) {
    Node* temp = head;
    while (temp) {
        if (temp->data == x) return true;
        temp = temp->next;
    }
    return false;
}
`,

    java: `
class Node {
    int data;
    Node next;

    Node(int d) {
        data = d;
        next = null;
    }
}

class LinkedList {
    Node head;

    // INSERT BEGINNING
    void insertBegin(int x) {
        Node newNode = new Node(x);
        newNode.next = head;
        head = newNode;
    }

    // INSERT END
    void insertEnd(int x) {
        Node newNode = new Node(x);

        if (head == null) {
            head = newNode;
            return;
        }

        Node temp = head;
        while (temp.next != null)
            temp = temp.next;

        temp.next = newNode;
    }

    // INSERT POSITION
    void insertPos(int x, int pos) {
        if (pos == 0) {
            insertBegin(x);
            return;
        }

        Node temp = head;
        for (int i = 0; i < pos - 1; i++)
            temp = temp.next;

        Node newNode = new Node(x);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    // DELETE BEGINNING
    void deleteBegin() {
        if (head == null) return;
        head = head.next;
    }

    // DELETE END
    void deleteEnd() {
        if (head == null) return;

        Node temp = head;
        while (temp.next.next != null)
            temp = temp.next;

        temp.next = null;
    }

    // DELETE POSITION
    void deletePos(int pos) {
        Node temp = head;
        for (int i = 0; i < pos - 1; i++)
            temp = temp.next;

        temp.next = temp.next.next;
    }

    // SEARCH
    boolean search(int x) {
        Node temp = head;
        while (temp != null) {
            if (temp.data == x) return true;
            temp = temp.next;
        }
        return false;
    }
}
`,

    python: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

head = None

# INSERT BEGINNING
def insert_begin(x):
    global head
    newNode = Node(x)
    newNode.next = head
    head = newNode

# INSERT END
def insert_end(x):
    global head
    newNode = Node(x)

    if head is None:
        head = newNode
        return

    temp = head
    while temp.next:
        temp = temp.next

    temp.next = newNode

# INSERT POSITION
def insert_pos(x, pos):
    global head

    if pos == 0:
        insert_begin(x)
        return

    temp = head
    for _ in range(pos - 1):
        temp = temp.next

    newNode = Node(x)
    newNode.next = temp.next
    temp.next = newNode

# DELETE BEGINNING
def delete_begin():
    global head
    if head:
        head = head.next

# DELETE END
def delete_end():
    global head
    if head is None:
        return

    temp = head
    while temp.next and temp.next.next:
        temp = temp.next

    temp.next = None

# DELETE POSITION
def delete_pos(pos):
    global head
    temp = head
    for _ in range(pos - 1):
        temp = temp.next

    temp.next = temp.next.next

# SEARCH
def search(x):
    temp = head
    while temp:
        if temp.data == x:
            return True
        temp = temp.next
    return False
`,

    js: `
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // INSERT BEGINNING
  insertBegin(x) {
    const newNode = new Node(x);
    newNode.next = this.head;
    this.head = newNode;
  }

  // INSERT END
  insertEnd(x) {
    const newNode = new Node(x);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next) temp = temp.next;

    temp.next = newNode;
  }

  // INSERT POSITION
  insertPos(x, pos) {
    if (pos === 0) {
      this.insertBegin(x);
      return;
    }

    let temp = this.head;
    for (let i = 0; i < pos - 1; i++) {
      temp = temp.next;
    }

    const newNode = new Node(x);
    newNode.next = temp.next;
    temp.next = newNode;
  }

  // DELETE BEGINNING
  deleteBegin() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  // DELETE END
  deleteEnd() {
    if (!this.head) return;

    let temp = this.head;
    while (temp.next && temp.next.next) {
      temp = temp.next;
    }

    temp.next = null;
  }

  // DELETE POSITION
  deletePos(pos) {
    let temp = this.head;
    for (let i = 0; i < pos - 1; i++) {
      temp = temp.next;
    }

    temp.next = temp.next.next;
  }

  // SEARCH
  search(x) {
    let temp = this.head;
    while (temp) {
      if (temp.data === x) return true;
      temp = temp.next;
    }
    return false;
  }
}
`,
  },
};

export default singlyLinkedList;
