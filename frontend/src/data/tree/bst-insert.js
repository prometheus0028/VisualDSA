const bstInsert = {
  id: 'bst-insertion',
  title: 'BST Insertion',
  difficulty: 'Intermediate',

  // ===============================
  // COMPLEXITY
  // ===============================
  time: 'O(log n)',
  best: 'O(log n)',
  average: 'O(log n)',
  worst: 'O(n)',
  space: 'O(n)',

  // ===============================
  // COMPLEXITY EXPLANATION
  // ===============================
  complexityExplanation: {
    best: {
      description: `
If the BST is balanced, insertion follows a path from root to leaf.

Height = log n

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    average: {
      description: `
For randomly distributed data, BST remains near balanced.

Time Complexity: O(log n)
Space Complexity: O(n)
      `,
    },
    worst: {
      description: `
If the BST is skewed (like sorted input),
it becomes like a linked list.

Time Complexity: O(n)
Space Complexity: O(n)
      `,
    },
  },

  // ===============================
  // CONCEPT
  // ===============================
  concept:
    'BST insertion places a new node in such a way that the binary search tree property is maintained — left subtree contains smaller values and right subtree contains larger values.',

  intuition:
    'Start from root and compare the value. Move left if smaller, right if larger, until you find an empty spot — that’s where the new node goes.',

  // ===============================
  // EXAMPLE
  // ===============================
  example: {
    title: 'How Does It Work?',
    description: 'Insert 12 into BST: 10, 5, 15',
    walkthrough: [
      {
        pass: 'Step 1',
        steps: ['Compare 12 with 10 → go right'],
      },
      {
        pass: 'Step 2',
        steps: ['Compare 12 with 15 → go left'],
      },
      {
        pass: 'Step 3',
        steps: ['Insert 12 as left child of 15'],
      },
    ],
  },

  // ===============================
  // ALGORITHM STEPS
  // ===============================
  steps: [
    'Start at root',
    'Compare value with current node',
    'Move left if smaller',
    'Move right if larger',
    'Insert node at NULL position',
  ],

  // ===============================
  // PSEUDOCODE
  // ===============================
  pseudocode: [
    'INSERT(root, x):',
    '  if root == NULL:',
    '    return new node',
    '  if x < root.data:',
    '    root.left = INSERT(root.left, x)',
    '  else:',
    '    root.right = INSERT(root.right, x)',
    '  return root',
  ],

  // ===============================
  // WHEN TO USE
  // ===============================
  whenToUse:
    'Use BST insertion when maintaining a dynamically sorted dataset where frequent insertions are required without re-sorting the entire structure.',

  // ===============================
  // ADVANTAGES
  // ===============================
  advantages: [
    'Maintains sorted order automatically',
    'Efficient insertion in balanced trees',
    'Simple recursive logic',
  ],

  // ===============================
  // DISADVANTAGES
  // ===============================
  disadvantages: [
    'Performance degrades in skewed trees',
    'Not self-balancing by default',
    'Recursive overhead possible',
  ],

  // ===============================
  // MINI QUIZ
  // ===============================
  quiz: [
    {
      question: 'Insertion depends on?',
      options: ['Index', 'Comparison', 'Hash', 'Sorting'],
      answer: 1,
    },
    {
      question: 'Where is node inserted?',
      options: ['Random', 'Root', 'Leaf position', 'Middle'],
      answer: 2,
    },
    {
      question: 'Worst case occurs when?',
      options: ['Balanced tree', 'Skewed tree', 'Heap', 'Graph'],
      answer: 1,
    },
    {
      question: 'Time complexity best case?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      answer: 1,
    },
    {
      question: 'Insertion maintains?',
      options: ['Order', 'Heap', 'Graph', 'Stack'],
      answer: 0,
    },
  ],
  // ===============================
  // CODE IMPLEMENTATIONS
  // ===============================
  code: {
    c: `
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* insert(struct Node* root, int x) {
    if (root == NULL) {
        struct Node* node = malloc(sizeof(struct Node));
        node->data = x;
        node->left = node->right = NULL;
        return node;
    }

    if (x < root->data)
        root->left = insert(root->left, x);
    else
        root->right = insert(root->right, x);

    return root;
}
`,

    cpp: `
Node* insert(Node* root, int x) {
    if (!root) return new Node(x);

    if (x < root->data)
        root->left = insert(root->left, x);
    else
        root->right = insert(root->right, x);

    return root;
}
`,

    java: `
Node insert(Node root, int x) {
    if (root == null) return new Node(x);

    if (x < root.data)
        root.left = insert(root.left, x);
    else
        root.right = insert(root.right, x);

    return root;
}
`,

    python: `
def insert(root, x):
    if not root:
        return Node(x)

    if x < root.data:
        root.left = insert(root.left, x)
    else:
        root.right = insert(root.right, x)

    return root
`,

    js: `
function insert(root, x) {
  if (!root) return { data: x, left: null, right: null };

  if (x < root.data) {
    root.left = insert(root.left, x);
  } else {
    root.right = insert(root.right, x);
  }

  return root;
}
`,
  },
};

export default bstInsert;
