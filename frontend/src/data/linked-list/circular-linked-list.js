const circularLinkedList = {
  id: 'circular-linked-list',
  title: 'Circular Linked List',
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
Insertion at beginning or end (with tail pointer) takes constant time.

Time Complexity: O(1)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
Traversal required for position-based operations.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
Full traversal required.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'A circular linked list is a linked list where the last node points back to the head, forming a loop.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'List: 10 → 20 → 30 → back to 10',
    walkthrough: [
      {
        pass: 'Traversal',
        steps: ['Start at head', 'Move forward', 'Stop when back to head'],
      },
      {
        pass: 'Insertion',
        steps: ['Insert at end → update last.next to new node'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Create node',
    'Handle empty list case',
    'Traverse circularly',
    'Update last node to maintain loop',
  ],

  // ===============================
  // UPDATED PSEUDOCODE (ALL OPS)
  // ===============================
  pseudocode: [
    'INSERT_BEGIN(x):',
    '  if head == NULL:',
    '    node.next = node',
    '    head = node',
    '  else:',
    '    find last node',
    '    node.next = head',
    '    last.next = node',
    '    head = node',
    '',
    'INSERT_END(x):',
    '  find last node',
    '  last.next = node',
    '  node.next = head',
    '',
    'INSERT_POS(x, pos):',
    '  traverse to pos-1',
    '  node.next = temp.next',
    '  temp.next = node',
    '',
    'DELETE_BEGIN():',
    '  if only one node:',
    '    head = NULL',
    '  else:',
    '    find last node',
    '    head = head.next',
    '    last.next = head',
    '',
    'DELETE_END():',
    '  traverse to second last',
    '  secondLast.next = head',
    '',
    'DELETE_POS(pos):',
    '  traverse to pos-1',
    '  temp.next = temp.next.next',
    '',
    'SEARCH(x):',
    '  temp = head',
    '  do:',
    '    if temp.data == x return position',
    '    temp = temp.next',
    '  while temp != head',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Used in cyclic processes like CPU scheduling and multiplayer systems.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'No NULL pointers',
    'Efficient cyclic traversal',
    'Useful for repeating processes',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Hard to debug',
    'Infinite loop risk',
    'Complex pointer updates',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Last node points to?',
      options: ['NULL', 'Head', 'Previous', 'Random'],
      answer: 1,
    },
    {
      question: 'Traversal stops when?',
      options: ['NULL', 'Back to head', 'Last node', 'Size'],
      answer: 1,
    },
    {
      question: 'Time complexity traversal?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 2,
    },
    {
      question: 'Best use case?',
      options: ['Stack', 'Queue', 'Round Robin', 'Sorting'],
      answer: 2,
    },
    {
      question: 'Contains NULL?',
      options: ['Yes', 'No'],
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
    struct Node* next;
};

struct Node* head = NULL;

// INSERT AT BEGINNING
void insertBegin(int x) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = x;

    if (head == NULL) {
        head = n;
        n->next = n;
        return;
    }

    struct Node* last = head;
    while (last->next != head) {
        last = last->next;
    }

    n->next = head;
    last->next = n;
    head = n;
}

// INSERT AT END
void insertEnd(int x) {
    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = x;

    if (head == NULL) {
        head = n;
        n->next = n;
        return;
    }

    struct Node* last = head;
    while (last->next != head) {
        last = last->next;
    }

    last->next = n;
    n->next = head;
}

// INSERT AT POSITION
void insertPos(int x, int pos) {
    if (pos == 0) {
        insertBegin(x);
        return;
    }

    struct Node* temp = head;
    for (int i = 0; i < pos - 1; i++) {
        temp = temp->next;
    }

    struct Node* n = (struct Node*)malloc(sizeof(struct Node));
    n->data = x;

    n->next = temp->next;
    temp->next = n;
}

// DELETE BEGINNING
void deleteBegin() {
    if (head == NULL) return;

    if (head->next == head) {
        free(head);
        head = NULL;
        return;
    }

    struct Node* last = head;
    while (last->next != head) {
        last = last->next;
    }

    struct Node* temp = head;
    head = head->next;
    last->next = head;

    free(temp);
}

// DELETE END
void deleteEnd() {
    if (head == NULL) return;

    if (head->next == head) {
        free(head);
        head = NULL;
        return;
    }

    struct Node* temp = head;

    while (temp->next->next != head) {
        temp = temp->next;
    }

    struct Node* last = temp->next;
    temp->next = head;

    free(last);
}

// DELETE POSITION
void deletePos(int pos) {
    if (pos == 0) {
        deleteBegin();
        return;
    }

    struct Node* temp = head;

    for (int i = 0; i < pos - 1; i++) {
        temp = temp->next;
    }

    struct Node* del = temp->next;
    temp->next = del->next;

    free(del);
}

// SEARCH
int search(int x) {
    if (head == NULL) return -1;

    struct Node* temp = head;
    int index = 0;

    do {
        if (temp->data == x) return index;
        temp = temp->next;
        index++;
    } while (temp != head);

    return -1;
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

class CircularLinkedList {
public:
    Node* head = NULL;

    void insertBegin(int x) {
        Node* n = new Node(x);

        if (!head) {
            head = n;
            n->next = head;
            return;
        }

        Node* last = head;
        while (last->next != head)
            last = last->next;

        n->next = head;
        last->next = n;
        head = n;
    }

    void insertEnd(int x) {
        Node* n = new Node(x);

        if (!head) {
            head = n;
            n->next = head;
            return;
        }

        Node* last = head;
        while (last->next != head)
            last = last->next;

        last->next = n;
        n->next = head;
    }

    void insertPos(int x, int pos) {
        if (pos == 0) {
            insertBegin(x);
            return;
        }

        Node* temp = head;
        for (int i = 0; i < pos - 1; i++)
            temp = temp->next;

        Node* n = new Node(x);
        n->next = temp->next;
        temp->next = n;
    }

    void deleteBegin() {
        if (!head) return;

        if (head->next == head) {
            delete head;
            head = NULL;
            return;
        }

        Node* last = head;
        while (last->next != head)
            last = last->next;

        Node* temp = head;
        head = head->next;
        last->next = head;

        delete temp;
    }

    void deleteEnd() {
        if (!head) return;

        if (head->next == head) {
            delete head;
            head = NULL;
            return;
        }

        Node* temp = head;
        while (temp->next->next != head)
            temp = temp->next;

        Node* last = temp->next;
        temp->next = head;

        delete last;
    }

    void deletePos(int pos) {
        if (pos == 0) {
            deleteBegin();
            return;
        }

        Node* temp = head;
        for (int i = 0; i < pos - 1; i++)
            temp = temp->next;

        Node* del = temp->next;
        temp->next = del->next;

        delete del;
    }

    int search(int x) {
        if (!head) return -1;

        Node* temp = head;
        int index = 0;

        do {
            if (temp->data == x)
                return index;
            temp = temp->next;
            index++;
        } while (temp != head);

        return -1;
    }
};
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

class CircularLinkedList {
    Node head = null;

    // INSERT AT BEGINNING
    void insertBegin(int x) {
        Node n = new Node(x);

        if (head == null) {
            head = n;
            n.next = head;
            return;
        }

        Node last = head;
        while (last.next != head) {
            last = last.next;
        }

        n.next = head;
        last.next = n;
        head = n;
    }

    // INSERT AT END
    void insertEnd(int x) {
        Node n = new Node(x);

        if (head == null) {
            head = n;
            n.next = head;
            return;
        }

        Node last = head;
        while (last.next != head) {
            last = last.next;
        }

        last.next = n;
        n.next = head;
    }

    // INSERT AT POSITION
    void insertPos(int x, int pos) {
        if (pos == 0) {
            insertBegin(x);
            return;
        }

        Node temp = head;
        for (int i = 0; i < pos - 1; i++) {
            temp = temp.next;
        }

        Node n = new Node(x);
        n.next = temp.next;
        temp.next = n;
    }

    // DELETE BEGINNING
    void deleteBegin() {
        if (head == null) return;

        if (head.next == head) {
            head = null;
            return;
        }

        Node last = head;
        while (last.next != head) {
            last = last.next;
        }

        head = head.next;
        last.next = head;
    }

    // DELETE END
    void deleteEnd() {
        if (head == null) return;

        if (head.next == head) {
            head = null;
            return;
        }

        Node temp = head;

        while (temp.next.next != head) {
            temp = temp.next;
        }

        temp.next = head;
    }

    // DELETE POSITION
    void deletePos(int pos) {
        if (pos == 0) {
            deleteBegin();
            return;
        }

        Node temp = head;
        for (int i = 0; i < pos - 1; i++) {
            temp = temp.next;
        }

        temp.next = temp.next.next;
    }

    // SEARCH
    int search(int x) {
        if (head == null) return -1;

        Node temp = head;
        int index = 0;

        do {
            if (temp.data == x) return index;
            temp = temp.next;
            index++;
        } while (temp != head);

        return -1;
    }
}
`,

    python: `
class Node:
    def __init__(self, d):
        self.data = d
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def insert_begin(self, x):
        n = Node(x)

        if not self.head:
            self.head = n
            n.next = n
            return

        temp = self.head
        while temp.next != self.head:
            temp = temp.next

        n.next = self.head
        temp.next = n
        self.head = n

    def insert_end(self, x):
        n = Node(x)

        if not self.head:
            self.head = n
            n.next = n
            return

        temp = self.head
        while temp.next != self.head:
            temp = temp.next

        temp.next = n
        n.next = self.head

    def insert_pos(self, x, pos):
        if pos == 0:
            self.insert_begin(x)
            return

        temp = self.head
        for _ in range(pos - 1):
            temp = temp.next

        n = Node(x)
        n.next = temp.next
        temp.next = n

    def delete_begin(self):
        if not self.head:
            return

        if self.head.next == self.head:
            self.head = None
            return

        temp = self.head
        while temp.next != self.head:
            temp = temp.next

        self.head = self.head.next
        temp.next = self.head

    def delete_end(self):
        if not self.head:
            return

        if self.head.next == self.head:
            self.head = None
            return

        temp = self.head
        while temp.next.next != self.head:
            temp = temp.next

        temp.next = self.head

    def delete_pos(self, pos):
        if pos == 0:
            self.delete_begin()
            return

        temp = self.head
        for _ in range(pos - 1):
            temp = temp.next

        temp.next = temp.next.next

    def search(self, x):
        if not self.head:
            return -1

        temp = self.head
        index = 0

        while True:
            if temp.data == x:
                return index
            temp = temp.next
            index += 1
            if temp == self.head:
                break

        return -1
`,

    js: `
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  insertBegin(x) {
    const n = new Node(x);

    if (!this.head) {
      this.head = n;
      n.next = n;
      return;
    }

    let last = this.head;
    while (last.next !== this.head) {
      last = last.next;
    }

    n.next = this.head;
    last.next = n;
    this.head = n;
  }

  insertEnd(x) {
    const n = new Node(x);

    if (!this.head) {
      this.head = n;
      n.next = n;
      return;
    }

    let last = this.head;
    while (last.next !== this.head) {
      last = last.next;
    }

    last.next = n;
    n.next = this.head;
  }

  insertPos(x, pos) {
    if (pos === 0) return this.insertBegin(x);

    let temp = this.head;
    for (let i = 0; i < pos - 1; i++) {
      temp = temp.next;
    }

    const n = new Node(x);
    n.next = temp.next;
    temp.next = n;
  }

  deleteBegin() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let last = this.head;
    while (last.next !== this.head) {
      last = last.next;
    }

    this.head = this.head.next;
    last.next = this.head;
  }

  deleteEnd() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let temp = this.head;
    while (temp.next.next !== this.head) {
      temp = temp.next;
    }

    temp.next = this.head;
  }

  deletePos(pos) {
    if (pos === 0) return this.deleteBegin();

    let temp = this.head;
    for (let i = 0; i < pos - 1; i++) {
      temp = temp.next;
    }

    temp.next = temp.next.next;
  }

  search(x) {
    if (!this.head) return -1;

    let temp = this.head;
    let index = 0;

    do {
      if (temp.data === x) return index;
      temp = temp.next;
      index++;
    } while (temp !== this.head);

    return -1;
  }
}
`,
  },
};

export default circularLinkedList;
