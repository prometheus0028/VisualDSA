const stackDataset = {
  stack_array: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In stack using array, which principle is followed for insertion and deletion?',
        options: ['FIFO', 'LIFO', 'Priority', 'Random'],
        answer: 1,
        concept: 'stack_lifo',
        difficulty: 'easy',
      },
      {
        question:
          'What condition indicates stack overflow in array implementation?',
        options: ['top == 0', 'top == size - 1', 'top == -1', 'top < size'],
        answer: 1,
        concept: 'stack_overflow',
        difficulty: 'easy',
      },
      {
        question: 'What condition indicates stack underflow?',
        options: ['top == size', 'top == -1', 'top == 0', 'top == size - 1'],
        answer: 1,
        concept: 'stack_underflow',
        difficulty: 'easy',
      },

      // ===== OUTPUT =====
      {
        question: `
Consider stack operations: push(10), push(20), pop(), push(30). What is the top element in stack using array?
`,
        options: ['10', '20', '30', 'Empty'],
        answer: 2,
        concept: 'stack_push_pop_sequence',
        difficulty: 'medium',
      },
      {
        question: `
Given stack initialized empty. Operations: push(5), push(10), push(15), pop(), pop(). What is current top?
`,
        options: ['5', '10', '15', 'Empty'],
        answer: 0,
        concept: 'stack_operation_trace',
        difficulty: 'medium',
      },

      // ===== EXECUTION =====
      {
        question: `
In stack using array, what happens if push is attempted when top == size - 1?
`,
        options: [
          'Element replaces last value',
          'Stack overflow error',
          'Stack doubles size',
          'Nothing happens',
        ],
        answer: 1,
        concept: 'stack_overflow_behavior',
        difficulty: 'easy',
      },

      // ===== ERROR =====
      {
        question: `
If pop operation is performed when stack is empty in array implementation, what occurs?
`,
        options: [
          'Returns 0',
          'Returns null',
          'Stack underflow error',
          'Push happens automatically',
        ],
        answer: 2,
        concept: 'stack_underflow_behavior',
        difficulty: 'easy',
      },

      // ===== ADVANCED =====
      {
        question: `
Why is array-based stack limited compared to linked list implementation?
`,
        options: [
          'Uses recursion',
          'Fixed size limitation',
          'Slower operations',
          'Requires sorting',
        ],
        answer: 1,
        concept: 'stack_array_limitation',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an array-based stack implementation, fix push operation where top is not updated correctly.',
        language: 'javascript',
        code: [
          'function push(stack, x){',
          '  if(top == size - 1) return "overflow";',
          '  top = ___;',
          '  stack[top] = x;',
          '}',
        ],
        blanks: [['top + 1', '++top']],
        concept: 'stack_push_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix pop operation in array stack where element is not returned correctly.',
        language: 'cpp',
        code: [
          'int pop(){',
          '  if(top == ___) return -1;',
          '  int val = stack[top];',
          '  top = ___;',
          '  return val;',
          '}',
        ],
        blanks: [['-1'], ['top - 1', '--top']],
        concept: 'stack_pop_fix',
        difficulty: 'easy',
      },

      {
        problem: 'Fix peek operation in stack using array.',
        language: 'java',
        code: [
          'int peek(){',
          '  if(top == ___) return -1;',
          '  return stack[___];',
          '}',
        ],
        blanks: [['-1'], ['top']],
        concept: 'stack_peek_fix',
        difficulty: 'easy',
      },

      {
        problem: 'Fix isEmpty function in stack implementation.',
        language: 'python',
        code: ['def isEmpty():', '    return ___ == ___'],
        blanks: [['top'], ['-1']],
        concept: 'stack_isempty_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix push logic where overflow condition is incorrectly written.',
        language: 'c',
        code: [
          'void push(int x){',
          '  if(top ___ size-1){',
          '    printf("Overflow");',
          '    return;',
          '  }',
          '  stack[++top] = x;',
          '}',
        ],
        blanks: [['>=']],
        concept: 'stack_overflow_fix',
        difficulty: 'medium',
      },
    ],
  },
  stack_linked_list: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In stack using linked list, where is insertion and deletion performed?',
        options: ['At tail', 'At head', 'At middle', 'Random position'],
        answer: 1,
        concept: 'stack_ll_head_operations',
        difficulty: 'easy',
      },
      {
        question:
          'What is the main advantage of stack using linked list over array?',
        options: [
          'Faster access',
          'Dynamic size',
          'Less memory usage',
          'Uses recursion',
        ],
        answer: 1,
        concept: 'stack_ll_dynamic',
        difficulty: 'easy',
      },
      {
        question:
          'What condition indicates stack underflow in linked list implementation?',
        options: ['top == size', 'top == NULL', 'top == -1', 'size == 0'],
        answer: 1,
        concept: 'stack_ll_underflow',
        difficulty: 'easy',
      },

      // ===== OUTPUT =====
      {
        question: `
Consider stack using linked list. Operations: push(10), push(20), push(30), pop(). What is the top element?
`,
        options: ['10', '20', '30', 'Empty'],
        answer: 1,
        concept: 'stack_ll_operations_trace',
        difficulty: 'medium',
      },
      {
        question: `
After operations push(5), push(7), pop(), push(9) in stack using linked list, what is the top?
`,
        options: ['5', '7', '9', 'Empty'],
        answer: 2,
        concept: 'stack_ll_sequence',
        difficulty: 'medium',
      },

      // ===== EXECUTION =====
      {
        question: `
In stack using linked list, what happens during push operation?
`,
        options: [
          'Node added at end',
          'New node becomes new top and points to previous top',
          'Node inserted randomly',
          'Stack becomes sorted',
        ],
        answer: 1,
        concept: 'stack_ll_push_logic',
        difficulty: 'easy',
      },

      // ===== ERROR =====
      {
        question: `
What error occurs if pop is performed when top == NULL in linked list stack?
`,
        options: [
          'Segmentation fault / null pointer access',
          'Stack overflow',
          'Nothing happens',
          'Value becomes 0',
        ],
        answer: 0,
        concept: 'stack_ll_null_error',
        difficulty: 'medium',
      },

      // ===== ADVANCED =====
      {
        question: `
Why is linked list implementation of stack not limited in size?
`,
        options: [
          'Uses recursion',
          'Memory is dynamically allocated',
          'Uses heap sort',
          'Uses queue internally',
        ],
        answer: 1,
        concept: 'stack_ll_memory',
        difficulty: 'easy',
      },
    ],

    debug: [
      {
        problem:
          'Given stack using linked list, fix push operation where next pointer is not assigned correctly.',
        language: 'javascript',
        code: [
          'function push(x){',
          '  let node = new Node(x);',
          '  node.next = ___;',
          '  top = node;',
          '}',
        ],
        blanks: [['top']],
        concept: 'stack_ll_push_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix pop operation in linked list stack where top pointer is not updated.',
        language: 'cpp',
        code: [
          'int pop(){',
          '  if(top == ___) return -1;',
          '  int val = top->data;',
          '  top = top->___;',
          '  return val;',
          '}',
        ],
        blanks: [['NULL'], ['next']],
        concept: 'stack_ll_pop_fix',
        difficulty: 'easy',
      },

      {
        problem: 'Fix peek operation in stack using linked list.',
        language: 'java',
        code: [
          'int peek(){',
          '  if(top == ___) return -1;',
          '  return top->___;',
          '}',
        ],
        blanks: [['null'], ['data']],
        concept: 'stack_ll_peek_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix memory allocation and linking in linked list push implementation.',
        language: 'c',
        code: [
          'void push(int x){',
          '  struct Node* node = (struct Node*) malloc(sizeof(struct Node));',
          '  node->data = x;',
          '  node->___ = top;',
          '  top = ___;',
          '}',
        ],
        blanks: [['next'], ['node']],
        concept: 'stack_ll_memory_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix error where pop causes segmentation fault due to missing null check.',
        language: 'python',
        code: [
          'def pop():',
          '    if top is ___:',
          '        return None',
          '    val = top.data',
          '    top = top.___',
          '    return val',
        ],
        blanks: [['None'], ['next']],
        concept: 'stack_ll_null_fix',
        difficulty: 'medium',
      },
    ],
  },
  infix_to_postfix: {
    mcq: [
      // ===== CONCEPT =====
      {
        question:
          'In infix to postfix conversion using stack, what is the main purpose of the stack?',
        options: [
          'Store operands',
          'Store operators and manage precedence',
          'Sort expression',
          'Evaluate expression',
        ],
        answer: 1,
        concept: 'infix_stack_usage',
        difficulty: 'easy',
      },
      {
        question:
          'Which of the following has highest precedence in infix expressions?',
        options: ['+', '-', '*', '^'],
        answer: 3,
        concept: 'infix_precedence',
        difficulty: 'easy',
      },
      {
        question:
          'Why are parentheses important in infix to postfix conversion?',
        options: [
          'To increase complexity',
          'To override operator precedence',
          'To reduce memory',
          'No reason',
        ],
        answer: 1,
        concept: 'infix_parenthesis',
        difficulty: 'easy',
      },

      // ===== OUTPUT =====
      {
        question: `
Convert the infix expression A + B * C to postfix using stack method.
`,
        options: ['ABC+*', 'ABC*+', 'AB+C*', 'A+BC*'],
        answer: 1,
        concept: 'infix_basic_conversion',
        difficulty: 'medium',
      },
      {
        question: `
Convert the infix expression (A + B) * C to postfix.
`,
        options: ['AB+C*', 'ABC+*', 'A+B*C', 'AB*C+'],
        answer: 0,
        concept: 'infix_parenthesis_conversion',
        difficulty: 'medium',
      },
      {
        question: `
Convert infix expression A + B * C - D to postfix.
`,
        options: ['ABC*+D-', 'AB+C*D-', 'ABC+*D-', 'ABCD*+-'],
        answer: 0,
        concept: 'infix_multiple_ops',
        difficulty: 'medium',
      },

      // ===== EXECUTION =====
      {
        question: `
While converting infix to postfix, when do we pop operators from stack?
`,
        options: [
          'When stack is empty',
          'When operator precedence is higher or equal than incoming operator',
          'Always pop',
          'Never pop',
        ],
        answer: 1,
        concept: 'infix_pop_condition',
        difficulty: 'medium',
      },

      // ===== ERROR =====
      {
        question: `
What happens if operator precedence is ignored in infix to postfix conversion?
`,
        options: [
          'Correct output',
          'Incorrect postfix expression',
          'Faster conversion',
          'Memory overflow',
        ],
        answer: 1,
        concept: 'infix_precedence_error',
        difficulty: 'medium',
      },
      {
        question: `
What happens if parentheses are not handled properly during conversion?
`,
        options: [
          'No effect',
          'Wrong order of operations',
          'Stack overflow',
          'Infinite loop',
        ],
        answer: 1,
        concept: 'infix_parenthesis_error',
        difficulty: 'medium',
      },

      // ===== ADVANCED =====
      {
        question: `
Why is postfix expression evaluation easier than infix evaluation?
`,
        options: [
          'No precedence handling required',
          'Uses recursion',
          'Uses sorting',
          'Uses binary search',
        ],
        answer: 0,
        concept: 'postfix_advantage',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Given an infix expression string, fix logic where operands are not correctly added to postfix output.',
        language: 'javascript',
        code: ['if(isOperand(ch)){', '  postfix += ___;', '}'],
        blanks: [['ch']],
        concept: 'infix_operand_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix operator precedence comparison in infix to postfix conversion.',
        language: 'cpp',
        code: [
          'while(!st.empty() && precedence(st.top()) ___ precedence(ch)){',
          '  postfix += st.top();',
          '  st.pop();',
          '}',
        ],
        blanks: [['>=']],
        concept: 'infix_precedence_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix handling of opening parenthesis in infix to postfix conversion.',
        language: 'java',
        code: ['if(ch == ___){', '  stack.push(ch);', '}'],
        blanks: [["'('"]],
        concept: 'infix_open_paren_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix closing parenthesis logic to correctly pop until opening parenthesis.',
        language: 'python',
        code: [
          'elif ch == ")":',
          '    while stack and stack[-1] ___ "(":',
          '        postfix += stack.pop()',
          '    stack.pop()',
        ],
        blanks: [['!=']],
        concept: 'infix_close_paren_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix final step where remaining operators in stack are not appended to postfix expression.',
        language: 'c',
        code: [
          'while(!isEmpty(stack)){',
          '  postfix += ___;',
          '  pop(stack);',
          '}',
        ],
        blanks: [['peek(stack)']],
        concept: 'infix_remaining_ops_fix',
        difficulty: 'medium',
      },
    ],
  },
  tower_of_hanoi: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Tower of Hanoi problem, what is the minimum number of moves required to solve for n disks?',
        options: ['n^2', '2^n - 1', 'n!', '2n'],
        answer: 1,
        concept: 'hanoi_moves_formula',
        difficulty: 'easy',
      },
      {
        question: 'Tower of Hanoi is an example of which technique in DSA?',
        options: ['Greedy', 'Dynamic Programming', 'Recursion', 'Backtracking'],
        answer: 2,
        concept: 'hanoi_recursion',
        difficulty: 'easy',
      },
      {
        question:
          'In Tower of Hanoi, what is the base condition for recursion?',
        options: ['n == 1', 'n == 0', 'n == 2', 'n == -1'],
        answer: 0,
        concept: 'hanoi_base_case',
        difficulty: 'easy',
      },
      {
        question: 'Why does Tower of Hanoi follow divide and conquer strategy?',
        options: [
          'It sorts elements',
          'It divides problem into smaller subproblems recursively',
          'It uses loops',
          'It uses arrays',
        ],
        answer: 1,
        concept: 'hanoi_divide_conquer',
        difficulty: 'medium',
      },
      {
        question: 'What is the time complexity of Tower of Hanoi algorithm?',
        options: ['O(n)', 'O(log n)', 'O(2^n)', 'O(n^2)'],
        answer: 2,
        concept: 'hanoi_time_complexity',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Tower of Hanoi, for n = 2 disks, how many moves are required?
`,
        options: ['2', '3', '4', '1'],
        answer: 1,
        concept: 'hanoi_small_case',
        difficulty: 'easy',
      },
      {
        question: `
In Tower of Hanoi, for n = 3 disks, how many moves are required?
`,
        options: ['5', '6', '7', '8'],
        answer: 2,
        concept: 'hanoi_moves_3',
        difficulty: 'medium',
      },
      {
        question: `
If Tower of Hanoi is solved for 3 disks from A to C using B, what is the first move?
`,
        options: [
          'Move disk 1 from A to C',
          'Move disk 1 from A to B',
          'Move disk 2 from A to C',
          'Move disk 3 from A to C',
        ],
        answer: 1,
        concept: 'hanoi_first_move',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
If base condition (n == 1) is removed in Tower of Hanoi recursion, what will happen?
`,
        options: [
          'Correct output',
          'Infinite recursion / stack overflow',
          'Faster execution',
          'No effect',
        ],
        answer: 1,
        concept: 'hanoi_missing_base',
        difficulty: 'medium',
      },
      {
        question: `
If auxiliary and destination rods are swapped incorrectly in recursive calls, what will happen in Tower of Hanoi?
`,
        options: [
          'Correct solution',
          'Wrong sequence of moves',
          'Faster solution',
          'Less moves required',
        ],
        answer: 1,
        concept: 'hanoi_wrong_parameters',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Rahul is implementing Tower of Hanoi but recursion logic is incorrect. Fix all missing parts to correctly move disks.',
        language: 'javascript',
        code: [
          'function hanoi(n, from, to, aux){',
          '  if(n == ___){',
          '    console.log("Move disk 1 from " + ___ + " to " + ___);',
          '    return;',
          '  }',
          '  hanoi(n-1, ___, ___, ___);',
          '  console.log("Move disk " + n + " from " + ___ + " to " + ___);',
          '  hanoi(n-1, ___, ___, ___);',
          '}',
        ],
        blanks: [
          ['1'],
          ['from'],
          ['to'],
          ['from'],
          ['aux'],
          ['to'],
          ['from'],
          ['to'],
          ['aux'],
        ],
        concept: 'hanoi_recursive_structure',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Tower of Hanoi implementation where parameters in recursive calls are wrongly placed.',
        language: 'cpp',
        code: [
          'void hanoi(int n, char from, char to, char aux){',
          '  if(n == ___){',
          '    cout << "Move disk 1 from " << ___ << " to " << ___;',
          '    return;',
          '  }',
          '  hanoi(n-1, ___, ___, ___);',
          '  cout << "Move disk " << n << " from " << ___ << " to " << ___;',
          '  hanoi(n-1, ___, ___, ___);',
          '}',
        ],
        blanks: [
          ['1'],
          ['from'],
          ['to'],
          ['from'],
          ['aux'],
          ['to'],
          ['from'],
          ['to'],
          ['aux'],
        ],
        concept: 'hanoi_parameter_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Java Tower of Hanoi code where base condition and recursive calls are incomplete.',
        language: 'java',
        code: [
          'void hanoi(int n, char from, char to, char aux){',
          '  if(n == ___){',
          '    System.out.println("Move disk 1 from " + ___ + " to " + ___);',
          '    return;',
          '  }',
          '  hanoi(___, ___, ___, ___);',
          '  System.out.println("Move disk " + ___ + " from " + ___ + " to " + ___);',
          '  hanoi(___, ___, ___, ___);',
          '}',
        ],
        blanks: [
          ['1'],
          ['from'],
          ['to'],
          ['n-1'],
          ['from'],
          ['aux'],
          ['to'],
          ['n'],
          ['from'],
          ['to'],
          ['n-1'],
          ['aux'],
          ['to'],
          ['from'],
        ],
        concept: 'hanoi_full_logic',
        difficulty: 'hard',
      },

      {
        problem:
          'Fix Python Tower of Hanoi implementation where order of recursive calls is wrong.',
        language: 'python',
        code: [
          'def hanoi(n, from_, to_, aux):',
          '    if n == ___:',
          '        print("Move disk 1 from", ___, "to", ___)',
          '        return',
          '    hanoi(n-1, ___, ___, ___)',
          '    print("Move disk", ___, "from", ___, "to", ___)',
          '    hanoi(n-1, ___, ___, ___)',
        ],
        blanks: [
          ['1'],
          ['from_'],
          ['to_'],
          ['from_'],
          ['aux'],
          ['to_'],
          ['n'],
          ['from_'],
          ['to_'],
          ['aux'],
          ['to_'],
          ['from_'],
        ],
        concept: 'hanoi_order_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix C implementation of Tower of Hanoi where recursion arguments are mismatched.',
        language: 'c',
        code: [
          'void hanoi(int n, char from, char to, char aux){',
          '  if(n == ___){',
          '    printf("Move disk 1 from %c to %c", ___, ___);',
          '    return;',
          '  }',
          '  hanoi(___, ___, ___, ___);',
          '  printf("Move disk %d from %c to %c", ___, ___, ___);',
          '  hanoi(___, ___, ___, ___);',
          '}',
        ],
        blanks: [
          ['1'],
          ['from'],
          ['to'],
          ['n-1'],
          ['from'],
          ['aux'],
          ['to'],
          ['n'],
          ['from'],
          ['to'],
          ['n-1'],
          ['aux'],
          ['to'],
          ['from'],
        ],
        concept: 'hanoi_c_fix',
        difficulty: 'hard',
      },
    ],
  },
  postfix_evaluation: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In postfix expression evaluation using stack, what happens when an operand is encountered?',
        options: [
          'It is ignored',
          'It is pushed onto stack',
          'It is popped from stack',
          'It is multiplied',
        ],
        answer: 1,
        concept: 'postfix_operand_push',
        difficulty: 'easy',
      },
      {
        question:
          'In postfix evaluation, when an operator is encountered, what is the correct operation?',
        options: [
          'Push operator',
          'Pop two operands, apply operator, push result',
          'Ignore operator',
          'Sort stack',
        ],
        answer: 1,
        concept: 'postfix_operator_process',
        difficulty: 'easy',
      },
      {
        question:
          'Why does postfix evaluation not require precedence handling?',
        options: [
          'Operators are ignored',
          'Expression is already in evaluation order',
          'Uses recursion',
          'Uses sorting',
        ],
        answer: 1,
        concept: 'postfix_no_precedence',
        difficulty: 'easy',
      },
      {
        question:
          'What data structure is primarily used for postfix evaluation?',
        options: ['Queue', 'Stack', 'Array', 'Tree'],
        answer: 1,
        concept: 'postfix_stack_usage',
        difficulty: 'easy',
      },
      {
        question:
          'What is the time complexity of postfix evaluation for n tokens?',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        answer: 0,
        concept: 'postfix_time_complexity',
        difficulty: 'medium',
      },

      // ===== OUTPUT (3) =====
      {
        question: `
Evaluate postfix expression: 2 3 + 4 *
`,
        options: ['20', '14', '10', '9'],
        answer: 0,
        concept: 'postfix_basic_eval',
        difficulty: 'medium',
      },
      {
        question: `
Evaluate postfix expression: 5 6 2 + * 3 -
`,
        options: ['37', '43', '35', '39'],
        answer: 0,
        concept: 'postfix_complex_eval',
        difficulty: 'medium',
      },
      {
        question: `
Evaluate postfix expression: 10 2 8 * + 3 -
`,
        options: ['23', '25', '19', '21'],
        answer: 0,
        concept: 'postfix_multi_step',
        difficulty: 'medium',
      },

      // ===== ERROR (2) =====
      {
        question: `
If only one operand is popped instead of two during postfix evaluation, what happens?
`,
        options: [
          'Correct result',
          'Incorrect evaluation',
          'Faster execution',
          'Stack becomes sorted',
        ],
        answer: 1,
        concept: 'postfix_operand_error',
        difficulty: 'medium',
      },
      {
        question: `
If operands are popped in wrong order (a op b instead of b op a), what happens?
`,
        options: [
          'Correct result',
          'Incorrect result due to operand order',
          'No effect',
          'Faster execution',
        ],
        answer: 1,
        concept: 'postfix_order_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix postfix evaluation logic where operands are not correctly pushed to stack.',
        language: 'javascript',
        code: [
          'if(isOperand(ch)){',
          '  stack.push(___);',
          '} else {',
          '  let b = stack.___();',
          '  let a = stack.___();',
          '  let res = ___;',
          '  stack.___(res);',
          '}',
        ],
        blanks: [
          ['ch'],
          ['pop'],
          ['pop'],
          ['a + b', 'a - b', 'a * b', 'a / b'],
          ['push'],
        ],
        concept: 'postfix_push_pop_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix postfix evaluation where operator application is incorrect.',
        language: 'cpp',
        code: [
          'int b = st.top(); st.pop();',
          'int a = st.top(); st.pop();',
          'int res;',
          'if(op == "+") res = ___;',
          'else if(op == "-") res = ___;',
          'else if(op == "*") res = ___;',
          'else res = ___;',
          'st.push(___);',
        ],
        blanks: [['a + b'], ['a - b'], ['a * b'], ['a / b'], ['res']],
        concept: 'postfix_operator_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Java postfix evaluation where order of operands is reversed incorrectly.',
        language: 'java',
        code: [
          'int b = stack.pop();',
          'int a = stack.pop();',
          'int res = 0;',
          'switch(op){',
          '  case "+": res = ___; break;',
          '  case "-": res = ___; break;',
          '  case "*": res = ___; break;',
          '  case "/": res = ___; break;',
          '}',
          'stack.___(res);',
        ],
        blanks: [['a + b'], ['a - b'], ['a * b'], ['a / b'], ['push']],
        concept: 'postfix_order_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python postfix evaluation where stack operations are missing.',
        language: 'python',
        code: [
          'for ch in expr:',
          '    if ch.isdigit():',
          '        stack.___(int(ch))',
          '    else:',
          '        b = stack.___()',
          '        a = stack.___()',
          '        res = ___',
          '        stack.___(res)',
        ],
        blanks: [
          ['append'],
          ['pop'],
          ['pop'],
          ['a + b', 'a - b', 'a * b', 'a / b'],
          ['append'],
        ],
        concept: 'postfix_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix C postfix evaluation where incorrect stack indexing causes wrong result.',
        language: 'c',
        code: [
          'int b = pop(stack);',
          'int a = pop(stack);',
          'int res;',
          'if(op == "+") res = ___;',
          'else if(op == "-") res = ___;',
          'else if(op == "*") res = ___;',
          'else res = ___;',
          'push(stack, ___);',
        ],
        blanks: [['a + b'], ['a - b'], ['a * b'], ['a / b'], ['res']],
        concept: 'postfix_c_fix',
        difficulty: 'medium',
      },
    ],
  },
};

export default stackDataset;
