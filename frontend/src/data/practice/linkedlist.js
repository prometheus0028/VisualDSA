const linkedlistDataset = {
  singly_linked_list: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In singly linked list, each node contains which two components?',
        options: [
          'Data and pointer to next node',
          'Two pointers',
          'Only data',
          'Only pointer',
        ],
        answer: 0,
        concept: 'sll_structure',
        difficulty: 'easy',
      },
      {
        question: 'In singly linked list, insertion at head takes:',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
        answer: 2,
        concept: 'sll_insert_head',
        difficulty: 'easy',
      },
      {
        question: 'Deleting last node in singly linked list requires:',
        options: [
          'Constant time',
          'Traversal of entire list',
          'Binary search',
          'Heap operation',
        ],
        answer: 1,
        concept: 'sll_delete_tail',
        difficulty: 'medium',
      },
      {
        question:
          'Why singly linked list is preferred over array in some cases?',
        options: [
          'Faster access',
          'Dynamic size',
          'Less memory always',
          'Sorted structure',
        ],
        answer: 1,
        concept: 'sll_advantage',
        difficulty: 'easy',
      },
      {
        question: 'In singly linked list, random access is:',
        options: ['O(1)', 'O(log n)', 'O(n)', 'Impossible'],
        answer: 2,
        concept: 'sll_access',
        difficulty: 'easy',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
Singly linked list:
Insert 10 at head → Insert 20 at head → Insert 30 at head
What is final list?
`,
        options: [
          '10 → 20 → 30',
          '30 → 20 → 10',
          '20 → 30 → 10',
          '10 → 30 → 20',
        ],
        answer: 1,
        concept: 'sll_head_insertion',
        difficulty: 'medium',
      },
      {
        question: `
Linked list: 1 → 2 → 3 → 4
Delete node with value 2
What is result?
`,
        options: ['1 → 3 → 4', '2 → 3 → 4', '1 → 2 → 4', '1 → 4'],
        answer: 0,
        concept: 'sll_delete_middle',
        difficulty: 'medium',
      },
      {
        question: `
Linked list: 5 → 10 → 15
Insert 20 at end
What is list?
`,
        options: [
          '20 → 5 → 10 → 15',
          '5 → 10 → 15 → 20',
          '5 → 20 → 10 → 15',
          '20 → 15 → 10 → 5',
        ],
        answer: 1,
        concept: 'sll_insert_tail',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If next pointer of new node is not assigned during insertion at head, what happens?
`,
        options: [
          'Correct insertion',
          'Remaining list is lost',
          'Sorted list',
          'No issue',
        ],
        answer: 1,
        concept: 'sll_pointer_error',
        difficulty: 'medium',
      },
      {
        question: `
If node to be deleted is not properly unlinked (prev->next not updated), what issue occurs?
`,
        options: [
          'Correct behavior',
          'Memory leak / incorrect list structure',
          'Sorted output',
          'Faster execution',
        ],
        answer: 1,
        concept: 'sll_delete_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix insertion at head in singly linked list where pointer linking is incorrect.',
        language: 'javascript',
        code: [
          'function insertHead(head, x){',
          '  let newNode = { data: x, next: ___ };',
          '  newNode->___ = ___;',
          '  head = ___;',
          '  return ___;',
          '}',
        ],
        blanks: [['null'], ['next'], ['head'], ['newNode'], ['head']],
        concept: 'sll_insert_head_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix deletion of first node in singly linked list.',
        language: 'cpp',
        code: [
          'Node* deleteHead(Node* head){',
          '  if(head == ___) return NULL;',
          '  Node* temp = ___;',
          '  head = head->___;',
          '  delete ___;',
          '  return ___;',
          '}',
        ],
        blanks: [['NULL'], ['head'], ['next'], ['temp'], ['head']],
        concept: 'sll_delete_head_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix insertion at end in singly linked list.',
        language: 'java',
        code: [
          'Node insertEnd(Node head, int x){',
          '  Node newNode = new Node(x);',
          '  if(head == ___) return ___;',
          '  Node temp = ___;',
          '  while(temp->___ != null){',
          '    temp = temp->___;',
          '  }',
          '  temp->___ = ___;',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['null'],
          ['newNode'],
          ['head'],
          ['next'],
          ['next'],
          ['next'],
          ['newNode'],
          ['head'],
        ],
        concept: 'sll_insert_tail_fix',
        difficulty: 'hard',
      },

      {
        problem: 'Fix search operation in singly linked list.',
        language: 'python',
        code: [
          'def search(head, key):',
          '    temp = ___',
          '    while temp ___ None:',
          '        if temp.data == ___:',
          '            return True',
          '        temp = temp.___',
          '    return ___',
        ],
        blanks: [['head'], ['!='], ['key'], ['next'], ['False']],
        concept: 'sll_search',
        difficulty: 'medium',
      },

      {
        problem: 'Fix reversal of singly linked list.',
        language: 'c',
        code: [
          'struct Node* reverse(struct Node* head){',
          '  struct Node* prev = ___;',
          '  struct Node* curr = ___;',
          '  struct Node* next = ___;',
          '  while(curr != ___){',
          '    next = curr->___;',
          '    curr->___ = ___;',
          '    prev = ___;',
          '    curr = ___;',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['head'],
          ['NULL'],
          ['NULL'],
          ['next'],
          ['next'],
          ['prev'],
          ['curr'],
          ['next'],
          ['prev'],
        ],
        concept: 'sll_reverse',
        difficulty: 'hard',
      },
    ],
  },
  doubly_linked_list: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In doubly linked list, each node contains:',
        options: [
          'Data and one pointer',
          'Data and two pointers (prev and next)',
          'Only pointers',
          'Only data',
        ],
        answer: 1,
        concept: 'dll_structure',
        difficulty: 'easy',
      },
      {
        question:
          'Main advantage of doubly linked list over singly linked list is:',
        options: [
          'Less memory',
          'Bidirectional traversal',
          'Faster sorting',
          'Random access',
        ],
        answer: 1,
        concept: 'dll_advantage',
        difficulty: 'easy',
      },
      {
        question: 'Insertion at head in doubly linked list takes:',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
        answer: 2,
        concept: 'dll_insert_head',
        difficulty: 'easy',
      },
      {
        question: 'Deletion in doubly linked list requires updating:',
        options: [
          'Only next pointer',
          'Only prev pointer',
          'Both prev and next pointers',
          'No pointers',
        ],
        answer: 2,
        concept: 'dll_delete',
        difficulty: 'medium',
      },
      {
        question: 'Which drawback exists in doubly linked list?',
        options: [
          'No traversal',
          'Extra memory for prev pointer',
          'Slow insertion',
          'Sorted structure',
        ],
        answer: 1,
        concept: 'dll_disadvantage',
        difficulty: 'easy',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
Doubly linked list:
Insert 10 at head → Insert 20 at head → Insert 30 at head
What is forward traversal?
`,
        options: [
          '10 → 20 → 30',
          '30 → 20 → 10',
          '20 → 10 → 30',
          '30 → 10 → 20',
        ],
        answer: 1,
        concept: 'dll_head_insert',
        difficulty: 'medium',
      },
      {
        question: `
List: 1 ⇄ 2 ⇄ 3 ⇄ 4
Delete node with value 3
What is result?
`,
        options: ['1 ⇄ 2 ⇄ 4', '1 ⇄ 3 ⇄ 4', '2 ⇄ 3 ⇄ 4', '1 ⇄ 4'],
        answer: 0,
        concept: 'dll_delete_middle',
        difficulty: 'medium',
      },
      {
        question: `
List: 5 ⇄ 10 ⇄ 15
Insert 20 at end
What is backward traversal?
`,
        options: [
          '5 ← 10 ← 15 ← 20',
          '20 ← 15 ← 10 ← 5',
          '5 ← 20 ← 10 ← 15',
          '20 ← 10 ← 15 ← 5',
        ],
        answer: 1,
        concept: 'dll_backward_traversal',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If prev pointer is not updated during insertion in doubly linked list, what happens?
`,
        options: [
          'Correct list',
          'Broken backward traversal',
          'Sorted output',
          'No issue',
        ],
        answer: 1,
        concept: 'dll_prev_error',
        difficulty: 'medium',
      },
      {
        question: `
If both next and prev pointers are not correctly updated during deletion, what issue occurs?
`,
        options: [
          'Correct execution',
          'List corruption / invalid traversal',
          'Faster execution',
          'Sorted structure',
        ],
        answer: 1,
        concept: 'dll_delete_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix insertion at head in doubly linked list where prev pointer is not handled correctly.',
        language: 'javascript',
        code: [
          'function insertHead(head, x){',
          '  let newNode = { data: x, prev: ___, next: ___ };',
          '  if(head != ___){',
          '    head->___ = ___;',
          '  }',
          '  head = ___;',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['null'],
          ['head'],
          ['null'],
          ['prev'],
          ['newNode'],
          ['newNode'],
          ['head'],
        ],
        concept: 'dll_insert_head_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix insertion at end in doubly linked list.',
        language: 'cpp',
        code: [
          'Node* insertEnd(Node* head, int x){',
          '  Node* newNode = new Node(x);',
          '  if(head == ___) return ___;',
          '  Node* temp = ___;',
          '  while(temp->___ != NULL){',
          '    temp = temp->___;',
          '  }',
          '  temp->___ = ___;',
          '  newNode->___ = ___;',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['newNode'],
          ['head'],
          ['next'],
          ['next'],
          ['next'],
          ['newNode'],
          ['prev'],
          ['temp'],
          ['head'],
        ],
        concept: 'dll_insert_tail_fix',
        difficulty: 'hard',
      },

      {
        problem: 'Fix deletion of a node in doubly linked list.',
        language: 'java',
        code: [
          'void deleteNode(Node node){',
          '  if(node->___ != null)',
          '    node.prev->___ = node->___;',
          '  if(node->___ != null)',
          '    node.next->___ = node->___;',
          '}',
        ],
        blanks: [['prev'], ['next'], ['next'], ['next'], ['prev'], ['prev']],
        concept: 'dll_delete_fix',
        difficulty: 'hard',
      },

      {
        problem: 'Fix forward traversal in doubly linked list.',
        language: 'python',
        code: [
          'def traverse(head):',
          '    temp = ___',
          '    while temp ___ None:',
          '        print(temp.data)',
          '        temp = temp.___',
        ],
        blanks: [['head'], ['!='], ['next']],
        concept: 'dll_traverse_forward',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix reverse traversal using prev pointers in doubly linked list.',
        language: 'c',
        code: [
          'void reversePrint(struct Node* head){',
          '  struct Node* temp = head;',
          '  while(temp->___ != NULL)',
          '    temp = temp->___;',
          '  while(temp != ___){',
          '    printf("%d ", temp->___);',
          '    temp = temp->___;',
          '  }',
          '}',
        ],
        blanks: [['next'], ['next'], ['NULL'], ['data'], ['prev']],
        concept: 'dll_reverse_traverse',
        difficulty: 'medium',
      },
    ],
  },
  circular_linked_list: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In circular linked list, last node points to:',
        options: ['NULL', 'First node', 'Second node', 'Itself only'],
        answer: 1,
        concept: 'cll_structure',
        difficulty: 'easy',
      },
      {
        question:
          'Which condition is used to detect end of traversal in circular linked list?',
        options: [
          'temp == NULL',
          'temp->next == NULL',
          'temp == head again',
          'temp == last',
        ],
        answer: 2,
        concept: 'cll_traversal',
        difficulty: 'medium',
      },
      {
        question:
          'What is the advantage of circular linked list over singly linked list?',
        options: [
          'Faster search',
          'No NULL pointer needed',
          'Less memory',
          'Sorted structure',
        ],
        answer: 1,
        concept: 'cll_advantage',
        difficulty: 'easy',
      },
      {
        question: 'Insertion at end in circular linked list requires:',
        options: [
          'Updating only next pointer',
          'Updating last->next and newNode->next',
          'Updating only head',
          'No updates needed',
        ],
        answer: 1,
        concept: 'cll_insert_end',
        difficulty: 'medium',
      },
      {
        question: 'Deletion of head node in circular linked list requires:',
        options: [
          'Only head update',
          'Updating last->next and head',
          'Only last update',
          'No updates',
        ],
        answer: 1,
        concept: 'cll_delete_head',
        difficulty: 'medium',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
Circular linked list:
Insert 10 → Insert 20 → Insert 30 (at end)
What does last node point to?
`,
        options: ['NULL', '10', '20', '30'],
        answer: 1,
        concept: 'cll_last_pointer',
        difficulty: 'medium',
      },
      {
        question: `
Circular list: 1 → 2 → 3 → back to 1
Traverse starting from head for 4 steps
What sequence appears?
`,
        options: ['1 2 3 1', '1 2 3 4', '1 2 1 2', '1 3 2 1'],
        answer: 0,
        concept: 'cll_traversal_cycle',
        difficulty: 'medium',
      },
      {
        question: `
Circular list: 5 → 10 → 15
Delete head (5)
What is new head?
`,
        options: ['5', '10', '15', 'NULL'],
        answer: 1,
        concept: 'cll_delete_head_result',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If last->next is not updated after insertion in circular linked list, what happens?
`,
        options: [
          'Correct circular structure',
          'List becomes linear (breaks circularity)',
          'Sorted list',
          'No issue',
        ],
        answer: 1,
        concept: 'cll_link_error',
        difficulty: 'medium',
      },
      {
        question: `
If traversal condition uses temp != NULL instead of temp != head, what issue occurs?
`,
        options: [
          'Correct traversal',
          'Infinite loop',
          'Stops early',
          'Sorted traversal',
        ],
        answer: 1,
        concept: 'cll_traversal_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix insertion at end in circular linked list where last->next is not updated properly.',
        language: 'javascript',
        code: [
          'function insertEnd(head, x){',
          '  let newNode = { data: x, next: ___ };',
          '  if(head == ___){',
          '    newNode->___ = ___;',
          '    return ___;',
          '  }',
          '  let temp = ___;',
          '  while(temp->___ != head){',
          '    temp = temp->___;',
          '  }',
          '  temp->___ = ___;',
          '  newNode->___ = ___;',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['null'],
          ['null'],
          ['next'],
          ['newNode'],
          ['newNode'],
          ['head'],
          ['next'],
          ['next'],
          ['newNode'],
          ['next'],
          ['head'],
          ['head'],
        ],
        concept: 'cll_insert_end_fix',
        difficulty: 'hard',
      },

      {
        problem: 'Fix deletion of head node in circular linked list.',
        language: 'cpp',
        code: [
          'Node* deleteHead(Node* head){',
          '  if(head == ___) return NULL;',
          '  if(head->___ == head) return NULL;',
          '  Node* temp = ___;',
          '  while(temp->___ != head){',
          '    temp = temp->___;',
          '  }',
          '  temp->___ = head->___;',
          '  head = head->___;',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['next'],
          ['head'],
          ['next'],
          ['next'],
          ['next'],
          ['next'],
          ['next'],
          ['head'],
        ],
        concept: 'cll_delete_head_fix',
        difficulty: 'hard',
      },

      {
        problem: 'Fix traversal of circular linked list.',
        language: 'java',
        code: [
          'void traverse(Node head){',
          '  if(head == ___) return;',
          '  Node temp = ___;',
          '  do{',
          '    System.out.print(temp->___);',
          '    temp = temp->___;',
          '  }while(temp ___ head);',
          '}',
        ],
        blanks: [['null'], ['head'], ['data'], ['next'], ['!=']],
        concept: 'cll_traversal_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix insertion at beginning in circular linked list.',
        language: 'python',
        code: [
          'def insert_begin(head, x):',
          '    newNode = Node(x)',
          '    if head is ___:',
          '        newNode.next = ___',
          '        return ___',
          '    temp = ___',
          '    while temp.next != ___:',
          '        temp = temp.next',
          '    temp.next = ___',
          '    newNode.next = ___',
          '    return ___',
        ],
        blanks: [
          ['None'],
          ['newNode'],
          ['newNode'],
          ['head'],
          ['head'],
          ['newNode'],
          ['head'],
          ['newNode'],
        ],
        concept: 'cll_insert_begin',
        difficulty: 'hard',
      },

      {
        problem: 'Fix deletion of last node in circular linked list.',
        language: 'c',
        code: [
          'struct Node* deleteEnd(struct Node* head){',
          '  if(head == ___) return NULL;',
          '  if(head->___ == head) return NULL;',
          '  struct Node* temp = head;',
          '  struct Node* prev = ___;',
          '  while(temp->___ != head){',
          '    prev = temp;',
          '    temp = temp->___;',
          '  }',
          '  prev->___ = ___;',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['next'],
          ['NULL'],
          ['next'],
          ['next'],
          ['next'],
          ['head'],
          ['head'],
        ],
        concept: 'cll_delete_end',
        difficulty: 'hard',
      },
    ],
  },
};

export default linkedlistDataset;
