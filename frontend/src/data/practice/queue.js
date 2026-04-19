const queueDataset = {
  queue_array: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In queue using array, which principle is followed for insertion and deletion?',
        options: ['LIFO', 'FIFO', 'Priority', 'Random'],
        answer: 1,
        concept: 'queue_fifo',
        difficulty: 'easy',
      },
      {
        question:
          'In array implementation of queue, insertion is done at which end?',
        options: ['Front', 'Rear', 'Middle', 'Random'],
        answer: 1,
        concept: 'queue_enqueue_position',
        difficulty: 'easy',
      },
      {
        question: 'Deletion in queue using array happens from which end?',
        options: ['Front', 'Rear', 'Middle', 'Random'],
        answer: 0,
        concept: 'queue_dequeue_position',
        difficulty: 'easy',
      },
      {
        question:
          'What condition represents queue overflow in array implementation?',
        options: [
          'front == rear',
          'rear == size - 1',
          'front == -1',
          'rear < size',
        ],
        answer: 1,
        concept: 'queue_overflow',
        difficulty: 'easy',
      },
      {
        question: 'What condition represents queue underflow?',
        options: [
          'rear == size',
          'front == -1 OR front > rear',
          'rear == 0',
          'front == size',
        ],
        answer: 1,
        concept: 'queue_underflow',
        difficulty: 'easy',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
In queue using array, perform operations: enqueue(10), enqueue(20), dequeue(), enqueue(30). What is the front element?
`,
        options: ['10', '20', '30', 'Empty'],
        answer: 1,
        concept: 'queue_operation_trace',
        difficulty: 'medium',
      },
      {
        question: `
Queue operations: enqueue(5), enqueue(6), enqueue(7), dequeue(), dequeue(). What is the current front?
`,
        options: ['5', '6', '7', 'Empty'],
        answer: 2,
        concept: 'queue_sequence',
        difficulty: 'medium',
      },
      {
        question: `
Queue operations: enqueue(1), enqueue(2), enqueue(3), dequeue(), enqueue(4). What is the rear element?
`,
        options: ['2', '3', '4', '1'],
        answer: 2,
        concept: 'queue_rear_tracking',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If rear reaches end of array but front has empty space (due to dequeues), what problem occurs in simple queue?
`,
        options: [
          'Correct execution',
          'False overflow condition',
          'Underflow',
          'Sorting error',
        ],
        answer: 1,
        concept: 'queue_false_overflow',
        difficulty: 'medium',
      },
      {
        question: `
If front pointer is not updated after dequeue in array queue, what will happen?
`,
        options: [
          'Correct output',
          'Old elements remain accessible causing wrong results',
          'Faster execution',
          'Queue resets',
        ],
        answer: 1,
        concept: 'queue_front_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix enqueue operation in queue using array where rear pointer is not updated correctly.',
        language: 'javascript',
        code: [
          'function enqueue(x){',
          '  if(rear == ___) return "overflow";',
          '  if(front == ___) front = 0;',
          '  rear = ___;',
          '  queue[___] = x;',
          '}',
        ],
        blanks: [['size-1'], ['-1'], ['rear + 1', '++rear'], ['rear']],
        concept: 'queue_enqueue_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix dequeue operation where front pointer is not updated correctly.',
        language: 'cpp',
        code: [
          'int dequeue(){',
          '  if(front == ___ || front > rear) return -1;',
          '  int val = queue[___];',
          '  front = ___;',
          '  if(front > rear){',
          '    front = ___;',
          '    rear = ___;',
          '  }',
          '  return val;',
          '}',
        ],
        blanks: [['-1'], ['front'], ['front + 1', '++front'], ['-1'], ['-1']],
        concept: 'queue_dequeue_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix peek operation in queue using array.',
        language: 'java',
        code: [
          'int peek(){',
          '  if(front == ___ || front > rear) return -1;',
          '  return queue[___];',
          '}',
        ],
        blanks: [['-1'], ['front']],
        concept: 'queue_peek_fix',
        difficulty: 'easy',
      },

      {
        problem: 'Fix isEmpty function for queue using array.',
        language: 'python',
        code: ['def isEmpty():', '    return ___ == ___ or ___ > ___'],
        blanks: [['front'], ['-1'], ['front'], ['rear']],
        concept: 'queue_empty_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix enqueue logic where overflow condition is incorrectly written.',
        language: 'c',
        code: [
          'void enqueue(int x){',
          '  if(rear ___ size-1){',
          '    printf("Overflow");',
          '    return;',
          '  }',
          '  if(front == ___) front = 0;',
          '  queue[++___] = x;',
          '}',
        ],
        blanks: [['>='], ['-1'], ['rear']],
        concept: 'queue_overflow_fix',
        difficulty: 'medium',
      },
    ],
  },
  queue_linked_list: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In queue using linked list, which pointer is used for insertion operation?',
        options: ['Front', 'Rear', 'Head', 'Middle'],
        answer: 1,
        concept: 'queue_ll_enqueue',
        difficulty: 'easy',
      },
      {
        question:
          'In queue using linked list, deletion happens from which pointer?',
        options: ['Rear', 'Front', 'Tail', 'Last'],
        answer: 1,
        concept: 'queue_ll_dequeue',
        difficulty: 'easy',
      },
      {
        question:
          'What is the advantage of queue using linked list over array implementation?',
        options: [
          'Faster operations',
          'No overflow until memory full',
          'Less memory usage',
          'Sorted structure',
        ],
        answer: 1,
        concept: 'queue_ll_advantage',
        difficulty: 'easy',
      },
      {
        question:
          'In linked list queue, what happens when last element is dequeued?',
        options: [
          'Only front becomes NULL',
          'Only rear becomes NULL',
          'Both front and rear become NULL',
          'Nothing changes',
        ],
        answer: 2,
        concept: 'queue_ll_empty_case',
        difficulty: 'medium',
      },
      {
        question:
          'Time complexity of enqueue and dequeue in queue using linked list is:',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
        answer: 2,
        concept: 'queue_ll_complexity',
        difficulty: 'easy',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
In queue using linked list, perform: enqueue(10), enqueue(20), enqueue(30), dequeue(). What is front?
`,
        options: ['10', '20', '30', 'Empty'],
        answer: 1,
        concept: 'queue_ll_sequence',
        difficulty: 'medium',
      },
      {
        question: `
Queue operations: enqueue(5), enqueue(6), dequeue(), enqueue(7). What is rear element?
`,
        options: ['5', '6', '7', 'Empty'],
        answer: 2,
        concept: 'queue_ll_rear_tracking',
        difficulty: 'medium',
      },
      {
        question: `
Queue operations: enqueue(1), dequeue(), dequeue(). What will happen?
`,
        options: [
          'Returns 1 twice',
          'Underflow on second dequeue',
          'Returns 0',
          'Crash',
        ],
        answer: 1,
        concept: 'queue_ll_underflow',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If rear pointer is not updated after enqueue in linked list queue, what will happen?
`,
        options: [
          'Correct behavior',
          'New nodes get lost',
          'Queue becomes sorted',
          'No issue',
        ],
        answer: 1,
        concept: 'queue_ll_rear_error',
        difficulty: 'medium',
      },
      {
        question: `
If front is updated but rear is not set to NULL when queue becomes empty, what issue occurs?
`,
        options: [
          'Correct execution',
          'Dangling pointer / invalid rear reference',
          'Faster execution',
          'Sorted queue',
        ],
        answer: 1,
        concept: 'queue_ll_null_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix enqueue operation in queue using linked list where rear pointer is not linked properly.',
        language: 'javascript',
        code: [
          'function enqueue(x){',
          '  let newNode = { data: x, next: ___ };',
          '  if(front == ___){',
          '    front = ___;',
          '    rear = ___;',
          '  } else {',
          '    rear.___ = ___;',
          '    rear = ___;',
          '  }',
          '}',
        ],
        blanks: [
          ['null'],
          ['null'],
          ['newNode'],
          ['newNode'],
          ['next'],
          ['newNode'],
          ['newNode'],
        ],
        concept: 'queue_ll_enqueue_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix dequeue operation in queue using linked list where front is not updated correctly.',
        language: 'cpp',
        code: [
          'int dequeue(){',
          '  if(front == ___) return -1;',
          '  Node* temp = ___;',
          '  int val = temp->___;',
          '  front = front->___;',
          '  if(front == ___)',
          '    rear = ___;',
          '  delete ___;',
          '  return val;',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['front'],
          ['data'],
          ['next'],
          ['NULL'],
          ['NULL'],
          ['temp'],
        ],
        concept: 'queue_ll_dequeue_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix peek function in queue using linked list.',
        language: 'java',
        code: [
          'int peek(){',
          '  if(front == ___) return -1;',
          '  return front->___;',
          '}',
        ],
        blanks: [['null'], ['data']],
        concept: 'queue_ll_peek',
        difficulty: 'easy',
      },

      {
        problem: 'Fix isEmpty function for linked list queue.',
        language: 'python',
        code: ['def isEmpty():', '    return ___ == ___'],
        blanks: [['front'], ['None']],
        concept: 'queue_ll_empty',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix enqueue logic where next pointer is not assigned, causing broken links.',
        language: 'c',
        code: [
          'void enqueue(int x){',
          '  struct Node* newNode = malloc(sizeof(struct Node));',
          '  newNode->data = x;',
          '  newNode->___ = ___;',
          '  if(front == ___){',
          '    front = rear = ___;',
          '  } else {',
          '    rear->___ = ___;',
          '    rear = ___;',
          '  }',
          '}',
        ],
        blanks: [
          ['next'],
          ['NULL'],
          ['NULL'],
          ['newNode'],
          ['next'],
          ['newNode'],
          ['newNode'],
        ],
        concept: 'queue_ll_pointer_fix',
        difficulty: 'medium',
      },
    ],
  },
  circular_queue: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In circular queue, what condition represents a full queue?',
        options: [
          'rear == size - 1',
          '(rear + 1) % size == front',
          'front == rear',
          'rear == front - 1',
        ],
        answer: 1,
        concept: 'circular_queue_full_condition',
        difficulty: 'medium',
      },
      {
        question:
          'In circular queue, what condition represents an empty queue?',
        options: [
          'front == rear',
          'front == -1',
          'rear == size - 1',
          '(rear + 1) % size == front',
        ],
        answer: 1,
        concept: 'circular_queue_empty_condition',
        difficulty: 'easy',
      },
      {
        question: 'Why is circular queue better than linear queue?',
        options: [
          'Faster insertion',
          'Avoids memory wastage',
          'Sorted elements',
          'Uses stack',
        ],
        answer: 1,
        concept: 'circular_queue_advantage',
        difficulty: 'easy',
      },
      {
        question:
          'What is the initial value of front and rear in circular queue?',
        options: ['0', '-1', '1', 'size'],
        answer: 1,
        concept: 'circular_queue_initialization',
        difficulty: 'easy',
      },
      {
        question:
          'After removing last element in circular queue, what happens?',
        options: [
          'Only rear becomes -1',
          'Only front becomes -1',
          'Both front and rear become -1',
          'Nothing changes',
        ],
        answer: 2,
        concept: 'circular_queue_reset',
        difficulty: 'medium',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
Circular queue of size 5:
enqueue(1), enqueue(2), enqueue(3), dequeue(), enqueue(4), enqueue(5)
What is front element?
`,
        options: ['1', '2', '3', '4'],
        answer: 1,
        concept: 'circular_queue_operations',
        difficulty: 'medium',
      },
      {
        question: `
Circular queue (size 4):
enqueue(10), enqueue(20), enqueue(30), dequeue(), enqueue(40)
What is rear index?
`,
        options: ['2', '3', '0', '1'],
        answer: 3,
        concept: 'circular_queue_indexing',
        difficulty: 'hard',
      },
      {
        question: `
Circular queue:
enqueue(5), enqueue(6), enqueue(7), enqueue(8), enqueue(9)
What happens on last enqueue?
`,
        options: [
          'Inserted successfully',
          'Queue overflow',
          'Replaces front',
          'Sorted insertion',
        ],
        answer: 1,
        concept: 'circular_queue_overflow',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If modulo operation is not used in circular queue while incrementing rear, what happens?
`,
        options: [
          'Correct behavior',
          'Index out of bounds',
          'Queue becomes sorted',
          'No change',
        ],
        answer: 1,
        concept: 'circular_queue_modulo_error',
        difficulty: 'medium',
      },
      {
        question: `
If front is not updated after dequeue in circular queue, what issue occurs?
`,
        options: [
          'Correct execution',
          'Infinite loop or stale data',
          'Sorted queue',
          'Faster execution',
        ],
        answer: 1,
        concept: 'circular_queue_front_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix enqueue operation in circular queue where modulo condition is missing.',
        language: 'javascript',
        code: [
          'function enqueue(x){',
          '  if((rear + 1) ___ size == front) return "Full";',
          '  if(front == ___){',
          '    front = rear = ___;',
          '  } else {',
          '    rear = (rear + ___) % ___;',
          '  }',
          '  arr[rear] = ___;',
          '}',
        ],
        blanks: [['%'], ['-1'], ['0'], ['1'], ['size'], ['x']],
        concept: 'circular_queue_enqueue_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix dequeue operation in circular queue where front is not updated correctly.',
        language: 'cpp',
        code: [
          'int dequeue(){',
          '  if(front == ___) return -1;',
          '  int val = arr[___];',
          '  if(front == rear){',
          '    front = rear = ___;',
          '  } else {',
          '    front = (front + ___) % ___;',
          '  }',
          '  return val;',
          '}',
        ],
        blanks: [['-1'], ['front'], ['-1'], ['1'], ['size']],
        concept: 'circular_queue_dequeue_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix isFull function logic in circular queue.',
        language: 'java',
        code: ['boolean isFull(){', '  return (rear + ___) % ___ == ___;', '}'],
        blanks: [['1'], ['size'], ['front']],
        concept: 'circular_queue_full_check',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix front and rear initialization in circular queue implementation.',
        language: 'python',
        code: [
          'class Queue:',
          '    def __init__(self, size):',
          '        self.size = size',
          '        self.front = ___',
          '        self.rear = ___',
          '        self.arr = [0]*size',
        ],
        blanks: [['-1'], ['-1']],
        concept: 'circular_queue_init',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix circular queue traversal logic where wrap-around is not handled properly.',
        language: 'c',
        code: [
          'void display(){',
          '  if(front == ___) return;',
          '  int i = ___;',
          '  while(i != ___){',
          '    printf("%d ", arr[i]);',
          '    i = (i + ___) % ___;',
          '  }',
          '  printf("%d", arr[___]);',
          '}',
        ],
        blanks: [['-1'], ['front'], ['rear'], ['1'], ['size'], ['rear']],
        concept: 'circular_queue_traversal',
        difficulty: 'medium',
      },
    ],
  },
  deque: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In deque (double ended queue), insertion is allowed at:',
        options: [
          'Front only',
          'Rear only',
          'Both front and rear',
          'Middle only',
        ],
        answer: 2,
        concept: 'deque_operations',
        difficulty: 'easy',
      },
      {
        question: 'Which of the following operations is NOT valid in deque?',
        options: [
          'Insert front',
          'Insert rear',
          'Delete front',
          'Insert middle',
        ],
        answer: 3,
        concept: 'deque_invalid_operation',
        difficulty: 'easy',
      },
      {
        question: 'Deque can be implemented using:',
        options: [
          'Array only',
          'Linked list only',
          'Both array and linked list',
          'Stack only',
        ],
        answer: 2,
        concept: 'deque_implementation',
        difficulty: 'easy',
      },
      {
        question:
          'Which variant of deque allows insertion only at rear and deletion only at front?',
        options: [
          'Input restricted deque',
          'Output restricted deque',
          'Circular deque',
          'Priority deque',
        ],
        answer: 1,
        concept: 'deque_types',
        difficulty: 'medium',
      },
      {
        question: 'Time complexity of insertion at both ends in deque is:',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
        answer: 2,
        concept: 'deque_complexity',
        difficulty: 'easy',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
Deque operations:
insertRear(10), insertFront(20), insertRear(30), deleteFront()
What is front element?
`,
        options: ['10', '20', '30', 'Empty'],
        answer: 0,
        concept: 'deque_sequence',
        difficulty: 'medium',
      },
      {
        question: `
Deque operations:
insertFront(5), insertFront(6), deleteRear(), insertRear(7)
What is rear element?
`,
        options: ['5', '6', '7', 'Empty'],
        answer: 2,
        concept: 'deque_rear_tracking',
        difficulty: 'medium',
      },
      {
        question: `
Deque operations:
insertRear(1), deleteFront(), deleteRear()
What happens?
`,
        options: [
          'Returns 1 twice',
          'Underflow on second delete',
          'Returns 0',
          'Sorted output',
        ],
        answer: 1,
        concept: 'deque_underflow',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If front index is not updated correctly after deleteFront in deque, what issue occurs?
`,
        options: [
          'Correct behavior',
          'Stale or incorrect data access',
          'Faster execution',
          'Sorted order',
        ],
        answer: 1,
        concept: 'deque_front_error',
        difficulty: 'medium',
      },
      {
        question: `
If rear index is not updated after insertRear in deque, what happens?
`,
        options: [
          'Correct execution',
          'Overwriting elements or incorrect insertion',
          'Queue becomes sorted',
          'No issue',
        ],
        answer: 1,
        concept: 'deque_rear_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix insertFront operation in deque using array where index wrap-around is missing.',
        language: 'javascript',
        code: [
          'function insertFront(x){',
          '  if((front == 0 && rear == size-1) || front == rear + ___)',
          '    return "Full";',
          '  if(front == ___){',
          '    front = rear = ___;',
          '  } else if(front == 0){',
          '    front = ___;',
          '  } else {',
          '    front = front - ___;',
          '  }',
          '  arr[front] = ___;',
          '}',
        ],
        blanks: [['1'], ['-1'], ['0'], ['size-1'], ['1'], ['x']],
        concept: 'deque_insert_front',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix insertRear operation in deque where rear update is incorrect.',
        language: 'cpp',
        code: [
          'void insertRear(int x){',
          '  if((front == 0 && rear == size-1) || front == rear + ___)',
          '    return;',
          '  if(front == ___){',
          '    front = rear = ___;',
          '  } else if(rear == size-1){',
          '    rear = ___;',
          '  } else {',
          '    rear = rear + ___;',
          '  }',
          '  arr[rear] = ___;',
          '}',
        ],
        blanks: [['1'], ['-1'], ['0'], ['0'], ['1'], ['x']],
        concept: 'deque_insert_rear',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix deleteFront operation in deque where front is not updated correctly.',
        language: 'java',
        code: [
          'int deleteFront(){',
          '  if(front == ___) return -1;',
          '  int val = arr[___];',
          '  if(front == rear){',
          '    front = rear = ___;',
          '  } else if(front == size-1){',
          '    front = ___;',
          '  } else {',
          '    front = front + ___;',
          '  }',
          '  return val;',
          '}',
        ],
        blanks: [['-1'], ['front'], ['-1'], ['0'], ['1']],
        concept: 'deque_delete_front',
        difficulty: 'medium',
      },

      {
        problem: 'Fix deleteRear operation in deque.',
        language: 'python',
        code: [
          'def deleteRear():',
          '    if front == ___:',
          '        return -1',
          '    val = arr[___]',
          '    if front == rear:',
          '        front = rear = ___',
          '    elif rear == 0:',
          '        rear = ___',
          '    else:',
          '        rear = rear - ___',
          '    return val',
        ],
        blanks: [['-1'], ['rear'], ['-1'], ['size-1'], ['1']],
        concept: 'deque_delete_rear',
        difficulty: 'medium',
      },

      {
        problem: 'Fix deque display logic where traversal misses wrap-around.',
        language: 'c',
        code: [
          'void display(){',
          '  if(front == ___) return;',
          '  int i = ___;',
          '  while(i != ___){',
          '    printf("%d ", arr[i]);',
          '    i = (i + ___) % ___;',
          '  }',
          '  printf("%d", arr[___]);',
          '}',
        ],
        blanks: [['-1'], ['front'], ['rear'], ['1'], ['size'], ['rear']],
        concept: 'deque_traversal',
        difficulty: 'medium',
      },
    ],
  },
  priority_queue: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In priority queue implemented using min heap, which element has highest priority?',
        options: [
          'Largest element',
          'Smallest element',
          'Last inserted',
          'Random element',
        ],
        answer: 1,
        concept: 'min_heap_property',
        difficulty: 'easy',
      },
      {
        question: 'In min heap, parent node is always:',
        options: [
          'Greater than children',
          'Equal to children',
          'Less than or equal to children',
          'Random',
        ],
        answer: 2,
        concept: 'heap_property',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of inserting element in priority queue (min heap) is:',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        answer: 1,
        concept: 'heap_insert_complexity',
        difficulty: 'easy',
      },
      {
        question:
          'Time complexity of extract-min operation in priority queue is:',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
        answer: 1,
        concept: 'heap_delete_complexity',
        difficulty: 'easy',
      },
      {
        question: 'Priority queue is commonly used in:',
        options: [
          'Sorting only',
          'Graph algorithms like Dijkstra',
          'Stack operations',
          'String parsing',
        ],
        answer: 1,
        concept: 'heap_applications',
        difficulty: 'medium',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
Priority queue (min heap):
insert(5), insert(2), insert(8), extractMin()
What is returned?
`,
        options: ['2', '5', '8', 'Error'],
        answer: 0,
        concept: 'heap_extract_min',
        difficulty: 'medium',
      },
      {
        question: `
Min heap operations:
insert(10), insert(3), insert(6), insert(1)
What is root element?
`,
        options: ['1', '3', '6', '10'],
        answer: 0,
        concept: 'heap_root',
        difficulty: 'medium',
      },
      {
        question: `
Min heap:
insert(4), insert(7), insert(1), extractMin(), insert(2)
What is new root?
`,
        options: ['1', '2', '4', '7'],
        answer: 1,
        concept: 'heap_sequence',
        difficulty: 'hard',
      },

      // ===== ERROR (2) =====
      {
        question: `
If heapify-up is not applied after insertion in min heap, what happens?
`,
        options: [
          'Correct heap maintained',
          'Heap property breaks',
          'Sorted order maintained',
          'No issue',
        ],
        answer: 1,
        concept: 'heap_insert_error',
        difficulty: 'medium',
      },
      {
        question: `
If heapify-down is skipped after extract-min, what issue occurs?
`,
        options: [
          'Correct execution',
          'Heap becomes invalid',
          'Faster execution',
          'Sorted array',
        ],
        answer: 1,
        concept: 'heap_delete_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix insert operation in min heap where heapify-up logic is incorrect.',
        language: 'javascript',
        code: [
          'function insert(val){',
          '  heap.push(val);',
          '  let i = heap.length - ___;',
          '  while(i > 0 && heap[Math.floor((i-1)/2)] ___ heap[i]){',
          '    let temp = heap[i];',
          '    heap[i] = heap[Math.floor((i-1)/2)];',
          '    heap[Math.floor((i-1)/2)] = ___;',
          '    i = Math.floor((i-1)/___);',
          '  }',
          '}',
        ],
        blanks: [['1'], ['>'], ['temp'], ['2']],
        concept: 'heap_insert_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix extract-min operation where heapify-down logic is broken.',
        language: 'cpp',
        code: [
          'int extractMin(){',
          '  if(heap.size() == ___) return -1;',
          '  int root = heap[___];',
          '  heap[0] = heap.back();',
          '  heap.pop_back();',
          '  heapify( ___ );',
          '  return root;',
          '}',
        ],
        blanks: [['0'], ['0'], ['0']],
        concept: 'heap_extract_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix heapify-down logic in min heap.',
        language: 'java',
        code: [
          'void heapify(int i){',
          '  int smallest = ___;',
          '  int left = 2*i + ___;',
          '  int right = 2*i + ___;',
          '',
          '  if(left < size && heap[left] ___ heap[smallest])',
          '    smallest = ___;',
          '',
          '  if(right < size && heap[right] ___ heap[smallest])',
          '    smallest = ___;',
          '',
          '  if(smallest != i){',
          '    swap(i, ___);',
          '    heapify(___);',
          '  }',
          '}',
        ],
        blanks: [
          ['i'],
          ['1'],
          ['2'],
          ['<'],
          ['left'],
          ['<'],
          ['right'],
          ['smallest'],
          ['smallest'],
        ],
        concept: 'heapify_down_fix',
        difficulty: 'hard',
      },

      {
        problem: 'Fix peek operation in priority queue.',
        language: 'python',
        code: [
          'def peek(heap):',
          '    if len(heap) == ___:',
          '        return -1',
          '    return heap[___]',
        ],
        blanks: [['0'], ['0']],
        concept: 'heap_peek',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix building min heap where parent-child relation is incorrect.',
        language: 'c',
        code: [
          'void heapify(int arr[], int n, int i){',
          '  int smallest = ___;',
          '  int left = 2*i + ___;',
          '  int right = 2*i + ___;',
          '',
          '  if(left < n && arr[left] ___ arr[smallest])',
          '    smallest = ___;',
          '',
          '  if(right < n && arr[right] ___ arr[smallest])',
          '    smallest = ___;',
          '',
          '  if(smallest != i){',
          '    swap(arr[i], arr[___]);',
          '    heapify(arr, n, ___);',
          '  }',
          '}',
        ],
        blanks: [
          ['i'],
          ['1'],
          ['2'],
          ['<'],
          ['left'],
          ['<'],
          ['right'],
          ['smallest'],
          ['smallest'],
        ],
        concept: 'heapify_build',
        difficulty: 'hard',
      },
    ],
  },
};

export default queueDataset;
