const treeDataset = {
  binary_tree: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Binary Tree, what is the maximum number of nodes at level L (root at level 0)?',
        options: ['2^L', '2^(L-1)', 'L^2', '2L'],
        answer: 0,
        concept: 'bt_level_nodes',
        difficulty: 'medium',
      },
      {
        question:
          'In Binary Tree, what is the maximum number of nodes in a tree of height h?',
        options: ['2^h - 1', '2^(h+1) - 1', 'h^2', '2h'],
        answer: 1,
        concept: 'bt_max_nodes',
        difficulty: 'medium',
      },
      {
        question: 'In Binary Tree, height is defined as:',
        options: [
          'Number of nodes',
          'Number of edges in longest path from root to leaf',
          'Number of children',
          'Level of node',
        ],
        answer: 1,
        concept: 'bt_height',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Tree, number of edges in a tree with n nodes is:',
        options: ['n', 'n-1', 'n+1', '2n'],
        answer: 1,
        concept: 'bt_edges',
        difficulty: 'easy',
      },
      {
        question:
          'Which Binary Tree type ensures minimal height for given nodes?',
        options: [
          'Full Binary Tree',
          'Complete Binary Tree',
          'Skewed Tree',
          'Binary Search Tree',
        ],
        answer: 1,
        concept: 'bt_complete',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Binary Tree:
        1
       / \\
      2   3
     /
    4

What is height of this Binary Tree?
`,
        options: ['2', '3', '4', '1'],
        answer: 1,
        concept: 'bt_height_compute',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree, consider recursive count:

int count(Node* root){
 if(root == NULL) return 0;
 return 1 + count(root->left) + count(root->right);
}

For tree with 5 nodes, what is output?
`,
        options: ['4', '5', '6', 'Depends'],
        answer: 1,
        concept: 'bt_count_nodes',
        difficulty: 'easy',
      },
      {
        question: `
In Binary Tree:

        10
       /  \\
      20   30
     / \\
    40 50

What is total number of leaf nodes?
`,
        options: ['2', '3', '4', '5'],
        answer: 1,
        concept: 'bt_leaf_count',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In Binary Tree height calculation, if base case returns -1 instead of 0, what happens?
`,
        options: [
          'Height becomes incorrect (reduced by 1)',
          'Correct height',
          'Infinite recursion',
          'Memory leak',
        ],
        answer: 0,
        concept: 'bt_height_error',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree recursion, forgetting null check leads to:
`,
        options: [
          'Correct traversal',
          'Segmentation fault / crash',
          'Sorted output',
          'No issue',
        ],
        answer: 1,
        concept: 'bt_null_error',
        difficulty: 'easy',
      },
    ],

    debug: [
      {
        problem:
          'Given a Binary Tree, fix recursive height calculation where base case and max logic are incorrect.',
        language: 'cpp',
        code: [
          'int height(Node* root){',
          '  if(root == ___) return ___;',
          '  int left = height(root->___);',
          '  int right = height(root->___);',
          '  return ___(left, right) + ___;',
          '}',
        ],
        blanks: [['NULL'], ['0'], ['left'], ['right'], ['max'], ['1']],
        concept: 'bt_height_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Binary Tree node count function where recursion is incomplete.',
        language: 'java',
        code: [
          'int count(Node root){',
          '  if(root == ___) return ___;',
          '  int left = count(root.___);',
          '  int right = count(root.___);',
          '  return ___ + left + right;',
          '}',
        ],
        blanks: [['null'], ['0'], ['left'], ['right'], ['1']],
        concept: 'bt_count_fix',
        difficulty: 'easy',
      },

      {
        problem: 'Fix Binary Tree leaf count logic with missing conditions.',
        language: 'python',
        code: [
          'def count_leaf(root):',
          '    if root is ___:',
          '        return ___',
          '    if root.left is ___ and root.right is ___:',
          '        return ___',
          '    return count_leaf(root.___) + count_leaf(root.___)',
        ],
        blanks: [
          ['None'],
          ['0'],
          ['None'],
          ['None'],
          ['1'],
          ['left'],
          ['right'],
        ],
        concept: 'bt_leaf_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Binary Tree search logic where recursive calls are incorrect.',
        language: 'javascript',
        code: [
          'function search(root, key){',
          '  if(root == ___) return ___;',
          '  if(root.data === ___) return ___;',
          '  return search(root.___, key) || search(root.___, key);',
          '}',
        ],
        blanks: [['null'], ['false'], ['key'], ['true'], ['left'], ['right']],
        concept: 'bt_search_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Binary Tree sum calculation function where accumulation logic is wrong.',
        language: 'c',
        code: [
          'int sum(struct Node* root){',
          '  if(root == ___) return ___;',
          '  return root->___ + sum(root->___) + sum(root->___);',
          '}',
        ],
        blanks: [['NULL'], ['0'], ['data'], ['left'], ['right']],
        concept: 'bt_sum_fix',
        difficulty: 'easy',
      },
    ],
  },
  inorder: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Binary Tree, inorder traversal visits nodes in which sequence?',
        options: [
          'Root → Left → Right',
          'Left → Root → Right',
          'Left → Right → Root',
          'Root → Right → Left',
        ],
        answer: 1,
        concept: 'inorder_sequence',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Search Tree, inorder traversal produces:',
        options: [
          'Reverse sorted order',
          'Sorted order',
          'Random order',
          'Level order',
        ],
        answer: 1,
        concept: 'inorder_bst_property',
        difficulty: 'medium',
      },
      {
        question:
          'In Binary Tree, recursion stack depth during inorder traversal depends on:',
        options: [
          'Number of nodes',
          'Height of tree',
          'Number of leaves',
          'Width of tree',
        ],
        answer: 1,
        concept: 'inorder_stack_depth',
        difficulty: 'medium',
      },
      {
        question:
          'In Binary Tree, iterative inorder traversal uses which data structure?',
        options: ['Queue', 'Stack', 'Heap', 'Array'],
        answer: 1,
        concept: 'inorder_stack_usage',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Tree, inorder traversal is most useful for:',
        options: [
          'Finding shortest path',
          'Sorting BST elements',
          'Detecting cycles',
          'Balancing tree',
        ],
        answer: 1,
        concept: 'inorder_usage',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Binary Tree:

        10
       /  \\
      5    15
     / \\     
    2   7    

What is inorder traversal output?
`,
        options: ['10 5 2 7 15', '2 5 7 10 15', '5 2 7 10 15', '2 7 5 10 15'],
        answer: 1,
        concept: 'inorder_output_basic',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Search Tree:

        20
       /  \\
      10   30
     /  \\
    5   15

What is inorder traversal output?
`,
        options: [
          '20 10 5 15 30',
          '5 10 15 20 30',
          '10 5 15 20 30',
          '5 15 10 20 30',
        ],
        answer: 1,
        concept: 'inorder_bst_output',
        difficulty: 'easy',
      },
      {
        question: `
In Binary Tree, consider code:

void inorder(Node* root){
 if(root == NULL) return;
 inorder(root->left);
 printf("%d ", root->data);
 inorder(root->right);
}

How many times is each node visited?
`,
        options: ['Once', 'Twice', 'Thrice', 'Depends'],
        answer: 0,
        concept: 'inorder_visit_count',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In Binary Tree inorder traversal, if you forget to process root between left and right recursion, what happens?
`,
        options: [
          'Correct traversal',
          'Root values missing in output',
          'Infinite recursion',
          'Segmentation fault',
        ],
        answer: 1,
        concept: 'inorder_missing_root',
        difficulty: 'medium',
      },
      {
        question: `
In iterative inorder traversal, if stack is not used and only recursion is removed, what happens?
`,
        options: [
          'Traversal still works',
          'Nodes cannot be revisited correctly',
          'Sorting occurs',
          'Tree becomes balanced',
        ],
        answer: 1,
        concept: 'inorder_stack_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix recursive inorder traversal in Binary Tree where order of calls is incorrect.',
        language: 'cpp',
        code: [
          'void inorder(Node* root){',
          '  if(root == ___) return;',
          '  inorder(root->___);',
          '  cout << root->___;',
          '  inorder(root->___);',
          '}',
        ],
        blanks: [['NULL'], ['left'], ['data'], ['right']],
        concept: 'inorder_recursive_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix iterative inorder traversal in Binary Tree using stack where traversal logic is incomplete.',
        language: 'cpp',
        code: [
          'void inorder(Node* root){',
          '  stack<Node*> st;',
          '  Node* curr = ___;',
          '  while(curr != NULL || !st.empty()){',
          '    while(curr != NULL){',
          '      st.push(curr);',
          '      curr = curr->___;',
          '    }',
          '    curr = st.top();',
          '    st.pop();',
          '    cout << curr->___;',
          '    curr = curr->___;',
          '  }',
          '}',
        ],
        blanks: [['root'], ['left'], ['data'], ['right']],
        concept: 'inorder_iterative_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python inorder traversal where null check and recursion are incorrect.',
        language: 'python',
        code: [
          'def inorder(root):',
          '    if root is ___:',
          '        return',
          '    inorder(root.___)',
          '    print(root.___)',
          '    inorder(root.___)',
        ],
        blanks: [['None'], ['left'], ['data'], ['right']],
        concept: 'inorder_python_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Java inorder traversal where root processing is misplaced.',
        language: 'java',
        code: [
          'void inorder(Node root){',
          '  if(root == ___) return;',
          '  inorder(root.___);',
          '  System.out.println(root.___);',
          '  inorder(root.___);',
          '}',
        ],
        blanks: [['null'], ['left'], ['data'], ['right']],
        concept: 'inorder_java_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Binary Tree inorder traversal where stack push/pop logic is incorrect.',
        language: 'javascript',
        code: [
          'function inorder(root){',
          '  let stack = [];',
          '  let curr = ___;',
          '  while(curr !== null || stack.length > 0){',
          '    while(curr !== null){',
          '      stack.push(curr);',
          '      curr = curr.___;',
          '    }',
          '    curr = stack.pop();',
          '    console.log(curr.___);',
          '    curr = curr.___;',
          '  }',
          '}',
        ],
        blanks: [['root'], ['left'], ['data'], ['right']],
        concept: 'inorder_js_fix',
        difficulty: 'medium',
      },
    ],
  },
  preorder: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Binary Tree, preorder traversal visits nodes in which order?',
        options: [
          'Left → Root → Right',
          'Root → Left → Right',
          'Left → Right → Root',
          'Right → Root → Left',
        ],
        answer: 1,
        concept: 'preorder_sequence',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Tree, preorder traversal is most useful for:',
        options: [
          'Sorting elements',
          'Tree serialization / copying structure',
          'Finding shortest path',
          'Balancing tree',
        ],
        answer: 1,
        concept: 'preorder_usage',
        difficulty: 'medium',
      },
      {
        question:
          'In Binary Tree, recursion stack depth during preorder traversal depends on:',
        options: [
          'Number of nodes',
          'Height of tree',
          'Number of leaves',
          'Width of tree',
        ],
        answer: 1,
        concept: 'preorder_stack_depth',
        difficulty: 'medium',
      },
      {
        question: 'In Binary Tree, iterative preorder traversal uses:',
        options: ['Queue', 'Stack', 'Heap', 'Array'],
        answer: 1,
        concept: 'preorder_stack_usage',
        difficulty: 'easy',
      },
      {
        question:
          'In Binary Tree, which subtree is processed first in preorder traversal?',
        options: [
          'Right subtree',
          'Left subtree',
          'Random subtree',
          'No subtree',
        ],
        answer: 1,
        concept: 'preorder_left_priority',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Binary Tree:

        10
       /  \\
      5    15
     / \\     
    2   7    

What is preorder traversal output?
`,
        options: ['10 5 2 7 15', '2 5 7 10 15', '5 2 7 10 15', '10 2 5 7 15'],
        answer: 0,
        concept: 'preorder_output_basic',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree:

        1
       / \\
      2   3
         / \\
        4   5

What is preorder traversal output?
`,
        options: ['1 2 3 4 5', '1 2 3 5 4', '2 1 3 4 5', '1 3 2 4 5'],
        answer: 0,
        concept: 'preorder_output_structure',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree, consider recursive code:

void preorder(Node* root){
 if(root == NULL) return;
 cout << root->data;
 preorder(root->left);
 preorder(root->right);
}

How many times is each node printed?
`,
        options: ['Once', 'Twice', 'Thrice', 'Depends'],
        answer: 0,
        concept: 'preorder_visit_count',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In Binary Tree preorder traversal, if root is processed after recursive calls, what happens?
`,
        options: [
          'Preorder becomes correct',
          'Traversal becomes postorder',
          'Traversal becomes inorder',
          'Infinite recursion',
        ],
        answer: 1,
        concept: 'preorder_order_error',
        difficulty: 'medium',
      },
      {
        question: `
In iterative preorder traversal, if left child is pushed before right child into stack, what happens?
`,
        options: [
          'Correct traversal',
          'Right subtree gets processed first',
          'Infinite loop',
          'Sorted output',
        ],
        answer: 1,
        concept: 'preorder_stack_order_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix recursive preorder traversal in Binary Tree where order of execution is incorrect.',
        language: 'cpp',
        code: [
          'void preorder(Node* root){',
          '  if(root == ___) return;',
          '  cout << root->___;',
          '  preorder(root->___);',
          '  preorder(root->___);',
          '}',
        ],
        blanks: [['NULL'], ['data'], ['left'], ['right']],
        concept: 'preorder_recursive_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix iterative preorder traversal using stack where push order is incorrect.',
        language: 'cpp',
        code: [
          'void preorder(Node* root){',
          '  if(root == ___) return;',
          '  stack<Node*> st;',
          '  st.push(___);',
          '  while(!st.empty()){',
          '    Node* curr = st.top();',
          '    st.pop();',
          '    cout << curr->___;',
          '    if(curr->___) st.push(curr->___);',
          '    if(curr->___) st.push(curr->___);',
          '  }',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['root'],
          ['data'],
          ['right'],
          ['right'],
          ['left'],
          ['left'],
        ],
        concept: 'preorder_iterative_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python preorder traversal where recursive calls are misplaced.',
        language: 'python',
        code: [
          'def preorder(root):',
          '    if root is ___:',
          '        return',
          '    print(root.___)',
          '    preorder(root.___)',
          '    preorder(root.___)',
        ],
        blanks: [['None'], ['data'], ['left'], ['right']],
        concept: 'preorder_python_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Java preorder traversal where null check and traversal order are incorrect.',
        language: 'java',
        code: [
          'void preorder(Node root){',
          '  if(root == ___) return;',
          '  System.out.println(root.___);',
          '  preorder(root.___);',
          '  preorder(root.___);',
          '}',
        ],
        blanks: [['null'], ['data'], ['left'], ['right']],
        concept: 'preorder_java_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Binary Tree preorder traversal in JavaScript where stack logic is incorrect.',
        language: 'javascript',
        code: [
          'function preorder(root){',
          '  if(root == ___) return;',
          '  let stack = [];',
          '  stack.push(___);',
          '  while(stack.length > 0){',
          '    let curr = stack.pop();',
          '    console.log(curr.___);',
          '    if(curr->___) stack.push(curr->___);',
          '    if(curr->___) stack.push(curr->___);',
          '  }',
          '}',
        ],
        blanks: [
          ['null'],
          ['root'],
          ['data'],
          ['right'],
          ['right'],
          ['left'],
          ['left'],
        ],
        concept: 'preorder_js_fix',
        difficulty: 'medium',
      },
    ],
  },
  postorder: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Binary Tree, postorder traversal visits nodes in which order?',
        options: [
          'Root → Left → Right',
          'Left → Root → Right',
          'Left → Right → Root',
          'Right → Root → Left',
        ],
        answer: 2,
        concept: 'postorder_sequence',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Tree, postorder traversal is most useful for:',
        options: [
          'Sorting elements',
          'Tree deletion (children before parent)',
          'Finding shortest path',
          'Balancing tree',
        ],
        answer: 1,
        concept: 'postorder_usage',
        difficulty: 'medium',
      },
      {
        question:
          'In Binary Tree, recursion stack depth during postorder traversal depends on:',
        options: [
          'Number of nodes',
          'Height of tree',
          'Number of leaves',
          'Width of tree',
        ],
        answer: 1,
        concept: 'postorder_stack_depth',
        difficulty: 'medium',
      },
      {
        question: 'In Binary Tree, postorder traversal ensures:',
        options: [
          'Parent processed first',
          'Children processed before parent',
          'Left subtree ignored',
          'Right subtree ignored',
        ],
        answer: 1,
        concept: 'postorder_property',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Tree, postorder traversal is used in:',
        options: [
          'Expression evaluation (postfix)',
          'Sorting array',
          'Binary search',
          'Graph traversal',
        ],
        answer: 0,
        concept: 'postorder_expression',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Binary Tree:

        10
       /  \\
      5    15
     / \\     
    2   7    

What is postorder traversal output?
`,
        options: ['10 5 2 7 15', '2 7 5 15 10', '5 2 7 15 10', '2 5 7 15 10'],
        answer: 1,
        concept: 'postorder_output_basic',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree:

        1
       / \\
      2   3
         / \\
        4   5

What is postorder traversal output?
`,
        options: ['1 2 3 4 5', '2 4 5 3 1', '2 3 4 5 1', '4 5 3 2 1'],
        answer: 1,
        concept: 'postorder_output_structure',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree, consider:

void postorder(Node* root){
 if(root == NULL) return;
 postorder(root->left);
 postorder(root->right);
 cout << root->data;
}

How many times is each node printed?
`,
        options: ['Once', 'Twice', 'Thrice', 'Depends'],
        answer: 0,
        concept: 'postorder_visit_count',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In Binary Tree postorder traversal, if root is processed before recursion, what happens?
`,
        options: [
          'Correct traversal',
          'Becomes preorder traversal',
          'Becomes inorder traversal',
          'Infinite recursion',
        ],
        answer: 1,
        concept: 'postorder_order_error',
        difficulty: 'medium',
      },
      {
        question: `
In iterative postorder traversal, why is it harder than inorder or preorder?
`,
        options: [
          'Requires multiple visits or tracking state',
          'Uses queue instead of stack',
          'Tree must be balanced',
          'Cannot be implemented iteratively',
        ],
        answer: 0,
        concept: 'postorder_complexity',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix recursive postorder traversal in Binary Tree where function calls are in wrong order.',
        language: 'cpp',
        code: [
          'void postorder(Node* root){',
          '  if(root == ___) return;',
          '  postorder(root->___);',
          '  postorder(root->___);',
          '  cout << root->___;',
          '}',
        ],
        blanks: [['NULL'], ['left'], ['right'], ['data']],
        concept: 'postorder_recursive_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix iterative postorder traversal using two stacks where push logic is incorrect.',
        language: 'cpp',
        code: [
          'void postorder(Node* root){',
          '  if(root == ___) return;',
          '  stack<Node*> s1, s2;',
          '  s1.push(___);',
          '  while(!s1.empty()){',
          '    Node* curr = s1.top();',
          '    s1.pop();',
          '    s2.push(curr);',
          '    if(curr->___) s1.push(curr->___);',
          '    if(curr->___) s1.push(curr->___);',
          '  }',
          '  while(!s2.empty()){',
          '    cout << s2.top()->___;',
          '    s2.pop();',
          '  }',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['root'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
          ['data'],
        ],
        concept: 'postorder_iterative_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python postorder traversal where recursive calls are misplaced.',
        language: 'python',
        code: [
          'def postorder(root):',
          '    if root is ___:',
          '        return',
          '    postorder(root.___)',
          '    postorder(root.___)',
          '    print(root.___)',
        ],
        blanks: [['None'], ['left'], ['right'], ['data']],
        concept: 'postorder_python_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Java postorder traversal where order of execution is incorrect.',
        language: 'java',
        code: [
          'void postorder(Node root){',
          '  if(root == ___) return;',
          '  postorder(root.___);',
          '  postorder(root.___);',
          '  System.out.println(root.___);',
          '}',
        ],
        blanks: [['null'], ['left'], ['right'], ['data']],
        concept: 'postorder_java_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix JavaScript postorder traversal where stack simulation is incorrect.',
        language: 'javascript',
        code: [
          'function postorder(root){',
          '  if(root == ___) return;',
          '  let stack1 = [], stack2 = [];',
          '  stack1.push(___);',
          '  while(stack1.length > 0){',
          '    let curr = stack1.pop();',
          '    stack2.push(curr);',
          '    if(curr->___) stack1.push(curr->___);',
          '    if(curr->___) stack1.push(curr->___);',
          '  }',
          '  while(stack2.length > 0){',
          '    console.log(stack2.pop().___);',
          '  }',
          '}',
        ],
        blanks: [
          ['null'],
          ['root'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
          ['data'],
        ],
        concept: 'postorder_js_fix',
        difficulty: 'medium',
      },
    ],
  },
  level_order: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Binary Tree, level order traversal follows which approach?',
        options: ['DFS', 'BFS', 'Binary Search', 'Greedy'],
        answer: 1,
        concept: 'level_order_bfs',
        difficulty: 'easy',
      },
      {
        question:
          'In Binary Tree, which data structure is used in level order traversal?',
        options: ['Stack', 'Queue', 'Heap', 'Array'],
        answer: 1,
        concept: 'level_order_queue',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Tree, level order traversal processes nodes:',
        options: [
          'Depth-first',
          'Level by level',
          'Randomly',
          'Only leaf nodes',
        ],
        answer: 1,
        concept: 'level_order_levels',
        difficulty: 'easy',
      },
      {
        question:
          'In Binary Tree, maximum queue size during level order traversal depends on:',
        options: [
          'Height of tree',
          'Width of tree',
          'Number of edges',
          'Depth of node',
        ],
        answer: 1,
        concept: 'level_order_space',
        difficulty: 'medium',
      },
      {
        question: 'In Binary Tree, level order traversal is useful for:',
        options: [
          'Finding shortest path in unweighted tree',
          'Sorting elements',
          'Binary search',
          'Dynamic programming only',
        ],
        answer: 0,
        concept: 'level_order_usage',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Binary Tree:

        10
       /  \\
      5    15
     / \\     
    2   7    

What is level order traversal output?
`,
        options: ['10 5 2 7 15', '10 5 15 2 7', '2 5 7 10 15', '10 2 5 7 15'],
        answer: 1,
        concept: 'level_order_output_basic',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree:

        1
       / \\
      2   3
         / \\
        4   5

What is level order traversal output?
`,
        options: ['1 2 3 4 5', '1 3 2 4 5', '2 1 3 4 5', '1 2 4 3 5'],
        answer: 0,
        concept: 'level_order_output_structure',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree level order traversal, how many times is each node processed?
`,
        options: ['Once', 'Twice', 'Thrice', 'Depends'],
        answer: 0,
        concept: 'level_order_visit_count',
        difficulty: 'easy',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In Binary Tree level order traversal, if stack is used instead of queue, what happens?
`,
        options: [
          'Correct traversal',
          'Becomes DFS traversal',
          'Infinite loop',
          'Tree becomes sorted',
        ],
        answer: 1,
        concept: 'level_order_stack_error',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Tree level order traversal, if children are added in reverse order (right before left), what happens?
`,
        options: [
          'Correct traversal',
          'Nodes of each level appear reversed',
          'Traversal stops early',
          'Infinite recursion',
        ],
        answer: 1,
        concept: 'level_order_order_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Binary Tree level order traversal where queue initialization and insertion are incorrect.',
        language: 'cpp',
        code: [
          'void levelOrder(Node* root){',
          '  if(root == ___) return;',
          '  queue<Node*> q;',
          '  q.push(___);',
          '  while(!q.empty()){',
          '    Node* curr = q.front();',
          '    q.pop();',
          '    cout << curr->___;',
          '    if(curr->___) q.push(curr->___);',
          '    if(curr->___) q.push(curr->___);',
          '  }',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['root'],
          ['data'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
        ],
        concept: 'level_order_cpp_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Binary Tree level order traversal in Java where queue usage is incorrect.',
        language: 'java',
        code: [
          'void levelOrder(Node root){',
          '  if(root == ___) return;',
          '  Queue<Node> q = new LinkedList<>();',
          '  q.add(___);',
          '  while(!q.isEmpty()){',
          '    Node curr = q.poll();',
          '    System.out.print(curr.___);',
          '    if(curr.___ != null) q.add(curr.___);',
          '    if(curr.___ != null) q.add(curr.___);',
          '  }',
          '}',
        ],
        blanks: [
          ['null'],
          ['root'],
          ['data'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
        ],
        concept: 'level_order_java_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Python level order traversal where queue operations are incomplete.',
        language: 'python',
        code: [
          'from collections import deque',
          'def level_order(root):',
          '    if root is ___:',
          '        return',
          '    q = deque()',
          '    q.append(___)',
          '    while q:',
          '        curr = q.popleft()',
          '        print(curr.___)',
          '        if curr.___:',
          '            q.append(curr.___)',
          '        if curr.___:',
          '            q.append(curr.___)',
        ],
        blanks: [
          ['None'],
          ['root'],
          ['data'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
        ],
        concept: 'level_order_python_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Binary Tree level order traversal where level tracking is required using size variable.',
        language: 'cpp',
        code: [
          'void levelOrder(Node* root){',
          '  if(root == ___) return;',
          '  queue<Node*> q;',
          '  q.push(root);',
          '  while(!q.empty()){',
          '    int size = q.___();',
          '    for(int i=0;i<___;i++){',
          '      Node* curr = q.front();',
          '      q.pop();',
          '      cout << curr->___;',
          '      if(curr->___) q.push(curr->___);',
          '      if(curr->___) q.push(curr->___);',
          '    }',
          '  }',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['size'],
          ['size'],
          ['data'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
        ],
        concept: 'level_order_level_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript level order traversal where queue operations are incorrectly implemented.',
        language: 'javascript',
        code: [
          'function levelOrder(root){',
          '  if(root == ___) return;',
          '  let q = [];',
          '  q.push(___);',
          '  while(q.length > 0){',
          '    let curr = q.shift();',
          '    console.log(curr.___);',
          '    if(curr->___) q.push(curr->___);',
          '    if(curr->___) q.push(curr->___);',
          '  }',
          '}',
        ],
        blanks: [
          ['null'],
          ['root'],
          ['data'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
        ],
        concept: 'level_order_js_fix',
        difficulty: 'easy',
      },
    ],
  },
  bst: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In Binary Search Tree, what is the defining property of every node?',
        options: [
          'Left > Root < Right',
          'Left < Root < Right',
          'Left = Root = Right',
          'Random ordering',
        ],
        answer: 1,
        concept: 'bst_property',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Search Tree, which traversal gives sorted order?',
        options: ['Preorder', 'Postorder', 'Inorder', 'Level order'],
        answer: 2,
        concept: 'bst_inorder_sort',
        difficulty: 'easy',
      },
      {
        question:
          'In Binary Search Tree, average time complexity of search is:',
        options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
        answer: 1,
        concept: 'bst_avg_search',
        difficulty: 'medium',
      },
      {
        question:
          'In Binary Search Tree, worst-case time complexity occurs when tree is:',
        options: ['Balanced', 'Complete', 'Skewed (like linked list)', 'Full'],
        answer: 2,
        concept: 'bst_worst_case',
        difficulty: 'medium',
      },
      {
        question: 'In Binary Search Tree, minimum value is found at:',
        options: [
          'Root node',
          'Rightmost node',
          'Leftmost node',
          'Leaf node only',
        ],
        answer: 2,
        concept: 'bst_min',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Binary Search Tree:

Insert elements in order: 10, 5, 15, 3, 7

What is inorder traversal output?
`,
        options: ['10 5 3 7 15', '3 5 7 10 15', '5 3 7 10 15', '3 7 5 10 15'],
        answer: 1,
        concept: 'bst_inorder_output',
        difficulty: 'easy',
      },
      {
        question: `
In Binary Search Tree:

        20
       /  \\
      10   30
     /  \\
    5   15

Search for key = 15.
How many comparisons are made?
`,
        options: ['1', '2', '3', '4'],
        answer: 2,
        concept: 'bst_search_steps',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Search Tree:

        10
       /  \\
      5    20
           /
          15

What is height of BST?
`,
        options: ['2', '3', '4', '1'],
        answer: 1,
        concept: 'bst_height',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In Binary Search Tree insertion, if you always insert to right subtree, what happens?
`,
        options: [
          'Balanced tree',
          'Sorted tree',
          'Skewed tree (degrades performance)',
          'Infinite loop',
        ],
        answer: 2,
        concept: 'bst_insert_error',
        difficulty: 'medium',
      },
      {
        question: `
In Binary Search Tree search, if comparison condition is reversed, what happens?
`,
        options: [
          'Correct search',
          'Search fails / wrong path taken',
          'Infinite recursion',
          'Tree becomes sorted',
        ],
        answer: 1,
        concept: 'bst_compare_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix Binary Search Tree search function where comparison logic is incorrect.',
        language: 'cpp',
        code: [
          'bool search(Node* root, int key){',
          '  if(root == ___) return ___;',
          '  if(root->data == ___) return ___;',
          '  if(key < root->___)',
          '    return search(root->___, key);',
          '  else',
          '    return search(root->___, key);',
          '}',
        ],
        blanks: [
          ['NULL'],
          ['false'],
          ['key'],
          ['true'],
          ['data'],
          ['left'],
          ['right'],
        ],
        concept: 'bst_search_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Binary Search Tree insertion logic where recursive insertion is incorrect.',
        language: 'java',
        code: [
          'Node insert(Node root, int key){',
          '  if(root == ___) return new Node(key);',
          '  if(key < root.___)',
          '    root.___ = insert(root.___, key);',
          '  else',
          '    root.___ = insert(root.___, key);',
          '  return ___;',
          '}',
        ],
        blanks: [
          ['null'],
          ['data'],
          ['left'],
          ['left'],
          ['right'],
          ['right'],
          ['root'],
        ],
        concept: 'bst_insert_fix',
        difficulty: 'medium',
      },

      {
        problem: 'Fix Binary Search Tree function to find minimum element.',
        language: 'cpp',
        code: [
          'Node* findMin(Node* root){',
          '  while(root->___ != ___)',
          '    root = root->___;',
          '  return ___;',
          '}',
        ],
        blanks: [['left'], ['NULL'], ['left'], ['root']],
        concept: 'bst_min_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix Python Binary Search Tree search function where recursion path is incorrect.',
        language: 'python',
        code: [
          'def search(root, key):',
          '    if root is ___:',
          '        return False',
          '    if root.data == ___:',
          '        return True',
          '    if key < root.___:',
          '        return search(root.___, key)',
          '    return search(root.___, key)',
        ],
        blanks: [['None'], ['key'], ['data'], ['left'], ['right']],
        concept: 'bst_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Binary Search Tree deletion helper where successor selection is incorrect.',
        language: 'javascript',
        code: [
          'function findMin(root){',
          '  while(root.___ !== ___){',
          '    root = root.___;',
          '  }',
          '  return ___;',
          '}',
        ],
        blanks: [['left'], ['null'], ['left'], ['root']],
        concept: 'bst_delete_helper',
        difficulty: 'medium',
      },
    ],
  },
  avl: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question:
          'In AVL Tree, what is the main property maintained after every insertion/deletion?',
        options: [
          'Sorted order',
          'Height-balanced property',
          'Heap property',
          'Random structure',
        ],
        answer: 1,
        concept: 'avl_property',
        difficulty: 'easy',
      },
      {
        question: 'In AVL Tree, balance factor of a node is defined as:',
        options: [
          'height(left) + height(right)',
          'height(left) - height(right)',
          'height(right) - height(left)',
          'number of nodes',
        ],
        answer: 1,
        concept: 'avl_balance_factor',
        difficulty: 'easy',
      },
      {
        question: 'In AVL Tree, valid balance factor values are:',
        options: ['-2 to 2', '-1, 0, 1', '0 only', '1 only'],
        answer: 1,
        concept: 'avl_valid_balance',
        difficulty: 'easy',
      },
      {
        question:
          'In AVL Tree, which rotation is used for Left-Left imbalance?',
        options: ['RR Rotation', 'LL Rotation', 'LR Rotation', 'RL Rotation'],
        answer: 1,
        concept: 'avl_ll_rotation',
        difficulty: 'medium',
      },
      {
        question: 'In AVL Tree, time complexity of search is:',
        options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
        answer: 1,
        concept: 'avl_search',
        difficulty: 'easy',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In AVL Tree, insert elements in order: 30, 20, 10

Which rotation is applied?
`,
        options: ['RR Rotation', 'LL Rotation', 'LR Rotation', 'RL Rotation'],
        answer: 1,
        concept: 'avl_rotation_ll_case',
        difficulty: 'medium',
      },
      {
        question: `
In AVL Tree, insert elements: 10, 20, 30

Which rotation is applied?
`,
        options: ['LL Rotation', 'RR Rotation', 'LR Rotation', 'RL Rotation'],
        answer: 1,
        concept: 'avl_rotation_rr_case',
        difficulty: 'medium',
      },
      {
        question: `
In AVL Tree, insert elements: 30, 10, 20

Which rotation is applied?
`,
        options: ['LL Rotation', 'RR Rotation', 'LR Rotation', 'RL Rotation'],
        answer: 2,
        concept: 'avl_rotation_lr_case',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In AVL Tree, if balance factor is not updated after insertion, what happens?
`,
        options: [
          'Tree remains balanced',
          'Tree becomes skewed over time',
          'Infinite loop',
          'No effect',
        ],
        answer: 1,
        concept: 'avl_balance_error',
        difficulty: 'medium',
      },
      {
        question: `
In AVL Tree rotation logic, if pointers are not updated correctly, what happens?
`,
        options: [
          'Correct tree',
          'Tree structure breaks / incorrect links',
          'Sorted output',
          'Balanced automatically',
        ],
        answer: 1,
        concept: 'avl_pointer_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem:
          'Fix AVL Tree height calculation function where null condition is incorrect.',
        language: 'cpp',
        code: [
          'int height(Node* n){',
          '  if(n == ___) return ___;',
          '  return n->___;',
          '}',
        ],
        blanks: [['NULL'], ['0'], ['height']],
        concept: 'avl_height_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix AVL Tree balance factor calculation where subtree heights are used incorrectly.',
        language: 'cpp',
        code: [
          'int getBalance(Node* node){',
          '  if(node == ___) return ___;',
          '  return height(node->___) - height(node->___);',
          '}',
        ],
        blanks: [['NULL'], ['0'], ['left'], ['right']],
        concept: 'avl_balance_fix',
        difficulty: 'easy',
      },

      {
        problem:
          'Fix right rotation in AVL Tree where pointer assignments are incorrect.',
        language: 'java',
        code: [
          'Node rightRotate(Node y){',
          '  Node x = y.___;',
          '  Node T2 = x.___;',
          '',
          '  x.___ = y;',
          '  y.___ = T2;',
          '',
          '  return ___;',
          '}',
        ],
        blanks: [['left'], ['right'], ['right'], ['left'], ['x']],
        concept: 'avl_right_rotation_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix left rotation in AVL Tree where child pointers are incorrect.',
        language: 'python',
        code: [
          'def leftRotate(x):',
          '    y = x.___',
          '    T2 = y.___',
          '',
          '    y.___ = x',
          '    x.___ = T2',
          '',
          '    return ___',
        ],
        blanks: [['right'], ['left'], ['left'], ['right'], ['y']],
        concept: 'avl_left_rotation_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix AVL Tree insertion condition for Left-Left case where comparison is incorrect.',
        language: 'javascript',
        code: [
          'if(balance > 1 && key < node.___)',
          '  return rightRotate(node);',
        ],
        blanks: [['left.data']],
        concept: 'avl_ll_condition_fix',
        difficulty: 'medium',
      },
    ],
  },
  heap: {
    mcq: [
      // ===== CONCEPT (5) =====
      {
        question: 'In Binary Heap, what structure is always maintained?',
        options: [
          'Binary Search Tree',
          'Complete Binary Tree',
          'Balanced BST',
          'Graph',
        ],
        answer: 1,
        concept: 'heap_structure',
        difficulty: 'easy',
      },
      {
        question: 'In Min Heap, which element is always at root?',
        options: [
          'Maximum element',
          'Minimum element',
          'Median',
          'Random element',
        ],
        answer: 1,
        concept: 'min_heap_property',
        difficulty: 'easy',
      },
      {
        question:
          'In Binary Heap array representation, left child index of i is:',
        options: ['2i', '2i+1', 'i/2', 'i+2'],
        answer: 1,
        concept: 'heap_left_child',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Heap, insertion time complexity is:',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        answer: 1,
        concept: 'heap_insert_complexity',
        difficulty: 'easy',
      },
      {
        question: 'In Binary Heap, deletion (extract min/max) requires:',
        options: ['Heapify up', 'Heapify down', 'Sorting', 'Traversal'],
        answer: 1,
        concept: 'heap_delete',
        difficulty: 'medium',
      },

      // ===== OUTPUT BASED (3) =====
      {
        question: `
In Min Heap, insert elements in order: 10, 5, 20, 2

What will be root after all insertions?
`,
        options: ['10', '5', '2', '20'],
        answer: 2,
        concept: 'heap_insert_result',
        difficulty: 'medium',
      },
      {
        question: `
In Max Heap:

Array representation: [50, 30, 40, 10, 20]

What is left child of index 1?
`,
        options: ['10', '20', '40', '30'],
        answer: 0,
        concept: 'heap_indexing',
        difficulty: 'medium',
      },
      {
        question: `
In Min Heap, after removing root from [2, 5, 10, 20], what is new root after heapify?
`,
        options: ['2', '5', '10', '20'],
        answer: 1,
        concept: 'heap_delete_result',
        difficulty: 'medium',
      },

      // ===== ERROR BASED (2) =====
      {
        question: `
In Binary Heap, if heap property is violated after insertion and heapify is not done, what happens?
`,
        options: [
          'Correct heap',
          'Heap becomes invalid',
          'Sorted array',
          'No effect',
        ],
        answer: 1,
        concept: 'heap_property_error',
        difficulty: 'easy',
      },
      {
        question: `
In Binary Heap, incorrect parent index calculation leads to:
`,
        options: [
          'Correct heap',
          'Incorrect structure and comparisons',
          'Infinite recursion',
          'Balanced tree',
        ],
        answer: 1,
        concept: 'heap_index_error',
        difficulty: 'medium',
      },
    ],

    debug: [
      {
        problem: 'Fix Min Heap insertion where heapify-up logic is incorrect.',
        language: 'cpp',
        code: [
          'void insert(vector<int>& heap, int val){',
          '  heap.push_back(val);',
          '  int i = ___;',
          '  while(i > 0 && heap[(i-1)/2] ___ heap[i]){',
          '    swap(heap[i], heap[(i-1)/2]);',
          '    i = ___;',
          '  }',
          '}',
        ],
        blanks: [['heap.size()-1'], ['>'], ['(i-1)/2']],
        concept: 'heap_insert_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix heapify-down logic in Max Heap where comparisons are incorrect.',
        language: 'cpp',
        code: [
          'void heapify(vector<int>& heap, int n, int i){',
          '  int largest = ___;',
          '  int left = 2*i + 1;',
          '  int right = 2*i + 2;',
          '',
          '  if(left < n && heap[left] ___ heap[largest])',
          '    largest = ___;',
          '',
          '  if(right < n && heap[right] ___ heap[largest])',
          '    largest = ___;',
          '',
          '  if(largest != i){',
          '    swap(heap[i], heap[largest]);',
          '    heapify(heap, n, ___);',
          '  }',
          '}',
        ],
        blanks: [['i'], ['>'], ['left'], ['>'], ['right'], ['largest']],
        concept: 'heapify_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Java Min Heap insertion where parent comparison is incorrect.',
        language: 'java',
        code: [
          'void insert(int val){',
          '  heap[size] = val;',
          '  int i = ___;',
          '  size++;',
          '  while(i > 0 && heap[(i-1)/2] ___ heap[i]){',
          '    swap(i, (i-1)/2);',
          '    i = ___;',
          '  }',
          '}',
        ],
        blanks: [['size'], ['>'], ['(i-1)/2']],
        concept: 'heap_java_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix Python heap push logic where parent-child comparison is wrong.',
        language: 'python',
        code: [
          'def push(heap, val):',
          '    heap.append(val)',
          '    i = len(heap) - ___',
          '    while i > 0 and heap[(i-1)//2] ___ heap[i]:',
          '        heap[i], heap[(i-1)//2] = heap[(i-1)//2], heap[i]',
          '        i = ___',
        ],
        blanks: [['1'], ['>'], ['(i-1)//2']],
        concept: 'heap_python_fix',
        difficulty: 'medium',
      },

      {
        problem:
          'Fix JavaScript heapify-down logic where swapping and recursion index are incorrect.',
        language: 'javascript',
        code: [
          'function heapifyDown(heap, i){',
          '  let left = 2*i + 1;',
          '  let right = 2*i + 2;',
          '  let smallest = ___;',
          '',
          '  if(left < heap.length && heap[left] ___ heap[smallest])',
          '    smallest = ___;',
          '',
          '  if(right < heap.length && heap[right] ___ heap[smallest])',
          '    smallest = ___;',
          '',
          '  if(smallest !== i){',
          '    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];',
          '    heapifyDown(heap, ___);',
          '  }',
          '}',
        ],
        blanks: [['i'], ['<'], ['left'], ['<'], ['right'], ['smallest']],
        concept: 'heap_js_fix',
        difficulty: 'medium',
      },
    ],
  },
};

export default treeDataset;
